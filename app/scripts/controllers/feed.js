'use strict';

/**
 * @ngdoc function
 * @name fakebookApp.controller:FeedCtrl
 * @description
 * # FeedCtrl
 * Controller of the fakebookApp
 */
angular.module('fakebookApp')
  .controller('FeedCtrl', ['$scope', 'Githubber', 'Quote', function ($scope, Githubber, Quote) {

    $scope.page = 1;
    $scope.githubbers = [];
    $scope.quotes = [];

    $scope.githubbers = Githubber.all($scope.page).success(function(data) {
      $scope.githubbers = data;
      Quote.get($scope.page).success(function(data) {
        for(var i = 0; i < 10; i++) {
          $scope.githubbers[i].quote = data.result[0]['/people/person/quotations'][i].name;
        }
      });
    });

    $scope.loadNextTen = function() {
      $scope.page = $scope.page + 1;
      Githubber.all($scope.page).success(function(data) {
        var newGithubbers = data;
        Quote.get($scope.page).success(function(data) {
          for(var i = 0; i < 10; i++) {
            newGithubbers[i].quote = data.result[0]['/people/person/quotations'][i].name;
          }
        });
        $scope.githubbers = $scope.githubbers.concat(newGithubbers);
      });
    };

  }]);
