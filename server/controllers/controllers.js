//CRUD

const mongoose = require("mongoose");
const UserSchema = require("../db/schema");

exports.getUser = (req,res) =>{
    console.log("user data requested")
    //Check if logged in

    //request user info from db
}

exports.getUsers = async (req,res) =>{
    try{
        console.log("Users list requested")
    //Check if logged in

    //request users list from db
    usersList = UserSchema.find({})
    console.log(usersList)
    }catch{
        res.sendStatus(500)
    }
    
}

exports.createUser = (req,res) =>{
    console.log("User creation requested")
    //Check data, if good send to db
}

exports.deleteUser = (req, res) =>{
    console.log("User deleted")
}

exports.userAuthenticated = (req,res,next) =>{
    //Check if user is logged in
    next()
}