"use strict";
var RootCtrl = (function () {
    function RootCtrl(tools, $location, sdpTitle) {
        var vm = this;
        vm.disconnect = disconnect;
        vm.open = open;
        vm.title = sdpTitle;
        function open(path) {
            $location.path(path);
        }
        function disconnect() {
            tools.disconnect();
        }
    }
    RootCtrl.IID = "RootCtrl";
    RootCtrl.$inject = ["tools", "$location", "sdpTitle"];
    return RootCtrl;
})();
angular.module("sdp.core").controller(RootCtrl.IID, RootCtrl);
//# sourceMappingURL=core.root.ctrl.js.map