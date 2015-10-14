"use strict";
/** Service qui sert de boîte à outils sur le reste du projet */
class tools {
  static IID: string = "tools";
  static $inject: Array<string> = ["$http", "$location", "$window", "$mdToast", "$mdDialog"];
  /** Gère la déconnexion */
  disconnect: () => ng.IHttpPromise<any>;
  /** Envoyer une notification (toast) à l'utilisateur */
  notify: (message: string) => void;
  /** Permet d'accéder à une route différente. Il s'agit des routes fournies par Express et non Angular */
  moveTo: (path: string) => void;
  /** Fonction qui fait apparaître une popup de confirmation à un utilisateur */
  confirm: (event: MouseEvent) => ng.IPromise<any>;

  constructor($http: ng.IHttpService, $location: ng.ILocationService, $window: ng.IWindowService, $mdToast: angular.material.IToastService, $mdDialog: angular.material.IDialogService) {
    var vm: tools = this;
    vm.disconnect = disconnect;
    vm.moveTo = moveTo;
    vm.notify = notify;
    vm.confirm = confirm;

    function confirm (event: MouseEvent): ng.IPromise<any> {
        var confirm = $mdDialog.confirm()
          .title('Confirmez votre choix')
          .content('La suppression est définitive, êtes-vous sûr de vouloir faire ça ?')
          .ariaLabel('Confirmation')
          .targetEvent(event)
          .ok('Je confirme')
          .cancel('Non');
        return $mdDialog.show(confirm);
    }

    function moveTo(path: string): void {
      var url: string = $location.protocol() + '://' + $location.host() + ($location.port() ? ':'+$location.port(): '') + "/" + path;
      $window.open(url, "_self")
    }

    function notify(message: string): void {
      $mdToast.show($mdToast.simple().content(message).position('top right').hideDelay(2000));
    }

    function disconnect(): ng.IHttpPromise<any> {
      return $http.post('/logout', {});
    }
  }
}
angular.module("sdp.core").service(tools.IID, tools);
