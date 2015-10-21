angular.module('FeedbackTool',['ngRoute','ng-rails-csrf','ui.bootstrap','ngAnimate'])
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
  .when('/reviews', {
    templateUrl: '/feedback-reviews.html',
    controller:'ReviewController',
  })
  .when('/openquestions', {
    templateUrl: '/qa-index.html',
    controller:'QaController',
  })
  .when('/openquestions/new', {
    templateUrl: '/qa-new.html',
    controller:'QaController',
  })
  .when("/openquestions/:id", {
    templateUrl: '/qa-show.html',
    controller:'QaShowController',
  })
  .otherwise({ redirectTo: '/' });
});