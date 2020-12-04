<script>
  import { afterUpdate } from "svelte";
  import { fade, fly, scale, blur } from 'svelte/transition';
  import { y, windowHeight } from '../store.js';
  import {clickOutside} from '../helpers/clickOutside.js';
  import { elasticOut, expoInOut } from 'svelte/easing';

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
    resume = !resume
  }
  
</script>

<div id='about'>
  <div id='scroll-about' class='top'/>
  {#if visible}
  <h1 id='about-head' in:fly="{{ x: -500, duration: 3000 }}" out:fade>
    ABOUT
  </h1>
  <div id='profile'>
    <img src="images/profile.jpeg" alt="my face" in:blur="{{duration: 1500, delay: 500}}" out:fly="{{x: -200, duration: 500}}">
    <div
      id='bio'
      in:fly="{{x:200, duration: 1000, delay: 800}}"
      out:fade>
      <p>Hi there! Thanks for visiting my portfolio!</p>
      
      <p>I'm a web developer with a diverse background ranging from direct action activism in the high seas to forging silver in the Bajio mountains of central Mexico. I recently graduated from <a href='https://www.lighthouselabs.ca/' target='_blank' rel='noreferrer'>Lighthouse Labs'</a> immersive web development boot camp, which reinforced my infatuation with the programmatic potential in shaping the future.</p>
        
      <p>Living on the westcoast of Canada, dwelling at the intersection of creativity and logic, and inspired equally by complex code and sleek design - I write code and fervently build upon my development dexterity every single day.</p>
      <p>Want to know more? <a href='https://www.coursereport.com/blog/how-meghan-became-a-digital-nomad-with-lighthouse-labs' target='_blank' rel='noreferrer'>Click here to read an interview </a>I did with Course Report after graduating from Lighthouse Labs.</p>
  
      <button on:click={toggleModal}>View my resume here</button>    
    </div>
  </div>
  {#if resume}
  <div class='modal' out:fly="{{ y: -1000, duration: 1000 }}">
    <div id='resume' in:fly="{{ y: 1000, duration: 1000 }}" use:clickOutside on:click_outside={toggleModal}>
      <i id='close' on:click={toggleModal} class="far fa-times-circle"></i>
      <iframe title='Meghan Hein 2020' src="images/resume.pdf" width={window.innerWidth - 200} height={window.innerHeight - 60}>
      </iframe>
    </div>
  </div>
  {/if}
  {/if}
</div>

<style type="text/scss">
  @import '../styles/About.scss';
</style>