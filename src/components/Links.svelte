<script>
  import Icon from 'svelte-awesome';
	import { githubAlt, linkedinSquare, instagram} from 'svelte-awesome/icons';
	
	export let msg = "Let's connect!";
	export let style = 'color: #6a040f;'

</script>

<div className='links'>
	<p>{msg}</p>
	<div>
		<a href='https://www.instagram.com/meghein/' target='_blank' rel='noreferrer'><Icon data={instagram} scale='2' style={style}/></a>
		<a href='https://www.linkedin.com/in/meghan-hein/' target='_blank' rel='noreferrer'><Icon data={linkedinSquare} scale='2' style={style}/></a>
		<a href='https://github.com/meghein' target='_blank' rel='noreferrer'><Icon data={githubAlt} scale='2' style={style}/></a>
	</div>
</div>