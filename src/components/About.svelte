<script>
  import { afterUpdate } from "svelte";
  import { fade, fly } from 'svelte/transition';
  import { y, windowHeight } from '../store.js';

  let visible = false;
  let resume;

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

  function toggleModal() {
    resume = !resume;
  }
  
</script>

<style type="text/scss">
  @import '../styles/About.scss';
</style>

<div id='about'>
  <div id='scroll-about' class='top'/>
  {#if visible}
  <h1 id='about-head' in:fly="{{ x: -1000, duration: 2000 }}" out:fade>
    ABOUT
  </h1>
  {/if}
  <div id='bio'>
    <p>Hi there! Thanks for visiting my portfolio!</p>
    
    <p>I'm a web developer with a diverse background ranging from direct action activism in the high seas to forging silver in the Bajio mountains of central Mexico. I recently graduated from <a href='https://www.lighthouselabs.ca/' target='_blank' rel='noreferrer'>Lighthouse Labs'</a> immersive web development boot camp, which reinforced my infatuation with the programmatic potential in shaping the future.</p>
      
    <p>Living on the westcoast of Canada, dwelling at the intersection of creativity and logic, and inspired equally by complex code and sleek design - I write code and fervently build upon my development dexterity every single day.</p>
    <p>Want to know more? <a href='https://www.coursereport.com/blog/how-meghan-became-a-digital-nomad-with-lighthouse-labs' target='_blank' rel='noreferrer'>Click here to read an interview </a>I did with Course Report after graduating from Lighthouse Labs.</p>

    <button on:click={toggleModal}>View my resume here</button>
      
  </div>
  {#if resume}
  <pdf-viewer>HELLO</pdf-viewer>
  <iframe src="images/resume.pdf" frameborder="0" title='Meghan Hein 2020'/>
  <!-- <a href='resume' target='_blank' rel='noreferrer'>View my resume here</a> -->
  {/if}
</div>