<script>
  import Links from './Links.svelte'
</script>

<style type="text/scss">
  footer {
    display: flex;
    justify-content: space-between;
    position: sticky;
    width: 80%;
    margin: auto;
    
  }
</style>

<footer>
  <p className='name'>{@html '© 2020 Meghan Hein</br>All rights reserved'}</p>
  <Links/>
</footer>