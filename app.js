angular.module('wikiApp', [])
.controller('wikiCtrl', ['$scope', '$http', function($scope, $http){
  $scope.search = 'dog';
  $scope.wikiSearch = function(){

    var req = {
      url: 'https://en.wikipedia.org/w/api.php',
      method: 'GET',
      params: {
        action: 'opensearch',
        search: $scope.search,
        limit: 10,
        namespace: 0,
        format: 'json',
      }
    }

    $http(req).then(function success(res){
      console.log('success: ', res);
    }, function error(res){
      console.log("error: ", res);
    });
  }
  
}]);