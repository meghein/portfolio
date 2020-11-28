<script>
  import Icon from 'svelte-awesome';
  import { githubAlt, linkedinSquare, instagram} from 'svelte-awesome/icons';
</script>

<style>
footer {
  display: flex;
  justify-content: space-between;
  position: sticky;
  width: 80%;
  margin: auto;
  border: 1px dotted red;
}

</style>

<footer>
  <p className='name'>{@html '© 2020 Meghan Hein</br>All rights reserved'}</p>
  <div className='links'>
    Let's connect!
    <a href='https://www.instagram.com/meghein/' target='_blank' rel='noreferrer'><Icon data={instagram} scale='2'/></a>
    <a href='https://www.linkedin.com/in/meghan-hein/' target='_blank' rel='noreferrer'><Icon data={linkedinSquare} scale='2'/></a>
    <a href='https://github.com/meghein' target='_blank' rel='noreferrer'><Icon data={githubAlt} scale='2'/></a>
  </div>
</footer>