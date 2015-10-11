'use strict';

/**
 * @ngdoc overview
 * @name fakebookApp
 * @description
 * # fakebookApp
 *
 * Main module of the application.
 */
angular
  .module('fakebookApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngStorage',
    'ngDialog',
    'ngFoobar'
  ])
  .config(function ($routeProvider) {
    console.log('CONFIG');
    $routeProvider
      .when('/', {
        templateUrl: 'views/feed.html',
        controller: 'FeedCtrl',
        controllerAs: 'feed'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/friends', {
        templateUrl: 'views/friends.html',
        controller: 'FriendsCtrl',
        controllerAs: 'friends'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
