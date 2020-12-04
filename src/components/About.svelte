<script>
  import { afterUpdate } from "svelte";
  import { fade, fly } from 'svelte/transition';
  import { y, windowHeight } from '../store.js';
  import PdfViewer from 'svelte-pdf';

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
  <h1 id='about-head' in:fly="{{ x: -1000, duration: 2000 }}" out:fade>
    ABOUT
  </h1>
  {/if}
  <img src="https://i.pinimg.com/originals/b7/77/60/b7776009c68eeac18729480ac34f51a6.gif" alt="big mistake">
  <div id='bio'>
    <p>Hi there! Thanks for visiting my portfolio!</p>
    
    <p>I'm a web developer with a diverse background ranging from direct action activism in the high seas to forging silver in the Bajio mountains of central Mexico. I recently graduated from <a href='https://www.lighthouselabs.ca/' target='_blank' rel='noreferrer'>Lighthouse Labs'</a> immersive web development boot camp, which reinforced my infatuation with the programmatic potential in shaping the future.</p>
      
    <p>Living on the westcoast of Canada, dwelling at the intersection of creativity and logic, and inspired equally by complex code and sleek design - I write code and fervently build upon my development dexterity every single day.</p>
    <p>Want to know more? <a href='https://www.coursereport.com/blog/how-meghan-became-a-digital-nomad-with-lighthouse-labs' target='_blank' rel='noreferrer'>Click here to read an interview </a>I did with Course Report after graduating from Lighthouse Labs.</p>

    <button on:click={toggleModal}>View my resume here</button>    
  </div>
  {#if resume}
  <div id='resume' in:fly="{{ y: 1000, duration: 1000 }}" out:fly="{{ y: -1000, duration: 1000 }}">
    <PdfViewer url='images/resume.pdf' close={toggleModal}/>
  </div>
  {/if}
</div>

<style type="text/scss">
  @import '../styles/About.scss';
</style>