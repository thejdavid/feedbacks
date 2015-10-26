angular.module('FeedbackTool')
.controller('QaNewController',['$scope', '$http', function($scope,$http) {
  $scope.submit = function(question) {
      if ($scope.QuestionForm.$valid) {
        $http.post('/qaquestions.json', {question }).
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
}]);
