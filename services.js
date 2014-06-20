var dbServices = angular.module('sfAppServices', ['ngResource']);

dbServices.factory('Box', ['$resource', function($resource) {
  return $resource('/:boxId.json', {}, {
    query: {method:'GET', params:{boxId:'boxes'}, isArray:true}
  });
}]);
