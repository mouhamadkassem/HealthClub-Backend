const express = require("express");
const messageRoute = express.Router();
const { receiveMessage } = require("../controllers/message/message");

messageRoute.post("/", receiveMessage);

module.exports = messageRoute;
