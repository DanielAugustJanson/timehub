//CRUD

const bcrypt = require("bcrypt");

const mongoose = require("mongoose");
const { UserSchema } = require("../db/schema");
const { workRoster } = require("../db/schema");

//////////////////////////////////////////////////////////////////////

exports.getUser = async (req, res) => {
  console.log("user data requested");
  console.log(req.body.id);
  //Check if logged in

  try {
    let userData;

    UserSchema.findOne({ _id: req.body.id }, async function (err, result) {
      userData = {
        id: result._id,
        fname: result.profileData.fname,
        lname: result.profileData.lname,
        role: result.workData.role,
        phone: result.profileData.contact.phone,
        email: result.profileData.contact.email,
      };
      res.json(userData);
    });
  } catch {
    res.sendStatus(500);
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
  try {
    console.log("User creation requested");
    console.log(req.body);
    //Check data, if good send to db

    UserSchema.exists(
      { username: req.body.username },
      async function (err, result) {
        if (result == null) {
          const hashedPwd = await bcrypt.hash(req.body.password, 10);

          UserSchema.create(
            {
              username: req.body.username,
              password: hashedPwd,
              profileData: {
                fname: req.body.fname,
                lname: req.body.lname,
                contact: {
                  phone: req.body.phone,
                  email: req.body.email,
                },
                workData: {
                  position: req.body.position,
                  role: req.body.role,
                },
              },
            },
            async function (err, result) {
              if (err) {
                console.log(err);
                console.log("1");
                res.sendStatus(500);
              } else {
                console.log("New user added");
                res.json({ answer: "success" }).status(200);
              }
            }
          );
        } else {
          console.log("2");
          //something better, to note that user already exists
        }
      }
    );
  } catch {
    console.log("3");
    res.sendStatus(500);
  }
};

//////////////////////////////////////////////////////////////////////

exports.FindRoster = (req, res) => {
  console.log("Roster request recieved");
  console.log(req.body.id);
  try {
    workRoster.findOne({ name: req.body.id }, async function (err, result) {
      if (result == null) {
        res.json({ exists: false }).status(200);
        console.log("Roster doesn't exits");
      }else{
        res.json({exists:true, result})
      }
    });
  } catch {
    console.log("something went wrong");
  }
};

//////////////////////////////////////////////////////////////////////

exports.GenerateRoster = (req, res) => {
  console.log("Roster generation request recieved, starting to generate.");
  let userlist = [];
  const workDays= []
  let workhours = 0;

  const monthName = req.body.id.slice(0, -4);
  const monthNum = monthToNumConverter(monthName);
  const workYear = req.body.id.slice(-4);
  const workName = req.body.id;
  const amountOfDays = getDaysInMonth(monthNum, workYear);

  //So far so good
  console.log(monthName, monthNum, workYear, workName, amountOfDays);

  try {
    UserSchema.find({}, async function (err, result) {
      result.forEach((element) => {
        let user = {
          name: (element.profileData.fname + element.profileData.lname),
          weight: element.workData.position * 20,
          //Since every day is rated as 1 weight unit, and there are ~20 work days per month (debatable I know)
          //I am multiplying the position (range from 0-1) to define how much weight is worker expected to acomplish.
        };
        //console.log(1)
        userlist.push(user);
      });
      userlist.forEach((element)=>{
        workhours += element.weight;
      })   

      console.log(2);
      for (i = 1; i <= amountOfDays; i++) {
        while(true){
          user1 = userlist[Math.floor(Math.random() * userlist.length)];
          user2 = userlist[Math.floor(Math.random() * userlist.length)];
          if(!(user1==user2)){break}
        }
        let workday = { [i]:[user1.name,user2.name] }
          workDays.push(workday)
      }
      console.log(workDays)


      workRoster.create({name:workName, workDays:workDays}, async function(err,result){
        if(err){
          console.log(err)

        }else{
          console.log("user added")
          res.json({answer:"success"})
        }
      })
    });
  } catch {
    console.log("error somewhere");
    res.json({answer:"error"})
  }
};

//////////////////////////////////////////////////////////////////////

exports.deleteUser = (req, res) => {
  console.log("User deleted");
};

exports.userAuthenticated = (req, res, next) => {
  //Check if user is logged in
  next();
};

function getDaysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

//Yandere Dev Level on stupidity, but I don't have time
function monthToNumConverter(month) {
  switch (month) {
    case "January":
      return 1;
    case "February":
      return 2;
    case "March":
      return 3;
    case "April":
      return 4;
    case "May":
      return 5;
    case "June":
      return 6;
    case "July":
      return 7;
    case "August":
      return 8;
    case "September":
      return 9;
    case "October":
      return 10;
    case "November":
      return 11;
    case "December":
      return 12;
  }
}
