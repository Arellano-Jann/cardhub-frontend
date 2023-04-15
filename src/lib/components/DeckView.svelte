<script>
    import PlaceholderCard from "./PlaceholderCard.svelte";
	// playing cards
	import playing_card_deck from "$lib/assets/playing_cards/deck.json"
	let playing_card_back = playing_card_deck["back_card"];
	//CAH
	import cards_against_humanity_deck from "$lib/assets/cards_against_humanity/deck.json"
	let cards_against_humanity_back = cards_against_humanity_deck["back_card"];
</script>

<div class="deck-grid">
	<div class="placeholder-wrapper">
		<PlaceholderCard card_obj={playing_card_back} />
	</div>

	<div class="placeholder-wrapper">
		<PlaceholderCard card_obj={cards_against_humanity_back} />
	</div>
</div>

<style> 
	.placeholder-wrapper {
		float:left;
	}
	.deck-grid {
		display:block;
	}
</style>