'use strict';

describe('Controller: FeedCtrl', function () {

  // load the controller's module
  beforeEach(module('fakebookApp'));

  var FeedCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FeedCtrl = $controller('FeedCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should have a scope', function () {
    expect(scope).toBeTruthy();
  });
});
