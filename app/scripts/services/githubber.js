'use strict';

/**
 * @ngdoc service
 * @name fakebookApp.githubber
 * @description
 * # githubber
 * Factory in the fakebookApp.
 */
angular.module('fakebookApp')
  .factory('githubber', ['$http', function ($http) {
    // Service logic
    // ...

    // Public API here
    return {
      all: function (per_page, page) {
        return $http.get('https://api.github.com/repos/facebook/react/stargazers?per_page=' + per_page + '&page=' + page);
      }
    };
  }]);
