'use strict';

/**
 * @ngdoc directive
 * @name fakebookApp.directive:feedStory
 * @description
 * # feedStory
 */
angular.module('fakebookApp')
  .directive('feedStory', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the feedStory directive');
      }
    };
  });
