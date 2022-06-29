const mongoose = require("mongoose")

const messageModel = mongoose.Schema({
  sender: {
    type: mongoose.Schema.types.ObjectId,
    ref: "User",
  },
  content: {
    type: String,
    trim: true
  },
  chat: {
    type: mongoose.Schema.types.ObjectId,
    ref: "Chat",
  },
},
  {
    timestams: true,
  }
);

const Message = mongoose.model("Message", messageModel)
module.exports = Message;