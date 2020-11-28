<script>
  import Project1 from './Projects1.svelte'
  const projects = [
    {id: 1, name: 'project1'},
    {id:2, name: 'project2'},
    {id:3, name: 'project3'},
    {id:4, name: 'project4'}
  ]
  let modal = false;

	function toggle() {
		modal = !modal;
	}
</script>

<style>
  #projects {
    min-height: 95vh;
    border: 1px dotted red;
    margin-top: 80px;
  }
  #projects h1 {
    margin-top: 50px;
  }
  #project-list {
    width: 100%;
    height: 100%;
    display: grid;
    place-content: center;
  }
  ul {
    display: grid;
    grid-template:
      [row1-start] "a1 a2" 1fr[row1-end]
      [row2-start] "a3 a4" 1fr [row2-end]
      / 1fr 1fr;
    gap: 10px;
    list-style-type: none;
    padding-inline-start: 0;
    width: 100%
    
  }
  li {
    border: 1px dotted red;
    min-width: 250px;
    min-height: 250px;
  }
  #modal {
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  }
</style>

<div id='projects'>
  <h1>PROJECTS</h1>
  <div id='project-list'>
    <ul>
      {#each projects as {id, name} }
        <li >
          <button on:click={toggle}>
            {name}
          </button>
        </li>
      {/each}
    </ul>
  </div>
  {#if modal}
    <div id="modal">
      <iframe title='iframe'>
        <button on:click={toggle}>
          Log out
        </button>
      </iframe>
    </div>
  {/if}
  
</div>