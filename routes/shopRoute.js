const express = require("express");
const shopRoute = express.Router();
const { fetchProducts, fetchProduct } = require("../controllers/shop/products");

shopRoute.post("/", fetchProducts);
shopRoute.get("/:id", fetchProduct);

module.exports = shopRoute;
