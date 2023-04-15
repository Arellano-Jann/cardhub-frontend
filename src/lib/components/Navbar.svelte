<script>
    import Home from "../../routes/home/+page.svelte";   //Idk if these are right
    import HostJoin from "../../routes/hostjoin/+page.svelte"; 
    import Search from "../../routes/search/+page.svelte"; 
    import About from "../../routes/about/+page.svelte"; 

    let currentPage = Home;
    function setCurrentPage(page){
        currentPage = page;
    }
</script>

<nav>
    <ul class="section-links">
        <li class="section-link" on:click={() => setCurrentPage(Home)} class:selected={currentPage == Home}>
            <a href={Home}>
                <span class="material-icons">home</span>
                Home
            </a>
        </li>
        <li class="section-link" on:click={() => setCurrentPage(Host/Join)} class:selected={currentPage == Host/Join}>
            <a href={HostJoin}>
                <span class="material-icons">person_add</span>
                Host/Join
            </a>
        </li>
        <li class="section-link" on:click={() => setCurrentPage(Search)} class:selected={currentPage == Search}>
            <a href={Search}>
                <span class="material-icons">search</span>
                Search
            </a>
        </li>
        <li class="section-link" on:click={() => setCurrentPage(About)} class:selected={currentPage == About}>
            <a href={About}>
                <span class="material-icons">info</span>
                About
            </a>
        </li>
    </ul>
</nav>

<style lang="css">
    nav{
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #1f1f1f;
        color: #ffffff;
        font-family: Arial, sans-serif;
        bottom: 0;
        width: 100%;
        height: 50px;
    }

    .section-links{
        display: flex;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .section-link{
        display: flex;
        flex-grow: 1;
        color: white;
        text-decoration: none;
        -webkit-tap-highlight-color: transparent;
        min-width: 50px;
        overflow: hidden;
        white-space: nowrap;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: sans-serif;
        font-size: 12px;
        transition: background-color 0.1s ease-in-out;
    }

    .section-link:hover{
        background-color: #ffffff80;
    }

    .section-link:active{
        color: red;
    }

    .section-link a .material-icons{
        font-size: 16px;
    }
</style>
