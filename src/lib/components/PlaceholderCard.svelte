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
	export let card_obj = generic_card_obj;

	//import data from "$lib/example.json.js"

</script>

<div class="bg-blue-100">
	<p>Placeholder text</p>
	<p> {data["template_name"]}</p>
</div>
{data["dimensions"][0]}
<img src={img} height="{data["dimensions"][0]}px" width="{data["dimensions"][1]}px" alt="ye">

<div class="PlaceholderCard">
	
	<slot name="image">
		{if card_obj[use_image] == true}
			<p>true</p>
		{:else if}
	</slot>

</div>

<style>

</style>