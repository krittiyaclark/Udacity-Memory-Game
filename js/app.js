// Select cards
let card = document.querySelectorAll(".card");
// Select deck
let deck = document.querySelector(".deck");

let cards = [...card]
console.log(cards);

/*
 * Loop all cards
 * A click card function
 *  Add class to the cards
 */

function flippingCards() {
	for (let i = 0; i < cards.length; i++) {
		cards = cards[i];

		cards.addEventListener("click", function(e) {
			e.preventDefault();
			console.log("Work!");

			this.classList.add("open");
			this.classList.add("show");
			this.classList.add("disable");
		});
	}
}

// Showing cards
// Flipping cards



// Shuffle cards
cards.sort(function() { return 0.5 - Math.random() });

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

flippingCards();
overlay();