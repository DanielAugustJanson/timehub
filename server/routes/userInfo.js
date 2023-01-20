const express = require("express")
const router = express.Router()
const controller = require("../controllers/controllers")


const CheckAuth = require("../controllers/tokenauth")
//To check authentication. Not sure how am gonna implement this yet.

router.get("/users",controller.getUsers)

router.post("/users/new",controller.createUser)

router.post("/user",controller.getUser)

//router.post("/users/:id/delete",controller.deleteUser)

module.exports = router