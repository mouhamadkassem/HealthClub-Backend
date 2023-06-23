const express = require("express");
const classRoute = express.Router();
const { fetchClasses, fetchClass } = require("../controllers/class/class");

classRoute.get("/", fetchClasses);
classRoute.get("/:id", fetchClass);

module.exports = classRoute;
