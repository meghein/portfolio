<script>
  import { afterUpdate } from "svelte";
  import { fade, fly } from 'svelte/transition';
  import { y, windowHeight } from '../store.js';
  import {clickOutside} from '../helpers/clickOutside.js';

  let visible = false;

  afterUpdate(() => {
    const header = document.getElementById('scroll-projects');
    let topHead = header.getBoundingClientRect().top;
    if ($y && topHead < $windowHeight) {
      visible = true
    } else {
      visible = false
    }
  })
  
  let modal = false;
  let show = {};
  let id;

  const projects = [
    {id:'trivia', name:'Trivia Tree', image: 'images/trivia.png', stack: 'ReactJS'},
    {id:'sureSheets', name:'SureSheets', image: 'images/sheets.png', stack: 'ReactJS - KonvaJS, Cloudinary, Node - Express'},
    {id:'cayley', name:'Cayley Thomas', image: 'images/cayley.png', stack: 'ReactJS'},
    {id:'tweeter', name:'Intergalatic Tweeter', image: 'images/tweeter.png', stack: 'HTML, CSS, jQuery, Node, MongoDB'},
  ]

  const preview = {
    trivia: {
      gif: 'images/trivia.gif',
      title: 'Trivia Tree',
      description: 'A client-side SPA (single-page app) built with ReactJS for quick and simple quiz fun across platforms.',
      site: 'https://trivia-tree.netlify.app/',
      github: 'https://github.com/meghein/trivia-tree'
    },
    sureSheets: {
      gif: 'images/sheets.gif',
      title: 'Sure Sheets',
      description: 'Sure Sheets is a system for taking your underutilized screenshots and capturing that all-important textual data for use in an infographic-styled sheet. Whether you’re trying to study or just trying to keep track of those meeting minutes from a lazy Friday afternoon, you can count on NERv05 and TESS to help you organize your work.',
      github: 'https://github.com/meghein/sure-sheets'
    },
    tweeter: {
      gif: 'images/tweeter.png',
      title: 'Intergalatic Tweeter',
      description: 'Tweeter is a simple, yet responsive and user-friendly, single-page Twitter clone. Built using HTML, CSS, JS, jQuery and AJAX for the front-end, and Node, Express and MongoDB for the back-end.',
      // site: 'https://cayleythomas.com/',
      github: 'https://github.com/meghein/tweeter'
    },
    cayley: {
      gif: 'images/cayley.gif',
      title: 'Cayley Thomas',
      description: 'A custom built portfolio for Cayley Thomas, a multidisciplinary singer, songwriter and performer. Worked closely with artist to fine tune their vision.',
      site: 'https://cayleythomas.com/',
      github: 'https://github.com/meghein/cayley-thomas'
    },
    }

	function toggleModal(e) {
    id = e.target.value
    modal = !modal;
  }

  function toggleShow(e) {
    show[e.target.id] = !show[e.target.id]
  }

</script>

<style type="text/scss">
  @import '../styles/Projects.scss';
</style>

<div id='projects'>
  <div id='scroll-projects' class='top'/>
  <h1 id='projects-head' in:fly="{{ x: 100, duration: 2000 }}">
      PROJECTS
  </h1>
  <!-- {#if visible}
  {/if} -->
  <div id='project-list'>
    <ul>
      {#each projects as {id, name, image, stack} }
        <li
          id={id}
          on:mouseenter={toggleShow}
          on:mouseleave={toggleShow}
          style="
          background-image: url('{image}');
          background-size: 100% 100%;
        ">
        {#if show[id]}
        <div transition:fade>
          <h2 transition:fly="{{ x: -100, duration: 1500 }}">{name}</h2>
          <p transition:fly="{{ x: 100, duration: 1500 }}">{stack}</p>
          <button on:click={toggleModal} value={id}>LEARN MORE</button>
        </div>
        {/if}
        </li>
      {/each}
    </ul>
  </div>
  {#if modal}
    <div id="modal">
      <div id='frame' use:clickOutside on:click_outside={toggleModal}>
        <img src='{preview[id].gif}' alt='{preview[id].title} preview'/>
        <h2>{preview[id].title}</h2>
        <p>{preview[id].description}</p>
        <div class='bottom-buttons'>
          <div>
            {#if preview[id].site}
            <a id='site' class='external' href='{preview[id].site}' target="_blank" rel="noopener noreferrer">
              Visit Site
              <i class="fas fa-external-link-alt"/>
            </a>
            {/if}
            <a id='repo' class='external' href='{preview[id].github}' target="_blank" rel="noopener noreferrer">
              View Repository
              <i class="fab fa-github"/>
            </a>
          </div>
          <i class="far fa-window-close"id='close' on:click={toggleModal}></i>
          <!-- <i class="fas fa-times-circle" id='close' on:click={toggleModal}></i> -->
        </div>
      </div>
    </div>
  {/if}
</div>