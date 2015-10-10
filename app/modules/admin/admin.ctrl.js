"use strict";
var AdminCtrl = (function () {
    function AdminCtrl(users) {
        var vm = this;
        updateUsers();
        function updateUsers() {
            users.get().then(function (r) {
                vm.users = r.data;
            });
        }
    }
    AdminCtrl.IID = "AdminCtrl";
    AdminCtrl.$inject = ["users"];
    return AdminCtrl;
})();
angular.module("sdp.admin").controller(AdminCtrl.IID, AdminCtrl);
//# sourceMappingURL=admin.ctrl.js.map