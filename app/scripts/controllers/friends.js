'use strict';

/**
 * @ngdoc function
 * @name fakebookApp.controller:FriendsCtrl
 * @description
 * # FriendsCtrl
 * Controller of the fakebookApp
 */
angular.module('fakebookApp')
  .controller('FriendsCtrl', ['$scope', '$sessionStorage', function ($scope, $sessionStorage) {

    $scope.$storage = $sessionStorage;
    $scope.searchField = '';


  }]);
