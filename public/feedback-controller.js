angular.module('FeedbackTool')
.controller('FeedbackController',['$scope', '$http', function($scope,$http) {
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
////////////////////////////////////////////
// Post a new feedback
  $scope.submit = function() {
    Validation:
    if ($scope.FeedbackForm.$valid) {
      $http.post('/feedbacks.json', { data:this.feedback }).
      then(function(response) {
        $scope.succes = 'sent';
        // this callback will be called asynchronously
        // when the response is available
      }, function(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        $scope.succes = 'fail';
      });
    };
};
////////////////////////////////////////////
// Email suggestions for new feedback
  $scope.selected = '';
  $http.get('/feedbacks/search.json').
    then(function(response) {
      $scope.test = " ok "
      $scope.states = response.data;
// this callback will be called asynchronously
// when the response is available
     }, function(response) {
// called asynchronously if an error occurs
// or server returns response with an error status.
        $scope.test = " error"
});
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
////////////////////////////////////////////
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

