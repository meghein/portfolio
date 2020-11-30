<script>
	export let msg = "Let's connect!";
	export let color = '#6a040f';
	export let size = '.8em';

	const icons = [
		{icon: 'fa-instagram', link: 'https://www.instagram.com/meghein/'},
		{icon: 'fa-github-alt', link: 'https://github.com/meghein/'},
		{icon: 'fa-linkedin', link: 'https://www.linkedin.com/in/meghan-hein/'},
	]

</script>

<style type="text/scss">
	#link-header {
		margin: 0;
		padding-bottom: 2px;
	}	
	.fab {
		font-size: 2em;
		&:hover{
			animation: flip 2s infinite;
		}
		@keyframes flip {
			0% { transform: scaleX(1); }
			50% { transform: scaleX(-1); }
			100% { transform: scaleX(1); }
		}
	}
</style>

<div class='links' style='font-size: {size}'>
	<p id='link-header'>{msg}</p>
	<div>
		{#each icons as {icon, link} }
		<a href='{link}' target='_blank' rel='noreferrer'>
				<i
					class="fab {icon}"
					aria-hidden="true"
					style='color: {color}'
				/>
			</a>
    {/each}
	</div>
</div>