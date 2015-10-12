'use strict';

describe('Directive: feedStory', function () {

  // load the directive's module
  beforeEach(module('fakebookApp'));

  var element,
    scope,
    httBackend,
    avatarSrc = 'images/jon.jpeg',
    name = 'Jonathan Welzel',
    text = 'Just testin',
    storyId = '123';

  beforeEach(module("my.templates"));
  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();

    scope.name = name;
    scope.avatarSrc = avatarSrc;
    scope.storyId = storyId;
    scope.text = text;

    element = angular.element('<feed-story name="{{name}}" avatar-src="{{avatarSrc}}" story-id="{{storyId}}" text="{{text}}"></feed-story>');
    element = $compile(element)(scope);
    scope.$digest();
  }));

  it('should have card containing the story data', function () {
    expect(element.attr('name')).toBe(name);
    expect(element.attr('avatar-src')).toBe(avatarSrc);
    expect(element.attr('story-id')).toBe(storyId);
    expect(element.attr('text')).toBe(text);
  });

  it('should have image element with \'src\' attribute value equal \'' + avatarSrc + '\'', function() {
    expect(element.find('img').attr('src')).toBe(avatarSrc);
  });

});
