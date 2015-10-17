"use strict";
class AdminCtrl {
  static IID: string = "AdminCtrl";
  static $inject: Array<string> = ["users", "$log", "$http", "Restangular", "tools"];
  /** La liste des utilisateurs */
  users: Array<sdp.user>;
  /** Sélection d'un user */
  select: (id: string, event: MouseEvent) => void;
  /** Supprimer un utilisateur */
  deleteUser: (id: string, event: MouseEvent) => void;
  /** Ajouter un utilisateur */
  addUser: () => void;
  /** Ouvre le panneau d'ajout */
  toggleAddForm: () => void;
  /** Boolean qui vaut vrai si le formulaire d'ajout d'utilisateur est ouvert */
  canAdd: boolean;
  /** Boolean qui vaut vrai quand on charge les users */
  isLoading: boolean;
  /** Variable qui va contenir le mail tapé pour un nouvel utilisateur */
  newUser: { email1: string };

  constructor(users: users, $log: ng.ILogService, $http: ng.IHttpService, Restangular: restangular.IService, tools: tools) {
    var vm: AdminCtrl = this;
    vm.select = select;
    vm.deleteUser = deleteUser;
    vm.addUser = addUser;
    vm.toggleAddForm = toggleAddForm;
    vm.canAdd = false;
    vm.isLoading = false;
    vm.users = [];
    vm.newUser = { email1: "" };
    updateUsers();

    function updateUsers(): void {
      vm.isLoading = true;
      Restangular.all("users").getList().then(function(r: Array<sdp.user>) {
        vm.users = r;
        vm.isLoading = false;
      });
    }

    function toggleAddForm() {
      vm.canAdd = !vm.canAdd;
    }

    function addUser(): void {
      Restangular.all("users").post({ email1: vm.newUser.email1 }).then(function() {
        vm.toggleAddForm();
        vm.newUser = { email1: "" };
        updateUsers();
        tools.notify("Utilisateur ajouté !");
      });
    }

    function deleteUser(id: string, ev: MouseEvent): void {
      /** Si l'utilisateur est d'accord */
      tools.confirm(ev).then(function () {
        /** Alors on envoie une requête pour supprimer l'utilisateur */
        Restangular.one("users", id).remove().then(function() {
          /** Puis on met à jour la liste affichée à l'écran */
          updateUsers();
        });
      });
    }

    function select(id: string, event: MouseEvent): void {
      Restangular.one("users", id).get().then(function(r) {
        $log.log(r);
      });
    }
  }
}
angular.module("sdp.admin").controller(AdminCtrl.IID, AdminCtrl);
