"use strict";
class AdminCtrl {
  static IID: string = "AdminCtrl";
  static $inject: Array<string> = ["users", "$log", "$http", "Restangular"];
  /** La liste des utilisateurs */
  users: Array<sdp.user>;
  /** Sélection d'un user */
  select: (id: string) => any;
  /** Supprimer un utilisateur */
  deleteUser: (id: string) => void;
  /** Ajouter un utilisateur */
  addUser: (id: string) => void;
  /** Ouvre le panneau d'ajout */
  toggleAddForm: () => void;
  /** Boolean qui vaut vrai si le formulaire d'ajout d'utilisateur est ouvert */
  canAdd: boolean;

  constructor(users: users, $log: ng.ILogService, $http: ng.IHttpService, Restangular: restangular.IService) {
    var vm: AdminCtrl = this;
    vm.select = select;
    vm.deleteUser = deleteUser;
    vm.addUser = addUser;
    vm.toggleAddForm = toggleAddForm;
    vm.canAdd = false;
    vm.users = [];
    updateUsers();

    function updateUsers(): void {
      vm.users = Restangular.all("users").getList().$object;
    }

    function toggleAddForm() {
      vm.canAdd = !vm.canAdd;
    }

    function addUser(email1: string): void {
      Restangular.all("users").post({ email1: "test2@gadz.org" }).then(function(r) {
        updateUsers();
      });
    }

    function deleteUser(id: string): void {
      Restangular.one("users", id).remove().then(function(r) {
        updateUsers();
      });
    }

    function select(id: string) {
      Restangular.one("users", id).get().then(function(r) {
        $log.log(r);
      });
    }
  }
}
angular.module("sdp.admin").controller(AdminCtrl.IID, AdminCtrl);
