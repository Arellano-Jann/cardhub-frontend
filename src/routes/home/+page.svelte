<script>
	import Navbar from "../../lib/components/Navbar.svelte";
</script>

<!--<Navbar />-->
<div class="home-content">
    <div class="centered-or-smth">
        <form method="POST">
            <label>
              Join Room
              <input name="room-num" type="text">
            </label>
            <label>
              Display Name
              <input name="display-name" type="text">
            </label>
            <button>Join</button>
          </form>
    </div>
</div>

<style>
	
</style>