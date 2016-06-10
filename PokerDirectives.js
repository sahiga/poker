(function() {
  angular.module('poker.helpers', [])
  // filter for evaluating html input
  // from stackoverflow.com/a/21098541
  .filter('evaluateHtml', function($sce) {
    return function(input) {
      return $sce.trustAsHtml(input);
    };
  });
})();
