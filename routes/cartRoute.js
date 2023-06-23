const express = require("express");
const cartRoute = express.Router();
const { addCart } = require("../controllers/cart/cart");

cartRoute.post("/addCart", addCart);

module.exports = cartRoute;
