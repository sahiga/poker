(function() {
  angular.module('poker.service', ['poker.constants'])
  .service('PokerService', function(PokerConstants) {
    this.createDeck = function() {
      var deck = [];

      for (var i in PokerConstants.RANKS) {
        for (var j = 0; j < PokerConstants.SUITS.length; j++) {
          var cardName = i + PokerConstants.SUITS[j];
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
      var hands = [];
      var ordered = this.createDeck();
      var shuffled = this.shuffleDeck(ordered);
      var startIdx = 0;
      var endIdx = PokerConstants.NUM_CARDS_IN_HAND;

      for (var i = 0; i < PokerConstants.NUM_HANDS; i++) {
        var currentHand = {};
        currentHand.playerNumber = i + 1;
        currentHand.cards = shuffled.slice(startIdx, endIdx);
        hands.push(currentHand);
        startIdx = endIdx;
        endIdx += PokerConstants.NUM_CARDS_IN_HAND;
      }

      return hands;
    };

    this.getHands = function() {
      return drawnCards;
    };

    this.calculateWinningHand = function(hands) {
      var maxScore = 0;
      var winningHand;

      for (var i = 0; i < hands.length; i++) {
        var currentScore = 0;
        for (var j in hands[i].cards) {
          var cardRank = hands[i].cards[j].charAt(0);
          currentScore += PokerConstants.RANKS[cardRank];
        }
        if (currentScore > maxScore) {
          maxScore = currentScore;
          winningHand = hands[i].playerNumber;
        }
      }

      return {
        maxScore: maxScore,
        winningHand: winningHand
      }
    };
  });
})();
