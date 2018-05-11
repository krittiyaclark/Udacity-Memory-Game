// Select cards
let card = document.querySelectorAll(".card");
// Select deck
let deck = document.querySelector(".deck");

/*
 * Loop all cards
 * A click card function
 *  Add class to the cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

function displayCards() {
	// Shuffle function from http://stackoverflow.com/a/2450976
	function shuffle(array) {
	    var currentIndex = array.length, temporaryValue, randomIndex;

	    while (currentIndex !== 0) {
	        randomIndex = Math.floor(Math.random() * currentIndex);
	        currentIndex -= 1;
	        temporaryValue = array[currentIndex];
	        array[currentIndex] = array[randomIndex];
	        array[randomIndex] = temporaryValue;
	    }

	    return array;
	}
	
	// Loop through each card and create its HTML
	function cardIcons() {
	        let cardFaces = [
	            "fa-diamond",
	            "fa-paper-plane-o",
	            "fa-anchor",
	            "fa-bolt",
	            "fa-cube",
	            "fa-leaf",
	            "fa-bicycle",
	            "fa-bomb",
	            "fa-diamond",
	            "fa-paper-plane-o",
	            "fa-anchor",
	            "fa-bolt",
	            "fa-cube",
	            "fa-leaf",
	            "fa-bicycle",
	            "fa-bomb"
	        ];

	        card = "";
	        for (let cardFace of cardFaces) {
		      	card += (`<li class="card"><i class="fa ${cardFace}"></i></li>`);
		    
		    }

		    deck.innerHTML = card;	
		    deck.addEventListener("click", function(e) {
		    	if(e.target && e.target.nodeName == "LI") {
			      console.log('Color Work!');
			      
			      e.target.classList.add("show", "open");
			      // e.target.appendChild(cardFace);
			    }
				// Showing cards
				// this.classList.add("open");
				// this.classList.add("show");
				// this.classList.add("disable");

			});
		    shuffle(cardFaces);
		    console.log(shuffle(cardFaces));    
	}

	cardIcons();
}
	// Add each card's HTML to the page
	// function addClass() {
	// 	for (let i = 0; i < card.length; i++) {
	// 		cardIndex = card[i];

	// 		cardIndex.addEventListener("click", function() {
	// 			// Showing cards
	// 			this.classList.toggle("open");
	// 			this.classList.toggle("show");
	// 			this.classList.toggle("disable");

	// 		});
	// 	}
	// 	addClass();
	// }



displayCards();
// What happens when cards match
// What happens when cards do not match
// When the game finishes


// Hide overlay
function overlay() {
	let ele =  document.querySelector(".overlay");

	// if (win == false) {
		ele.style.display = "block";
    	ele.style.display = "none";
	// }
	// else {
	// 	ele.style.display = "block";
	// }
}

overlay();

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */