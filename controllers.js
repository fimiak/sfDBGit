var dbCtrl = angular.module('sfAppControllers', []);

dbCtrl.controller('dbCtrl', ['$scope', 'Box', function ($scope, Box) {
  $scope.boxes = Box.query();
  $scope.orderProp = 'height';
  $scope.currentPage = 0;
  $scope.pageSize = 12;


$scope.setCurrentPage = function(currentPage) {
  $scope.currentPage = currentPage;
};

$scope.getNumberAsArray = function (num) {
    return new Array(num);
};

$scope.numberOfPages = function() {
    return Math.ceil($scope.boxes.length/ $scope.pageSize);
};
}]);

dbCtrl.filter('startFrom', function() {
    return function(input, start) {
        return input.slice(start);
};
});
