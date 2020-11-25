<script>
  function scroll(page) {
    let elmnt = document.getElementById(page);
    elmnt.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
</script>

<style>
	ul#nav li{
		display : inline;
    padding: 1em;
    font-size: 1.5em;
	}
</style>

<ul id="nav">
	<li><a href="/" on:click|preventDefault={() => (scroll('home'))}>Home</a></li>
	<li><a href="/" on:click|preventDefault={() => (scroll('about'))}>About</a></li>
	<li><a href="/" on:click|preventDefault={() => (scroll('portfolio'))}>Portfolio</a></li>
	<li><a href="/" on:click|preventDefault={() => (scroll('contact'))}>Contact</a></li>
</ul>