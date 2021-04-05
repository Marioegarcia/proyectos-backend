const express = require("express");
const ClimaController = require('../controllers/clima');

const api = express.Router();


api.post("/clima", ClimaController.clima);

api.post("/temperatura", ClimaController.temperatura)



module.exports = api;
