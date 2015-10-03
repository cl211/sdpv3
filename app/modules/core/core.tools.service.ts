"use strict";
class tools {
  static IID: string = "tools";
  static $inject: Array<string> = ["$http"];
  /** Gère la déconnexion */
  disconnect: Function;

  constructor($http: ng.IHttpService) {
    var vm = this;
    vm.disconnect = disconnect;

    function disconnect(): ng.IHttpPromise<any> {
      return $http.post('/logout', {});
    }
  }
}
angular.module("sdp").service(tools.IID, tools);
