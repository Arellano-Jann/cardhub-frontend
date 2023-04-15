<script>
  import Navbar from "../../lib/components/Navbar.svelte";
</script>

<!--<Navbar />-->
<div class="home-content grid grid-cols-3 grid-rows-3">
  <div class="col-start-2 row-start-2 border-2 border-black p-5 max-w-sm">
    <form method="POST">
      <div class="py-5 flex justify-between">
        <button>Host Game</button>
        <p>or</p>
      </div>
      <div class="flex justify-between py-2">
        <label for="room-num"> Join Room </label>
        <input class="border-2 border-black" name="room-num" type="text" />
      </div>
      <div class="flex justify-between py-2">
        <label for="display-name"> Display Name </label>
        <input class="border-2 border-black" name="display-name" type="text" />
      </div>
      <div class="flex flex-row-reverse">
        <button
          class="hover:bg-black hover:text-white py-2 px-5 border-2 border-black"
          >Join</button
        >
      </div>
    </form>
  </div>
</div>

<style>
</style>
