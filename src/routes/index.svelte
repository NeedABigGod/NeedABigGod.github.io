<script lang="ts">
	import Contact from '$lib/contact.svelte'
	import Tagline from '$lib/tagline.svelte'
	import Buying from '$lib/buying.svelte'
	import Selling from '$lib/selling.svelte'
</script>

<div class="section landing outer">
	<div class="landing inner">
		<div class="landing upper-banner">
			<div class="title-div">
				<img
					src="img/bio-pic.jpg"
					alt="Portrait - Elizabeth Joy McGwire"
					class="bio-pic"
				/>
				<div class="id-box">
					<h1>Beth McGwire</h1>
					<h2>Legends Realty</h2>
				</div>
				<div class="spacer" />
			</div>
		</div>
		<div class="landing lower-banner">
			<Tagline />
		</div>
	</div>
</div>

<div id="buying" class="section buying outer">
	<div class="buying inner">
		<Buying />
	</div>
</div>

<div id="selling" class="section selling outer">
	<div class="selling inner">
		<Selling />
	</div>
</div>

<div id="contact" class="section contact outer">
	<div class="contact inner">
		<Contact />
	</div>
</div>

<style lang="sass">
	:global
		html
			font-size: 16pt
			font-family: 'Poppins', sans-serif
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
			font-family: 'Poppins', sans-serif
			font-weight: 200
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

	.section
		display: flex
		flex-direction: row
		justify-content: center
		align-items: center
		width: 100vw
		margin-bottom: 60px
		overflow-x: hidden
	.inner
		display: flex
		flex-direction: column

	.landing.outer
		display: flex
		justify-content: flex-start
		align-items: flex-start
		min-height: 70vh
		background-color: $landing-background
	.landing.inner
		display: flex
		flex-direction: column
		align-items: flex-start
		width: 100%
	.landing.upper-banner
		flex: 0 0 50vh
		display: flex
		flex-direction: row
		justify-content: center
		align-items: flex-end
		width: 100vw
		margin-bottom: $portrait-bleed
		background-color: $landing-upper
	.title-div
		display: flex
		flex: 0 1 1000px
		flex-direction: row
		justify-content: center
		align-items: flex-end
	.bio-pic
		flex: 1 0 45vw
		box-sizing: border-box
		transform: translateY($portrait-bleed)
		margin: 0 calc($portrait-left-margin/2) 0 $portrait-left-margin
		overflow: hidden
		border: $portrait-border
		@media (min-width: $phablet-width)
			flex: 0 0 240px
	.id-box
		transform: translateY(1.2em)
		@media (min-width: $phablet-width)
			transform: translateY(1.8em)
		h1
			flex: 0 1 8ch
			font-size: 1.85em
			color: $landing-upper-text
			margin: 0
			@media (min-width: $phablet-width)
				font-size: 3.5em
		h2
			margin: 0
			color: $primary
			font-size: 1em
			@media (min-width: $phablet-width)
				font-size: 1.5em
	.landing.lower-banner
		display: flex
		flex-direction: row
		justify-content: center
		align-items: center
		width: 100vw
		color: $landing-lower-text


	.contact.section
		margin-top: 90px
		margin-bottom: 150px
	.contact.outer
		display: flex
		flex-direction: column
		align-items: center
	.contact.inner
		display: flex
		flex-direction: column
		align-items: center
		@media (min-width: $tablet-width)
			max-width: 800px

	.spacer
		display: flex
		flex: 0 1 100%

	//@media screen and (max-width: wide-tablet-width)
</style>
