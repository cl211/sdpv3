var RootCtrl = (function () {
    function RootCtrl(tools) {
        var vm = this;
        this.disconnect = disconnect;
        function disconnect() {
            tools.disconnect();
        }
    }
    RootCtrl.IID = "RootCtrl";
    RootCtrl.$inject = ["tools"];
    return RootCtrl;
})();
angular.module("sdp").controller(RootCtrl.IID, RootCtrl);
//# sourceMappingURL=core.root.ctrl.js.map