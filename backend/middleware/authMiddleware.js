const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      // console.log(token);
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findOne(decoded._id).select("-password");
      // console.log(req.user);
      next();
    } catch (error) {
      res.status(401);
      console.log(error.message);
      throw new Error("not authorized , token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("not authorized");
  }
});
module.exports = { protect };
