const express = require("express")
const router = express.Router()
const controller = require("../controllers/controllers")

router.post("/getroster",controller.GetRoster)

module.exports = router