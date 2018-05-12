// Select cards
let card = document.querySelectorAll(".card");
// Select deck
let deck = document.querySelector(".deck");
// Select timer
let timer = document.querySelector(".timer");
// Open cards array
let openCards = [];
let showCards = [];
// Set match
let match = 0;
// User stars
let stars = 3;
// User move
let move = 0;
// Count click
let click = 0;
// Icon array
let cardFaces = ["fa-diamond", "fa-paper-plane-o", "fa-anchor", "fa-bolt", "fa-cube", "fa-leaf", "fa-bicycle", "fa-bomb", "fa-diamond",
		         "fa-paper-plane-o", "fa-anchor", "fa-bolt", "fa-cube", "fa-leaf", "fa-bicycle", "fa-bomb"];



function load () {
	playGame();
	/*
	 * Display the cards on the page
	 *   - shuffle the list of cards using the provided "shuffle" method below
	 *   - loop through each card and create its HTML
	 *   - add each card's HTML to the page
	 */

// Loop through each card and create its HTML
function cardIcons() {
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

// Open cards
function open(c) {
	openCards.push(this);
	let cardLen = openCards.length;
	if(openCards[0] === openCards[1]) {
    	showCards[0].classList.add("match");
    	showCards[1].classList.add("match");

    }
}
		
// Event lister to deck
deck.addEventListener("click", function(e) {
	if(e.target.classList.contains("open")) {
		return;
	}
	// Check if click = 2 
	if(click < 2) {
		if(e.target && e.target.nodeName == "LI") {
	      console.log('Work!');
	      click += 1;
	      e.target.classList.add("show");
		  e.target.classList.add("open");
	     
	    }
    }

    // if(openCards.length != 2 && e.target.className === "card open show" && showCards.length != 2) {
    //     openCards.push(e.target.childNodes[0].className);
    //     showCards.push(e.target);
    //     console.log(openCards);
    // }

    // if(showCards[0] === showCards[1]) {
    // 	showCards[0].classList.add("match");
    // 	showCards[1].classList.add("match");

    // }
	
});

			    
// PlayGame: Call most functions here
function playGame() {
	startTimer();
	shuffle(cardFaces); 
	console.log(shuffle(cardFaces));
	cardIcons();
	open();
	
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

// Check matched cards
function matched(){
	if(choice[0].dataset.value !== choice[1].dataset.value) {
		unmatched();
	} else {
		won();
	}
}

// Show/Hide overlay
function won() {
	let ele =  document.querySelector(".overlay");

	if (matched == false) {
		ele.style.display = "block";
    	ele.style.display = "none";
	}
	else {
		ele.style.display = "block";
	}
}

won();
}
document.addEventListener('DOMContentLoaded', load);



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