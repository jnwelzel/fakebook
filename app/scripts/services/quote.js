'use strict';

/**
 * @ngdoc service
 * @name fakebookApp.quote
 * @description
 * # quote
 * Factory in the fakebookApp.
 */
angular.module('fakebookApp')
  .factory('Quote', ['$http', function ($http) {
    // Service logic
    // ...

    var famousPeople = ['Albert Einsten', 'Mark Twain', 'William Shakespeare', 'Barack Obama',
    'Dwight D. Eisenhower', 'Steve Jobs', 'John Lennon', 'Gautama Buddha', 'Woody Allen', 'Charles Dickens',
    'Mahatma Gandhi', 'Nelson Mandela', 'Martin Luther King, Jr.', 'Mother Teresa', 'John F. Kennedy'];

    var query = '[{"type":"/people/person","id":null,"name":"%name%","gender":{"type":"/people/gender","id":null,"name":null},"/people/person/quotations":[{"type":"/media_common/quotation","id":null,"name":null,"subjects":[],"limit":10}]}]';
    var service_url = 'https://www.googleapis.com/freebase/v1/mqlread';

    // Public API here
    return {
      get: function (index) {
        return $http.get(service_url + '?query=' + query.replace('%name%', famousPeople[index]));
      }
    };
  }]);
