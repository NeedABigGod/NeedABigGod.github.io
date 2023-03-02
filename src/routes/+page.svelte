<script lang="ts">
	import Contact from '$lib/contact.svelte'
</script>

<div id="real-estate" class="section outer service">
	<div class="inner">
		<div class="service-column img-overlay">
			<h2>Real Estate</h2>
			<p>
				Whether your goal is to buy or sell a home, or invest in property, I am looking forward to
				helping you achieve your goal. I am intentional in how I conduct my business so you are my
				focus.
			</p>
			<a href="/real-estate" class="link-band-h">More Info ❯</a>
		</div>
	</div>
</div>

<div id="education" class="section outer service">
	<div class="inner">
		<div class="service-column img-overlay">
			<h2>Home Education</h2>
			<p>
				The best part of being beyond the schooling years is that I get to use my experiences to help other
				families find better education solutions.
			</p>
			<a href="/consulting#home-ed" class="link-band-h">More Info ❯</a>
		</div>
	</div>
</div>

<div id="business" class="section outer service">
	<div class="inner">
		<div class="service-column img-overlay">
			<h2>Business Consulting</h2>
			<p>
				Having a great business idea is not as easy as creating your business. I will use my
				knowledge and expertise to help you get your business started or give it a re-charge.
			</p>
			<a href="/consulting#business" class="link-band-h">More Info ❯</a>
		</div>
	</div>
</div>

<div id="contact" class="section outer">
	<div class="inner">
		<Contact />
	</div>
</div>

<style lang="sass">
#real-estate
	background-image: url("/img/bg/building.jpg")
	background-repeat: no-repeat
	background-size: cover
	background-position: center
#education
	margin-top: 60px
	background-image: url("/img/bg/big-wheel.jpg")
	background-repeat: no-repeat
	background-size: cover
	background-position: bottom
#business
	margin-top: 60px
	background-image: url("/img/bg/az02.jpg")
	background-repeat: no-repeat
	background-size: cover
	background-position: center

.service
	&.outer
		flex-direction: row
	& > .inner
		flex: 0 1 1000px
		flex-direction: row
	&:nth-of-type(2n + 1)
		& > .inner
			flex-direction: row-reverse

#contact
	margin: dsn.$def-contact-marg
	.inner
		align-items: center

.service-column
	flex: 0 1 32ch
	display: flex
	flex-direction: column
	padding-bottom: 6ex
	overflow-x: hidden
	h2
		box-sizing: border-box
		max-width: 80%
		margin: 2ex 0 0 16px
		font-size: 3em
		color: dsn.$main-service-hdg-fg
	p
		box-sizing: border-box
		max-width: 80%
		margin: 1ex 0 4ex 16px
	a
		margin-bottom: 2ex
</style>
