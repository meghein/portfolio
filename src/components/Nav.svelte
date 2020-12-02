<script>
  import { y, windowHeight } from './stores.js';
  import { afterUpdate } from "svelte";

  const list = ['home', 'about', 'projects', 'contact'];

  function handleHighlight() {
    const items = document.getElementsByClassName('item');
    for (const item of items) {
      const tag = item.href.split('#').pop();
      const pageTitle = document.getElementById(tag).getElementsByClassName('top')
      // console.log(pageTitle);
      const pageInView = pageTitle[0].getBoundingClientRect().top;
      if (pageInView < $windowHeight/5 && pageInView > $windowHeight*-.75) {
        item.setAttribute('style', 'color: #6a040f')
      } else {
        item.setAttribute('style', 'color: inherit')
      }
    }
  }

  function handleBackground() {
    const menu = document.getElementById('main-nav');
    const topMenu = menu.getBoundingClientRect().top;
    const fixedMenu = document.getElementById('nav-items')
    if (topMenu <= $windowHeight && topMenu > -$windowHeight) {
      fixedMenu.setAttribute('style', 'background-color: #DA862D;')
    }
    if (topMenu <= -$windowHeight && topMenu > -$windowHeight*1.9) {
      fixedMenu.setAttribute('style', 'background-color: #FBEEC1;')
    }
    if (topMenu <= -$windowHeight*1.9) {
      fixedMenu.setAttribute('style', 'background-color: #006F69;')
    }
  }

  function scroll(page) {
    document
      .getElementById(page.item)
      .scrollIntoView({ behavior: 'smooth', block: 'start'});
  };
  afterUpdate(() => {
    handleHighlight();
    handleBackground();
  });


</script>

<style type="text/scss">
  #main-nav {
    font-family: 'Josefin Sans', sans-serif;
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 10;
    #nav-items{
      padding-inline-start: 0;
      padding-top: 1em;
    padding-bottom: .5em;
    margin: 0;
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
    padding-top: 1em;
    padding-bottom: .5em;
    margin: 0;
  }
</style>

<nav id="main-nav">
  <ul id="nav-items" class="{ $y >= $windowHeight ? 'fixed' : '' }">
    {#each list as item }
      <li>
        <a href="#{item}" class="item" on:click|preventDefault={() => (scroll({item}))}>
          {item.toUpperCase()}
        </a>
      </li>
    {/each}
  </ul>
</nav>


