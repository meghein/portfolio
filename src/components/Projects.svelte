<script>
  import { afterUpdate } from "svelte";
  import { fade, fly } from 'svelte/transition';
  import { y, windowHeight } from './stores.js';
  import {clickOutside} from './clickOutside.js';

  let visible = false;

  afterUpdate(() => {
    const header = document.getElementById('scroll-projects');
    let topHead = header.getBoundingClientRect().top;
    $y
    if (topHead < $windowHeight && topHead > $windowHeight*-.75) {
      visible = true
    } else {
      visible = false
    }
  })
  
  let modal = false;
  let show = {};
  let id;

  const projects = [
    {id:'trivia', name:'Trivia Tree', image: 'images/tandem-test.png', stack: 'ReactJS'},
    {id:'unity', name:'project2'},
    {id:2, name:'project3'},
    {id:3, name:'project4'},
  ]

  const preview = {
    trivia: {
      gif: 'https://github.com/meghein/tandem-test/blob/master/docs/desktop.gif?raw=true',
      title: 'Trivia Tree',
      description: 'A client-side SPA (single-page app) built with ReactJS for quick and simple quiz fun across platforms. The app is deployed using CircleCI and Netlify.',
      site: 'https://the-tandem-test.netlify.app/',
      github: 'https://github.com/meghein/tandem-test'
    },
    unity: {}
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
  {#if visible}
    <h1 id='projects-head' in:fly="{{ x: 1000, duration: 2000 }}" out:fade>
      PROJECTS
    </h1>
  {/if}
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
            <a id='site' class='external' href='{preview[id].site}' target="_blank" rel="noopener noreferrer">
              Visit Site
              <i class="fas fa-external-link-alt"/>
            </a>
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