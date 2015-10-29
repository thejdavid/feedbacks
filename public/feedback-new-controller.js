angular.module('FeedbackTool')
.controller('FeedbackNewController',['$scope', '$http', function($scope,$http) {
////////////////////////////////////////////
// Post a new feedback
  $scope.submit = function() {
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
}]);