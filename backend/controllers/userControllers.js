const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

console.log("inside userController");
const registerUser = asyncHandler(async (req, res) => {
  const { userName, password } = req.body;
  if (!userName || !password) {
    res.send(400);
    throw new Error("Please enter all the feilds");
  }

  const userExists = await User.findOne({ userName });
  if (userExists) {
    res.send(400);
    throw new Error("user already exists");
  }

  const user = await User.create({
    userName,
    password,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      userName: user.userName,
    });
  } else {
    res.status(400);
    throw new Error("failed to Create the user");
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { userName, password } = req.body;

  const user = await User.findOne({ userName });

  //   if (user) {
  //     res.json({
  //       _id: user._id,
  //       userName: user.userName,
  //     });
  //   } else {
  //     console.log("user is not there");
  //   }
  // });
  if (user) {
    if (user.password == password) {
      res.json({
        _id: user._id,
        userName: user.userName,
      });
    } else {
      res.status(400);
      throw new Error("invalid password");
    }
  } else {
    res.status(400);
    throw new Error("user not exist");
  }
});

module.exports = { registerUser, authUser };
