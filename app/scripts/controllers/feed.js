'use strict';

/**
 * @ngdoc function
 * @name fakebookApp.controller:FeedCtrl
 * @description
 * # FeedCtrl
 * Controller of the fakebookApp
 */
angular.module('fakebookApp')
  .controller('FeedCtrl', ['$scope', 'Githubber', 'Quote', '$sessionStorage', function ($scope, Githubber, Quote, $sessionStorage) {

    $scope.$storage = $sessionStorage.$default({githubbers: [], page: 0});

    $scope.loadNextTen = function() {
      $scope.$storage.page = $scope.$storage.page + 1;
      Githubber.all($scope.$storage.page).success(function(data) {
        var newGithubbers = data;
        Quote.get($scope.$storage.page).success(function(data) {
          for(var i = 0; i < 10; i++) {
            newGithubbers[i].quote = data.result[0]['/people/person/quotations'][i].name;
          }
          $scope.$storage.githubbers = $scope.$storage.githubbers.concat(newGithubbers);
        });
      });
    };

    if($scope.$storage.page === 0) {
      $scope.loadNextTen();
    }

  }]);
