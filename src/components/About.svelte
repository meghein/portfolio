<script>
  import { afterUpdate, onMount } from "svelte";
  import { fade, fly } from 'svelte/transition';
  import { y, windowHeight } from './stores.js';

  let visible = false;

  afterUpdate(() => {
    const header = document.getElementById('scroll-about');
    let topHead = header.getBoundingClientRect().top;
    $y
    if (topHead < $windowHeight && topHead > $windowHeight*-.75) {
      visible = true
    } else {
      visible = false
    }
  })
  
</script>

<style type="text/scss">
  #about {
    position: relative;
    min-height: 95vh;
    padding-top: 60px;
    background: linear-gradient(195deg,#da862d 39%, #FBEEC1 calc(39% + 2px));
    .top {
    height: 0px;
    }
  }
</style>

<div id='about'>
  <div id='scroll-about' class='top'/>
  {#if visible}
  <h1 id='about-head' in:fly="{{ x: 1000, duration: 2000 }}" out:fade>
    ABOUT
  </h1>
  {/if}
</div>