'use strict';

/**
 * @ngdoc directive
 * @name fakebookApp.directive:feedStory
 * @description Component that shows content in the user's feed/timeline
 * # feedStory
 */
angular.module('fakebookApp')
  .directive('feedStory', function () {
    return {
      templateUrl: 'views/directives/feedstory.html',
      restrict: 'E',
      scope: {
        avatarSrc: '@',
        storyId: '@',
        name: '@',
        text: '@'
      }
    };
  });
