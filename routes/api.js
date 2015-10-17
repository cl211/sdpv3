var validator = require('validator');
var enumerations = require('../models/enumerations');

module.exports = function (api, models) {

  var User = models.User;

  api.route('/v1/boquettes')
  /**
   * @api {get} /boquettes
   * @apiDescription Cette requête permet de récupérer la liste des boquettes
   * @apiName GetBoquettes
   * @apiGroup Boquettes
   * @apiVersion 1.0.0
   * @apiExample {js} Example :
   *   /api/v1/boquettes
   */
    .get(function(req, res) {
      res.status(200).send(enumerations.boquettes);
    });

    api.route('/v1/gr')
    /**
     * @api {get} /gr
     * @apiDescription Cette requête permet de récupérer la liste des groupes régionaux
     * @apiName GetGr
     * @apiGroup Groupes Régionaux
     * @apiVersion 1.0.0
     * @apiExample {js} Example :
     *   /api/v1/gr
     */
      .get(function(req, res) {
        res.status(200).send(enumerations.groupesRegionaux);
      });

    api.route('/v1/status')
    /**
     * @api {get} /status
     * @apiDescription Cette requête permet de récupérer la liste des statuts
     * @apiName GetStatus
     * @apiGroup Status
     * @apiVersion 1.0.0
     * @apiExample {js} Example :
     *   /api/v1/status
     */
      .get(function(req, res) {
        res.status(200).send(enumerations.status);
      });

    api.route('/v1/roles')
    /**
     * @api {get} /roles
     * @apiDescription Cette requête permet de récupérer la liste des rôles
     * @apiName GetRoles
     * @apiGroup Roles
     * @apiVersion 1.0.0
     * @apiExample {js} Example :
     *   /api/v1/roles
     */
      .get(function(req, res) {
        res.status(200).send(enumerations.roles);
      });

    api.route('/v1/permissions')
    /**
     * @api {get} /permissions
     * @apiDescription Cette requête permet de récupérer la liste des permissions
     * @apiName GetPermissions
     * @apiGroup Permissions
     * @apiVersion 1.0.0
     * @apiExample {js} Example :
     *   /api/v1/permissions
     */
      .get(function(req, res) {
        res.status(200).send(enumerations.permissions);
      });

  api.route('/v1/users')
  /**
   * @api {get} /users
   * @apiDescription Cette requête permet de récupérer la liste de tous les users
   * @apiName GetUsers
   * @apiGroup Users
   * @apiVersion 1.0.0
   * @apiExample {js} Example :
   *   /api/v1/users
   */
    .get(function(req, res) {
      /** TODO : gérer la pagination */
      User.find({}, function (err, users) {
        if(err) {
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
     * @apiVersion 1.0.0
     * @apiParam {String} buque La buque du PG
     * @apiParam {String} fams La fam's du PG
     * @apiParam {String} bande La bande du PG
     * @apiExample {js} Example :
     *   /api/v1/users
     */
    .post(function(req, res) {
      /** TODO: vérifier que l'adresse email n'est pas déjà utilisée */
      var user = new User();
      if (validator.isEmail(req.body.email1)) {
        user.email1 = req.body.email1
        user.save(function (err) {
            if (err) {
              res.status(400).send(err);
            } else {
              res.set('Location', user._id);
              res.status(200).json({ message: 'Utilisateur créé' });
            }
        });
      } else {
          res.status(400).send({ message: 'Pas d\'adresse mail spécifiée ou adresse invalide' })
      }
    });

    api.route('/v1/users/:user_id')
      /**
       * @api {get} /users/:userId
       * @apiDescription Cette requête permet de récupérer un utilisateur à partir de son ID
       * @apiName GetUsers
       * @apiGroup Users
       * @apiVersion 1.0.0
       * @apiExample {js} Example :
       *   /api/v1/users/171
       */
      .get(function(req, res) {
        /** TODO: ajouter 'self' dans la doc */
        if(req.params.user_id === 'self') {
          User.findById(req.user._id, function (err, user) {
            if(err) {
              res.status(404).send(err);
            } else {
              res.status(200).send(user);
            }
          });
        } else {
          User.findById(req.params.user_id, function (err, user) {
            if(err) {
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
         * @apiVersion 1.0.0
         * @apiExample {js} Example :
         *   /api/v1/users/171
         */
      .delete(function(req, res) {
        User.findById(req.params.user_id, function(err, user) {
          if(err) {
            res.status(404).send(err);
          } else {
            user.remove(function(result) {
              res.status(200).json({ message: 'Utilisateur correctement supprimé' });
            });
          }
        });
      })
        /**
         * @api {put} /users/:userId
         * @apiDescription Cette requête permet de mettre à jour les informations d'un utilisateur
         * @apiName UpdateUsers
         * @apiGroup Users
         * @apiVersion 1.0.0
         * @apiExample {js} Example :
         *   /api/v1/users/171
         */
      .put(function(req, res) {
        /** TODO */
      });

      api.route('/v1/users/:user_id/buquage')
        /**
         * @api {get} /users/:user_id/buquage
         * @apiDescription Cette requête permet de récupérer la liste des boquettes
         * @apiName GetBuquages
         * @apiGroup Buquages
         * @apiVersion 1.0.0
         * @apiExample {js} Example :
         *   /api/v1/users/:user_id/buquage
         */
        .get(function(req, res) {
          res.status(200).send({ messaye: "OK !", success: true });
        })
        .post(function(req, res) {
          res.status(200).send({ messaye: "OK !", success: true });
        });

      api.route('/v1/users/:user_id/buquages/:buquage_id')
        .get(function(req, res) {
          res.status(200).send({ messaye: "OK !", success: true });
        })
        .delete(function(req, res) {
          res.status(200).send({ messaye: "OK !", success: true });
        })
        .put(function(req, res) {
          res.status(200).send({ messaye: "OK !", success: true });
        })
}
