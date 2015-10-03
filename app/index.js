"use strict";
angular.module("sdp", ["ngMaterial", "nvd3", "ngRoute"]);
var RouteConfig = (function () {
    function RouteConfig($routeProvider) {
        $routeProvider.
            when('/', {
            templateUrl: 'modules/main.view.html',
            controller: 'MainCtrl',
            controllerAs: 'vm'
        }).
            when('/geoloc', {
            templateUrl: 'modules/geoloc.view.html',
            controller: 'GeolocCtrl',
            controllerAs: 'vm'
        }).
            when('/user', {
            templateUrl: 'modules/user/user.view.html',
            controller: 'UserCtrl',
            controllerAs: 'vm'
        }).
            when('/veille', {
            templateUrl: 'modules/veille/veille.view.html',
            controller: 'VeilleCtrl',
            controllerAs: 'vm'
        }).
            when('/brosouf', {
            templateUrl: 'modules/brosouf/brosouf.view.html',
            controller: 'BrosoufCtrl',
            controllerAs: 'vm'
        }).
            otherwise({
            redirectTo: '/'
        });
    }
    RouteConfig.$inject = ["$routeProvider"];
    return RouteConfig;
})();
angular.module("sdp").config(RouteConfig);
//# sourceMappingURL=index.js.map