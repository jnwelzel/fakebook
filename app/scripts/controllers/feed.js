'use strict';

/**
 * @ngdoc function
 * @name fakebookApp.controller:FeedCtrl
 * @description Responsible for managing the user's feed data
 * # FeedCtrl
 * Controller of the fakebookApp
 */
angular.module('fakebookApp')
  .controller('FeedCtrl', ['$scope', 'githubber', 'quote', '$sessionStorage', function ($scope, githubber, quote, $sessionStorage) {

    $scope.$storage = $sessionStorage.$default({githubbers: [], page: 0});

    $scope.loadNextTen = function() {
      $scope.$storage.page = $scope.$storage.page + 1;
      githubber.all(10, $scope.$storage.page).success(function(data) {
        var newGithubbers = data;
        quote.get(10, $scope.$storage.page).success(function(quotes) {
          for(var i = 0; i < 10; i++) {
            newGithubbers[i].quote = quotes.result[0]['/people/person/quotations'][i].name;
          }
          $scope.$storage.githubbers = $scope.$storage.githubbers.concat(newGithubbers);
        });
      });
    };

    if($scope.$storage.page === 0) {
      $scope.loadNextTen();
    }

  }]);
