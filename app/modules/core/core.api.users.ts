"use strict";
/** Service qui gère la gestion des utilisateurs via l'API */
class users {
  static IID: string = "users";
  static $inject: Array<string> = ["$http"];
  /** Cette méthode renvoie la liste de tous les utilisateurs. */
  get: () => ng.IHttpPromise<Array<sdp.user>>;
  /** Cette méthode renvoie l'utilisateur courant */
  current: () => ng.IHttpPromise<sdp.user>;

  constructor($http: ng.IHttpService) {
    var vm: users = this;
    vm.get = get;
    vm.current = current;

    function get(): ng.IHttpPromise<Array<sdp.user>> {
      return $http.get("api/users");
    }

    function current(): ng.IHttpPromise<sdp.user> {
      return $http.get("api/user");
    }
  }
}
angular.module("sdp.core").service(users.IID, users);
