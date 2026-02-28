const express = require("express");
const { register, login } = require("../controllers/auth.controller");
const verifyToken = require("../middleware/authMiddleware");

const router6 = express.Router();


router6.post("/register", register);
router6.post("/login", login);

router6.get("/admin-only", verifyToken(["admin"]), (req, res) => {
  res.json({ message: `Welcome Admin ${req.user.id}` });
});

router6.get("/user-access", verifyToken(["user", "admin"]), (req, res) => {
  res.json({ message: `Hello ${req.user.role} ${req.user.id}` });
});

module.exports = router6;
