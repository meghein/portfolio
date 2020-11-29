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
    padding-top: .2em;
    padding-left: 1.5em;
    padding-right: 1.5em;
    border-top: 2px solid #6a040f;
    p {
      font-size: .7em;
    }
  }
</style>

<footer>
  <p className='name'>{@html '© 2020 Meghan Hein</br>All rights reserved'}</p>
  <Links/>
</footer>