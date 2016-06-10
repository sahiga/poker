(function() {
  angular.module('poker.controller', ['poker.service'])
  .controller('PokerController', function($scope, PokerService) {
    $scope.startGame = function() {
      $scope.winner = null;
      $scope.gameStarted = true;
      $scope.hands = PokerService.dealCards();
    };

    $scope.showWinner = function() {
      $scope.gameStarted = false;
      $scope.winner = PokerService.calculateWinningHand($scope.hands);
    };
  });
})();
