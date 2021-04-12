const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VisitaSchame = Schema({
  nombre: String,
  edad: Number,
  pais: String,
  comentarios: String
});

module.exports = mongoose.model("Visita", VisitaSchame);