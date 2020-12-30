<script>
  import { afterUpdate } from "svelte";
  import { fade, fly } from 'svelte/transition';
  import { y, windowHeight } from '../store.js';
  import {clickOutside} from '../helpers/clickOutside.js';

  let visible = false;
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
      mp4: 'images/trivia.mp4',
      webm: 'images/trivia.webm',
      png: 'images/trivia.png',
      title: 'Trivia Tree',
      description: 'A client-side SPA (single-page app) for quick and simple quiz fun across platforms built with ReactJS and using Open Trivia Database API.',
      site: 'https://trivia-tree.netlify.app/',
      github: 'https://github.com/meghein/trivia-tree'
    },
    sureSheets: {
      mp4: 'images/sheets.mp4',
      webm: 'images/sheets.webm',
      png: 'images/sheets.png',
      title: 'Sure Sheets',
      description: 'Built primarily with KonvaJS for full customizable whiteboard capabilities, Sure Sheets helps users build study resources in the age of online learning. The back-end was built with Cloudinary, PostgreSQL, Node and Express and the front-end was built with ReactJS utilizing a multitude of libraries.',
      github: 'https://github.com/meghein/sure-sheets'
    },
    tweeter: {
      mp4: 'images/tweeter.mp4',
      webm: 'images/tweeter.webm',
      png: 'images/tweeter.png',
      title: 'Intergalatic Tweeter',
      description: 'Tweeter is a simple, yet responsive and user-friendly, single-page Twitter clone. Built using HTML, CSS, JS, jQuery and AJAX for the front-end, and Node, Express and MongoDB for the back-end.',
      github: 'https://github.com/meghein/tweeter'
    },
    cayley: {
      mp4: 'images/cayley.mp4',
      webm: 'images/cayley.webm',
      png: 'images/cayley.png',
      title: 'Cayley Thomas',
      description: 'A custom portfolio for a multidisciplinary performer that integrates external sources (Spotify, Youtube, Mailchimp, etc). This project was built and deployed in a short window to replace the client\'s previous site.',
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

  afterUpdate(() => {
    const header = document.getElementById('scroll-projects');
    let topHead = header.getBoundingClientRect().top;
    if ($y && topHead < $windowHeight && topHead > $windowHeight*-.75) {
      visible = true
    } else {
      visible = false
    }
  })

</script>

<style type="text/scss">
  @import '../styles/Projects.scss';
</style>

<div id='projects'>
  <div id='scroll-projects' class='top'/>
  <!-- IF THE FONT SIZE OF 'PROJECTS' IS CHANGED, YOU MUST CHANGE PLACEHOLDER HEIGHT TO MATCH: -->
  <div class='placeholder' style='{visible ? 'display:none' : 'height:148px'}'/>
  {#if visible}
  <h1 id='projects-head' in:fade="{{ duration: 1000 }}">
      Projects
  </h1>
  {/if}
  <div id='project-list'>
    <ul>
      {#each projects as {id, name, image, stack} }
        <li
          id={id}
          on:mouseenter={toggleShow}
          on:mouseleave={toggleShow}
          style="background-image: url('{image}');"
        >
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
        <video autoplay loop muted playsinline poster='{preview[id].png}'>
          <source src='{preview[id].webm}' type='video/webm'>
          <source src='{preview[id].mp4}' type='video/mp4'>
          <img src='{preview[id].png}' alt='Sorry, your browser does not support embedded videos'/>
        </video>
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
        </div>
      </div>
    </div>
  {/if}
</div>