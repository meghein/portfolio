<script>
  import { y } from './stores.js';
  import { onMount } from "svelte";
  
  let nav, navY

  onMount(() => {
    navY = nav.getBoundingClientRect().y + window.pageYOffset
  })

  function scroll(page) {
    let elmnt = document.getElementById(page);
    elmnt.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

</script>

<style>
	#nav li{
		display : inline;
    padding: 1em;
    font-size: 1.5em;
	}
  .fixed {
    position: fixed;
    top: 0;
  }
</style>

<ul id="nav" class="{ $y >= navY ? 'fixed' : '' }" bind:this={nav}>
	<li><a href="/" on:click|preventDefault={() => (scroll('home'))}>Home</a></li>
	<li><a href="/" on:click|preventDefault={() => (scroll('about'))}>About</a></li>
	<li><a href="/" on:click|preventDefault={() => (scroll('portfolio'))}>Portfolio</a></li>
	<li><a href="/" on:click|preventDefault={() => (scroll('contact'))}>Contact</a></li>
</ul>


