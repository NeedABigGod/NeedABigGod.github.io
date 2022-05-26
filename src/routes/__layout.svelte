<script lang="ts">
	import '@fontsource/poppins/200.css'
	import '@fontsource/poppins/400.css'
	import Icon from 'svelte-awesome'
	import { bars, envelope, home } from 'svelte-awesome/icons'
	import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
	import legendsHouse from '$lib/icons/legends-house'
	import '../normalize.css'
	import RequiredInfo from '$lib/required-info.svelte'

	let navOpen = false
	function close() {
		navOpen = false
	}
</script>

<nav class:open={navOpen}>
	<button id="open-nav" on:click={() => (navOpen = true)}>
		<Icon data={bars} scale={1.6} label="open nav" />
	</button>
	<div>
		<a id="nav-link-home" href="/" on:click={close}>
			<Icon
				data={legendsHouse}
				scale={3}
				label="nav home"
				class="navIcon home"
			/>
		</a>
		<div class="nav-spacer" />
		<a href="/#buying" class="nav-link" on:click={close}>Buying</a>
		<a href="/#selling" class="nav-link" on:click={close}>Selling</a>
		<a href="/blog" class="nav-link" on:click={close}>Blog</a>
		<a href="/#contact" class="nav-link" on:click={close}>
			<Icon data={envelope} scale={2.25} label="nav contact" class="navIcon" />
		</a>
	</div>
	<button id="close-nav" on:click={() => (navOpen = false)}>
		<Icon data={faTimesCircle} scale={3} label="close nav" />
	</button>
</nav>

<slot />

<footer>
	<div class="footer-inner">
		<RequiredInfo />
	</div>
</footer>

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
		-webkit-backdrop-filter: blur(100px)
		z-index: 9999
		transform: translateX(100vw)
		transition: transform 0.6s
		@media (min-width: $tablet-width)
			flex-direction: row
			justify-content: center
			height: 40px
			background-color: $nav-bar-bg
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
			font-weight: 200
			color: $nav-text
			transition: background-color 0.2s
			@media (min-width: $tablet-width)
				flex: 0 1 auto
				width: auto
				font-size: 1.15rem
				padding: 0 1ch
			&:hover, &:focus
				background-color: $nav-link-focus
				@media (min-width: $tablet-width)
					background-color: $nav-bar-link-focus
	#open-nav
		position: fixed
		top: 12px
		left: -45px
		display: flex
		flex-direction: row
		justify-content: center
		align-items: center
		width: 45px
		height: 60px
		color: $nav-text
		background-color: $nav-open-bg
		border: none
		border-left: $nav-border
		border-bottom: $nav-border
		border-bottom-left-radius: $nav-border-radius
		border-top-left-radius: $nav-border-radius
		z-index: 9000
		@media (min-width: $tablet-width)
			display: none
	#close-nav
		position: absolute
		top: 12px
		right: 6px
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

	footer
		display: flex
		flex-direction: row
		justify-content: center
		min-height: 300px
		background-color: $primary-shade
	.footer-inner
		display: flex
		flex: 0 1 1000px
		justify-content: center
		align-items: flex-end
		padding: 50px 0

	:global
		html
			scroll-behavior: smooth
		body > div
			display: flex
			flex-direction: column
			justify-content: space-between
			min-height: 100vh
		.navIcon
			@media (min-width: $tablet-width)
				width: 30px
			&.home
				fill: $tertiary !important
				transition: fill 0.2s
				&:hover, &:focus
					fill: $text-light !important
</style>
