"use strict";
var AdminCtrl = (function () {
    function AdminCtrl(users, $log, $http) {
        var vm = this;
        vm.select = select;
        updateUsers();
        function select(id) {
            $log.log(id);
            $http.get("api/v1/users/" + id).then(function (r) {
                $log.log(r);
            });
        }
        function updateUsers() {
            users.get().then(function (r) {
                vm.users = r.data;
            });
        }
    }
    AdminCtrl.IID = "AdminCtrl";
    AdminCtrl.$inject = ["users", "$log", "$http"];
    return AdminCtrl;
})();
angular.module("sdp.admin").controller(AdminCtrl.IID, AdminCtrl);
//# sourceMappingURL=admin.ctrl.js.map