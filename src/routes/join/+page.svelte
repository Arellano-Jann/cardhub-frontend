<script>
    // export let dummyLobbies = [
    //     {
    //         name: "gasdgasdg",
    //     },
    //     {
    //         name: "gasdgasdg",
    //     },
    //     {
    //         name: "gasdgasdg",
    //     },
    //     {
    //         name: "gasdgasdg",
    //     },
    //     {
    //         name: "gasdgasdg",
    //     },
    // ];
    import logo from "../../lib/assets/card_hub_logo.svg";
</script>

<main> 
    <div style="text-align: center;">

        <img src={logo} alt="Card Hub Logo" style="display:inline" width="500"/>
        
    </div>
    
    <form method="POST">
        <div class="flex justify-between py-2">
          <label for="room-num"> Join Room </label>
          <input
            class="border-2 border-white text-black"
            name="room-num"
            type="text"/>
        </div>
        <div class="flex justify-between py-2">
          <label for="display-name text-black"> Display Name </label>
          <input
            class="border-2 border-white text-black"
            name="display-name"
            type="text"/>
        </div>
        <div class="flex flex-row-reverse">
          <button
            class="hover:bg-black hover:text-white py-2 px-5 border-2 border-white text-white"
            >Join</button>
        </div>
      </form>
    <!-- <div> -->
    <!-- <h1>Lobbies</h1>
    {#if dummyLobbies.length == 0}
        <div class="grid grid-cols-3 grid-rows-3">
            <div class="row-start-2 col-start-2 text-center">
                <h1>No Lobbies available :</h1>
            </div>
        </div>
    {:else}
        <div class="max-w-lg mx-auto">
            <div>
                <p>Lobby Name</p>
            </div>
            <div class="border-black border-2 p-5">
                {#each dummyLobbies as lobby}
                    <div class="flex justify-between">
                        <h1>{lobby.name}</h1>
                        <div>
                            <button
                                class="hover:bg-black
                        hover:text-white p-2
                        ">Join</button
                            >
                        </div>
                    </div>
                    <hr />
                {/each}
            </div>
        </div>
    {/if}
    </div> -->
</main>

<style>
    main{
        text-align: center;
        align-items: center;
        align-self: center;
        align-content: center;
    }
    form{
        align-items: center;
    }

    /* h1{
        text-decoration: left;
    } */
</style>