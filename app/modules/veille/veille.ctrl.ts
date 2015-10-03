"use strict";
class VeilleCtrl {
  static IID: string = "VeilleCtrl";
  static $inject: Array<string> = [];
  disconnect: Function;

  constructor() {
    var vm = this;

  }
}
angular.module("sdp").controller(VeilleCtrl.IID, VeilleCtrl);
