(function() {
  angular.module('poker.helpers', [])
  .directive('hand', function() {
    return {
      restrict: 'A',
      scope: '=',
      link: function(scope, elem, attrs) {
        var playerNumber = attrs.hand.playerNumber;
        var cards = attrs.hand.cards;
      }
    };
  })
  // filter for escaping html input
  // from stackoverflow.com/a/21098541
  .filter('escapeHtml', function($sce) {
    return function(input) {
      return $sce.trustAsHtml(input);
    };
  });
})();
