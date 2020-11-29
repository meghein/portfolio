<script>
  import Icon from 'svelte-awesome';
	import { githubAlt, linkedinSquare, instagram} from 'svelte-awesome/icons';
	
	export let msg = "Let's connect!";
	export let color = '#6a040f';
	export let size = '.8em'
</script>

<style type="text/scss">
	p {
		margin: 0;
		padding-bottom: 2px;
	}
	a:hover{ 
			animation: rotate 1s infinite;
			animation-timing-function: linear;   
		}
		@keyframes rotate {
			0% { transform: rotateY( 180deg ); }
			50% { transform: rotateY(90deg); }
			100% { transform: rotateY(180deg); }
		}
	
</style>

<div className='links' style='font-size: {size}'>
	<p>{msg}</p>
	<div>
		<a href='https://www.instagram.com/meghein/' target='_blank' rel='noreferrer'><Icon data={instagram} scale='1.5' style='color: {color}'/></a>
		<a href='https://github.com/meghein' target='_blank' rel='noreferrer'><Icon data={githubAlt} scale='1.5' style='color: {color}'/></a>
		<a href='https://www.linkedin.com/in/meghan-hein/' target='_blank' rel='noreferrer'><Icon data={linkedinSquare} scale='1.4' style='color: {color}'/></a>
	</div>
</div>