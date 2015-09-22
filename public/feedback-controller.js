        angular.module('FeedbackTool')
        .controller('FeedbackController',['$scope', '$http', function($scope,$http) {
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
          $scope.search = function() {
            };
        }]);

