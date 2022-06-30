const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./Routes/userRoutes");
const bodyparser = require("body-parser");
dotenv.config();
console.log("not conected");
connectDB();
console.log("conected");
const app = express();

app.use(bodyparser.json());

app.use(
  bodyparser.urlencoded({
    extended: false,
  })
);

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api/user", userRoutes);

app.listen(5000, console.log("server is started"));
