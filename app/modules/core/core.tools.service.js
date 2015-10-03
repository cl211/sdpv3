var tools = (function () {
    function tools($http) {
        var vm = this;
        vm.disconnect = disconnect;
        function disconnect() {
            return $http.post('/logout', {});
        }
    }
    tools.IID = "tools";
    tools.$inject = ["$http"];
    return tools;
})();
angular.module("sdp").service(tools.IID, tools);
//# sourceMappingURL=core.tools.service.js.map