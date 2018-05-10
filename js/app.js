// Select cards
let card = document.getElementsByClassName("card");
let cards = [...card]
console.log(cards);

// Flipping cards
function flippingCards() {
	for (let i = 0; i < cards.length; i++) {
		cards = cards[i];
		cards.addEvenListener("click", showCards);
	}
}

// Show Cards
let showCards = function() {
	let element = document.getElementsByClassName(".card");
    element.classList.add("open");
    element.classList.add("show");
    element.classList.add("disable");
}

// Select deck
let deck = document.querySelector(".deck");



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