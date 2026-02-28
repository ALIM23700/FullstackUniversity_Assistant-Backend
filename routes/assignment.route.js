const express = require("express");
const getassignment = require("../controllers/assignment.controller");
const verifyToken = require("../middleware/authMiddleware");




const router1 = express.Router();


router1.get("/getassignment",verifyToken(),getassignment);

module.exports = router1;