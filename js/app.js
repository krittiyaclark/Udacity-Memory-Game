// Select cards
//let card = document.querySelectorAll(".card");
// Select deck
let deck = document.querySelector(".deck");
// Select timer
let timer = document.querySelector(".timer");
// Select move
const move = document.querySelector('.moves');
// Select stars
let star = document.querySelectorAll('.stars li i');
// Open cards array
let openCards = [];
// Set match
let match = 0;
// User stars
let threeStars = 3;
// User click
let click = 0;
// User move
let moves = 0;
// Icon array
let cardFaces = ["fa-diamond", "fa-paper-plane-o", "fa-anchor", "fa-bolt", "fa-cube", "fa-leaf", "fa-bicycle", "fa-bomb", "fa-diamond",
		         "fa-paper-plane-o", "fa-anchor", "fa-bolt", "fa-cube", "fa-leaf", "fa-bicycle", "fa-bomb"];




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
		//deck.innerHTML = "";
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

function toggleCard(card) {
    card.classList.toggle("open");
    card.classList.toggle("show");
}

function openCard(card) {
    openCards.push(card);
}

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
	console.log(shuffle(cardFaces));
	cardIcons();
	matchCount();
	moveCount();
	move.innerHTML = moves;
    clearInterval(startTimer);

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

// Handle Game Logic
function handleGame(e) {
	startTimer();
    toggleCard(e.target);
	if(openCards >= 2 || e.target.classList.contains("open")) {
		return;
	}
		if(e.target && e.target.className === "card") {
	        console.log('Work!');
	        click += 1;
	        toggleCard();
            openCards.push(e.target);
            console.log(openCards);
		    if(click === 2) {
		    	moveCount();
		    }
	    }
        if(openCards.length !== 2 && e.target.contains("card open show")) {
            // Push open cards to array
            openCards.push(e.target);
            console.log(openCards);
        }
	    if(openCards[0] === openCards[1]) {
	    	showCards[0].classList.add("match");
			showCards[1].classList.add("match");
			matchCount();
	    }

}

// Deck on click
deck.addEventListener("click", handleGame);
deck.addEventListener("click", openCard);

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
