(function() {
  angular.module('poker.directives', [])
  .directive('hand', function() {
    return {
      restrict: 'A',
      scope: '=',
      link: function(scope, elem, attrs) {
        
      }
    };
  });
})();
