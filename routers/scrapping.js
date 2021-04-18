const express = require("express");
const ScrapingController = require("../controllers/scraping");


const api = express.Router();

api.post("/scraping-mercado-libre", ScrapingController.mercadolibre);
api.post("/scraping-amazon", ScrapingController.amazon);

module.exports = api;