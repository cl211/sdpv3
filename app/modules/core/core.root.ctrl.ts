"use strict";
class RootCtrl {
  static IID: string = "RootCtrl";
  static $inject: Array<string> = ["tools", "$location", "sdpTitle"];
  /** Gère la déconnexion */
  disconnect: Function;
  /** Gère le changement de route */
  open: Function;
  /** Le titre de la page d'accueil */
  title: string;

  constructor(tools: tools, $location: ng.ILocationService, sdpTitle: string) {
    var vm: RootCtrl = this;
    vm.disconnect = disconnect;
    vm.open = open;
    vm.title = sdpTitle;

    function open(path: string) {
      $location.path(path);
    }

    function disconnect() {
      tools.disconnect();
    }
  }
}
angular.module("sdp.core").controller(RootCtrl.IID, RootCtrl);
