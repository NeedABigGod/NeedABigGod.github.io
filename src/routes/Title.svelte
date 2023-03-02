<img src="img/bio-pic.jpg" alt="Portrait - Elizabeth Joy McGwire" class="bio-pic" />
<div class="id-box">
	<span class="name-display">Beth McGwire</span>
	<span class="affiliation">Legends Realty</span>
</div>
<div class="spacer" />

<style lang="sass">
	.bio-pic
		flex: 1 0 45vw
		box-sizing: border-box
		transform: translateY(dsn.$portrait-bleed)
		margin: 0 calc(dsn.$portrait-marg-left/2) 0 dsn.$portrait-marg-left
		overflow: hidden
		border: dsn.$portrait-brdr
		@media (min-width: dsn.$bp-phablet)
			flex: 0 0 240px
	.id-box
		transform: translateY(2ex)
		@media (min-width: dsn.$bp-phablet)
			transform: translateY(3ex)
		.name-display
			display: block
			flex: 0 1 8ch
			font-size: 2em
			color: dsn.$landing-upper-fg
			margin: 0
			@media (min-width: dsn.$bp-phablet)
				font-size: 3.5em
		.affiliation
			display: block
			margin: 0
			color: dsn.$landing-lower-fg
			font-size: 1em
			font-weight: 400
			@media (min-width: dsn.$bp-phablet)
				font-size: 1.5em
</style>