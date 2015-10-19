import express = require('express');

export = function (app) {

    /** Middleware pour vérifier l'authentification */
    function isAuthenticated(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/auth/google');
    }

    app.use('/', isAuthenticated, express.static('app'));
    app.use('/bower_components', isAuthenticated, express.static('bower_components'));
    app.use('/doc', isAuthenticated, express.static('doc'));
}