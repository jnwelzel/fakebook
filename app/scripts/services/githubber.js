'use strict';

/**
 * @ngdoc service
 * @name fakebookApp.githubber
 * @description
 * # githubber
 * Factory in the fakebookApp.
 */
angular.module('fakebookApp')
  .factory('Githubber', ['$http', function ($http) {
    // Service logic
    // ...

    // Public API here
    return {
      all: function (page) {
        return $http.get('https://api.github.com/repos/RickWong/react-transmit/stargazers?per_page=10&page=' + page);
      }
    };
  }]);
