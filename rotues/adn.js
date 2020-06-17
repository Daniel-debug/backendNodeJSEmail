var express = require('express');
var ADN = require('../models/adn');
var mutante = require('../business/mutante');
var app = express();

// =============================================
// Obtener todos los registros
// =============================================

app.get('/stats', (req, res, next) => {
  ADN.find({}, 'dna mutation').exec((err, adnObject) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        mensaje: 'Error cargando información ADN',
        errors: err,
      });
    }
    let count_mutations = adnObject.filter((adns) => adns.mutation === true);
    let count_no_mutation = adnObject.filter((adns) => adns.mutation === false);
    //let ratio = count_mutations.length / count_no_mutation.length;
    // retornar información
    return res.status(200).json({
      ok: true,
      count_mutations: count_mutations.length,
      count_no_mutation: count_no_mutation.length,
      //ratio: ratio,
      conteo: adnObject.length,
    });
  });
});

// ==========================================
// crea un nuevo registro y valida el actual
// ==========================================
app.post('/mutation', (req, res) => {
  var body = req.body;

  var adn = new ADN({
    dna: body.dna,
    mutation: false,
    date: new Date(),
  });

  if (!mutante.checkArrayDNA(adn.dna)) {
    return res.status(403).json({
      ok: false,
      mensaje: 'caracteres no soportados, favor de verificar DNA',
    });
  }
  adn.mutation = mutante.hasMutation(adn.dna);
  adn.save((err, adnGuardado) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        mensaje: 'Error al crear registro',
        errors: err,
      });
    }
    res.status(200).json({
      ok: true,
      DNA: adnGuardado,
    });
  });
});

module.exports = app;
