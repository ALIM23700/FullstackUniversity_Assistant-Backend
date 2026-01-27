const express = require("express");
const getclasstest = require("../controllers/classtest.controller");

const router2 = express.Router();


router2.get("/getclasstest",getclasstest );

module.exports = router2;
