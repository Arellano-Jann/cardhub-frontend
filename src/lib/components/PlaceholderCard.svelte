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
	// default card
	export let card_obj = generic_card_obj;

	//import data from "$lib/example.json.js"

</script>

<div class="bg-blue-100">
	<p>Placeholder text</p>
	<p> {data["template_name"]}</p>
</div>
{data["dimensions"][0]}
<img src={img} height="{data["dimensions"][0]}px" width="{data["dimensions"][1]}px" alt="alt1">

<p>separation</p>

<div class="bg-red-50 test">g</div>

<div class="PlaceholderCard border-0 bg-blue-50" >
		{#if card_obj["use_img"] == false}
			<p>false</p>
		{:else if card_obj["img_src"] != null}
			<p> in else if </p>
			<img src={card_obj["img_src"]} height="{data["dimensions"][0]}px" width="{data["dimensions"][1]}px" alt="alt2">
		{:else}
			<p>in else</p>
		{/if}

</div>

<style>
	div.test {
		width:100px;
		height:100px;
	}
</style>