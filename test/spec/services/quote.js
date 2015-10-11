'use strict';

describe('Service: quote', function () {

  // load the service's module
  beforeEach(module('fakebookApp'));

  // instantiate service
  var quote;
  beforeEach(inject(function (_quote_) {
    quote = _quote_;
  }));

  it('should do something', function () {
    expect(!!quote).toBe(true);
  });

});
