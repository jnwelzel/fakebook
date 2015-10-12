'use strict';

describe('Service: githubber', function () {

  // load the service's module
  beforeEach(module('fakebookApp'));

  // instantiate service
  var githubber, httpBackend;
  var per_page = 10;
  var page = 1;

  beforeEach(inject(function (_githubber_, $httpBackend) {
    githubber = _githubber_;
    httpBackend = $httpBackend;
  }));

  it('should fetch json containing a facebook react github repo follower\'s data', function () {
    httpBackend.whenGET('https://api.github.com/repos/facebook/react/stargazers?per_page=' + per_page + '&page=' + page).respond([
      {
        "login": "goatslacker",
        "id": 10632,
        "avatar_url": "https://avatars.githubusercontent.com/u/10632?v=3",
        "gravatar_id": "",
        "url": "https://api.github.com/users/goatslacker",
        "html_url": "https://github.com/goatslacker",
        "followers_url": "https://api.github.com/users/goatslacker/followers",
        "following_url": "https://api.github.com/users/goatslacker/following{/other_user}",
        "gists_url": "https://api.github.com/users/goatslacker/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/goatslacker/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/goatslacker/subscriptions",
        "organizations_url": "https://api.github.com/users/goatslacker/orgs",
        "repos_url": "https://api.github.com/users/goatslacker/repos",
        "events_url": "https://api.github.com/users/goatslacker/events{/privacy}",
        "received_events_url": "https://api.github.com/users/goatslacker/received_events",
        "type": "User",
        "site_admin": false
      }
    ]);
    githubber.all(per_page, page).success(function(result) {
      expect(result[0].login).toEqual('goatslacker');
    });
  });

});
