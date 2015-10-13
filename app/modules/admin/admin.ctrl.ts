"use strict";
class AdminCtrl {
  static IID: string = "AdminCtrl";
  static $inject: Array<string> = ["users", "$log", "$http"];
  /** La liste des utilisateurs */
  users: Array<sdp.user>;
  /** Sélection d'un user */
  select: (id: string) => any;

  constructor(users: users, $log: ng.ILogService, $http: ng.IHttpService) {
    var vm: AdminCtrl = this;
    vm.select = select;
    updateUsers();

    function select(id: string) {
      $log.log(id);
      $http.get("api/v1/users/" + id).then(function (r) {
        $log.log(r);
      });
    }

    function updateUsers(): void {
      users.get().then(function(r: ng.IHttpPromiseCallbackArg<Array<sdp.user>>){
        vm.users = r.data;
      });
    }
  }
}
angular.module("sdp.admin").controller(AdminCtrl.IID, AdminCtrl);
