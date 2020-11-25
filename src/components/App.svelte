<script>
  import { y } from './stores.js';
  import Nav from './Nav.svelte'
  import About from './About.svelte'
  import Projects from './Projects.svelte'
  import Contact from './Contact.svelte'

  function scroll() {
    document
      .getElementById('about')
      .scrollIntoView({ behavior: 'smooth', block: 'end' });
  }

</script>

<style>

	#home {
		text-align: center;
    min-height: 100vh;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		#home {
			max-width: none;
		}
	}
</style>

<svelte:window bind:scrollY={$y}/>

<main>
  <div id='home'>
    <h1>Hello, I'm Meghan Hein.</h1>
    <h1>I'm a full-stack web developer</h1>
    <button on:click|preventDefault={() => scroll()}>click here</button>
  </div>
  <Nav/>
  <About/>
  <Projects/>
  <Contact/>
</main>