const express = require("express");
const UserController = require("../controllers/tasks");


const api = express.Router();

api.post("/sign-up");


module.exports = api;