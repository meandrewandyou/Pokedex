import { Schema, model } from "mongoose";

const userSchema = new Schema({
    username:{
        type: String,
        unique: true
    },
    mail:{
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
