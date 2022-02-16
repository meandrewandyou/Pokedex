import { Router } from "express";
import User from "../models/userModel";
import bcrypt from "bcrypt";
const router = Router();
const saltRounds = 10;


router.post("/register", async (req,res)=>{
    try {
        const password = await bcrypt.hash(req.body.password, saltRounds);
        console.log(password);
        const user = new User({
            userName: req.body.userName,
            email: req.body.email,
            password 
        });
        user.save(err=>{
            !err ? res.send("User created") : res.send(err.message)
        });
    } catch (error) {
        console.log(error);
    }
   
});

router.post("/login", (req,res)=>{
   const {userName, password} = req.body;
    User.findOne({userName}).then((user)=>{
        user ? bcrypt.compare(password, user.password, (err, result)=>{!err ? res.send("User data correct") : console.log(err);;}) : res.send("User with name like this not found");
    }).catch((err)=>{console.log(err);})
});




export default router;