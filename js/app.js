// Select cards
let card = document.getElementsByClassName("card");
let cards = [...card]
console.log(cards);

// Select deck
let deck = document.querySelector(".deck");



// Shuffle cards
cards.sort(function() { return 0.5 - Math.random() });

// Flipping cards
function flippingCards() {
	for (let i = 0; i < cards.length; i++) {
		cards[i].addEvenListener("click", showCards(e));
		e.preventDefault();
	}
}

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