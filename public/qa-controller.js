angular.module('FeedbackTool')
.controller('QaController',['$scope', '$http','$location', function($scope,$http,$location) {
////////////////////////////////////////////
// Feedback Index( all feedbacks)
  $http.get('/qaquestions.json').
    then(function(response) {
      $scope.test = " ok "
      $scope.List = response.data;
      // this callback will be called asynchronously
      // when the response is available
    }, function(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
        $scope.test = " error"
  });
  $scope.vote = function(id){};
/////////////// Show
  $scope.OpenQuestion = function(Id){
    var url = '/openquestions/'+ Id
    $location.path(url)
    $scope.$apply();
    };
}]);