<script lang="ts">
	import '@fontsource/poppins/200.css'
	import '@fontsource/poppins/400.css'
	import '$lib/styles/normalize.css'
	import '$lib/styles/global.sass'

	// Currently not supporting page transitions because they were not behaving terribly well
	import PageTransition from '$lib/util/PageTransition.svelte'
	import RequiredInfo from '$lib/required-info.svelte'

	import IconClose from '$lib/icons/Close.svelte'
	import IconMail from '$lib/icons/Mail.svelte'
	import IconMenu from '$lib/icons/Menu.svelte'
	import ImgLogo from '$lib/img/logo.png'
	import ImgPbSqWhite from '$lib/img/pbsq-white.png'

	import { page } from '$app/stores'
	import { fly, slide } from 'svelte/transition'

	let navOpen = false
	function close() {
		navOpen = false
	}
</script>

<nav class:open={navOpen}>
	<button id="open-nav" on:click={() => (navOpen = true)}>
		<div class="icon-menu-container"><IconMenu /></div>
	</button>
	<div>
		<a id="nav-link-home" href="/" on:click={close}>
			<img src={ImgLogo} alt="Home Shortcut" />
		</a>
		<div class="nav-spacer" />
		<a href="/real-estate" class="nav-link" on:click={close}>Real Estate</a>
		<a href="/consulting" class="nav-link" on:click={close}>Consulting</a>
		<a href="/blog" class="nav-link" on:click={close}>Blog</a>
		<a href="/publicsq" class="nav-link" on:click={close}>
			<img id="public-sq-nav" src={ImgPbSqWhite} alt="Public Square Affiliate Link" />
		</a>
		<a href="/#contact" class="nav-link" on:click={close}>
			<div class="icon-mail-container"><IconMail /></div>
		</a>
	</div>
	<button id="close-nav" on:click={() => (navOpen = false)}>
		<div class="icon-close-container"><IconClose /></div>
	</button>
</nav>

{#if $page.data.title != undefined}
	<div class="section landing outer" transition:slide={{duration: 600}}>
		<div class="landing inner">
			<div class="landing upper-banner">
				<div class="title-div">
					{#key $page.data.title}
						<div
							class="transition-wrapper"
							in:fly|local={{ x: 200, delay: 400, duration: 400 }}
							out:fly|local={{ x: -200, duration: 400 }}
						>
							{#if typeof $page.data.title === 'string'}
								<h1 class="title-h">
									{$page.data.title}
								</h1>
							{:else}
								<svelte:component this={$page.data.title} />
							{/if}
						</div>
					{/key}
				</div>
			</div>
			{#if $page.data.tagline != null}
				<div class="landing lower-banner" transition:slide|local>
					<div class="center-box">
						{#key $page.data.title}
							<div
								class="transition-wrapper"
								in:fly|local={{ x: 200, delay: 400, duration: 400 }}
								out:fly|local={{ x: -200, duration: 400 }}
							>
								{#if typeof $page.data.tagline === 'string'}
									<p class="tagline-p">{$page.data.tagline}</p>
								{:else}
									<svelte:component this={$page.data.tagline} />
								{/if}
							</div>
						{/key}
					</div>
				</div>
			{/if}
		</div>
	</div>
{/if}

<PageTransition key={$page.data.path} duration={400}>
<slot />
</PageTransition>

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
		color: dsn.$nav-fg
		background-color: dsn.$nav-bg
		-webkit-backdrop-filter: blur(100px)
		z-index: 9999
		transform: translateX(100vw)
		transition: transform 0.6s
		@media (min-width: dsn.$bp-tablet)
			flex-direction: row
			justify-content: center
			height: 40px
			background-color: dsn.$nav-bar-bg
			border-bottom: dsn.$nav-brdr
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
			@media (min-width: dsn.$bp-tablet)
				flex: 0 1 980px
				flex-direction: row
				align-items: stretch
				padding: 0
				overflow: visible
		a
			position: relative
			top: 0
			display: flex
			flex: 0 0 4ex
			width: 100%
			justify-content: center
			align-items: center
			font-size: 1.4rem
			font-weight: 200
			text-decoration: none
			color: dsn.$nav-link-fg
			transition: background-color 0.2s, height 0.2s
			@media (min-width: dsn.$bp-tablet)
				flex: 0 0 auto
				width: auto
				height: 100%
				font-size: 1.15rem
				padding: 0 1ch
			&:hover, &:focus
				background-color: dsn.$nav-link-bg-hov
				@media (min-width: dsn.$bp-tablet)
					background-color: dsn.$nav-bar-link-bg-hov
					height: calc(100% + 12px)
	#open-nav
		position: fixed
		top: 12px
		left: -45px
		width: 45px
		height: 60px
		padding: 0
		color: dsn.$nav-open-fg
		background-color: dsn.$nav-open-bg
		border: none
		border-left: dsn.$nav-brdr
		border-bottom: dsn.$nav-brdr
		border-bottom-left-radius: dsn.$nav-brdr-rad
		border-top-left-radius: dsn.$nav-brdr-rad
		z-index: 9000
		transition: color 0.2s
		&:active
			color: dsn.$nav-btn-open-fg-hov
		@media (min-width: dsn.$bp-tablet)
			display: none
	#close-nav
		position: absolute
		top: 12px
		right: 6px
		width: 60px
		height: 60px
		color: dsn.$nav-fg
		background-color: transparent
		border: none
		transition: color 0.2s
		&:active
			color: dsn.$nav-btn-open-fg-hov
		@media (min-width: dsn.$bp-tablet)
			display: none
	.nav-spacer
		display: none
		@media (min-width: dsn.$bp-tablet)
			display: block
			flex: 1 1 100%
	#nav-link-home
		height: 68px
		padding: 8px
		@media (min-width: dsn.$bp-tablet)
			background-color: dsn.$nav-open-bg
			border-bottom-left-radius: 20px
			border-bottom-right-radius: 20px
		&:hover, &:focus
			color: dsn.$nav-link-fg-hov
			@media (min-width: dsn.$bp-tablet)
				background-color: dsn.$nav-link-bg-hov
		img
			height: 100%

	.landing.outer
		position: relative
		display: flex
		justify-content: center
		align-items: flex-start
	.landing.inner
		position: relative
		flex: 0 1 100%
	.landing.upper-banner
		display: flex
		flex-direction: row
		justify-content: center
		align-items: flex-end
		height: 50vh
		width: 100vw
		background-color: dsn.$landing-upper-bg
		z-index: 10
		// @media (min-width: dsn.$bp-fullsize)
		// 	flex: 0 0 540px
	.title-div
		display: flex
		flex: 0 1 1000px
		flex-direction: row
		justify-content: flex-start
		align-items: flex-end
		position: relative
		.transition-wrapper
			display: flex
			flex-direction: row
			justify-content: flex-start
			align-items: flex-end
			position: absolute
			width: 100%

	.landing.lower-banner
		display: flex
		flex: 0 0 auto
		flex-direction: row
		justify-content: center
		align-items: center
		width: 100%
		height: 20ex
		color: dsn.$landing-lower-fg
		background-color: dsn.$landing-lower-bg
		transition: height 0.2s
		@media (min-width: dsn.$bp-phablet)
			height: 20ex
		.center-box
			flex: 0 1 40em
			display: flex
			flex-direction: column
			justify-content: center
			position: relative
			height: 100%
			.transition-wrapper
				display: flex
				flex-direction: column
				justify-content: center
				position: absolute
				width: 100%
				height: 100%

	footer
		display: flex
		flex-direction: row
		justify-content: center
		min-height: 300px
		background-color: dsn.$foot-bg
	.footer-inner
		display: flex
		flex: 0 1 1000px
		justify-content: center
		align-items: flex-end
		padding: 50px 0

	.icon-menu-container
		box-sizing: border-box
		postion: absolute
		left: 0
		top: 0
		width: 45px
		height: 60px
		padding: 5px
	.icon-close-container
		box-sizing: border-box
		postion: absolute
		left: 0
		top: 0
		width: 60px
		height: 60px
		padding: 5px
	.icon-mail-container
		height: 46px
		@media (min-width: dsn.$bp-tablet)
			width: 34px
			height: 34px

	#public-sq-nav
		height: 2ex
		@media (min-width: dsn.$bp-tablet)
			transform: translateY(0.1ex)
</style>
