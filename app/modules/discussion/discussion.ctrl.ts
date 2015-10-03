"use strict";
class DiscussionCtrl {
  static IID: string = "DiscussionCtrl";
  static $inject: Array<string> = [];
  disconnect: Function;

  constructor() {
    var vm = this;

  }
}
angular.module("sdp").controller(DiscussionCtrl.IID, DiscussionCtrl);
