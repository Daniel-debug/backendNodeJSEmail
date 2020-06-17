var express = require('express');
const fs = require('fs');
const nodemailer = require('nodemailer');
var app = express();

const rutaHtml = process.cwd() + '/html/3-validacion-cuenta.txt';

//===================================
// Envio de correos POST
//===================================
app.post('/sendmail', (req, res) => {
  console.log(req.body);
  let email = req.body.email;

  if (checkEmailRegex(email)) {
    return res.status(403).json({
      ok: false,
      mensaje: 'Email Invalido',
    });
  }

  fs.readFile(rutaHtml, 'utf-8', (err, data) => {
    if (err) {
      console.log('error: ', err);
      return res.status(500).json({
        ok: false,
        mensaje: 'Ocurrio un error',
      });
    } else {
      sendMail(email, data, (info) => {
        return res.status(200).json({
          ok: true,
          mensaje: 'El correo se ha enviado correctamente',
          idmensaje: info.messageId,
        });
      });
    }
  });
});

//===========================
// Validar correo electronico
//===========================

function checkEmailRegex(email) {
  var regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (!regex.test(email)) {
    return true; // es invalido
  }
  return false; // es valido
}

//=======================
// Configurando  SMTP transport
//=======================
async function sendMail(email, data, callback) {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SmptEmail,
      pass: process.env.SmptPassword,
    },
  });

  let mailOptions = {
    from: '"Daniel Vega Nodemailer"<uts.danielvegaa@gmail.com>',
    to: email,
    subject: 'Prueba de envio de correos Daniel vega 👻',
    html: `${data}`,
  };

  // Envio de email con el transportador definido
  let info = await transporter.sendMail(mailOptions); //recuerda añadir el callback

  callback(info);
}

module.exports = app;
