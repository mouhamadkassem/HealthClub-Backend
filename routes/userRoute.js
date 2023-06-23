const express = require("express");
const userRoute = express.Router();
const { login, register } = require("../controllers/user/Authentication");
const { doneTask } = require("../controllers/user/User");

userRoute.post("/login", login);
userRoute.post("/register", register);
userRoute.put("/doneTask", doneTask);

module.exports = userRoute;
