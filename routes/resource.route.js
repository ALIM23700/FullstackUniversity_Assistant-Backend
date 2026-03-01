const express = require("express");
const multer = require("multer");
const { uploadResource, getResources, downloadResource } = require("../controllers/resource.controller");
const verifyToken = require("../middleware/authMiddleware");

const router4 = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
const upload = multer({ storage });


router4.post("/upload",  upload.single("file"),verifyToken, uploadResource);
router4.get("/getresource",verifyToken(),  getResources);
router4.get("/download/:filename",verifyToken(), downloadResource);

module.exports = router4;