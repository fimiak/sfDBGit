var sfApp = angular.module('sfApp', ['ngRoute', 'ngAnimate', 'sfAppControllers', 'sfAppServices', 'AngularGM']);

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

var dbCtrl = angular.module('sfAppControllers', []);

dbCtrl.controller('dbCtrl', ['$scope', 'Box', function ($scope, Box) {

  $scope.boxes = Box.query();
  $scope.orderProp = '-height';
  $scope.currentPage = 0;
  $scope.pageSize = 10;
  $scope.numberOfPages = function() {
    return Math.ceil($scope.boxes.length/$scope.pageSize);
  };
  for (var i=0; i<10; i++) {
    $scope.boxes.push(i);
  }
  $scope.select=function(item) {
    $scope.selected = item;
  };
  $scope.isActive = function(item) {
    return $scope.selected === item;
  };

  $scope.options = {
    map: {
      center: new google.maps.LatLng(37.78, -122.415),
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    },
    notselected: {
      icon: 'https://maps.gstatic.com/mapfiles/ms2/micons/red-dot.png',
    },
    selected: {
      icon: 'https://maps.gstatic.com/mapfiles/ms2/micons/green-dot.png',
    }
  };
}]);


dbCtrl.controller('dtCtrl', ['$scope', '$routeParams', 'Box', function($scope, $routeParams, Box) {
  $scope.box = Box.get({boxId: $routeParams.boxId}, function(box) {
    $scope.mainImageUrl = box.images[0];
    });

  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  };

}]);


dbCtrl.filter('startFrom', function() {
  return function(input, start) {
    start = +start;
    return input.slice(start);
  };
});


var dbServices = angular.module('sfAppServices', ['ngResource']);

dbServices.factory('Box', ['$resource', function($resource) {
  return $resource('json/:boxId.json', {}, {
    query: {method:'GET', params:{boxId:'boxes'}, isArray:true}
  });
}]);
