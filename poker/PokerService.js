(function() {
  angular.module('poker.service', ['poker.constants'])
  .service('PokerService', function(PokerConstants) {

    /**
      Creates an ordered array of cards
    */
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

    /**
      Creates a shuffled deck
    */
    this.shuffleDeck = function(deck) {
      // copy the provided deck
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

    /**
      Deals new cards to each player in the game
    */
    this.dealCards = function() {
      var hands = [];

      if (!this.orderedDeck) {
        this.orderedDeck = this.createDeck();
      }

      var shuffled = this.shuffleDeck(this.orderedDeck);
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

    /**
      Determines the winner of the game
    */
    this.calculateWinningHand = function(hands) {
      var winningScore = 0;
      var winningHand;

      for (var i = 0; i < hands.length; i++) {
        var currentScore = 0;
        for (var j in hands[i].cards) {
          var cardRank = hands[i].cards[j].replace(/&#[0-9]+;/, '');
          currentScore += PokerConstants.RANKS[cardRank];
        }
        if (currentScore > winningScore) {
          winningScore = currentScore;
          winningHand = hands[i].playerNumber;
        }
      }

      return {
        winningScore: winningScore,
        winningHand: winningHand
      }
    };

    // Initializes an ordered deck of cards
    this.orderedDeck = this.createDeck();
  });
})();
