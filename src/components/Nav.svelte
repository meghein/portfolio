<script>
  import { y, windowHeight } from './stores.js';
  import { afterUpdate } from "svelte";

  const list = ['home', 'about', 'projects', 'contact'];

  function handleHighlight() {
    const items = document.getElementsByClassName('item');
    for (const item of items) {
      const tag = item.href.split('#').pop();
      const pageTitle = document.getElementById(tag).getElementsByClassName('top')
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
  @import '../styles/Nav.scss';
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


