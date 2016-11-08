angular.module('wikiApp', [])
.controller('wikiCtrl', ['$scope', '$http', function($scope, $http){
  $scope.search = '';
  $scope.success = 'btnDiv';
  $scope.wikiSearch = function(){

    var req = {
      url: 'https://en.wikipedia.org/w/api.php',
      method: 'JSONP',
      params: {
        action: 'opensearch',
        search: $scope.search,
        limit: 10,
        namespace: 0,
        format: 'json',
        callback: 'JSON_CALLBACK'
      }
    }

    $http(req).then(function success(res){
      $scope.res = [];
      console.log('success: ', res);
      for(var i = 0; i < res.data[1].length; i++){
        var resObj = {
          title: res.data[1][i],
          description: res.data[2][i],
          link: res.data[3][i]
        }
        $scope.res.push(resObj);
        $scope.success = 'btnDivSearch';
      }
      console.log($scope.res);
    }, function error(res){
      console.log("error: ", res);
    });
  }
  $scope.clearAll = function(){
    if($scope.search === ''){
      $scope.success = 'btnDiv';
      $scope.res = [];
    }
  }
  
  
}]);