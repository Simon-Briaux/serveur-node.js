const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8095; // Le port sur lequel votre serveur écoutera

// Gestionnaire d'erreurs global
process.on('uncaughtException', (err) => {
    console.error(`Une erreur non capturée s'est produite : ${err.message}`);
    process.exit(1); // 1 signifie une sortie avec une erreur
  });  

app.use(bodyParser.json()); // décode le body d'une requête

  app.post('/', (req, res) => {
    const donneesDuCorps = req.body;
    console.log(donneesDuCorps);
    res.send('Données reçues et traitées !');
  });
  

// Route d'exemple
app.get('/', (req, res) => {
  res.send('<!DOCTYPE html>\
  <html>\
  <head>\
    <title>Formulaire Simple</title>\
  </head>\
  <body>\
    <form action="" method="POST">\
      <label for="login">Login :</label>\
      <input type="text" id="login" name="login">\
      <button type="submit">Envoyer</button>\
    </form>\
  </body>\
  </html>');
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Le serveur est en écoute sur le port] ${port}`);
});