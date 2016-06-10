(function() {
  angular.module('poker.constants', [])
  .constant('PokerConstants', {
    RANKS: {
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      10: 10,
      'J': 10,
      'Q': 10,
      'K': 10,
      'A': 11
    },
    SUITS: ['&#9824;', '&#9829;', '&#9827;', '&#9830;'],
    NUM_CARDS_IN_HAND: 5,
    NUM_HANDS: 3
  });
})();
