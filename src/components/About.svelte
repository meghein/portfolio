<script>
  import { afterUpdate } from "svelte";
  import { fade, fly } from 'svelte/transition';
  import { y, windowHeight } from './stores.js';

  let visible = true;

  afterUpdate(() => {
    const header = document.getElementById('about-head');
    const topHead = header.getBoundingClientRect().top;
    // if (topHead < $windowHeight/5 && topHead > $windowHeight*-.75) {
    //   visible = !visible
    // }
    console.log(header)
  })
  
</script>

<style type="text/scss">
  #about {
    position: relative;
    min-height: 95vh;
    padding-top: 60px;
    background: linear-gradient(195deg,#da862d 39%, #FBEEC1 calc(39% + 2px));
    h1 {
    padding-top: 40px;
    }
  }
</style>

<div id='about'>
{#if visible}
  <h1 id='about-head' in:fly="{{ y: 200, duration: 2000 }}" out:fade>ABOUT</h1>
{/if}
</div>