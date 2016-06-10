(function() {
  angular.module('poker.service', [])
  .service('PokerService', function() {
    var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    var suits = ['clubs', 'spades', 'diamonds', 'hearts'];
    var NUM_CARDS_IN_HAND = 5;
    var NUM_HANDS = 3;
    var hands = [];

    this.createDeck = function() {
      var deck = [];

      for (var i = 0; i < ranks.length; i++) {
        for (var j = 0; j < suits.length; j++) {
          var cardName = ranks[i] + ' of ' + suits[j];
          deck.push(cardName);
        }
      }

      return deck;
    };

    this.shuffleDeck = function(deck) {
      var copy = deck.slice();

      copy.reduce(function(rangeSize) {
        if (rangeSize === 1) {
          return true;
        }

        var random = Math.floor(Math.random() * rangeSize);
        var shuffleOne = copy[random];
        var shuffleTwo = copy[rangeSize];
        copy[rangeSize] = shuffleOne;
        copy[random] = shuffleTwo;

        return rangeSize--;
      }, copy.length - 1);

      return copy;
    };

    this.drawHands = function() {
      var ordered = this.createDeck();
      var shuffled = this.shuffleDeck(ordered);
      var startIdx = 0;
      var endIdx = NUM_CARDS_IN_HAND;

      for (var i = 0; i < NUM_HANDS; i++) {
        hands.push(shuffled.slice(startIdx, endIdx));
        startIdx = endIdx;
        endIdx += NUM_CARDS_IN_HAND;
      }

      return hands;
    };

    this.getHands = function() {
      return drawnCards;
    };
  });
})();
