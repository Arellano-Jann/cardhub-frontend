<script>
	/*import {onMount} from "svelte";
	import {get} from "$lib/example.json.js";

	let data;
	onMount(async () => {
		data = await get();
	});*/
	import logo from "$lib/assets/logo.svg"
	import data from "$lib/assets/lyssie-test-uno.json"
	import img from "$lib/assets/uno-red-zero-screenshot.png"
    

	import generic_card_obj from "$lib/assets/generic_card.json"
    import { add_styles } from "svelte/internal";
	// default card
	export let card_obj = generic_card_obj;

	//import data from "$lib/example.json.js"

	

</script>

<!--
	
<div class="bg-blue-100">
	<p>Placeholder text</p>
	<p> {data["template_name"]}</p>
</div>
{data["dimensions"][0]}
<img src={img} height="{data["dimensions"][0]}px" width="{data["dimensions"][1]}px" alt="alt1">

<div class="bg-red-50 test">g</div>

-->


<div class="PlaceholderCard border-0 bg-blue-50" style="width: {card_obj["dimensions"][0]}px; height: {card_obj["dimensions"][1]}px">
	<div> <!-- left stuff -->
		<div class="right-side-up">
			<p class="corner-val">
				{card_obj["corner-val"]}
			</p>
			<img src={card_obj["small_image"]} alt="small">
		</div>
	</div>
	<div class="centerdiv"> <!-- center image-->
		<img src={card_obj["image"]} alt="center">
	</div>
	<div class="right-col"> <!-- right stuff -->
		<div class="upside-down">
			<p class="corner-val">
				{card_obj["corner-val"]}
			</p>
			<img src={card_obj["small_image"]} alt="small">
		</div>
	</div>
		<!--{#if card_obj["use_img"] == false}
			<p>false</p>
		{:else if card_obj["img_src"] != null}
			<p> in else if </p>
			<img src={card_obj["img_src"]} height="{data["dimensions"][0]}px" width="{data["dimensions"][1]}px" alt="alt2">
		{:else}
			<p>in else</p>
		{/if}
		-->
</div>


<style lang="css">
	.PlaceholderCard {
		display: grid;
		grid-template-columns: 1fr 3fr 1fr;
	}
	.centerdiv {
		display: flex;
		justify-content: center;
		align-items: center;
		height:100%;
	}
	.corner-val {
		font-size: 40px;
	}
	.right-col {
		position:relative;
	}
	.corner-val {
		margin:0;
	}
	.upside-down {
		position:absolute;
		bottom:0;
		transform: rotate(180deg);
	}
</style>