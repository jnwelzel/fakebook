'use strict';

/**
 * @ngdoc function
 * @name fakebookApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fakebookApp
 */
angular.module('fakebookApp')
  .controller('MainCtrl', ['$scope', 'ngDialog', 'ngFoobar', '$sessionStorage', function ($scope, ngDialog, ngFoobar, $sessionStorage) {
    ngFoobar.setAutoClose(true, 3000);
    $scope.statusText = '';
    $scope.$storage = $sessionStorage.$default({posts: []});

    $scope.updateStatus = function () {
      if(this.statusText.length === 0) {
        ngFoobar.show('error', 'You must fill in the status box');
      } else {
        var newPost = {author: {name: 'Jonathan Welzel', id: 1}, text: this.statusText, id: new Date().getTime()};
        var posts = this.$storage.posts ? this.$storage.posts : [];
        posts.splice(0, 0, newPost);
        this.$storage.posts = posts;

        $scope.statusText = '';
        ngDialog.closeAll();
        ngFoobar.show('success', 'Status updated');
      }
    };

    $scope.statusChange = function (text) {
      $scope.statusText = text.trim();
    };

    $scope.openStatusModal = function () {
      ngDialog.open({
        template: 'views/modals/status.html',
        className: 'ngdialog-theme-plain',
        scope: $scope,
        cache: false
      });
    };

  }]);
