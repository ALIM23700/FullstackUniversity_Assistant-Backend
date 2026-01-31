const express = require("express");
const {
  classtest,
  assignment,
  routine,
  updateclasstest,
  deleteclasstest,
  updateassignment,
  deleteassignment,
  deleteroutine
} = require("../controllers/admin.controller");

const verifyToken = require("../middleware/authMiddleware"); 

const router7 = express.Router();


router7.post("/classtest", verifyToken(["admin"]), classtest);
router7.put("/updateclasstest/:id", verifyToken(["admin"]), updateclasstest);
router7.delete("/deleteclasstest/:id", verifyToken(["admin"]), deleteclasstest);

router7.post("/assignment", verifyToken(["admin"]), assignment);
router7.put("/updateassignment/:id", verifyToken(["admin"]), updateassignment);
router7.delete("/deleteassignment/:id", verifyToken(["admin"]), deleteassignment);

router7.post("/routine", verifyToken(["admin"]), routine);
router7.delete("/deleteroutine/:id", verifyToken(["admin"]), deleteroutine);

module.exports = router7;
