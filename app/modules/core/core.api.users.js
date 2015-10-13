"use strict";
var users = (function () {
    function users($http, apiVersion) {
        var vm = this;
        vm.get = get;
        vm.current = current;
        function get() {
            return $http.get("api/" + apiVersion + "/" + "users");
        }
        function current() {
            return $http.get("api/" + apiVersion + "/" + "users");
        }
    }
    users.IID = "users";
    users.$inject = ["$http", "apiVersion"];
    return users;
})();
angular.module("sdp.core").service(users.IID, users);
//# sourceMappingURL=core.api.users.js.map