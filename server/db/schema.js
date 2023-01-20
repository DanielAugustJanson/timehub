const mongoose = require("mongoose");

const userDataSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: { type: String, required: true },
    admin: { type: Boolean, default: () => false },
    profileData: {
      fname: { type: String, required: true },
      lname: { type: String, required: true },
      contact: {
        phone: { type: String, required: true },
        email: { type: String, required: true },
      },
    },
    workData: {
      position: {type:Number,
      default:()=> 0},
      role:{type:String},
      hoursWorked: {type:Number,
      default:()=> 0},
    },
  },
  { collection: "usersNew" }
)

const workRosterSchema = new mongoose.Schema({
  name: {type: String},
  workDays:{
    1:{
      minWeight:{type: Number},
      workers:[]
    }
  }
},{collection:"workRoster"})

const UserSchema = mongoose.model("usersNew", userDataSchema);
const workRoster = mongoose.model("workRoster",workRosterSchema);

module.exports = {
  UserSchema,workRoster
}

