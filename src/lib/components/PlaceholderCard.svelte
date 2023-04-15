<script>
	/*import {onMount} from "svelte";
	import {get} from "$lib/example.json.js";

	let data;
	onMount(async () => {
		data = await get();
	});*/
	import data from "$lib/assets/lyssie-test-uno.json"
	
</script>

<div class="bg-blue-100">
	<p>Placeholder text</p>
	<p> {data["template_name"]}</p>
</div>