'use strict';

describe('Service: quote', function () {

  // load the service's module
  beforeEach(module('fakebookApp'));

  // instantiate service
  var quote, httpBackend;
  var per_page = 10;
  var page = 3;
  beforeEach(inject(function (_quote_, $httpBackend) {
    quote = _quote_;
    httpBackend = $httpBackend;
  }));

  it('should fetch a quote from William Shakespeare', function () {
    httpBackend.whenGET(
      'https://www.googleapis.com/freebase/v1/mqlread?query=[{%22type%22:%22/people/person%22,%22id%22:null,%22name%22:%22William%20Shakespeare%22,%22gender%22:{%22type%22:%22/people/gender%22,%22id%22:null,%22name%22:null},%22/people/person/quotations%22:[{%22type%22:%22/media_common/quotation%22,%22id%22:null,%22name%22:null,%22subjects%22:[],%22limit%22:' + per_page + '}]}]'
    ).respond(
      {"result":[{"type":"/people/person","name":"William Shakespeare","id":"/en/william_shakespeare","gender":{"type":"/people/gender","name":"Male","id":"/en/male"},"/people/person/quotations":[{"type":"/media_common/quotation","name":"First thing we do, let's kill all the lawyers.","id":"/en/first_thing_we_do_lets_kill_all_the_lawyers","subjects":["Lawyer","Law and Lawyers"]}]}]}
    );
    quote.get(per_page, page).success(function(data) {
      expect(data.result[0]['/people/person/quotations'][0].name).toEqual('First thing we do, let\'s kill all the lawyers.');
    });
  });

});
