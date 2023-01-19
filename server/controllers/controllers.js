//CRUD

const bcrypt = require("bcrypt");

const mongoose = require("mongoose");
const UserSchema = require("../db/schema");


//////////////////////////////////////////////////////////////////////


exports.getUser = async (req, res) => {
  console.log("user data requested");
  //Check if logged in


  //request user info from db
  try{
    let userData;

  UserSchema.findOne({_id:req.body.id}, async function(err, result){
    userData = {
      id: result._id,
      fname: element.profileData.fname,
      lname: element.profileData.lname,
      role: element.workData.role,
      phone: element.profileData.phone,
      email: element.profileData.email
    }
    res.json(userData).status(200)
  })
  }catch{
    res.sendStatus(500)
  }
};

//////////////////////////////////////////////////////////////////////


exports.getUsers = async (req, res) => {
  try {
    console.log("Users list requested");
    const userlist = [];
    //Check if logged in

    //request users list from db
    UserSchema.find({}, async function (err, result) {
      result.forEach((element) => {
        let user = {
          id: element._id,
          fname: element.profileData.fname,
          lname: element.profileData.lname,
          role: element.workData.role,
        };
        userlist.push(user);
      });
      res.json(userlist).status(200);
    });
  } catch {
    res.sendStatus(500);
  }
};


//////////////////////////////////////////////////////////////////////


exports.createUser = (req, res) => {
  try{
    console.log("User creation requested");
    console.log(req.body)
  //Check data, if good send to db

  UserSchema.exists({username:req.body.username}, async function(err, result){
   if(result==null){

    const hashedPwd = await bcrypt.hash(req.body.password, 10)

    UserSchema.create({
      username: req.body.username,
      password: hashedPwd,
      profileData:{
        fname: req.body.fname,
        lname: req.body.lname,
        contact:{
          phone: req.body.phone,
          email: req.body.email
        },
        workData:{
          position: req.body.position,
          role:req.body.role
        }
      }
    }, async function(err, result){
      if(err){
        console.log(err)
        console.log("1")
        res.sendStatus(500)
      }
      else{
        console.log("New user added")
        res.json({answer:"success"}).status(200)
      }
    } )
   }else{
    console.log("2")
    //something better, to note that user already exists
   }
  })
}catch{
    console.log("3")
    res.sendStatus(500)
  }
};

//////////////////////////////////////////////////////////////////////


exports.GetRoster = (req, res) => {
  console.log("Roster request recieved")
  console.log(req)
}





//////////////////////////////////////////////////////////////////////

exports.deleteUser = (req, res) => {
  console.log("User deleted");
};

exports.userAuthenticated = (req, res, next) => {
  //Check if user is logged in
  next();
};
