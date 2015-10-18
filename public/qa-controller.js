angular.module('FeedbackTool')
.controller('QaController',['$scope', '$http', function($scope,$http,$location) {
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
////////////////////////////////////////////
// Post a new feedback
//   $scope.submit = function() {
//     Validation:
//     if ($scope.FeedbackForm.$valid) {
//       $http.post('/.json', { data: }).
//       then(function(response) {
//         $scope.succes = 'sent';
//         // this callback will be called asynchronously
//         // when the response is available
//       }, function(response) {
//         // called asynchronously if an error occurs
//         // or server returns response with an error status.
//         $scope.succes = 'fail';
//       });
//     };
// };
$scope.vote = function(id){};
////////////////////////////////////////////
// Feedback Received by User
// $http.get('//myfb.json').
//   then(function(response) {
//     $scope.test = " ok "
//     $scope.mylist = response.data;
//     // this callback will be called asynchronously
//     // when the response is available
//   }, function(response) {
//     // called asynchronously if an error occurs
//     // or server returns response with an error status.
//     $scope.test = " error"
//   });
////////////////////////////////////////////
// Review a Feedback
  // $scope.submitReview = function(id,data){
  //   var data = data
  //   $http.post('/votes.json', { id:id,data}).
  //     then(function(response) {
  //       $scope.result = 'sent';
  //       // this callback will be called asynchronously
  //       // when the response is available
  //     }, function(response) {
  //       // called asynchronously if an error occurs
  //       // or server returns response with an error status.
  //       $scope.result = 'fail';
  //     });
  //   };
/////////////// Show
  $scope.OpenQuestion = function(Id){
    var url = '/qaquestions/' + Id + '.json'
    $http.get(url,{params:{id:Id}}).
      then(function(response) {
        $scope.test = " ok "
        $scope.qData = response.data;
        $location.path(url)
        // this callback will be called asynchronously
        // when the response is available
      }, function(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
          $scope.test = " error"
         });
    };
}]);