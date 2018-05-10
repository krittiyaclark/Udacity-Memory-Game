// Select cards
let card = document.getElementsByClassName("card");
// Select deck
let deck = document.querySelector(".deck");

let cards = [...card]
console.log(cards);

// Flipping cards
function flippingCards() {
	for (let i = 0; i < cards.length; i++) {
		cards = cards[i];
		cards.sort(function() { return 0.5 - Math.random() });
	}
}

// Showing cards
card.addEvenListener("click", function(e) {
	e.preventDefault();

	card.classList.add("open");
	card.classList.add("show");
	card.classList.add("disable");
});



// Shuffle cards
// cards.sort(function() { return 0.5 - Math.random() });

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