<script>
  import { y } from './stores.js';
  import { afterUpdate } from "svelte";
  
  // set dynamically from App windowHeight
  // controls where the nav sits in relation the the viewport:
  export let navY;

  const list = ['home', 'about', 'projects', 'contact'];

  afterUpdate(() => {
    const items = document.getElementsByClassName('item');
    for (const item of items) {
      const tag = item.href.split('#').pop();
      const pageTitle = document.getElementById(tag).getElementsByTagName('h1');
      const pageInView = pageTitle[0].getBoundingClientRect().top;
      if (pageInView < navY/5 && pageInView > navY*-.75) {
        item.setAttribute('style', 'color: #6a040f')
      } else {
        item.setAttribute('style', 'color: inherit')
      }
    }
  });

  function scroll(page) {
    document
      .getElementById(page.item)
      .scrollIntoView({ behavior: 'smooth', block: 'center'});
  };

</script>

<style type="text/scss">
  #main-nav {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 10;
    #nav-items{
      padding-inline-start: 0;
      li{
        display : inline;
        padding: 1em;
        font-size: 1.5em;
      }
      &:hover > li:not(:hover) {
        opacity: 0.5;
      }
    }
  }
  .fixed {
    position: fixed;
    top: 0;
    width: 100%;
  }
</style>

<nav id="main-nav">
  <ul id="nav-items" class="{ $y >= navY ? 'fixed' : '' }">
    {#each list as item }
      <li>
        <a href="#{item}" class="item" on:click|preventDefault={() => (scroll({item}))}>
          {item.toUpperCase()}
        </a>
      </li>
    {/each}
  </ul>
</nav>


