angular.module('FeedbackTool',['ngRoute','ng-rails-csrf','ui.bootstrap','ngAnimate'])
.config(function($routeProvider,$locationProvider){
  $routeProvider
  .when('/dashboard', {
   templateUrl: '/feedback-index.html'
  })
  .when('/feedbacks', {
   templateUrl: '/feedback-userindex.html',
  })
  .when('/feedback/new', {
   templateUrl: '/feedback-new.html',
  })
  .when('/reviews', {
    templateUrl: '/feedback-reviews.html',
    controller:'ReviewController',
  })
  .when('/openquestions', {
    templateUrl: '/qa-index.html',
    controller:'QaIndexController',
  })
  .when('/openquestions/new', {
    templateUrl: '/qa-new.html',
    controller:'QaNewController',
  })
  .when("/openquestions/:id", {
    templateUrl: '/qa-show.html',
    controller:'QaShowController',
  })
  .otherwise({ redirectTo: '/dashboard' });
});