// Select cards
//let card = document.querySelectorAll(".card");
// Select deck
let deck = document.querySelector(".deck");
// Select timer
let timer = document.querySelector(".timer");
let finalTimer = document.getElementById("final-timer");
let totalTimer;
let finalScore = document.getElementById("score");
let finalStar = document.getElementById("star");
const reset = document.getElementById("reset");
const restart = document.getElementById("restart");
const close = document.getElementById("close");
// Select move
let move = document.querySelector(".moves");
let modal =  document.querySelector(".overlay");
const popUp =  document.querySelector(".pop-up");
// User move
let moveCounter = 0;
// Select stars
let star = [].slice.call(document.querySelectorAll(".fa-star"));
let starRatingResult;
console.log(star);
 // Hold stars
const holdstar_2 = 15;
const holdstar_1 = 30;
// Open cards array
let openCards = [];
// Set match
let matchCounter = 0;
let isFirstClick = true;
// Icon array
let hour;
let min;
let sec;
let interval;
let cardFaces = ["fa-diamond", "fa-paper-plane-o", "fa-anchor", "fa-bolt", "fa-cube", "fa-leaf", "fa-bicycle", "fa-bomb", "fa-diamond",
		         "fa-paper-plane-o", "fa-anchor", "fa-bolt", "fa-cube", "fa-leaf", "fa-bicycle", "fa-bomb"];




document.body.onload = playGame();
	/*
	 * Display the cards on the page
	 *   - shuffle the list of cards using the provided "shuffle" method below
	 *   - loop through each card and create its HTML
	 *   - add each card's HTML to the page
	 */

// PlayGame: Call most functions here
function playGame() {
	//stopTimer();
	shuffle(cardFaces);
	console.log(shuffle(cardFaces));
	cardIcons();
  //Reset all
  moveCounter = 0;
  move.innerHTML = moveCounter;
  matchCounter = 0;
  hour = 0;
  min = 0;
  sec = 0;
  timer.innerHTML = `${min} min : sec ${sec}`;

  // // reset rating
  // for (var i= 0; i < star.length; i++){
  //     star[i].style.color = "#FFD700";
  //     star[i].style.visibility = "visible";
  // }

  clearInterval(interval);
}

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


function toggleCard(card) {
  card.classList.toggle("open");
  card.classList.toggle("show");
}

function openCard(card) {
  openCards.push(card);
}

function checkIfMatched(card) {
   let ifMatched = false;
    if(openCards[0] === openCards[1]) {
      ifMatched = true;
      card.classList.toggle("match");
      card.classList.toggle("disabled");
    }
}

function checkIfNotMatched(card) {
  if(openCards[0] !== openCards[1]) {
    card.classList.toggle("unmatch");
    card.classList.toggle("unmatch");
  }
}

// Handle Game Logic
// Deck on click
deck.addEventListener("click", function (e) {
	//startTimer();
  // If it is not a card/open/match get out from the function
  if(openCards.length === 2 | !e.target.classList.contains("card") | e.target.classList.contains("open")| e.target.classList.contains("match")) {
    return;
  }

  openCards.push(e.target);
  e.target.classList.add("open", "show");
  moveCount();
  move.innerHTML = moveCounter;
  starGame();
  // Start Timer only when moveCounter === 1
  if(moveCounter === 1) {
    if(isFirstClick) {
      startTimer();
    } else if(isFirstClick = false) {
      startTimer() = null;
    }
  }

    // Check cards is === 2
    if(openCards.length === 2) {
      // Check cards if matched
      if(openCards[0].firstElementChild.classList[1] === openCards[1].firstElementChild.classList[1]) {
        // Add/remove class to a card
        openCards[0].classList.remove("open", "show");
        openCards[1].classList.remove("open", "show");
        openCards[0].classList.add("match", "disabled");
        openCards[1].classList.add("match", "disabled");
        openCards = [];
        matchCount();

        // Check cards if not matched
      } else {
        function closeCards() {
          // Set Timeout for slow a card from turning too fast
          setTimeout(function(){
            // Remove class to a card
            openCards[0].classList.remove("open", "show");
            openCards[1].classList.remove("open", "show");
            openCards = [];
          }, 1000);
        }
        closeCards();
      }
    }
    // if(matchCount >= 8) {
    //   setTimeout(function () {
    //     stopTimer();
    //   }, 1000);
    // }
});

function moveCount() {
  moveCounter++;
  // startTimer();
}

// Match count
function matchCount() {
  // let ele =  document.querySelector(".overlay");
  // Count match cards
  if(moveCounter === 0) {
    matchCounter = 0;
  }
  else  {
    matchCounter++;
  }
  console.log(matchCounter);

  if(matchCounter >= 8) {
    setTimeout(function () {
            stopTimer();
        }, 500);
  }
}

// Star Game
function starGame() {
  // If moveCounter = 15 remove 1 star
  if (moveCounter === holdstar_2 && star[2].classList.contains("fa-star")){
    star[2].classList.remove('fa-star');
    //console.log(starCount);
    //star[2].classList.add('fa-star-o');
  }
  // If moveCounter = 30 remove 2 stars
  if (moveCounter === holdstar_1 &&       star[1].classList.contains("fa-star")){
    star[1].classList.remove('fa-star');
    //star[1].classList.add('fa-star-o');
  }
}

// Start timer function
hour = 0;
min = 0;
sec = 0;
function startTimer() {
  interval = setInterval(function() {
    timer.innerHTML = `${min} min : sec ${sec}`;
    sec++;
  	if (sec === 60) {
  		sec = 0;
      min++;
  		if (min === 60) {
  			min = 0;
        hour++;
  		}
  	}
  }, 500);
}

// Stop timer function
function stopTimer() {
	clearInterval(interval);
	totalTimer = timer.innerHTML;
  win();
}

function resetGame() {
  reset.addEventListener("click", function () {
  modal.style.display = "none";
  playGame();
  });
}

function closeModal() {
  close.addEventListener("click", function() {
  modal.style.display = "none";
  playGame();
  });
}


// Show/Hide Model
function win() {
  // If matchCounter >= 8 Stop Timer
  if(matchCounter >= 8) {
    //modal.classList.remove("overlay");
    modal.classList.remove("overlay");
    modal.classList.toggle("win");

    finalScore.textContent = `With: ${moveCounter} moves`;
    //starRating();
    finalTimer.textContent = `Total Timer: ${totalTimer}`;
    resetGame();
    closeModal();
  }
}







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
