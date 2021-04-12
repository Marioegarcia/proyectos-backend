const express = require("express");
const VisitasController = require("../controllers/visitas");


const api = express.Router();

api.get("/lista-visitas", VisitasController.getVisitas);

api.post("/visitas", VisitasController.resgisto);
api.delete("/delete-visita/:id", VisitasController.deleteVisita);

module.exports = api;