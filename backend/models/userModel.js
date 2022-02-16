import { Schema, model } from "mongoose";

const userSchema = new Schema({
    userName:{
        type: String,
        unique: true
    },
    email:{
        type: String,
        unique: true
    },
    password: {
        type: String,
        minlength: 8
    },
    favPokemons: [],
    messages: []
});


const User = new model("user" ,userSchema);
export default User;
