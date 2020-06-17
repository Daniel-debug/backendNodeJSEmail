// Requires
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const cors = require('cors');

require('dotenv').config();

// Inicializar variables
var app = express();

//CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); // dices cual debe de ser permitido
  res.header(
    'Access-Control-Allow-Methods',
    'GET,PUT,POST,DELETE,PATCH,OPTIONS'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, Content-Length, X-Requested-With'
  );

  next();
});

//Body Parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Importar rutas
const emailRoutes = require('./rotues/email');
const adnRoutes = require('./rotues/adn');
const appRoutes = require('./rotues/app');

// Variables conexion BD
const puertoBD = process.env.PuertoBD;
const BD = process.env.NameBD;

// Conexion a la base de datos
mongoose.connection.openUri(
  `mongodb://localhost:${puertoBD}/${BD}`,
  { useNewUrlParser: true },
  (err, res) => {
    if (err) throw err;
    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');
  }
);

// Rutas
app.use('/adn', adnRoutes);
app.use('/email', emailRoutes);
app.use('/', appRoutes);

// Escuchar puerto
app.listen(process.env.PuertoNodeJsProd, () => {
  console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online');
});
