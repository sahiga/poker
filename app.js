(function() {
  angular.module('poker', [
    'ui.router',
    'poker.controller',
    'poker.service',
    'poker.directives'
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
  })
  .run(function($rootScope) {
    $rootScope.$on('$viewContentLoaded', function($state) {
      console.log('$state is', $state);
    });
  });
})();
