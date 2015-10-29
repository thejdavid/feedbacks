angular.module('FeedbackTool')
.controller('FeedbackIndexController',['$scope', '$http', function($scope,$http) {
////////////////////////////////////////////
// Feedback Index( all feedbacks)
  $http.get('/feedbacks.json').
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
  // Review a Feedback
  $scope.submitReview = function(id,specific,actionable,kind){
    $http.post('/votes.json', {id,specific,actionable,kind}).
      then(function(response) {
        $scope.result = true;
        console.log($scope.result)
        // this callback will be called asynchronously
        // when the response is available
      }, function(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        $scope.result = false;
      });
    };
}]);