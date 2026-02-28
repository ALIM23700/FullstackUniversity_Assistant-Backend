const Routine = require("../models/routine.model");

// GET ROUTINE
const getroutine = async (req, res) => {
  try {
    console.log("Incoming getroutine request");

    const newroutine = await Routine.find();
    console.log("Fetched routines from DB:", newroutine);

    res.status(200).json({
      success: true,
      newroutine
    });
  } catch (error) {
    console.error("Error in getroutine controller:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = getroutine;