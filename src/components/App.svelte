<script>
  import About from './About.svelte'
  import Portfolio from './Portfolio.svelte'
  import Contact from './Contact.svelte'

  function scroll() {
    let elmnt = document.getElementById('about');
    elmnt.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
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

<main>
  <div id='home'>
    <h1>Hello, I'm Meghan Hein.</h1>
    <h1>I'm a full-stack web developer</h1>
    <button on:click|preventDefault={() => scroll()}>click here</button>
  </div>
  <About/>
  <Portfolio/>
  <Contact/>
</main>