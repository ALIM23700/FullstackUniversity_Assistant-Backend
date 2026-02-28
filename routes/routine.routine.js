const express = require("express");
const getroutine = require("../controllers/routine.controller");
const verifyToken = require("../middleware/authMiddleware");



const router3 = express.Router();


router3.get("/getroutine",verifyToken(),getroutine);

module.exports = router3;