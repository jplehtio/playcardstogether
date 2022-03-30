<script src="playcardstogether.js"></script>

<div class="card">
	<div id="cardtop">
		<div class="cardtextarea">TOP</div>
	</div>
	<div id="cardmiddle" class="cardmiddle">
		<div id="cardleft">
			<div id="cardleftcontent" class="cardtextarea">LEFT</div>
		</div>
		<div id="cardright">
			<div id="cardrightcontent" class="cardtextarea">RIGHT</div>
		</div>
	</div>
		<div id="cardbottom">
		<div class="cardtextarea">BOTTOM</div>
	</div>
</div>

<script>
initializeCard();
setCardContent("Card title", "Card content that should be long enough to wrap to several lines!");
setCardStyleDimensions();
</script>
