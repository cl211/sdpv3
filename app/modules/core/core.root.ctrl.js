"use strict";
var RootCtrl = (function () {
    function RootCtrl(tools, $location) {
        var vm = this;
        vm.disconnect = disconnect;
        vm.open = open;
        function open(path) {
            $location.path(path);
        }
        function disconnect() {
            tools.disconnect();
        }
    }
    RootCtrl.IID = "RootCtrl";
    RootCtrl.$inject = ["tools", "$location"];
    return RootCtrl;
})();
angular.module("sdp").controller(RootCtrl.IID, RootCtrl);
//# sourceMappingURL=core.root.ctrl.js.map