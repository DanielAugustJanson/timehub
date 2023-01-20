const express = require("express")
const router = express.Router()
const controller = require("../controllers/controllers")

router.post("/findRoster",controller.FindRoster)

router.post("/generateRoster",controller.GenerateRoster)

module.exports = router