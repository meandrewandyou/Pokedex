// ES6 imports work cause of ESM module 

import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/userRoutes";
import cors from "cors";
require("dotenv").config();
const corsOptions = {
    origin: "http://localhost:3000"
};
const app = express();
app.use(express.json());
app.use(cors(corsOptions));

// Import of routes

app.use("/user/", userRoute);


const start = async () =>{
    try {
        await mongoose.connect(process.env.MONGOOSE_PATH);
        console.log("DB connected");
        app.listen(process.env.PORT, ()=>{console.log(`Server started on port ${process.env.PORT}`)})
    } catch (error) {
        console.log(error);
    }
}


start();
