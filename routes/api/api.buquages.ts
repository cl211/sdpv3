export = function (api, models) {

    var User = models.User;
    var Buquage = models.Buquage;

    api.route('/v1/buquages')
    /**
     * @api {post} /buquages
     * @apiDescription Cette requ�te permet d'ajouter un buquage, quand on dispose du user
     * @apiName PostBuquages
     * @apiGroup Buquages
     * @apiVersion 0.1.0
     * @apiParam {String} manip La manip associ�e
     * @apiParam {String} montant Le montant associ�
     * @apiParam {String} dateManip La date associ�e � la manip
     * @apiParam {Boolean} isFromPgtoProms Le sens (d�biteur ou cr�diteur)
     * @apiParam {String} email1 L'adresse email de l'utilisateur associ�
     * @apiExample {js} Example :
     *   /api/v1/buquages
     */
        .post(function (req, res) {
            User.findOne({ email1: req.body.email1 }, function (err, user) {
                if (err) {
                    res.status(404).send({ message: "User not found !", success: false });
                } else {
                    var buquage = new Buquage();
                    if (typeof req.body.manip !== 'undefined') {
                        buquage.manip = req.body.manip;
                    }
                    if (typeof req.body.montant !== 'undefined') {
                        var montant = Math.abs(parseInt(req.body.montant, 10));
                        if (montant !== 0) {
                            buquage.montant = montant
                        }
                    }
                    if (typeof req.body.dateManip !== 'undefined') {
                        buquage.dateManip = moment(req.body.dateManip).format();
                    } else {
                        buquage.dateManip = moment().format();
                    }
                    if (typeof req.body.isFromPgtoProms !== 'undefined') {
                        buquage.isFromPgtoProms = req.body.isFromPgtoProms;
                    } else {
                        buquage.isFromPgToProms = true;
                    }
                    user.dateCreation = moment().format();
                    user.buquages.push(buquage);
                    user.save(function (err) {
                        if (err) {
                            res.status(400).send({ message: 'Can\'t save user !', success: false });
                        } else {
                            res.status(201).send({ message: 'Created !', success: true });
                        }
                    });
                }
            });
        })

    api.route('/v1/users/:user_id/buquages')
    /**
     * @api {get} /users/:user_id/buquages
     * @apiDescription Cette requ�te permet de r�cup�rer les buquages d'un PG
     * @apiName GetBuquages
     * @apiGroup Buquages
     * @apiVersion 0.1.0
     * @apiExample {js} Example :
     *   /api/v1/users/5620c3eccf6ac8881e55b690/buquages
     */
        .get(function (req, res) {
            User.findById(req.params.user_id, function (err, user) {
                if (err) {
                    res.status(404).send({ message: "User not found !", success: false });
                } else {
                    if (user.buquages) {
                        res.status(200).send(user.buquages);
                    } else {
                        res.status(200).send([]);
                    }

                }
            });
        })
    /**
     * @api {post} /users/:user_id/buquages
     * @apiDescription Cette requ�te permet d'ajouter un buquage
     * @apiName PostBuquages
     * @apiGroup Buquages
     * @apiVersion 0.1.0
     * @apiParam {String} manip La manip associ�e
     * @apiParam {String} montant Le montant associ�
     * @apiParam {String} dateManip La date associ�e � la manip
     * @apiParam {Boolean} isFromPgtoProms Le sens (d�biteur ou cr�diteur)
     * @apiExample {js} Example :
     *   /api/v1/users/5620c3eccf6ac8881e55b690/buquages
     */
        .post(function (req, res) {
            User.findById(req.params.user_id, function (err, user) {
                if (err) {
                    res.status(404).send({ message: 'User not found !', success: false });
                } else {
                    var buquage = new Buquage();
                    if (typeof req.body.manip !== 'undefined') {
                        buquage.manip = req.body.manip;
                    }
                    if (typeof req.body.montant !== 'undefined') {
                        var montant = Math.abs(parseInt(req.body.montant, 10));
                        if (montant !== 0) {
                            buquage.montant = montant
                        }
                    }
                    if (typeof req.body.dateManip !== 'undefined') {
                        buquage.dateManip = moment(req.body.dateManip).format();
                    } else {
                        buquage.dateManip = moment().format();
                    }
                    if (typeof req.body.isFromPgtoProms !== 'undefined') {
                        buquage.isFromPgtoProms = req.body.isFromPgtoProms;
                    } else {
                        buquage.isFromPgToProms = true;
                    }
                    user.dateCreation = moment().format();
                    user.buquages.push(buquage);
                    user.save(function (err) {
                        if (err) {
                            res.status(400).send({ message: 'Can\'t save user !', success: false });
                        } else {
                            res.status(201).send({ message: 'Buquage created !', success: true });
                        }
                    });
                }
            });
        });

    api.route('/v1/users/:user_id/buquages/:buquage_id')
        .get(function (req, res) {
            User.findById(req.params.user_id, function (err, user) {
                if (err) {
                    res.status(404).send({ message: 'User not found !', success: false });
                } else {
                    var buquage = user.buquages.id(req.params.buquage_id);
                    if (buquage) {
                        res.status(200).send(buquage);
                    } else {
                        res.status(404).send({ message: 'User not found !', success: false });
                    }
                }
            });
        })
    /**
     * @api {delete} /users/:user_id/buquages/:buquage_id
     * @apiDescription Cette requ�te permet de supprimer le buquage d'un PG
     * @apiName DeleteBuquages
     * @apiGroup Buquages
     * @apiVersion 0.1.0
     * @apiExample {js} Example :
     *   /api/v1/users/5620c3eccf6ac8881e55b690/buquages/5620c3eccf6ac8881e55b690
     */
        .delete(function (req, res) {
            User.findById(req.params.user_id, function (err, user) {
                if (err) {
                    res.status(404).send({ message: 'User not found !', success: false });
                } else {
                    var buquage = user.buquages.id(req.params.buquage_id);
                    if (buquage) {
                        buquage.remove();
                        user.save(function (err) {
                            if (err) {
                                res.status(400).send({ message: 'Erreur !', success: false });
                            } else {
                                res.status(200).send({ message: 'Buquage supprim� !', success: true });
                            }
                        });
                    } else {
                        res.status(404).send({ message: 'User not found !', success: false });
                    }
                }
            });
        })
        .put(function (req, res) {
            res.status(200).send({ message: "OK !", success: true });
        })
}
