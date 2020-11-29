<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { watchResize } from "svelte-watch-resize";
  import { y } from './stores.js';
  import Nav from './Nav.svelte';
  import Links from './Links.svelte'
  import About from './About.svelte';
  import Projects from './Projects.svelte';
  import Contact from './Contact.svelte';
  import Footer from './Footer.svelte';

  let windowHeight;
  let showLinks = false;

  onMount(() => {
    setInterval(() => {
      setTimeout(() => {
        showLinks = !showLinks
      }, 5000)
    }, 10000)
    // showLinks = !showLinks
  })

  function scroll() {
    document
      .getElementById('about')
      .scrollIntoView({ behavior: 'smooth', block: 'end' });
  };

  function handleResize(node) {
    windowHeight = node.clientHeight;
  };

</script>

<style type="text/scss">
	#home {
    min-height: 100vh;
    background: linear-gradient(165deg, #FBEEC1 60%,#DA862D calc(60% + 2px));
    .inner-home {
      place-self: center
    }
    h1 {
      display: inline-block;
      padding-top: 2em;
      padding-left: .5em;
      padding-right: .5em;
      margin-bottom: 0;
      font-family: 'Libre Baskerville', serif;
      font-size: 4em;
      text-decoration: underline solid #DA862D;
      text-decoration-thickness: 2px;
      border-bottom: 2px solid #DA862D;
    }
    button {
      // margin-top: 1.5em;
      width: 70px;
      height: 60px;
      animation: pulse 2.5s infinite;
      animation-timing-function: linear;   
      &:hover{ 
        animation: none;
      }
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
      }
    }
  }
</style>

<svelte:window bind:scrollY={$y}/>

<main>
  <div id='home' use:watchResize={handleResize}>
    <div class='inner-home'>
      <h1>I'm Meghan.</h1>
      <h2>a full stack web developer.</h2>
      <button on:click|preventDefault={() => scroll()}>Learn more </button>
    </div>
    {#if showLinks}
    <div transition:fade>
      <Links msg='Rather just connect?' style='color: #006F69'/>
    </div>
    {/if}
  </div>
  <Nav navY={windowHeight}/>
  <About/>
  <Projects/>
  <Contact/>
  <Footer/>
</main>