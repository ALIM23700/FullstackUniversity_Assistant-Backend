const express = require("express");
const cors=require("cors");
const router1 = require("./routes/assignment.route");
const router2 = require("./routes/classtest.route");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/", router1);
app.use("/api/", router2);
module.exports = app;
