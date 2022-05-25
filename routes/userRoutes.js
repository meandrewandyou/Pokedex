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
User.findOne({username: req.body.username}, (err, foundUser)=>{
  err && console.log(err);
  if(token === foundUser.accessToken){
    jwt.verify(foundUser.refreshToken, process.env.JWT_REFRESH_SECRET_KEY, (err,refreshUser)=>{
      if(err){
        console.log("refresh token fail");
        res.status(403).json("Token is not valid! Try to re-login.")
      } else{
        const accessToken = jwt.sign({username: foundUser.username}, process.env.JWT_SECRET_KEY, {expiresIn: "30s"});
        foundUser.accessToken = accessToken;
        foundUser.save((err,savedUser)=>{
          err && console.log(err);
          // console.log(savedUser);
          req.user = {username: req.body.username, newToken: accessToken};
          next();
          })
      } 
  
 
  
    })
  }else{
    console.log("access token fail");
    res.status(403).json("Token is not valid! Try to re-login.")
  }
  
})

  }else{
req.user = {username: user.username, newToken: token};
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
    const accessToken = jwt.sign({username: req.body.username}, process.env.JWT_SECRET_KEY, {expiresIn: "30s"});
    const refreshToken = jwt.sign({username: req.body.username}, process.env.JWT_REFRESH_SECRET_KEY, {expiresIn: "1d"});


const user = new User({
  username: req.body.username,
  mail: req.body.mail,
  password: hashedPassword,
  gender: req.body.gender,
  from: req.body.from,
  personType: req.body.personType,
  accessToken,
  refreshToken
}) ;

user.save((err, savedUser)=>{
err && console.log(err);
if (savedUser){
  
  res.send({           
    username: savedUser.username,
    favPokemons: savedUser.favPokemons,
    accessToken: accessToken            
})
}else{
  res.status(409).json("Username and/or email already has been taken")
}

})
  } catch (error) {
    console.log(error);
  }
  

});




router.post("/login", async (req,res)=>{

try {
  await User.findOne({username: req.body.username})
  .then(foundUser=>{
    !foundUser ? res.status(401).json("No user with such username was found") 
    : bcrypt.compare(req.body.password, foundUser.password, (err, result)=>{
      if (err) {
console.log(err)
} else {
        if (result) {
          const accessToken = jwt.sign({username: foundUser.username}, process.env.JWT_SECRET_KEY, {expiresIn: "30s"});
          const refreshToken = jwt.sign({username: req.body.username}, process.env.JWT_REFRESH_SECRET_KEY, {expiresIn: "1d"});
// Login process could be done with findOneAndUpdate, but I test things out here)
// Not that beautiful, but still works. BTW spread operator crashes code, so simple assignments used.
          foundUser.refreshToken = refreshToken;
          foundUser.accessToken = accessToken;

foundUser.save((err, savedUser)=>{ 
  err && console.log(err);
  res.send({           
  username: foundUser.username,
  favPokemons: foundUser.favPokemons,
  accessToken: accessToken            
})})
         
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
        gender: foundUser.gender,
        personType: foundUser.personType,
        from: foundUser.from,
        result: true,
        favPokemons : foundUser.favPokemons
      }) : res.send("No user")
    })
  }
  
})

router.post("/like", verifyToken, (req, res)=>{
const {loggedUser, favPokemon} = req.body;
if(loggedUser.username === req.user.username){
  User.findOne({username: loggedUser.username}, (err,user)=>{
    err && console.log(err);
   const pokemonAlreadyExists = user.favPokemons.find(pokemon=>pokemon.name === favPokemon.name);
   if (pokemonAlreadyExists) {
     res.send("You already have this pokemon");
   } else {
    user.favPokemons.push(favPokemon);
    user.save((err, savedUser)=>{
      err && console.log(err);
      res.send({ newFavPokemons: user.favPokemons, newToken: req.user.newToken})
    });
   }
  })
}
else{
  res.status(403).json("You are not allowed to do this action")

}

 });

 router.post("/unlike", verifyToken, (req, res)=>{
  const {loggedUser, favPokemon} = req.body;
  if (loggedUser.username === req.user.username){
    User.findOneAndUpdate({username: loggedUser.username},{
      $pull: {favPokemons : favPokemon}
    }, {new: true}, (err, user)=>{
      err && console.log(err);
        res.send({ newFavPokemons: user.favPokemons, newToken: req.user.newToken})
    })
  }else{
    res.status(403).json("You are not allowed to do this action")

  }
 
 
   });


 router.post('/:username/addMessage', verifyToken, (req, res)=>{
  const message = req.body.newMessage;

   if(req.params.username === req.user.username){
    User.findOne({username: req.params.username}, (err, user)=>{
      err && console.log(err);
      user.messages.push(message);
      user.save(()=>{
      res.send({newToken: req.user.newToken})
    })
 
    })
   }else {
    res.status(403).json("You are not allowed to do this action")

   }
   
 })

 router.get("/getMessages",  (req,res)=>{

    User.find({},(err, users)=>{
      const messages = [];

     err && console.log(err);
      users.forEach((user)=>{
       messages.push(...user.messages)
     })
    //  New messages first
     messages.sort((a,b)=>{
      return b.date - a.date;     })
     res.send(messages)

      })

 })






router.post("/:author/editPost", verifyToken, (req,res)=>{
  const {author} = req.params;
const {mssg, newMessageText} = req.body;
if(author === req.user.username){
  User.findOneAndUpdate({username: author, "messages.date": mssg.date}, {$set: {"messages.$.message": newMessageText}}, {new: true}, (err, user)=>{
    err && res.status(500);
    res.send({newToken: req.user.newToken})

     })
}else{
  res.status(403).json("You are not allowed to do this action")

}
   
})


router.post("/:author/handleLikePost", verifyToken, async (req,res)=>{
  const {author} = req.params;
const {mssg, whoLiked} = req.body;
// I'm sure it's not the most beautiful way to pick the message I need, but it works
// so let it be..
// Rather primitive I guess to do smth based on hardcoded "like" or "unlike" response,
// but I believe it still better for perfomance than send edited array of messages 
// on every like action. I'll leave it like this at least for a while. 
  User.find({username: author}, {"messages": {$elemMatch: { date :mssg.date}}}, (err, result)=>{
    err && console.log(err);
    // Ok, I've figured out why I got array as a result. It's cause of .find method which
    // returns array, even if only one match was found. Not gonna change this code,
    // just leave it here as a reminder (another) of how not to do things
    if (!result[0].messages[0].likes.includes(whoLiked)){
      if(whoLiked === req.user.username){
        User.findOneAndUpdate({username: author, "messages.date": mssg.date}, {$push: {"messages.$.likes": whoLiked}}, {new: true}, (err, user)=>{
          err && console.log(err);
          res.send({action: "like", newToken: req.user.newToken})
                 })
      }else{
        res.status(403).json("You are not allowed to do this action")
      
      }
    }else{
      if(whoLiked === req.user.username){
        User.findOneAndUpdate({username: author, "messages.date": mssg.date}, {$pull: {"messages.$.likes": whoLiked}}, {new: true}, (err, user)=>{
          err && res.status(500);
          res.send({action: "unlike", newToken: req.user.newToken})      })
      }else{
        res.status(403).json("You are not allowed to do this action")
      
      }    }
  })
   
})


router.post("/:author/deletePost", verifyToken, (req,res)=>{
  const {author} = req.params;
const {mssg} = req.body;
if(author === req.user.username){
  User.findOneAndUpdate({username: author}, {$pull: {messages: mssg}}, {new: true}, (err, user)=>{
    err && res.status(500);
    res.send({newToken: req.user.newToken})
     })
}else{
  res.status(403).json("You are not allowed to do this action")

}
   
})



export default router;