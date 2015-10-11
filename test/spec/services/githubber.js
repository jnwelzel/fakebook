'use strict';

describe('Service: githubber', function () {

  // load the service's module
  beforeEach(module('fakebookApp'));

  // instantiate service
  var githubber;
  beforeEach(inject(function (_githubber_) {
    githubber = _githubber_;
  }));

  it('should do something', function () {
    expect(!!githubber).toBe(true);
  });

});
