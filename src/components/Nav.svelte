<script>
  import { y } from './stores.js';
  import { afterUpdate, onMount } from "svelte";
  
  let nav, navY
  const items = ['home', 'about', 'projects', 'contact']

  // set view height variable for use in conditional scrolling attrs:
  onMount(() => {
    navY = nav.getBoundingClientRect().y + window.pageYOffset
  })

  // change css for nav items on scroll:
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
      .getElementById(page.item)
      .scrollIntoView({ behavior: 'smooth', block: 'center'});
  }
</script>

<style type="text/scss">
	#nav-items{
    li{
      display : inline;
      padding: 1em;
      font-size: 1.5em;
      a {
        text-decoration: none;
      }
	  }
    &:hover > li:not(:hover) {
      opacity: 0.5;
    }
  }
  .fixed {
    position: fixed;
    top: 0;
  }
</style>

<nav id="main-nav">
  <ul id="nav-items" class="{ $y >= navY ? 'fixed' : '' }" bind:this={nav}>
    {#each items as item }
      <li>
        <a href="#{item}" class="item" on:click|preventDefault={() => (scroll({item}))}>
          {item.toUpperCase()}
        </a>
      </li>
    {/each}
  </ul>
</nav>


