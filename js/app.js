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

function addClass() {
	for (let i = 0; i < cards.length; i++) {
		cardIndex = cards[i];
		
		cardIndex.addEventListener("click", showCard);
	}
}

// Showing cards
let showCard = function() {
	
	console.log("Work!");


	this.classList.toggle("open");
	this.classList.toggle("show");
	this.classList.toggle("disable");
};

// Shuffle cards
function shuffle(arra1) {
    let ctr = arra1.length;
    let temp;
    let index;

    // While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
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

addClass();
shuffle(cards);
showCard();
overlay();