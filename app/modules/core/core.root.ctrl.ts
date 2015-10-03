class RootCtrl {
  static IID: string = "RootCtrl";
  static $inject: Array<string> = ["tools"];
  disconnect: Function;

  constructor(tools: tools) {
    var vm = this;
    this.disconnect = disconnect;

    function disconnect() {
      tools.disconnect();
    }
  }
}
angular.module("sdp").controller(RootCtrl.IID, RootCtrl);
