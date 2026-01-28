const express = require("express");
const getroutine = require("../controllers/routine.controller");



const router3 = express.Router();


router3.get("/getroutine",getroutine);

module.exports = router3;