const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
const userModel = mongoose.Schema(
  {
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// userModel.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);

// };
const User = mongoose.model("User", userModel);
module.exports = User;
