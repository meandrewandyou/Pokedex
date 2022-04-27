import { Router } from "express";
import User from "../models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
require("dotenv").config();

const router = Router();
const saltRounds = 12;

// ---------------------Verify token middleware function--------------------------------------------
const verifyToken = (req, res, next) =>{

const authHeader = req.headers.authorization;

if (authHeader){
const token = authHeader.split(" ")[1];
jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user)=>{
  if(err){
res.status(403).json("Token is not valid!")
  }else{
req.user = user;
next();
  }
})
}else{
  res.status(401).json("You are not authenticated")
}
}

// ------------------------------------------------------------------------------------



router.post("/register", async (req,res)=>{

  try {
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

const user = new User({
  username: req.body.username,
  mail: req.body.mail,
  password: hashedPassword
}) ;

user.save((err, savedUser)=>{
err && console.log(err);
if (savedUser){
  const accessToken = jwt.sign({username: req.body.username}, process.env.JWT_SECRET_KEY, {expiresIn: "1h"});
  res.send({           
    username: savedUser.username,
    favPokemons: savedUser.favPokemons,
    accessToken: accessToken            
})
}else{
  res.status(409).json("Username and/or email already taken")
}

})
  } catch (error) {
    console.log(error);
  }
  

});




router.post("/login", async (req,res)=>{
// const {username, password} = req.body;
console.log(req.body);
try {
  await User.findOne({username: req.body.username})
  .then(foundUser=>{
    !foundUser ? res.status(401).json("No user with such username was found") 
    : bcrypt.compare(req.body.password, foundUser.password, (err, result)=>{
      if (err) {
console.log(err)} else {
        if (result) {
          const accessToken = jwt.sign({username: foundUser.username}, process.env.JWT_SECRET_KEY, {expiresIn: "1h"});
          res.send({           
              username: foundUser.username,
              favPokemons: foundUser.favPokemons,
              accessToken: accessToken            
          })
        } else {
          res.status(401).json("Incorrect password");
        }
      }
    })
  }) 
          
} catch (error) {
  console.log(error);
}   
});

router.post("/delete/:username", verifyToken, (req, res)=>{
  if(req.user.username === req.params.username){
    User.findOneAndDelete({username: req.user.username}, (err,foundUser)=>{
      err && console.log(err);
      res.send(`${foundUser.username}'s profile has been successfully deleted.`)
    })
  }else{
    res.status(403).json("You are not allowed to do this action")
  }
})

router.get("/findUser/:user", (req,res)=>{
  const user = req.params.user;
  if (user === "fullList") {
    User.find({}, (err, users) =>{
      const fullList = [];
      users.forEach((user)=>{
        fullList.push(user.username)
      });
      res.send(fullList)
    })
  } else {
    User.findOne({username: user}, (err, foundUser)=>{
      err && console.log(err);
      foundUser ? res.send({
        result: true,
        favPokemons : foundUser.favPokemons
      }) : res.send({
        result: false
      })
    })
  }
  
})

router.post("/like", verifyToken, (req, res)=>{
const {loggedUser, favPokemon} = req.body;
User.findOne({username: loggedUser.username}, (err,user)=>{
  err && console.log(err);
 const pokemonAlreadyExists = user.favPokemons.find(pokemon=>pokemon.name === favPokemon.name);
 if (pokemonAlreadyExists) {
   res.send("You already have that pokemon");
 } else {
  user.favPokemons.push(favPokemon);
  user.save((err, savedUser)=>{
    err && console.log(err);
    res.send(savedUser.favPokemons);
  });
 }
})
 });

 router.post("/unlike", verifyToken,(req, res)=>{
  const {loggedUser, favPokemon} = req.body;
 
 User.findOneAndUpdate({username: loggedUser.username},{
    $pull: {favPokemons : favPokemon}
  }, {new: true}, (err,user)=>{
    err && console.log(err);
      res.send(user.favPokemons)
  })
   });


 



export default router;