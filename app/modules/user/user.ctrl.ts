"use strict";
class UserCtrl {
  static IID: string = "UserCtrl";
  static $inject: Array<string> = ["Restangular", "UserService"];
  /**Liste des utilisateurs*/
  user: Array<sdp.property>;
  /**Fonction pour sauvegarder les modifications de champs utilisateurs*/
  saveUser: () => void;

  constructor(Restangular: restangular.IService, UserService: UserService) {
    var vm: UserCtrl = this;
    vm.saveUser = saveUser;
    updateUser();

    function updateUser(): void {
      Restangular.one("users", "self").get().then(function(_r: sdp.user) {
        vm.user = UserService.prepareUser(_r);
      });
    }

    function saveUser(): void {
      Restangular.one("users","self").put(vm.user).then(function(){
        updateUser();
      });
    }

  }
}
angular.module("sdp").controller(UserCtrl.IID, UserCtrl);
