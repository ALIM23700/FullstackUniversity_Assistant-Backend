const express = require("express");
const { addClass, approveClass, cancelClass, getTodaysClasses, getAllClasses } = require("../controllers/class.controller");

const router5 = express.Router();

router5.post("/add",addClass); 
router5.put("/approve/:id", approveClass); 
router5.put("/cancel/:id",cancelClass);
router5.get("/today",getTodaysClasses); 
router5.get("/all", getAllClasses)

module.exports = router5;
