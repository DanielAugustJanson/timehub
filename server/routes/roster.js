const express = require("express")
const router = express.Router()
const controller = require("../controllers/controllers")

router.get("/roster",controller.getUsers)

module.exports = router