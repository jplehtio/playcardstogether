/**
 * 
 */

function initializeCard(){
	var cardElements = document.getElementsByClassName("cardtextarea");
	for(var i = 0; i < cardElements.length; i++){
		cardElements[i].innerHTML = "<h1 class='cardtitle'></h1><p class='carddescription'></p>";
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