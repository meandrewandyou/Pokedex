// ES6 imports work cause of ESM module 
// -------------------------------Imports-------------------------------------------------
import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/userRoutes";
import cors from "cors";
import path from "path";
require("dotenv").config();
// ---------------------------------------------------------------------------------------
const PORT = process.env.PORT || 4000;

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
    optionSuccessStatus:200

};
const app = express();
// -----------------------------Middlewares----------------------------------------------
app.use(express.json());
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, "client", "build")))


app.use("/user/", userRoute);

// -----------------------------------------------------------------------------------------


const start = async () =>{
    try {
        await mongoose.connect(process.env.MONGOOSE_PATH, {dbName: "PokedexDB"});
        console.log("DB connected");
        app.listen(PORT, ()=>{console.log(`Server started on port ${PORT}`)})
    } catch (error) {
        console.log(error);
    }
}

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

start();
