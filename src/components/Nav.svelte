<script>
  import { y } from './stores.js';
  import { beforeUpdate, afterUpdate } from "svelte";
  let fix, add
  
  afterUpdate(() => {
    if(fix.getBoundingClientRect() <= $y) {
      console.log('true')
      add = fix.getBoundingClientRect()
    }
  });

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

<!-- class="{fix  ? 'fixed' : ''}"  -->
<ul id="nav" class="{ add ? 'fixed' : '' }" bind:this={fix}>
	<li><a href="/" on:click|preventDefault={() => (scroll('home'))}>Home</a></li>
	<li><a href="/" on:click|preventDefault={() => (scroll('about'))}>About</a></li>
	<li><a href="/" on:click|preventDefault={() => (scroll('portfolio'))}>Portfolio</a></li>
	<li><a href="/" on:click|preventDefault={() => (scroll('contact'))}>Contact</a></li>
</ul>


