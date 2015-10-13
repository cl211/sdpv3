module.exports = function (api, models) {

  var User = models.User;

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
      User.find({}, function (err, users) {
        res.status(200).json(users);
      });
    })
    /**
     * @api {get} /users
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

    });

    api.route('/v1/users/:userId')
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
        User.findById(req.params.form_id, function (err, user) {
          if(err) {
            res.status(404).send(err);
          } else {
            res.status(200).send(user);
          }
        });

        User.find({}, function (err, users) {
          res.status(200).json(users);
        });
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
        User.find({}, function (err, users) {
          res.status(200).json(users);
        });
      })
        /**
         * @api {update} /users/:userId
         * @apiDescription Cette requête permet de mettre à jour les informations d'un utilisateur
         * @apiName UpdateUsers
         * @apiGroup Users
         * @apiVersion 1.0.0
         * @apiExample {js} Example :
         *   /api/v1/users/171
         */
      .put(function(req, res) {
        User.find({}, function (err, users) {
          res.status(200).json(users);
        });
      });
}
