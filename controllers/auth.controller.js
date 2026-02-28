const dotenv = require("dotenv");
dotenv.config();
const User = require("../models/auth.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// REGISTER
const register = async (req, res) => {
  try {
    console.log("Register request body:", req.body);

    const { name, email, password, role, department } = req.body;

    const existingUser = await User.findOne({ email });
    console.log("Existing user check:", existingUser);

    if (existingUser) return res.status(400).json({ success: false, message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed password:", hashedPassword);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role: role === "admin" ? "admin" : "user",
      department
    });

    console.log("New user created:", newUser);

    if (!process.env.JWT_SECRET) console.error("JWT_SECRET is undefined! Check your .env file");

    const token = jwt.sign(
      { id: newUser._id, role: newUser.role, department: newUser.department },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    console.log("Generated JWT token:", token);

    res.status(201).json({
      success: true,
      message: "Registration successful",
      token,
      user: { id: newUser._id, name: newUser.name, email: newUser.email, role: newUser.role, department: newUser.department },
    });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// LOGIN
const login = async (req, res) => {
  try {
    console.log("Login request body:", req.body);

    const { email, password } = req.body;

    const user = await User.findOne({ email });
    console.log("Found user:", user);

    if (!user) return res.status(400).json({ success: false, message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password match result:", isMatch);

    if (!isMatch) return res.status(400).json({ success: false, message: "Invalid credentials" });

    if (!process.env.JWT_SECRET) console.error("JWT_SECRET is undefined! Check your .env file");

    const token = jwt.sign(
      { id: user._id, role: user.role, department: user.department },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    console.log("Generated JWT token:", token);

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: { id: user._id, name: user.name, email: user.email, role: user.role, department: user.department },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { register, login };