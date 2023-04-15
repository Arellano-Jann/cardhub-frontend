<script>
    import PlaceholderCard from "../PlaceholderCard.svelte";

	// array of cards
	export let cards;

</script>

{#each cards as card_obj, i}
	<PlaceholderCard {card_obj} />
{/each}