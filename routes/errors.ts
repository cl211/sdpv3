export = function (app) {
    // Handle 404
    app.use(function (req, res) {
        res.status(404);
        res.render('404.jade', { title: 'Page non trouvée !' });
    });

    // Handle 500
    app.use(function (error, req, res, next) {
        res.status(500);
        res.render('500.jade', { title: 'Erreur interne !', error: error });
    });
}