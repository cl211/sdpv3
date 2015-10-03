"use strict";
class RootCtrl {
  static IID: string = "RootCtrl";
  static $inject: Array<string> = ["tools"];
  disconnect: Function;
  open: Function;

  constructor(tools: tools, $location: ng.ILocationService) {
    var vm = this;
    vm.disconnect = disconnect;
    vm.open = open;

    function open(path: string) {
      $location.path(path);
    }

    function disconnect() {
      tools.disconnect();
    }
  }
}
angular.module("sdp").controller(RootCtrl.IID, RootCtrl);
