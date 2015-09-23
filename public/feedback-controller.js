        angular.module('FeedbackTool')
        .controller('FeedbackController',['$scope', '$http', function($scope,$http) {
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
          $scope.submit = function() {
            // Post a new feedback
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
                  // $scope.list.push(this.feedback);
              };
              //Email suggestions for new feedback
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

