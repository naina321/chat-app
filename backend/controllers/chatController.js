const Chat = require("../models/chatModel");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const accessChat = asyncHandler(async (req, res) => {
  const { userId } = req.body;
  console.log(userId, req.user._id);

  const receiver = await User.findOne({ _id: userId });

  if (!userId) {
    console.log("id is not send with the request");
    return res.sendStatus(400);
  } else {
    console.log(req.user, "talks to ", receiver);
  }

  var isChat = await Chat.find({
    isGroupChat: false,
    $and: [
      { users: { $elemMatch: { $eq: req.user._id } } },
      { users: { $elemMatch: { $eq: userId } } },
    ],
  })
    .populate("users", "-password")
    .populate("latestMessage");

  isChat = await User.populate(isChat, {
    path: "latestMessage.sender",
    select: "userName",
  });

  if (isChat.length > 0) {
    res.send(isChat[0]);
  } else {
    var chatData = {
      chatName: "sender",
      isGroupChat: false,
      users: [req.user._id, userId],
    };
  }
  try {
    const createdChat = await Chat.create(chatData);

    const FullChat = await Chat.findOne({ _id: createdChat._id }).populate(
      "users",
      "-password"
    );
    console.log("create chat ke andr hu");
    res.status(200).send(FullChat);
  } catch (error) {
    console.log("last error :", error.message);
    throw new Error(error.message);
  }
});

module.exports = { accessChat };
