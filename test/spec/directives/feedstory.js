'use strict';

describe('Directive: feedStory', function () {

  // load the directive's module
  beforeEach(module('fakebookApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<feed-story></feed-story>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the feedStory directive');
  }));
});
