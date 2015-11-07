import validator = require('validator');
import enumerations = require('../../models/enumerations');

export = function (api, models) {
    var User = models.User;

    api.route('/v1/users')
    /**
     * @api {get} /users
     * @apiDescription Cette requête permet de récupérer la liste de tous les users
     * @apiName GetUsers
     * @apiGroup Users
     * @apiVersion 0.1.0
     * @apiExample {js} Example :
     *   /api/v1/users
     */
        .get(function (req, res) {
            /** TODO : g�rer la pagination */
            User.find({}, function (err, users) {
                if (err) {
                    res.status(404).send(err);
                } else {
                    res.status(200).json(users);
                }
            });
        })
    /**
     * @api {post} /users
     * @apiDescription Cette requête permet d'ajouter un nouvel utilisateur
     * @apiName PostUsers
     * @apiGroup Users
     * @apiVersion 0.1.0
     * @apiParam {String} email1 l'adresse mail principale du PG
     * @apiParam {String} [buque] La buque du PG
     * @apiParam {String} [fams] La fam's du PG
     * @apiParam {String} [firstname] Le prénom du PG
     * @apiParam {String} [lastname] Le nom de famille du PG
     * @apiParam {String} [adress] L'adresse du PG
     * @apiParam {String} [phone] Le numéro de téléphone du PG
     * @apiParam {String} [email2] L'adresse email secondaire du PG
     * @apiParam {String} [boquette] La boquette du PG
     * @apiExample {js} Example :
     *   /api/v1/users
     */
        .post(function (req, res) {
            /** TODO: vérifier que l'adresse email n'est pas déjà utilisée */
            var user = new User();
            if (validator.isEmail(req.body.email1)) {
                user.email1 = req.body.email1
                user.save(function (err) {
                    if (err) {
                        res.status(400).send(err);
                    } else {
                        res.set('Location', user._id);
                        res.status(201).json({ message: 'Utilisateur cr��' });
                    }
                });
            } else {
                res.status(400).send({ message: 'Pas d\'adresse mail sp�cifi�e ou adresse invalide' })
            }
        });

    api.route('/v1/users/:user_id')
    /**
     * @api {get} /users/:userId
     * @apiDescription Cette requête permet de récupérer un utilisateur à partir de son ID
     * @apiName GetUsers
     * @apiGroup Users
     * @apiVersion 0.1.0
     * @apiExample {js} Example :
     *   /api/v1/users/5620c3eccf6ac8881e55b690
     */
        .get(function (req, res) {
            /** TODO: ajouter 'self' dans la doc */
            if (req.params.user_id === 'self') {
                User.findById(req.user._id, function (err, user) {
                    if (err) {
                        res.status(404).send(err);
                    } else {
                        res.status(200).send(user);
                    }
                });
            } else {
                User.findById(req.params.user_id, function (err, user) {
                    if (err) {
                        res.status(404).send(err);
                    } else {
                        res.status(200).send(user);
                    }
                });
            }
        })
    /**
     * @api {delete} /users/:userId
     * @apiDescription Cette requête permet de supprimer un user à partir de son ID
     * @apiName DeleteUsers
     * @apiGroup Users
     * @apiVersion 0.1.0
     * @apiExample {js} Example :
     *   /api/v1/users/5620c3eccf6ac8881e55b690
     */
        .delete(function (req, res) {
            User.findById(req.params.user_id, function (err, user) {
                if (err) {
                    res.status(404).send(err);
                } else {
                    user.remove(function (result) {
                        res.status(200).json({ message: 'Utilisateur correctement supprim�' });
                    });
                }
            });
        })
    /**
     * @api {put} /users/:userId
     * @apiDescription Cette requête permet de mettre à jour les informations d'un utilisateur
     * @apiName UpdateUsers
     * @apiGroup Users
     * @apiVersion 0.1.0
     * @apiParam {String} [buque] La buque du PG
     * @apiParam {String} [fams] La fam's du PG
     * @apiParam {String} [firstname] Le prénom du PG
     * @apiParam {String} [lastname] Le nom de famille du PG
     * @apiParam {String} [adress] L'adresse du PG
     * @apiParam {String} [phone] Le numéro de téléphone du PG
     * @apiParam {String} [email2] L'adresse email secondaire du PG
     * @apiParam {String} [boquette] La boquette du PG
     * @apiExample {js} Example :
     *   /api/v1/users/5620c3eccf6ac8881e55b690
     */
        .put(function (req, res) {
            User.findById(req.params.user_id, function (err, user) {
                if (err) {
                    res.status(404).send(err);
                } else {
                    var tester = function (property) {
                        if (typeof req.body[property] !== 'undefined') {
                            user[property] = req.body[property];
                        }
                    }
                    enumerations.properties.forEach(function (property) {
                        tester(property);
                    });

                    user.save(function (err) {
                        if (err) {
                            res.status(400).send({ message: 'Can\'t save user !', success: false });
                        } else {
                            res.status(200).send({ message: 'Updated !', success: true });
                        }
                    });
                }
            });
        });
}
