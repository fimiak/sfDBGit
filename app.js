var sfApp = angular.module('sfApp', ['ui.router', 'ngAnimate', 'sfAppControllers', 'sfAppServices']);

sfApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider
    .otherwise('/introduction');

    $stateProvider
      .state('introduction', {
        url: "/introduction",
        views: {
          "sidebar": {
        templateUrl: 'sidebar.html'},
          "content": {
        templateUrl: 'introduction.html'}
      }
    })
    .state('database', {
      url: "/database",
      views: {
        "sidebar": { templateUrl: "sidebar.html" },
        "content": { templateUrl: "database.html" }
      }
    })
    .state('contact', {
      url: "/contact",
      views: {
        "sidebar": { templateUrl: "sidebar.html" },
        "content": { templateUrl: "contact.html" }
      }
    });
  }]);
