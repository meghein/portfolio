<script>
  import { afterUpdate } from "svelte";
  import { fade, fly } from 'svelte/transition';
  import { y, windowHeight } from '../store.js';
  import {clickOutside} from '../helpers/clickOutside.js';
  import { cubicOut, elasticOut } from 'svelte/easing';

  let visible = false;
  let resume;

  afterUpdate(() => {
    const header = document.getElementById('scroll-about');
    let topHead = header.getBoundingClientRect().top;
    if ($y && topHead < $windowHeight && topHead > $windowHeight*-.75) {
      visible = true
    } else {
      visible = false
    }
  })

  function toggleModal() {
    resume = !resume
  }
  
</script>

<div id='about'>
  <div id='scroll-about' class='top'/>
  {#if visible}
  <h1 id='about-head' in:fly="{{ x: -50, duration: 3000 }}" out:fade>
    ABOUT
  </h1>
  
  <div id='profile'>
    <img src="images/cutout.png" alt="my face" in:fly="{{x:-100, duration: 1000, delay: 1200, easing: elasticOut}}" out:fly="{{x: -100, duration: 500}}"> 
    <div
      id='bio'
      in:fly="{{x:100, duration: 1000, easing: cubicOut}}"
      out:fade
    >
      <p>Hi there! Thanks for visiting my portfolio! <br/><br/>
        
        I'm a web developer with a diverse background ranging from direct action activism in the high seas to forging silver in the Bajio mountains of central Mexico. I recently graduated from <a href='https://www.lighthouselabs.ca/' target='_blank' rel='noreferrer'>Lighthouse Labs'</a> immersive web development boot camp, which reinforced my infatuation with the programmatic potential in shaping the future.<br/><br/>
        
        Living on the westcoast of Canada, dwelling at the intersection of creativity and logic, and inspired equally by complex code and sleek design - I write code and fervently build upon my development dexterity every day.<br/><br/>
        
        Want to know more? <a href='https://www.coursereport.com/blog/how-meghan-became-a-digital-nomad-with-lighthouse-labs' target='_blank' rel='noreferrer'>Click here to read an interview </a>I did with Course Report.
      </p>
  
      <!-- <a href='images/resume.pdf' download='Meghan_Hein_2020'>Download resume</a> -->

      <!-- MOVE ALL THIS TO RESPONSIVE DESKTOP DESIGN -->
      <button on:click={toggleModal}>View resume</button>
    </div>
  </div>
  {#if resume}
  <div class='modal' out:fly="{{ y: -500, duration: 1000 }}">
    <div id='resume' in:fly="{{ y: 500, duration: 1000 }}" use:clickOutside on:click_outside={toggleModal}>
      <i id='close' on:click={toggleModal} class="far fa-times-circle"></i>
      <iframe title='Meghan Hein 2020' src="images/resume.pdf" width={window.innerWidth - 60} height={window.innerHeight - 60} frameborder='0'>
      </iframe>
    </div>
  </div>
  {/if}
  {/if}
</div>

<style type="text/scss">
  @import '../styles/About.scss';
</style>