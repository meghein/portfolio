<script>
  import {clickOutside} from './clickOutside.js';
  import { fade, fly } from 'svelte/transition';
  
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
      site: 'https://the-tandem-test.netlify.app/'
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
  #projects {
    min-height: 95vh;
    background: linear-gradient(176deg, #FBEEC1 70%, #006f69 calc(70% + 2px));
    h1 {
    padding-top: 50px;
    }
    #project-list {
      width: 100%;
      height: 100%;
      display: grid;
      place-content: center;
      ul {
        display: grid;
        grid-template:
          [row1-start] "a1 a2" 1fr[row1-end]
          [row2-start] "a3 a4" 1fr [row2-end]
          / 1fr 1fr;
        gap: 10px;
        list-style-type: none;
        padding-inline-start: 0;
        width: 100%;
        margin-bottom: 90px;
        li {
          border: 1px dotted #da862d;
          min-width: 250px;
          min-height: 250px;
          div {
            display: grid;
            grid-template-rows: 1fr 1fr 1fr;
            text-align: center;
            background-color: #da862dd2;
            padding: 0;
            width: 100%;
            height: 100%;
            h2 {
              align-self: end;
              margin: 0;
            }
            button {
              justify-self: center;
              width: 50%;
              height: 50%;
              &:hover{ 
              animation: pulse 2s infinite;
              animation-timing-function: linear;   
              }
              @keyframes pulse {
              0% { transform: scale(1); }
              50% { transform: scale(1.2); }
              100% { transform: scale(1); }
              }
            }
          }
        }
      }
    }
    #modal {
      display: grid;
      place-items: center;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgb(0,0,0); /* Fallback color */
      background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
      #frame {
        max-width: 600px;
        max-height: 600px;
        background-color: white;
        display: grid;
        // place-items: center;
        img {
          max-width: 100%;
        }
      }
    }
  }
</style>

<div id='projects'>
  <h1>PROJECTS</h1>
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
        <a href='{preview[id].site}' target="_blank" rel="noopener noreferrer">View Site</a>
        <button on:click={toggleModal}>X</button>
      </div>
    </div>
  {/if}
</div>