<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { watchResize } from "svelte-watch-resize";

  import { y, windowHeight, windowWidth } from '../store.js';
  import scroll from '../helpers/scroll';

  import Symbols from './Symbols.svelte';
  import Nav from './Nav.svelte';
  import Links from './Links.svelte'
  import About from './About.svelte';
  import Projects from './Projects.svelte';
  import Contact from './Contact.svelte';
  import Footer from './Footer.svelte';

  let showLinks = false;
  
  onMount(() => {
    setInterval(() => {
      setTimeout(() => {
        showLinks = !showLinks
      }, 2000)
    }, 3000)
  })

  function handleResize(node) {
    $windowHeight = node.clientHeight;
    $windowWidth = node.clientWidth;
  };

</script>

<svelte:window bind:scrollY={$y}/>

<main>
  <div id='home' use:watchResize={handleResize}>
    <div class='top'/>
    <!-- <Symbols/> -->
    <div class='home-content'>
      <h1>I'm Meg.</h1>
      <div>
        <h2>a full stack web developer.</h2>
      </div>
      <button on:click|preventDefault={() => scroll('about')}>Learn more </button>
      <div class='home-links'>
        {#if showLinks}
        <div transition:fade>
          <Links msg='Rather just connect?' color='#006F69'/>
        </div>
        {/if}
      </div>
    </div>
  </div>
  <Nav/>
  <About/>
  <Projects/>
  <Contact/>
  <Footer/>
</main>

<style type="text/scss">
	@import '../styles/App.scss';
</style>