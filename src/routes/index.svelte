<script lang="ts">
	import { tick } from 'svelte'
	import About from '$lib/About.md'
	import Contact from '$lib/Contact.md'
	import Service01 from '$lib/services/Service01.md'
	import Service02 from '$lib/services/Service02.md'
	import Service03 from '$lib/services/Service03.md'
	import Project01 from '$lib/projects/Project01.md'
	import Project02 from '$lib/projects/Project02.md'
	import Project03 from '$lib/projects/Project03.md'
	import Icon from 'svelte-awesome'
	import { home, angleDoubleRight, angleDoubleLeft } from 'svelte-awesome/icons'
	import '../normalize.css'
	import '@fontsource/niramit/index.css'
	import '@fontsource/bellota/index.css'

	let services = [Service01, Service02, Service03]
	let activeService = 0
	let serviceFlowDirection = 1

	async function scrollServices(step: number) {
		serviceFlowDirection = step >= 0 ? 1 : -1
		const target = activeService + step
		const length = services.length
		await tick()
		activeService = ((target % length) + length) % length
	}

	let projects = [Project01, Project02, Project03]
	let activeProject = 0
	let projectFlowDirection = 1

	async function scrollProjects(step: number) {
		projectFlowDirection = step >= 0 ? 1 : -1
		const target = activeProject + step
		const length = projects.length
		await tick()
		activeProject = ((target % length) + length) % length
	}
</script>

<nav>
	<div>
		<a id="nav-link-home" href="/"><Icon data={home} scale="2" /></a>
		<div class="spacer" />
		<a href="#services" class="nav-link">Services</a>
		<a href="#showcase" class="nav-link">Showcase</a>
		<a href="#contact" class="nav-link">Contact</a>
	</div>
</nav>

<div id="landing" class="section sec-about">
	<div class="section-card">
		<About />
		<a href="/about" class="link-continue bttn-link">Full Bio ➧</a>
	</div>
</div>

<div class="section sec-services">
	<div class="section-card">
		<div class="sec-service">
			<svelte:component
				this={services[activeService]}
				transitionScale={serviceFlowDirection}
			/>
			<button class="sec-nav back" on:click={() => scrollServices(-1)}>
				<Icon data={angleDoubleLeft} scale="2" />
			</button>
			<button class="sec-nav frwd" on:click={() => scrollServices(1)}>
				<Icon data={angleDoubleRight} scale="2" />
			</button>
		</div>
	</div>
</div>

<div class="section sec-projects">
	<div class="section-card">
		<div class="sec-project">
			<svelte:component
				this={projects[activeProject]}
				transitionScale={projectFlowDirection}
			/>
			<button class="sec-nav back" on:click={() => scrollProjects(-1)}>
				<Icon data={angleDoubleLeft} scale="2" />
			</button>
			<button class="sec-nav frwd" on:click={() => scrollProjects(1)}>
				<Icon data={angleDoubleRight} scale="2" />
			</button>
		</div>
	</div>
</div>

<div class="section sec-contact">
	<div class="section-card">
		<Contact />
	</div>
</div>

<style lang="sass">
  :global
    html
      font-size: 16pt
      font-family: 'Niramit', sans-serif
    body
      background-color: $site-bg
    h1, h2, h3
      font-family: 'Bellota', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
    a
      text-decoration: none
    .bttn-link
      transition: background-color 0.2s
      padding: 0.8ex 0.8ch
      color: $bttn-link-text
      background-color: $bttn-link-bg
      border-radius: $bttn-link-radius
      &:hover, &:focus
        background-color: $bttn-link-bg-hover
    .link-continue
      position: absolute
      right: 10px
      bottom: 10px
    #svelte
      display: flex
      flex-direction: column
      align-items: center
      padding-bottom: 40vh
  
  /* */

  nav
    display: flex
    flex: 0 0 30px
    align-self: stretch
    flex-direction: row
    justify-content: center
    position: fixed
    top: 0
    left: 0
    right: 0
    color: $nav-text
    filter: drop-shadow(0 0 5px black)
    z-index: 9999
    &> div
      display: flex
      flex: 0 1 800px
      flex-direction: row
      align-items: flex-start
      overflow: hidden
      @media (min-width: $tablet-width)
        flex: 0 1 980px
    a
      box-sizing: border-box
      display: flex
      justify-content: center
      align-items: center
      padding: 4px 6px
      color: inherit
      background-color: $nav-bg
      border: $nav-border
      border-top: none
      transition: all 0.2s
      &:hover, &:focus
        background-color: $nav-link-focus
  
  #nav-link-home
    flex: 0 0 60px
    height: 40px
    border-left: none
    border-bottom-right-radius: $nav-border-radius
    @media (min-width: $tablet-width)
      border-left: $nav-border
    border-bottom-left-radius: $nav-border-radius
  .nav-link
    margin-left: 4px
    font-size: 0.9rem
    border-radius: 0 0 $nav-border-radius $nav-border-radius
    &:last-child
      padding-right: 10px
      border-right: none
      border-bottom-right-radius: 0
      @media (min-width: $tablet-width)
        padding-right: 6px
        border-right: $nav-border
        border-bottom-right-radius: $nav-border-radius

  .section
    display: flex
    flex-direction: column
    justify-content: flex-start
    align-items: center
    padding-bottom: 50px
    width: 100vw
  .section-card
    position: relative
    display: flex
    flex: 0 1 auto
    flex-direction: column
    margin-top: 30px
    width: calc(100vw - 20px)
    color: $card-text
    background-color: $card-bg
    border-radius: 6px
    filter: drop-shadow(0 0 5px black)
    overflow: hidden
    :global
      p, h1, h2, h3, h4, h5, h6
        padding: 0 10px
    @media (min-width: $tablet-width)
      max-width: 1000px
  .sec-service, .sec-project
    position: relative
    height: min(calc(100vh - 180px), 600px)
  .sec-nav
    transition: background-color 0.2s
    position: absolute
    bottom: 0
    width: 60px
    color: $action-text
    background-color: $action-bg
    border: $action-border-width solid $action-border-color
    border-bottom: none
    &:hover, &:focus
      background-color: $action-bg-hover
  .sec-nav.back
    left: 0
    border-top-right-radius: $action-border-radius
    border-left: none
  .sec-nav.frwd
    right: 0
    border-top-left-radius: $action-border-radius
    border-right: none
  #landing
    padding-top: 20px
    height: calc(100vh - 230px)
    background-image: url('/img/backdrop.jpg')
    background-attachment: fixed
    background-repeat: no-repeat
    background-position: center
    background-size: cover
    @media (min-width: $tablet-width)
      justify-content: center
      .section-card
        flex: 0 1 500px

  .spacer
    flex: 1 1 100%

  //@media screen and (max-width: wide-tablet-width)
</style>
