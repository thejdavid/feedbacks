angular.module('FeedbackTool')
.controller('FeedbackUindexController',['$scope', '$http', function($scope,$http) {
////////////////////////////////////////////
// Feedback Received by User
  $http.get('/feedbacks/myfb.json').
    then(function(response) {
      $scope.test = " ok "
      $scope.mylist = response.data;
      // this callback will be called asynchronously
      // when the response is available
    }, function(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      $scope.test = " error"
    });
}]);