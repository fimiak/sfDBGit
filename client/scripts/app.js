var sfApp = angular.module('sfApp', ['ngRoute', 'ngAnimate', 'sfAppControllers', 'sfAppServices', 'sfAppDirectives', 'AngularGM']);

sfApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'partials/about.html',
        controller: 'dbCtrl'
    })
      .when('/:boxId', {
        templateUrl: 'partials/database.html',
        controller: 'dtCtrl'
    })
      .otherwise({
        redirectTo: '/'
    });

  }]);
