(function() {
  angular.module('poker.directives', [])
  .directive('hand', function() {
    return {
      restrict: 'A',
      scope: '=',
      link: function(scope, elem, attrs) {
        var playerNumber = attrs.hand.playerNumber;
        var cards = attrs.hand.cards;
      }
    };
  });
})();
