"use strict";
class BrosoufCtrl {
  static IID: string = "BrosoufCtrl";
  static $inject: Array<string> = ['Restangular', "moment"];
  disconnect: Function;
  /** Onglet actif */
  currentTab: string;
  principal: sdp.user;
  today: string;

  constructor(Restangular: restangular.IService, moment: any) {
    var vm:BrosoufCtrl = this;

    vm.currentTab = 'myAccount'; //init
    vm.today = moment().format("LL");

    function getSelf(): void {
      Restangular.one("users", "self").get().then(function(r:sdp.user) {
        vm.principal = r;
      });
    }

    getSelf();
  }
}
angular.module("sdp").controller(BrosoufCtrl.IID, BrosoufCtrl);
