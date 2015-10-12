'use strict';

describe('Controller: FriendsCtrl', function () {

  // load the controller's module
  beforeEach(module('fakebookApp'));

  var FriendsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    $controller('FriendsCtrl', {
      $scope: scope,
      // place here mocked dependencies
    });
  }));

  it('should have empty \'searchField\' var in scope', function () {
    expect(scope.searchField.length).toBe(0);
  });
});
