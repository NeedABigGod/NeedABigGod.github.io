<div class="project-links">
	<a href="/projects/carriage-house">Carriage House</a>
	<a href="/projects/ground-support">Ground Support</a>
	<a href="/projects/master-bath">Master Bath</a>
</div>

<article>
	<slot />
</article>

<style lang="sass">
	.project-links
		display: flex
		flex-direction: column
		@media (min-width: $tablet-width)
			margin-top: 60px
		a
			display: flex
			color: $text-dark
			border-bottom: 3px solid $mystic
			font-size: 1.2em

	article
		padding: 20px 2ch 120px 2ch
		:global
			p, h1, h2, h3
				max-width: 700px
</style>
