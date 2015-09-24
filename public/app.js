angular.module('FeedbackTool',['ngRoute','ng-rails-csrf','ui.bootstrap'])
.config(function($routeProvider){
  $routeProvider.when('/dashboard', {
   templateUrl: '/feedback-index.html'
  })
  .when('/myfb', {
   templateUrl: '/feedback-my-index.html'
  })
  .when('/new', {
   templateUrl: '/feedback-new.html',
    controller:'FeedbackController',
    controllerAs: "feedback"
  })
  .otherwise({ redirectTo: '/' });
});