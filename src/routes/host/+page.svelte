<script>
	//import cah_deck from "$"
	import DeckView from "$lib/components/DeckView.svelte"
	import CardLibrary from "$lib/components/CardLibrary.svelte"

	$: selected_cards = 5 + 10;

</script>
<div id="page">
	<h1> Host game </h1>
	<h2> Select Game to Play </h2>
	<DeckView />
	<h2> View Cards in Deck </h2>
	<CardLibrary {selected_cards} />
</div>