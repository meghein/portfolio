<script>
  import { y } from './stores.js';
  import { afterUpdate, onMount } from "svelte";
  
  let nav, navY
  
  // set view height variable for use in conditional scrolling attrs:
  onMount(() => {
    navY = nav.getBoundingClientRect().y + window.pageYOffset
  })

  // change css for nav items on scroll
  afterUpdate(() => {
    const items = document.getElementsByClassName('item')
    for (const item of items) {
      const tag = item.href.split('#').pop()
      const pageTitle = document.getElementById(tag).getElementsByTagName('h1')
      const pageInView = pageTitle[0].getBoundingClientRect().top
      if (pageInView < navY && pageInView > -80) {
        item.setAttribute('style', 'color: red')
      } else {
        item.setAttribute('style', 'color: inherit')
      }
    }
  })

  function scroll(page) {
    document
      .getElementById(page)
      .scrollIntoView({ behavior: 'smooth', block: 'center'});
  }



</script>

<style>
	#nav-items li{
		display : inline;
    padding: 1em;
    font-size: 1.5em;
	}
  #nav-items:hover > li:not(:hover) {
    opacity: 0.5;
  }
  a {
    text-decoration: none;
  }
  .fixed {
    position: fixed;
    top: 0;
  }
</style>

<nav id="main-nav">
  <ul id="nav-items" class="{ $y >= navY ? 'fixed' : '' }" bind:this={nav}>
    <li><a href="#home" class="item" on:click|preventDefault={() => (scroll('home'))}>Home</a></li>
    <li><a href="#about" class="item" on:click|preventDefault={() => (scroll('about'))}>About</a></li>
    <li><a href="#projects" class="item" on:click|preventDefault={() => (scroll('projects'))}>Projects</a></li>
    <li><a href="#contact" class="item" on:click|preventDefault={() => (scroll('contact'))}>Contact</a></li>
  </ul>
</nav>


