<script>
  import { watchResize } from "svelte-watch-resize";
  import { y } from './stores.js';
  import Nav from './Nav.svelte';
  import About from './About.svelte';
  import Projects from './Projects.svelte';
  import Contact from './Contact.svelte';
  import Footer from './Footer.svelte';

  let windowHeight;

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
    background: linear-gradient(165deg, #FBEEC1 60%,#da862d calc(60% + 2px));
    h1 {
      margin-bottom: 0;
      font-size: 4em;
      font-weight: 100;
      // font-family: 'Syne', sans-serif; 
    }
	}
</style>

<svelte:window bind:scrollY={$y}/>

<main>
  <div id='home' use:watchResize={handleResize}>
    <h1>Hi, I'm Meghan.</h1>
    <h2>Thanks for stopping by!</h2>
    <h5>I am passionate abot building excellent software that improves the lives of those around me.</h5>
    <button on:click|preventDefault={() => scroll()}>click here</button>
  </div>
  <Nav navY={windowHeight}/>
  <About/>
  <Projects/>
  <Contact/>
  <Footer/>
</main>