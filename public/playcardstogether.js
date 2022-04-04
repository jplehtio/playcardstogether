
let currentCard = 0;

const cardBackgroundColors = ["aquamarine", "beige", "cadetblue", "gainsboro", "khaki", "lavender", "lavenderblush", "lightblue", "lightcoral", "lightgreen", "lightpink", "lightsalmon", "lightskyblue", "linen"];
let currentBackgroundColor = 0;

function setCardStyleDimensions() {
	const middleAreaWidth = document.getElementById("cardmiddle").offsetWidth;
	const middleAreaHeight = document.getElementById("cardmiddle").offsetHeight;

	const cardleft = document.getElementById("cardleft");
	const cardright = document.getElementById("cardright");

	cardleft.style.width = middleAreaHeight + "px";
	cardright.style.width = middleAreaHeight + "px";

	const cardleftHeight = document.getElementById("cardleft").offsetHeight;
	const cardleftWidth = document.getElementById("cardleft").offsetWidth;

	cardleft.style.top = middleAreaHeight / 2 - cardleftHeight / 2 + "px";
	cardright.style.top = middleAreaHeight / 2 - cardleftHeight / 2 + "px";

	cardleft.style.left = cardleftHeight / 2 - cardleftWidth / 2 + "px";
	cardright.style.right = cardleftHeight / 2 - cardleftWidth / 2 + "px";

}

function initializeCard(){
	const cardElements = document.getElementsByClassName("cardtextarea");
	for(let i = 0; i < cardElements.length; i++){
		cardElements[i].innerHTML = "<div class='cardtitle'></div><div class='carddescription'></div>";
	}
}

function setCardContent(cardtitle, carddescription, changeCardColor = false){
	const cardTitleElements = document.getElementsByClassName("cardtitle");
	const cardDescriptionElements = document.getElementsByClassName("carddescription");

	if (changeCardColor) {
		let newBackgroundColor;
		do {
			newBackgroundColor = Math.floor(Math.random() * cardBackgroundColors.length);
		} while (newBackgroundColor == currentBackgroundColor);
		currentBackgroundColor = newBackgroundColor;
		document.getElementById("card").style.backgroundColor = cardBackgroundColors[newBackgroundColor];
	}

	for(let i = 0; i < cardTitleElements.length; i++){
		cardTitleElements[i].innerHTML = cardtitle;
		cardDescriptionElements[i].innerHTML = carddescription;
	}
}

function onCardClick() {
	if (currentCard >= cardDeck.length) {
		setCardContent("Game finished", "Start new game by refreshing the page");
		return;
    }

	setCardContent(cardDeck[currentCard].title, cardDeck[currentCard].description, true);
	currentCard++;
}