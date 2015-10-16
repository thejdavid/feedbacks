angular.module('FeedbackTool')
.controller('ReviewController',['$scope', '$http', function($scope,$http) {
////////////////////////////////////////////
// Feedback Index( all feedbacks)
  $http.get('/votes.json').
    then(function(response) {
      $scope.test = " ok "
      $scope.list = response.data;
      // this callback will be called asynchronously
      // when the response is available
    }, function(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
        $scope.test = " error"
  });
}]);

