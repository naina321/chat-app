const mongoose = require("mongoose");

const userModel = mongoose.Schema(
  {
    userName: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userModel);
module.exports = User;
