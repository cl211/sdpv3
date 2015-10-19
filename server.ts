import express = require('express');
import passport = require('passport');
import config = require('./config');
import mongoose = require('mongoose');

/** Connexion à la base de données */
var app: express.Application = express();
var db: mongoose.Connection = mongoose.createConnection(config.db, function (err, db) {
    if (!err) { console.log("Connexion à la base de données réussie"); } else { console.log(err); }
});

var models = require('./models/models')(db);
var User = models.User;

/** Définition du moteur de vues */
app.set('views', __dirname + '\\public');
app.set('view engine', 'jade');

/** Configuration des routes d'authentification */
require('./routes/auth')(app, passport, models);

/** Routes statiques */
require('./routes/static')(app);

// Déclaration de l'API
var api = express.Router();
require('./routes/api')(api, models);
app.use('/api', api);

/** Error handler */
require('./routes/errors')(api);

var server = app.listen(8080, function () { console.log('Example app listening at http://%s:%s', server.address().address, server.address().port); });
