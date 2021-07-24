<script lang="ts">
	import '../normalize.css'
	import '@fontsource/niramit/index.css'
	import '@fontsource/bellota/index.css'
	import Icon from 'svelte-awesome'
	import { chevronRight } from 'svelte-awesome/icons'
	import About from '$lib/about.svelte'
	import Contact from '$lib/contact.md'
	// Service Excerpts
	import ExBusinessAdmin from '$lib/excerpts/business-admin.md'
	import ExEdConsult from '$lib/excerpts/education-consultation.md'
	import ExProjectManagement from '$lib/excerpts/project-management.md'
</script>

<div class="section landing outer">
	<div class="landing inner">
		<h1>EJ McGwire</h1>
		<div class="landing-links">
			<a href="#services" class="one">Services</a>
			<a href="#showcase" class="two">Showcase</a>
			<a href="#contact" class="three">Contact</a>
		</div>
	</div>
</div>

<div class="section about outer">
	<div class="about inner">
		<img
			src="img/bio-pic-framed.png"
			alt="Portrait - Elizabeth Joy McGwire"
			class="bio-pic"
		/>
		<div class="bio-blurbs">
			<About />
		</div>
		<a href="/about" class="link-continue bttn-link">Full Bio ➧</a>
	</div>
</div>

<div class="section services outer">
	<div class="services inner">
		<h1>Services</h1>
		<div class="service-list">
			<div class="service-entry left">
				<div><ExBusinessAdmin /></div>
			</div>
			<div class="service-entry right">
				<div><ExEdConsult /></div>
			</div>
			<div class="service-entry left">
				<div><ExProjectManagement /></div>
			</div>
		</div>
	</div>
</div>

<div class="section showcase outer">
	<div class="showcase inner">
		<h1>Past Projects</h1>
		<div class="project-list">
			<a href="/projects/carriage-house" class="project-link">
				<p>Carriage House</p>
				<div class="link-arrow">
					<Icon data={chevronRight} scale="3" class="linkArrow" />
					<Icon data={chevronRight} scale="3" class="linkArrow" />
					<Icon data={chevronRight} scale="3" class="linkArrow" />
				</div>
			</a>
			<a href="/projects/ground-support" class="project-link">
				<p>Ground Support Equipment Training</p>
				<div class="link-arrow">
					<Icon data={chevronRight} scale="3" class="linkArrow" />
					<Icon data={chevronRight} scale="3" class="linkArrow" />
					<Icon data={chevronRight} scale="3" class="linkArrow" />
				</div>
			</a>
			<a href="/projects/master-bath" class="project-link">
				<p>Master Bath Remodel</p>
				<div class="link-arrow">
					<Icon data={chevronRight} scale="3" class="linkArrow" />
					<Icon data={chevronRight} scale="3" class="linkArrow" />
					<Icon data={chevronRight} scale="3" class="linkArrow" />
				</div>
			</a>
			<a href="/projects/project-four" class="project-link">
				<p>Fourth Project</p>
				<div class="link-arrow">
					<Icon data={chevronRight} scale="3" class="linkArrow" />
					<Icon data={chevronRight} scale="3" class="linkArrow" />
					<Icon data={chevronRight} scale="3" class="linkArrow" />
				</div>
			</a>
		</div>
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

	.section
		display: flex
		flex-direction: column
		position: relative
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
		@media (min-width: $tablet-width)
			font-size: 3.5em
	.landing-links
		display: flex
		flex-direction: row
		position: relative
		@media (min-width: $tablet-width)
			justify-content: space-between
			width: 400px
		a
			display: flex
			justify-content: center
			align-items: center
			position: absolute
			width: 7.5ch
			height: 7.5ch
			color: $light-text
			border: 4px solid $light-text
			border-radius: 9999px
			@media (min-width: $tablet-width)
				position: relative
		a.one
			left: calc(-7.5ch - 50px)
			@media (min-width: $tablet-width)
				left: unset
		a.two
			left: 50px
			@media (min-width: $tablet-width)
				left: unset
		a.three
			top: 80px
			left: -3.75ch
			@media (min-width: $tablet-width)
				top: unset
				left: unset

	.about.outer
		display: flex
		flex-direction: column
		align-items: center
		padding: 50px 0
	.about.inner
		display: flex
		flex-direction: column
		align-items: center
		position: relative
		width: calc(100% - 20px)
		padding-bottom: 60px
		@media (min-width: $tablet-width)
			max-width: 800px
	.bio-pic
		width: 80vw
		max-width: 420px
	.bio-blurbs
		display: flex
		flex-direction: row
		flex-wrap: wrap
		justify-content: center
		:global(div)
			margin: 20px
			@media (min-width: $tablet-width)
				width: calc(50% - 40px)
		:global(h2), :global(p)
			text-align: center

	.services.outer
		display: flex
		flex-direction: column
		align-items: center
	.services.inner
		display: flex
		flex-direction: column
		align-items: center
		width: 100%
	.service-list
		display: flex
		flex-direction: column
		width: 100%
	.service-entry
		flex: 0 0 140px
		display: flex
		flex-direction: row
		justify-content: center
		padding: 1ch 0
		color: $light-text
		overflow: hidden
		&>div
			flex: 0 1 900px
			display: flex
			flex-direction: row
		&.left>div
			justify-content: flex-start
		&.right>div
			justify-content: flex-end
		&:nth-of-type(1n)
			background-color: $charcoal
		&:nth-of-type(2n)
			background-color: $middle-blue
		&:nth-of-type(3n)
			background-color: $celadon-blue

	.showcase.outer
		display: flex
		flex-direction: column
		align-items: center
	.showcase.inner
		display: flex
		flex-direction: column
		align-items: center
	.project-list
		display: grid
		max-width: 800px
		@media (min-width: $tablet-width)
			grid-template-columns: 1fr 1fr
	.project-link
		display: flex
		flex-direction: column
		justify-content: center
		align-items: center
		position: relative
		margin: 0 10px 20px 10px
		padding: 1ex 1ch
		height: 180px
		width: 240px
		color: $text-dark
		border: 12px solid $mystic
		border-top: none
		border-bottom: none
		border-radius: 30px
		font-size: 1.3em
		transition: border-color 0.4s, border-radius 0.4s
		&>p
			text-align: center
			transition: opacity 0.4s
		:global(svg)
			color: $nadeshiko-pink
			transition: opacity 0.4s
		&:hover, &:focus
			border-color: $nadeshiko-pink
			&>p
				opacity: 50%
			:global(svg)
				opacity: 20%

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

	//@media screen and (max-width: wide-tablet-width)
</style>
