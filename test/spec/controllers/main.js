'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('fakebookApp'));

  var MainCtrl,
    scope,
    statusText = '';

  beforeEach(module("my.templates"));
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should have var with empty status text', function () {
    expect(scope.statusText).toBe(statusText);
  });

  it('should update status', function() {
    var newStatus = 'Testing the status update';
    scope.statusText = newStatus;
    scope.updateStatus();
    expect(scope.$storage.posts[0].text).toBe(newStatus);
  });

});
