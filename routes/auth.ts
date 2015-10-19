/// <reference path="../typings/tsd.d.ts" />

﻿import express = require('express');
import logger = require('morgan');
import bodyParser = require('body-parser');
import session = require('express-session');
import strategy = require('passport-google-oauth');
var GoogleStrategy = strategy.OAuth2Strategy;
import config = require('../config');

export = function (app, passport, models) {

    var User = models.User;

    app.use(logger('dev'));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(session({ secret: config.sessionkey, resave: false, saveUninitialized: false }));
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser(function (user, done) {
        done(null, user);
    });
    passport.deserializeUser(function (obj, done) {
        done(null, obj);
    });
    passport.use(new GoogleStrategy({
        clientID: config.key,
        clientSecret: config.secret,
        callbackURL: "http://localhost:8080/auth/google/callback"
    },
        function (accessToken, refreshToken, profile, done) {
            if (profile._json.domain === "gadz.org") {
                /** TODO : ici il ne faudra plus créer systématiquement mais juste find */
                User.findOrCreate({ email1: profile.emails[0].value }, { googleId: profile.id }, function (err, user, created) {
                    return done(err, user);
                });
            } else {
                // fail
                done(new Error("Invalid host domain"));
            }
        }
    ));

    app.get('/auth/google', passport.authenticate('google', { scope: 'https://www.googleapis.com/auth/userinfo.email' }));

    app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), function (req, res) {
        res.redirect('/');
    });

    app.use('login', express.static('portail'));

    app.post('/logout', function (req, res) {
        req.session.destroy(function (e) {
            //req.logout();
            res.redirect('/login');
        });
    });

}
