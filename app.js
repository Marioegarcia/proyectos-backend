const express = require("express");


const app = express();
const { API_VERSION } = require("./config");

// Load routings
const climaRoutes = require("./routers/clima");
const userRoutes = require("./routers/user");
// const menuRoutes = require("./routers/menu");
// const newsletterRoutes = require("./routers/newsletter");
// const courseRoutes = require("./routers/course");
// const postRoutes = require("./routers/post");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Configure Header HTTP
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// Router Basic
app.use(`/api/${API_VERSION}`, climaRoutes);
app.use(`/api/${API_VERSION}`, userRoutes);
// app.use(`/api/${API_VERSION}`, menuRoutes);
// app.use(`/api/${API_VERSION}`, newsletterRoutes);
// app.use(`/api/${API_VERSION}`, courseRoutes);
// app.use(`/api/${API_VERSION}`, postRoutes);

module.exports = app;