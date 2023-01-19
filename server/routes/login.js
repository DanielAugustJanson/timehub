require("dotenv").config()
const express = require("express");
const router = express.Router();
const controller = require("../controllers/controllers");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const authent= require("../controllers/tokenauth")

const UserSchema = require("../db/schema");


//Temp way
const mongoose = require("mongoose");

router.use(express.json());

//Currently Operating One
router.post("/loginHashed", async (req, res) => {
  console.log("login request recieved");
  const loginusr = req.body.username;
  const loginpwd = req.body.password;
  console.log(req.body);

  UserSchema.findOne({ username: req.body.username }, async function (err, result) {
    if (result == null) {
        res.json({answer:"failed"})
      return; //Send that user missing orsmth
    }
    if(await bcrypt.compare(loginpwd, result.password)){
        console.log("match")
        const user = {id:req.body._id, username: result.username, admin: result.admin}
        ///
        const accessToken = authent.generateAccessToken(user)
        const refreshToken = jwt.sign(user, process.env.REFREST_TOKEN_SECRET)

      res.json({accessToken:accessToken, refreshToken: refreshToken,  success: true ,userId: result._id}).status(215);
      
      console.log(accessToken)
    }else{
        console.log("not match")
        res.json({answer:"failed"})
    }
  });
});


module.exports = router;