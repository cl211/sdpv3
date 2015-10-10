"use strict";
class AdminCtrl {
  static IID: string = "AdminCtrl";
  static $inject: Array<string> = ["users"];
  /** La liste des utilisateurs */
  users: Array<sdp.user>;

  constructor(users: users) {
    var vm: AdminCtrl = this;
    updateUsers();

    function updateUsers(): void {
      users.get().then(function(r: ng.IHttpPromiseCallbackArg<Array<sdp.user>>){
        vm.users = r.data;
      });
    }
  }
}
angular.module("sdp.admin").controller(AdminCtrl.IID, AdminCtrl);
