<script lang="ts">
	import Contact from '$lib/contact.svelte'
	import Buying from '$lib/buying.svelte'
	import Selling from '$lib/selling.svelte'
	import Pitch from '$lib/pitch.svelte'
</script>

<div id="pitch" class="section outer">
	<div class="inner">
		<Pitch />
	</div>
</div>

<div id="buying" class="section outer anchor">
	<div class="inner">
		<Buying />
	</div>
</div>

<div id="selling" class="section outer anchor">
	<div class="inner">
		<Selling />
	</div>
</div>

<div id="contact" class="section outer anchor">
	<div class="inner">
		<Contact />
	</div>
</div>

<style lang="sass">
	.section
		margin-bottom: 120px

	#pitch
		margin-top: 60px
		.inner
			flex: 0 1 400px
			align-items: center
			@media (min-width: dsn.$bp-tablet)
				flex: 0 1 950px

	#buying .inner, #selling .inner
		flex: 0 1 400px
		@media (min-width: dsn.$bp-tablet)
			flex: unset

	#contact
		margin: dsn.$def-contact-marg
		.inner
			align-items: center
</style>
