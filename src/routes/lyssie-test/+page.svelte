<script>
	import info from "$lib/assets/lyssie-test-uno.json"

    import PlaceholderCard from "../../lib/components/PlaceholderCard.svelte";

	import deck_obj from "$lib/assets/card_structure.json"
	let decks = deck_obj["decks"];
	let cah_cards = decks[0]["cards"]; 
	let playing_cards = decks[1]["cards"];
</script>
<div>

<PlaceholderCard card_obj={cah_cards[0]}/>
<PlaceholderCard card_obj={playing_cards[0]}/>

</div>

<style>
	div {
		background-color: "blue";
	}
</style>