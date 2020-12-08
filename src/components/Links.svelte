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
a, a:visited {
	color: #6a040f;
	text-decoration: none;
}

	#link-header {
		margin: 0;
		padding-bottom: 2px;
		font-size: .9em;
	}
	.icons {
		&:hover > a:not(:hover) {
			opacity: 0.5;
		}
		.fab {
			font-size: 1.2em;
			padding: 2px;
			&:hover{
				animation: shake .5s 1 linear;
			}
			@keyframes shake{
				0%{ transform:rotate(10deg) scale(1.1) }
				20%{ transform:rotate(-10deg) scale(1.1) }
				40%{ transform:rotate(10deg) scale(1.1) }
				60%{ transform:rotate(-10deg) scale(1.1) }
				80%{ transform:rotate(10deg) scale(1.1) }
				100%{ transform:rotate(0) scale(1.1) }
			}
	}
	}
</style>

<div class='links' style='font-size: {size}'>
	<p id='link-header'>{msg}</p>
	<div class='icons'>
		{#each icons as {icon, link} }
		<a
			href='{link}'
			target='_blank'
			rel='noreferrer'
			class="fab {icon}"
			aria-hidden="true"
			style='color: {color}'
			>
			</a>
    {/each}
	</div>
</div>