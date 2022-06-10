<script lang="ts">
	import Contact from '$lib/contact.svelte'
	import Tagline from '$lib/tagline.svelte'
	import Buying from '$lib/buying.svelte'
	import Selling from '$lib/selling.svelte'
	// import Pitch from '$lib/pitch.svelte'
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
					<span class="name-display">Beth McGwire</span>
					<span class="affiliation">Legends Realty</span>
				</div>
				<div class="spacer" />
			</div>
		</div>
		<div class="landing lower-banner">
			<div class="center-box">
				<Tagline />
				<a href="/about" class="bio-link">Full Bio ❯</a>
			</div>
		</div>
	</div>
</div>

<div id="pitch" class="section pitch outer">
	<div class="pitch inner">
		<Pitch />
	</div>
</div>

<div id="buying" class="section buying outer anchor">
	<div class="buying inner">
		<Buying />
	</div>
</div>

<div id="selling" class="section selling outer anchor">
	<div class="selling inner">
		<Selling />
	</div>
</div>

<div id="contact" class="section contact outer anchor">
	<div class="contact inner">
		<Contact />
	</div>
</div>

<style lang="sass">
	:global
		#svelte
			display: flex
			flex-direction: column
			align-items: center
			padding-bottom: 40vh
		h1, h2, h3, span
			font-weight: 200
		p, a
			font-weight: 400
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
		margin-bottom: 120px
	.inner
		display: flex
		flex-direction: column
	.anchor
		@media (min-width: $tablet-width)
			padding-top: 40px
			margin-top: -40px

	.landing.outer
		position: relative
		display: flex
		flex: 1 0 70vh
		justify-content: center
		align-items: flex-start
		background-color: $landing-background
		@media (min-height: $fullsize-height)
			flex: 0 0 756px
	.landing.inner
		display: flex
		flex-direction: column
		align-items: center
		height: 100%
	.landing.upper-banner
		flex: 0 0 50vh
		display: flex
		flex-direction: row
		justify-content: center
		align-items: flex-end
		width: 100vw
		background-color: $landing-upper
		@media (min-height: $fullsize-height)
			flex: 0 0 540px
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
		transform: translateY(2ex)
		@media (min-width: $phablet-width)
			transform: translateY(3ex)
		.name-display
			display: block
			flex: 0 1 8ch
			font-size: 2em
			color: $landing-upper-text
			margin: 0
			@media (min-width: $phablet-width)
				font-size: 3.5em
		.affiliation
			display: block
			margin: 0
			color: $primary
			font-size: 1em
			font-weight: 400
			@media (min-width: $phablet-width)
				font-size: 1.5em
	.landing.lower-banner
		flex: 1 1 100%
		display: flex
		flex-direction: row
		justify-content: center
		align-items: center
		width: 100%
		color: $landing-lower-text
		.center-box
			position: relative
			flex: 0 1 864px
			display: flex
			flex-direction: column
			justify-content: center
			height: 100%
	.bio-link
		position: absolute
		display: flex
		justify-content: center
		align-items: center
		bottom: -10px
		right: 20px
		width: 120px
		height: 40px
		border-radius: 9999px
		color: $tertiary-light
		background-color: $primary
		transition: all 0.2s
		@media (min-width: $tablet-width)
			right: 100px
		&:hover, &:focus
			bottom: -15px
			right: 15px
			width: 130px
			height: 50px
			color: $text-light
			background-color: $primary-light
			@media (min-width: $tablet-width)
				right: 95px

	.pitch.inner, .buying.inner, .selling.inner
		flex: 0 1 400px
		@media (min-width: $tablet-width)
			flex: unset

	.pitch.inner
		flex: 0 1 400px
		align-items: center
		@media (min-width: $tablet-width)
			flex: 0 1 950px

	.contact.section
		margin-top: 30px
		margin-bottom: 200px
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
