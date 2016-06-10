(function() {
  angular.module('poker.controller', ['poker.service'])
  .controller('PokerController', function($scope, PokerService) {

    $scope.startGame = function() {
      $scope.hands = PokerService.drawHands();
    };

    $scope.showWinner = function() {
      $scope.winner = PokerService.calculateWinningHand($scope.hands);
    };
  });
})();
