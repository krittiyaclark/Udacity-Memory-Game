// Select cards
//let card = document.querySelectorAll(".card");
// Select deck
let deck = document.querySelector(".deck");
// Select timer
let timer = document.querySelector(".timer");
// Select move
let move = document.querySelector('.moves');
// User move
let moveCounter = 0;
// Select stars
let star = [].slice.call(document.querySelectorAll(".fa-star"));
console.log(star);
// User stars
//star = 3;
// Open cards array
let openCards = [];
// Set match
let matchCounter = 0;
// Icon array
let hour = 0;
let min = 0;
let sec = 0;
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
  timer.innerHTML = `${"0 : 0"}`;

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
  // If it is not a card/open/match get out from a function
  if(!e.target.classList.contains("card") | e.target.classList.contains("open")| e.target.classList.contains("match")) {
    return;
  }

  openCards.push(e.target);
  e.target.classList.add("open", "show");
  moveCounter++;
  move.innerHTML = moveCounter;
  starGame();
  startTimer();

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
          }, 500);
        }
        closeCards();
      }
    }
    if(matchCount >= 8) {
      setTimeout(function () {
        stopTimer();
      }, 1000);
    }
});

// Match count
function matchCount() {
  let ele =  document.querySelector(".overlay");
  //matchCounter++;
  // Count match cards
  if(moveCounter === 0) {
    matchCounter = 0;
  }
  else  {
    matchCounter++;
  }
  console.log(matchCounter);

  if(matchCounter === 8) {
    ele.style.display = "none";
  }
  	else {
  		ele.style.display = "block";
  	}
}


function starGame() {
  if (moveCounter === 15 && star[2].classList.contains("fa-star")){
    star[2].classList.remove('fa-star');
    star[2].classList.add('fa-star-o');
  }
  if (moveCounter === 30 && star[1].classList.contains("fa-star")){
    star[1].classList.remove('fa-star');
    star[1].classList.add('fa-star-o');
  }
}



// Move count
// function moveCount() {
//     moveCounter++;
//     move.innerHTML = moveCounter;
//     console.log(move);
//
//     startTimer();
//     // if(moveCounter === 1) {
//     //   moveCounter = 0;
//     //   move.innerHTML = moveCounter;
//     //   matchCounter = 0;
//     // }
//
//     // for (let i = 0; i < star.length; i--) {
//     // 	if(moves === 15) {
//     // 		//let threeStars = star[i].splice(i, 1)
//     //     //threeStars = star[i].innerHTML
//     //   }
//     //     else if(moves === 30) {
//     // 		    //let threeStars = star[i] -= 1;
//     //         //star.innerHTML = threeStars;
//     //     }
//     //   //console.log(star[i]);
//     // }
// }
// moveCount();

// Start timer function
function startTimer() {
  interval = setInterval(function() {
  	if (sec === 60) {
      min++;
  		sec = 0;
  		if (min === 60) {
        hour++;
  			min = 0;
  		}
  	}
  	timer.innerHTML = min + " : " + sec;
    sec++;
  }, 1000);
}

// Stop timer function
function stopTimer() {
	clearInterval(interval);
	timer.innerHTML = `${"0 : 0"}`;
}

// // Show/Hide overlay
// function won() {
// 	let ele =  document.querySelector(".overlay");
//
// 	if (matched == false) {
// 		ele.style.display = "block";
//     	ele.style.display = "none";
// 	}
// 	else {
// 		ele.style.display = "block";
// 	}
// }
//
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
