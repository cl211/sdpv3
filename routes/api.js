module.exports = function (api, isAuthenticated, models) {

  api.route('/users')
    .get(function(req, res) {
      res.status(200).send({
        success: true,
        message: "La liste des utilisateurs !"
      })
    });

    api.route('/user')
      .get(function(req, res) {
        res.status(200).send({
          success: true,
          message: "L'utilisateur courant !"
        })
      });
}
