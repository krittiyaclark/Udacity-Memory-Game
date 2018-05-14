// Select cards
let card = document.getElementsByClassName("card");
console.log(card);
// Select deck
const deck = document.getElementsByClassName("deck");
console.log(deck);
// Select timer
let timer = document.getElementsByClassName("timer");
console.log(timer);
// Select move
let move = document.getElementsByClassName('moves');
console.log(move);
// Select stars
let star = document.querySelectorAll('.stars li i');
//console.log(stars li i);
// Open cards array
let openCards = [];
// Set match
let match = 0;
// User stars
let threeStars = 3;
// User click
let clicks = 0;
// User move
let moves = 0; 
// Icon array
let cardFaces = ["fa-diamond", "fa-paper-plane-o", "fa-anchor", "fa-bolt", "fa-cube", "fa-leaf", "fa-bicycle", "fa-bomb", "fa-diamond",
		         "fa-paper-plane-o", "fa-anchor", "fa-bolt", "fa-cube", "fa-leaf", "fa-bicycle", "fa-bomb"];



window.onload = function () {
	playGame();
		/*
		 * Display the cards on the page
		 *   - shuffle the list of cards using the provided "shuffle" method below
		 *   - loop through each card and create its HTML
		 *   - add each card's HTML to the page
		 */

	// Loop through each card and create its HTML
	function cardIcons() {
		// Clear deck
		deck.innerHTML = "";
	    // Add each card's HTML to the page
	    cardUi = "";
	    for (let cardFace of cardFaces) {
	        cardUi += `<li class="card"><i class="fa ${cardFace}"></i></li>`;
	    }
	    deck.innerHTML = cardUi;
	}
		
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
			
	// Event lister to deck
	document.addEventListener("click", function(e) {
		startTimer();
		if(e.target.classList.contains("open")) {
			return;
		}		
		if(e.target.classList.contains('card') && e.target.nodeName === "LI") {
	        console.log('Work!');
	        clicks += 1;
	        e.target.classList.add("show");
			e.target.classList.add("open");	
		    // Push open cards to array
		    openCards.push(e.target);
		    console.log(openCards);
		    if(clicks === 2) {
		    	moveCount();
		    }
	    }


	    if(openCards.length === 2) {
		    if(openCards[0] === openCards[1]) {
		    	e.target.classList.add("show");
				e.target.classList.add("open");
		    	showCards[0].classList.add("match");
				showCards[1].classList.add("match");
				matchCount();
				openCards = [];
		    } else if(openCards[0] != openCards[1]) {
		    	e.target.classList.add("show");
				e.target.classList.add("open");
		    	showCards[0].classList.add("unmatched");
		    	showCards[1].classList.add("unmatched");
				openCards = [];
		    }
		}

		

		
	});

	function matchCount() {
		match += 1;
	}

	function moveCount() {
	    moves += 1;
	    move.innerHTML = moves;

	    for (let i = 0; i < star.length; i++) {
	    	if(moves === 15) {
	    		let threeStars = star -= 1;
	        }
	        else if(moves === 30) {
	    		let threeStars = star -= 1;
	        }
	    }
	}

	// PlayGame: Call most functions here
	function playGame() {
		//startTimer();
		shuffle(cardFaces); 
		//console.log(shuffle(cardList));
		//addIcon();
		matchCount();
		moveCount();
		move.innerHTML = moves;
		
	}

	function reset() {
		playGame();
		timer.innerHTML = 0;
		moves = 0;
		move.innerHTML = 0;
		openCards = [];
		match = 0;
		threeStars = 3;
		click = 0;
		openCards = [];
	}
	// Start timer function
	function startTimer() {
		let date = new Date();
		let sec = date.getSeconds();
		let min = date.getMinutes();

		if (sec++ === 60) {
			sec = 0;
			if (min++ === 60) {
				min = 0;
			}
		}
		timer.innerHTML = min + " : " + sec;
		setInterval(startTimer, 1000);
	}

	// Stop timer function 
	function stopTimer() {
		clearInterval(startTimer);
		target.innerHTML = `${"0 : 0"}`;
	}
};
// Show/Hide overlay
// function won() {
// 	let ele =  document.querySelector(".overlay");

// 	if (matched == false) {
// 		ele.style.display = "block";
//     	ele.style.display = "none";
// 	}
// 	else {
// 		ele.style.display = "block";
// 	}
// }

// won();




// What happens when cards match
// What happens when cards do not match
// When the game finishes


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