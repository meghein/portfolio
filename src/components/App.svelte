<script>
  import { watchResize } from "svelte-watch-resize";
  import { y } from './stores.js';
  import Nav from './Nav.svelte'
  import About from './About.svelte'
  import Projects from './Projects.svelte'
  import Contact from './Contact.svelte'
  import Footer from './Footer.svelte'

  let windowHeight

  function scroll() {
    document
      .getElementById('about')
      .scrollIntoView({ behavior: 'smooth', block: 'end' });
  }

  function handleResize(node) {
    windowHeight = node.clientHeight + 16
  }
</script>

<style type="text/scss">
	#home {
		text-align: center;
    min-height: 100vh;
		padding: 1em;
		max-width: 240px;
		margin: 0;
    h1 {
      font-size: 4em;
      font-weight: 100;
      // font-family: 'Syne', sans-serif; 
    }
    @media (min-width: 640px) {
      max-width: none;
    }
	}
</style>

<svelte:window bind:scrollY={$y}/>
<!-- <svelte:window use:watchResize={handleResize}/> -->

<main>
  <div id='home' use:watchResize={handleResize}>
    <h1>Hello, I'm Meghan Hein.</h1>
    <h1>I'm a full-stack web developer</h1>
    <button on:click|preventDefault={() => scroll()}>click here</button>
    <span>{windowHeight}</span>
  </div>
  <Nav navY={windowHeight}/>
  <About/>
  <Projects/>
  <Contact/>
  <Footer/>
</main>