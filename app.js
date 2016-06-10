(function() {
  angular.module('poker', [
    'ui.router',
    'poker.controller',
    'poker.service',
    'poker.helpers',
    'poker.constants'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        controller: 'PokerController',
        templateUrl: 'poker.html'
      }
    );
    $urlRouterProvider.otherwise('/');
  });
})();
