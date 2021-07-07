<script lang="ts">
	import { tick } from 'svelte'
	import About from '$lib/about.md'
	import Contact from '$lib/contact.md'
	import Icon from 'svelte-awesome'
	import { bars, angleDoubleRight, angleDoubleLeft } from 'svelte-awesome/icons'
	import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
	import '../normalize.css'
	import '@fontsource/niramit/index.css'
	import '@fontsource/bellota/index.css'
	// Service Excerpts
	import ExBusinessAdmin from '$lib/excerpts/business-admin.md'
	import ExEdConsult from '$lib/excerpts/education-consultation.md'
	import ExProjectManagement from '$lib/excerpts/project-management.md'
	// Project Excerpts
	import ExCarriageHouse from '$lib/excerpts/carriage-house.md'
	import ExGroundSupport from '$lib/excerpts/ground-support.md'
	import ExMasterBath from '$lib/excerpts/master-bath.md'

	let navOpen = false
</script>

<nav class:open={navOpen}>
	<div>
		<a id="nav-link-home" href="/">EJ McGwire</a>
		<div class="nav-spacer" />
		<a href="#about" class="nav-link">About</a>
		<a href="#services" class="nav-link">Services</a>
		<a href="#showcase" class="nav-link">Showcase</a>
		<a href="#contact" class="nav-link">Contact</a>
	</div>
	<button id="close-nav" on:click={() => navOpen = false}><Icon data={faTimesCircle} scale="3" label="close nav"/></button>
</nav>

<button id="open-nav" on:click={() => navOpen = true}><Icon data={bars} scale="2" label="open nav"/></button>

<div class="section landing outer">
	<div class="landing inner">
		<h1>EJ McGwire</h1>
		<div class="landing-links">
			<a href="#services">Services</a>
			<a href="#showcase">Showcase</a>
			<a href="#contact">Contact</a>
		</div>
	</div>
</div>

<div class="section about outer">
	<div class="about inner">
		<About />
		<a href="/about" class="link-continue bttn-link">Full Bio ➧</a>
	</div>
</div>

<div class="section services outer">
	<div class="services inner">
	</div>
</div>

<div class="section showcase outer">
	<div class="showcase inner">
	</div>
</div>

<div class="section contact outer">
	<div class="contact inner">
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
			&>*
				max-width: 100%
				overflow-x: hidden
		#svelte
			display: flex
			flex-direction: column
			align-items: center
			padding-bottom: 40vh
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
		.section img
			max-width: 100%
	
	/* */

	nav
		position: fixed
		top: 0
		left: 0
		right: 0
		display: flex
		flex-direction: column
		height: 100vh
		color: $nav-text
		background-color: $nav-bg
		z-index: 9999
		transform: translateX(100vw)
		transition: transform 0.6s
		@media (min-width: $tablet-width)
			flex-direction: row
			justify-content: center
			height: 40px
			transform: translateX(0)
			transition: none
		&.open
			transform: translateX(0)
		&> div
			display: flex
			flex: 0 1 100%
			flex-direction: column
			align-items: center
			overflow: hidden
			padding: 10vh 0
			@media (min-width: $tablet-width)
				flex: 0 1 980px
				flex-direction: row
				align-items: stretch
				padding: 0
		a
			display: flex
			flex: 0 0 4ex
			width: 100%
			justify-content: center
			align-items: center
			font-size: 1.4rem
			color: $nav-text
			transition: background-color 0.2s
			@media (min-width: $tablet-width)
				flex: 0 1 auto
				width: auto
				font-size: 1.15rem
				padding: 0 1ch
			&:hover, &:focus
				background-color: $nav-link-focus
	#open-nav
		position: fixed
		top: 0
		right: 0
		width: 60px
		height: 60px
		color: $nav-text
		background-color: $coffee
		border: none
		border-bottom-left-radius: $nav-border-radius
		z-index: 9000
		@media (min-width: $tablet-width)
			display: none
	#close-nav
		position: absolute
		top: 0
		right: 0
		width: 60px
		height: 60px
		color: $nav-text
		background-color: transparent
		border: none
		border-bottom-left-radius: $nav-border-radius
		@media (min-width: $tablet-width)
			display: none
	.nav-spacer
		display: none
		flex: 1 1 auto
		@media (min-width: $tablet-width)
			display: flex

	.section
		display: flex
		flex-direction: column
		width: 100%
	.landing
		color: $light-text
	.landing.outer
		flex: 0 0 90vh
		justify-content: center
		align-items: center
		position: relative
		background-color: $blue-sapphire
	.landing.inner
		display: flex
		flex-direction: column
		justify-content: center
		align-items: center
	.landing h1
		font-size: 2.5em
	.landing-links
		display: flex
		flex-direction: rowr
		a
			display: flex
			justify-content: center
			align-items: center
			width: 7.3ch
			height: 7.3ch
			color: $light-text
			border: 4px solid $light-text
			border-radius: 9999px

	//@media screen and (max-width: wide-tablet-width)
</style>
