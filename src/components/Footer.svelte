<script>
  import Links from './Links.svelte'
</script>

<style type="text/scss">
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    width: 80%;
    margin: auto;
    margin-bottom: 1em;
    padding: 0 1.5em 0 1.5em;
    border-top: 2px solid #6a040f;
    p {
      font-size: .8em;
    }
  }
</style>

<footer id='footer'>
  <p className='name'>{@html '© 2020 Meghan Hein</br>All rights reserved'}</p>
  <Links/>
</footer>