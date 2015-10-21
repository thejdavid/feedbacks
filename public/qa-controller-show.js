angular.module('FeedbackTool')
.controller('QaShowController',['$scope', '$http','$location','$routeParams', function($scope,$http,$location,$routeParams) {
 $http.get('/qaquestions/' + $routeParams.id + '.json').
    then(function(response) {
      $scope.test = " ok "
      $scope.Qdata = response.data;
      // this callback will be called asynchronously
      // when the response is available
    }, function(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
        $scope.test = " error"
  });
}]);