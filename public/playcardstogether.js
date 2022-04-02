
function setCardStyleDimensions() {
	var middleAreaWidth = document.getElementById("cardmiddle").offsetWidth;
	var middleAreaHeight = document.getElementById("cardmiddle").offsetHeight;

	var cardleft = document.getElementById("cardleft");
	var cardright = document.getElementById("cardright");

	cardleft.style.width = middleAreaHeight + "px";
	cardright.style.width = middleAreaHeight + "px";

	var cardleftHeight = document.getElementById("cardleft").offsetHeight;
	var cardleftWidth = document.getElementById("cardleft").offsetWidth;

	cardleft.style.top = middleAreaHeight / 2 - cardleftHeight / 2 + "px";
	cardright.style.top = middleAreaHeight / 2 - cardleftHeight / 2 + "px";

	cardleft.style.left = cardleftHeight / 2 - cardleftWidth / 2 + "px";
	cardright.style.right = cardleftHeight / 2 - cardleftWidth / 2 + "px";

}

function initializeCard(){
	var cardElements = document.getElementsByClassName("cardtextarea");
	for(var i = 0; i < cardElements.length; i++){
		cardElements[i].innerHTML = "<div class='cardtitle'></div><div class='carddescription'></div>";
	}
}

function setCardContent(cardtitle, carddescription){
	var cardTitleElements = document.getElementsByClassName("cardtitle");
	var cardDescriptionElements = document.getElementsByClassName("carddescription");

	for(var i = 0; i < cardTitleElements.length; i++){
		cardTitleElements[i].innerHTML = cardtitle;
		cardDescriptionElements[i].innerHTML = carddescription;
	}
}

var currentCard = 0;

function onCardClick() {
	if (currentCard >= cardDeck.length) {
		setCardContent("Game finished", "Start new game by refreshing the page");
		return;
    }

	setCardContent(cardDeck[currentCard].title, cardDeck[currentCard].description);
	currentCard++;
}