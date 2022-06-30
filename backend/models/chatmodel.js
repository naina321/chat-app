const mongoose = require("Mongoose");

const chatModel = mongoose.Schema(
  {
    chatName: { type: String, trim: true },
    isGroupChat: { type: String, default: true },
    user: [
      {
        type: mongoose.Schema.types.ObjectId,
        ref: "User",
      },
    ],
    latestMessage: {
      type: mongoose.Schema.types.ObjectId,
      ref: "Message",
    },
    groupAdmin: {
      type: mongoose.Schema.types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const chat = mongoose.model("chat", chatModel);
module.exports = chat;
