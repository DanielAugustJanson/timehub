const express = require("express")
const router = express.Router()
const controller = require("../controllers/controllers")

router.post("/findRoster",controller.FindRoster)

module.exports = router