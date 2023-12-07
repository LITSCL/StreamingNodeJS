const express = require('express');

var app = express();

//Cargar los html del cliente.
app.use(express.static("../client"));

//Cargar las rutas.
app.use(require("../routes/rutas.js"));

//Exportar la configuración del servidor.
module.exports = app;