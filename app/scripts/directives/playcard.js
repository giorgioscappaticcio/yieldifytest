'use strict';

/**
 * @ngdoc directive
 * @name yieldifyApp.directive:playcard
 * @description
 * # playcard
 */
angular.module('yieldifyApp')
  .directive('playcard', function () {
    return {
      template: '<div id="carddeckCont">'+
  				'<div class="carddeck">'+
    			'<h2>Deck:</h2><br>'+
    			'<ul></ul>'+
  				'</div>'+
			  	'<div class="carddeck">'+
			    '<h2>Hand:</h2><br>'+
			    '<ul style="text-align:center"></ul>'+
			  	'</div>'+
				'</div>',
      restrict: 'AE',
      link: function postLink(scope, element, attrs) {
        
        

        var formi = angular.element(element);
        
      	var deck, hand, discards;

      	

      	scope.init = function() {

      	  scope.deck     = new Stack();
      	  scope.hand     = new Stack();
      	  scope.discards = new Stack();

      	  scope.deck.makeDeck(1);
      	  scope.display();
      	}

      	scope.shuffle = function() {

      	  if (scope.deck == null) return;

      	  scope.deck.shuffle(1);
      	  scope.display();
      	}

      	scope.deal = function(noOfCards) {

      	  var i;

      	  if (scope.deck == null) return;

      	  if (scope.deck.cardCount() < 7)
      	    alert("Not enough cards.");
      	  else {
      	    scope.discard();
      	    for (i = 0; i < noOfCards; i++)
      	      scope.hand.addCard(scope.deck.deal());
      	  }

      	  scope.display();
      	}

      	scope.discard = function() {

      	  if (scope.deck == null) return;

      	  scope.discards.combine(scope.hand);
      	  scope.display();
      	}

      	scope.reset = function() {

      	  if (scope.deck == null) return;

      	  scope.discards.combine(scope.hand);
      	  scope.deck.combine(scope.discards);
      	  scope.display();
      	}

      	scope.display = function() {

      	  var s;

      	  s = ""
      	  for (var i = 0; i < scope.deck.cardCount(); i++)
      	    s += '<li>'+scope.deck.cards[i] + '</li>';
      	  var area = formi.find('ul')[0];
      	  angular.element(area).empty().append(s);

      	  s = "";
      	  for (var i = 0; i < scope.hand.cardCount(); i++)
      	    s += '<li>'+scope.deck.cards[i] + '</li>';
      	  var area = formi.find('ul')[1];
      	  angular.element(area).empty().append(s);

      	  // s = "";
      	  // for (var i = 0; i < scope.discards.cardCount(); i++)
      	  //   s += '<li>'+scope.deck.cards[i] + '</li>';
      	  // var area = formi.find('ul')[2];
      	  // angular.element(area).empty().append(s);
      	}


      	scope.initial = scope.init();

      }
    };
  });
