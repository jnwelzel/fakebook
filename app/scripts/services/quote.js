'use strict';

/**
 * @ngdoc service
 * @name fakebookApp.quote
 * @description This factory service is responsible for fetching quotes by famous people from Google's Freebase
 * # quote
 * Factory in the fakebookApp.
 */
angular.module('fakebookApp')
  .factory('quote', ['$http', function ($http) {

    var famousPeople = ['Albert Einstein', 'Mark Twain', 'William Shakespeare', 'Barack Obama',
    'Dwight D. Eisenhower', 'Steve Jobs', 'John Lennon', 'Gautama Buddha', 'Woody Allen', 'Charles Dickens',
    'Mahatma Gandhi', 'Nelson Mandela', 'Martin Luther King, Jr.', 'Mother Teresa', 'John F. Kennedy'];

    var query = '[{"type":"/people/person","id":null,"name":"%name%","gender":{"type":"/people/gender","id":null,"name":null},"/people/person/quotations":[{"type":"/media_common/quotation","id":null,"name":null,"subjects":[],"limit":%per_page%}]}]';
    var service_url = 'https://www.googleapis.com/freebase/v1/mqlread';

    /**
     * Returns a random integer between min (inclusive) and max (inclusive)
     * Using Math.round() will give you a non-uniform distribution!
     */
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Public API here
    return {
      get: function (per_page, page) {
        var interpolatedQuery = service_url + '?query=' + query.replace('%name%', page > 15 ?
            famousPeople[getRandomInt(0, 14)] : famousPeople[page - 1]).replace('%per_page%', per_page);
        return $http.get(interpolatedQuery);
      }
    };

  }]);
