"use strict";
class BrosoufCtrl {
  static IID: string = "BrosoufCtrl";
  static $inject: Array<string> = [];
  disconnect: Function;

  constructor() {
    var vm = this;

  }
}
angular.module("sdp").controller(BrosoufCtrl.IID, BrosoufCtrl);
