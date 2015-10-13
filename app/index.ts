/// <reference path="../definitions/angular.d.ts" />
/// <reference path="../definitions/angular-animate.d.ts" />
/// <reference path="../definitions/angular-material.d.ts" />
/// <reference path="../definitions/angular-sanitize.d.ts" />
/// <reference path="../definitions/angular-route.d.ts" />
/// <reference path="../definitions/underscore.d.ts" />
/// <reference path="../definitions/d3.d.ts" />
/// <reference path="../definitions/restangular.d.ts" />
"use strict";
angular.module("sdp", ["ngMaterial", "nvd3", "ngRoute", "angularMoment", "restangular", "sdp.admin", "sdp.core"]);
angular.module("sdp.admin", []);
angular.module("sdp.core", []);

class RouteConfig {
  static $inject: Array<string> = ["$routeProvider"];
  constructor($routeProvider: angular.route.IRouteProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'modules/main/main.view.html',
            controller: 'MainCtrl',
            controllerAs: 'vm'
        }).
        when('/geoloc', {
            templateUrl: 'modules/geoloc/geoloc.view.html',
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
        when('/discussion', {
            templateUrl: 'modules/discussion/discussion.view.html',
            controller: 'DiscussionCtrl',
            controllerAs: 'vm'
        }).
        when('/admin', {
            templateUrl: 'modules/admin/admin.view.html',
            controller: 'AdminCtrl',
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
}

angular.module("sdp").config(RouteConfig);
angular.module("sdp").run(function(amMoment) {
    amMoment.changeLocale('fr-fr');
});
