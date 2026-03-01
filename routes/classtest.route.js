const express = require("express");
const getclasstest = require("../controllers/classtest.controller");
const verifyToken=require('../middleware/authMiddleware')

const router2 = express.Router();


router2.get("/getclasstest",verifyToken(),getclasstest );

module.exports = router2;
