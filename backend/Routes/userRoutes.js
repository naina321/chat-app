const express = require("express");
const { registerUser, authUser } = require("../controllers/userControllers");
// const { startSession } = require("../models/userModel");
const router = express.Router();

console.log("inside userRoute");
// router.route("/register").post(registerUser);
router.route("/register").post(registerUser);
router.post("/login", authUser);
module.exports = router;
