<script lang="ts">
	import Icon from 'svelte-awesome'
	import { bars } from 'svelte-awesome/icons'
	import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
	import '../normalize.css'
	import '@fontsource/niramit/index.css'
	import '@fontsource/bellota/index.css'

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
	<button id="close-nav" on:click={() => (navOpen = false)}>
		<Icon data={faTimesCircle} scale="3" label="close nav" />
	</button>
</nav>

<button id="open-nav" on:click={() => (navOpen = true)}>
	<Icon data={bars} scale="2" label="open nav" />
</button>

<slot />

<style lang="sass">
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
			border-bottom: $nav-border
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
		background-color: $nav-bg
		border: none
		border-left: $nav-border
		border-bottom: $nav-border
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
</style>
