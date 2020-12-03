<script>
  import { onMount, afterUpdate } from 'svelte';
  import { fade } from 'svelte/transition';
  import { watchResize } from "svelte-watch-resize";
  import { y, windowHeight } from '../store.js';
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
      }, 5000)
    }, 10000)
  })

  function scroll() {
    document
      .getElementById('about')
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  function handleResize(node) {
    $windowHeight = node.clientHeight;
  };

</script>

<style type="text/scss">
	@import '../styles/App.scss';
</style>

<svelte:window bind:scrollY={$y}/>

<main>
  <div id='home' use:watchResize={handleResize}>
    <div class='top'/>
    <Symbols/>
    <div class='inner-home'>
      <h1>I'm Meg.</h1>
      <h2>a full stack web developer.</h2>
      <button on:click|preventDefault={() => scroll()}>Learn more </button>
    </div>
    {#if showLinks}
    <div class='home-links' transition:fade>
      <Links msg='Rather just connect?' size='1em' color='#006F69'/>
    </div>
    {/if}
  </div>
  <Nav/>
  <About/>
  <Projects/>
  <Contact/>
  <Footer/>
</main>