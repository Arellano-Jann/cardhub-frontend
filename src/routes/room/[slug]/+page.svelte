<script>
	// this displays a lobby of all the players in a specific room
	// room/?room=room_num
	import logo from "$lib/assets/card_hub_logo.svg";

</script>

<main>	

	<div style="text-align: center;">

		<img src={logo} alt="Card Hub Logo" style="display:inline" width="200"/>
		
	</div>

	<h1> Lobby </h1>

	<p> localStorage.getItem("room-num"); </p>
</main>


<style>
  
	h1 {
	  color: #ffffff;
	  font-size: 4em;
	  font-weight: 100;
	  text-align: center;
	}

	main {
		/* display: flex; */
		justify-content: center;
		align-items: center;
	}
  
  
  </style>