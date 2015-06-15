var nameHolder = [];
var loggedInUser = [];
var tincanrvApp = angular.module("tincanrvApp", ['ngRoute', 'ngResource']).filter("reverse", function() {
  return function(items) {
    return items.slice().reverse(); // Create a copy of the array and reverse the order of the items
  };

});


tincanrvApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: 'views/home.html',
      controller: 'homeCtrl'
    }).    
    when('/signup', {
      templateUrl: 'views/signup.html',
      controller: 'signupCtrl'
    }).
    when('/howitworks', {
      templateUrl: 'views/howdoes.html',
      controller: 'howItWorksCtrl'
    }).    
    when('/:nameHolder', {
      templateUrl: 'views/userview.html',
      controller: 'userCtrl'
    }).
    when('/:nameHolder/edit', {
      templateUrl: 'views/edit.html',
      controller: 'editCtrl'
    }).
    when('/:nameHolder/listrv', {
      templateUrl: 'views/listrv.html',
      controller: 'listRvCtrl'
    });   
  }
]).config(['$httpProvider', function ($httpProvider) {
  //Reset headers to avoid OPTIONS request (aka preflight)
  $httpProvider.defaults.headers.common = {};
  $httpProvider.defaults.headers.post = {'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json'};
  $httpProvider.defaults.headers.put = {};
  $httpProvider.defaults.headers.patch = {};
}]);

