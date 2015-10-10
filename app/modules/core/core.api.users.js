"use strict";
var users = (function () {
    function users($http) {
        var vm = this;
        vm.get = get;
        vm.current = current;
        function get() {
            return $http.get("api/users");
        }
        function current() {
            return $http.get("api/user");
        }
    }
    users.IID = "users";
    users.$inject = ["$http"];
    return users;
})();
angular.module("sdp.core").service(users.IID, users);
//# sourceMappingURL=core.api.users.js.map