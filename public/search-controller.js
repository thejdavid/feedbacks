angular.module('FeedbackTool')
  .controller("mainCtrl", function ($scope, $http) {
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
});