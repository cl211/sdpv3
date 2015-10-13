var express = require('express');
var passport = require('passport');
var config = require('./config');
var bodyParser = require('body-parser');
var logger = require('morgan');
var session = require('express-session');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var app = express();

/** Définition du moteur de vues */
app.set('views', __dirname + '\\public');
app.set('view engine', 'jade');

/** Connexion à la base de données */
var mongoose = require('mongoose');
var usersDb = mongoose.createConnection(config.usersDb, function (err, db) {
    if (!err) { console.log("Connexion à la base des utilisateurs réussie"); } else { console.log(err); }
});
var groupesDb = mongoose.createConnection(config.groupesDb, function (err, db) {
    if (!err) { console.log("Connexion à la base des groupes réussie"); } else { console.log(err); }
});
var eventsDb = mongoose.createConnection(config.eventsDb, function (err, db) {
    if (!err) { console.log("Connexion à la base des événements réussie"); } else { console.log(err); }
});

var models = require('./models/models')(usersDb, groupesDb, eventsDb);
var User = models.User;

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({ secret: config.sessionkey, resave: false, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});
passport.use(new GoogleStrategy({
    clientID: config.key,
    clientSecret: config.secret,
    callbackURL: "http://localhost:8080/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    if(profile._json.domain === "gadz.org"){
      //console.log(profile);
      User.findOrCreate({ googleId: profile.id }, { email1: profile.emails[0].value }, function (err, user, created) {
        return done(err, user);
      });
    }else{
        // fail
        done(new Error("Invalid host domain"));
    }
  }
));

app.get('/auth/google', passport.authenticate('google', { scope: 'https://www.googleapis.com/auth/userinfo.email' }));

app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

  /** Middleware pour vérifier l'authentification */
  function isAuthenticated(req, res, next) {
    if (req.isAuthenticated())
      return next();
    res.redirect('/auth/google');
  }


  app.use('/', isAuthenticated, express.static('app'));
  app.use('login', express.static('portail'));
  app.use('/bower_components', isAuthenticated, express.static('bower_components'));
  app.use('/doc', isAuthenticated, express.static('doc'));
  app.post('/logout', function(req, res){
        req.session.destroy(function(e){
            //req.logout();
            res.redirect('/login');
        });
  });


  // Déclaration de l'API
  var api = express.Router();
  require('./routes/api')(api, models);
  app.use('/api', api);

  // Handle 404
  app.use(function(req, res) {
    res.status(404);
    res.render('404.jade', {title: 'Page non trouvée !'});
  });

  // Handle 500
  app.use(function(error, req, res, next) {
    res.status(500);
    res.render('500.jade', {title:'Erreur interne !', error: error});
  });

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
