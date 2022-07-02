const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./Routes/userRoutes");
const chatRoutes = require("./Routes/chatRoutes");

dotenv.config();
console.log("not conected");
connectDB();
console.log("conected");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
// app.use(app.router);
// routes.initialize(app);

app.listen(5000, console.log("server is started"));
