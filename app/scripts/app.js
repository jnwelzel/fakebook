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
    'ngSanitize',
    'ngStorage',
    'ngDialog',
    'ngFoobar',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/feed');

    $stateProvider
      .state('feed', {
        url: '/feed',
        templateUrl: 'views/feed.html',
        controller: 'FeedCtrl'
      })
      .state('friends', {
        url: '/friends',
        templateUrl: 'views/friends.html',
        controller: 'FriendsCtrl'
      });
  });

function TabBarClick() {
  $('.tab-bar').removeClass('active');
  $(this).addClass('active');
}

$('.tab-bar').on('click', TabBarClick);
