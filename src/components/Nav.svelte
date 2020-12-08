<script>
  import { y, windowHeight, windowWidth } from '../store.js';
  import { afterUpdate } from "svelte";
  import { clickOutside } from '../helpers/clickOutside'

  let fullMenu, responsiveMenu;
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

  function handleBackground(topMenu) {
    let fixedMenu;

    if (document.getElementById('nav-items')) {
      fixedMenu = document.getElementById('nav-items')
    }

    if (document.getElementById('hamburger')) {
      fixedMenu = document.getElementById('hamburger')
    }
      if (topMenu <= $windowHeight && topMenu > -$windowHeight) {
        fixedMenu.setAttribute('style', 'background-color: #DA862D;')
      } else if (topMenu <= -$windowHeight && topMenu > Math.round(-$windowHeight*1.75)) {
        fixedMenu.setAttribute('style', 'background-color: #FBEEC1;')
      } else if (topMenu <= Math.round(-$windowHeight*1.8) ) {
        fixedMenu.setAttribute('style', 'background-color: #006F69;')
      }
  }

  function scroll(page) {
    document
      .getElementById(page.item)
      .scrollIntoView({ behavior: 'smooth', block: 'start'});
    if (responsiveMenu) {
      responsiveMenu = false
    }
    
  };

  function toggleMenu() {
    responsiveMenu = !responsiveMenu
  }
  
  afterUpdate(() => {
    const menu = document.getElementById('nav-container');
    const topMenu = Math.round(menu.getBoundingClientRect().top);
    handleHighlight();
    handleBackground(topMenu);
    // $windowWidth <= 640 ? fullMenu = false : fullMenu = true
  });

</script>

<style type="text/scss">
  @import '../styles/Nav.scss';
</style>

<nav id="nav-container">
  <div id='main-nav'>
    <!-- {#if fullMenu} -->
    <ul id="nav-items" class="{ $y >= $windowHeight ? 'fixed' : '' }">
      {#each list as item }
        <li>
          <a href="#{item}" class="item" on:click|preventDefault={() => (scroll({item}))}>
            {item.toUpperCase()}
          </a>
        </li>
      {/each}
    </ul>
    <!-- {:else}
    <div id='hamburger' class='{ $y >= $windowHeight ? 'fixed' : '' }'>
      <i
        class="fas fa-bars"
        on:click={toggleMenu}
      />
    </div>
      {#if responsiveMenu}
      <ul id="responsive-items">
        {#each list as item }
          <li>
            <a
              href="#{item}" class="item"
              on:click|preventDefault={() => (scroll({item}))}
              use:clickOutside on:click_outside={toggleMenu}>
              {item.toUpperCase()}
            </a>
          </li>
        {/each}
      </ul>
      {/if}
    {/if} -->
  </div>
</nav>


