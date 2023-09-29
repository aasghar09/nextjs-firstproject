const { Schema, default: mongoose } = require("mongoose");



const userSchema = new Schema({
    userName : {
        type : String,
        required : [true || "User Name is required!"],
        unique : true,
    },
    email: {
        type : String,
        required : [true || "Email is required!"],
        unique : true,
    },
    age: Number,
    address : String,
    password : {
        type : String,
        required : [true || "Password is required!"],
    },
    about: {
        type: String,
    },
});

export const User =  mongoose?.models?.users || mongoose?.model("users",userSchema);
