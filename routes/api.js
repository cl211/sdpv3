module.exports = function (api, isAuthenticated, models) {
  var User = models.User;

  api.route('/users')
    .get(function(req, res) {
      User.find({}, function (err, users) {
        res.status(200).json(users);
      });
    });

    api.route('/user')
      .get(function(req, res) {
        User.find({}, function (err, users) {
          res.status(200).json(users);
        });
      });
}
