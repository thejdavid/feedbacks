        angular.module('FeedbackTool',['ngRoute','ng-rails-csrf'])
        .config(function($routeProvider){
          $routeProvider.when('/dashboard', {
           templateUrl: '/feedback-index.html'
          })
          .when('/new', {
           templateUrl: '/feedback-new.html',
            controller:'FeedbackController',
            controllerAs: "feedback"
          })
          .otherwise({ redirectTo: '/' });
        });