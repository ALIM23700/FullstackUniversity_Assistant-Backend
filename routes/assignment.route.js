const express = require("express");
const getassignment = require("../controllers/assignment.controller");



const router1 = express.Router();


router1.get("/getassignment",getassignment);

module.exports = router1;