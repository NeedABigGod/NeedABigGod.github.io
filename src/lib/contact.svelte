<script lang="ts">
	import IconInstagram from '$lib/icons/Instagram.svelte'
	import IconLinkedIn from '$lib/icons/LinkedIn.svelte'
	import IconMail from '$lib/icons/Mail.svelte'
	import IconRumble from '$lib/icons/RumbleLogo.svelte'
	import LogoPublicSq from '$lib/icons/PublicSq.svelte'
	import ImgWokeFree from '$lib/img/buywokefree.png'
</script>

<h2>Contact</h2>

<div class="email-row">
	<div class="icon-mail-container"><IconMail /></div>
	<a href="mailto:AZRealEstateBetty@outlook.com"> AZRealEstateBetty@outlook.com </a>
</div>
<div class="link-row">
	<a href="https://www.instagram.com/azrealestatebetty/">
		<IconInstagram />
	</a>
	<a href="https://www.linkedin.com/in/beth-mcgwire-25ba11227/">
		<IconLinkedIn />
	</a>
	<a href="https://rumble.com/c/c-1405544">
		<IconRumble />
	</a>
</div>
<a href="https://app.publicsq.com/marketplace/fa37a7e0-e1e3-11ec-9835-c3f74dddc561">
	<LogoPublicSq />
</a>
<a href="https://buywokefree.com/">
	<img id="img-woke-free" src={ImgWokeFree} alt="Buy Woke Free" />
</a>

<style lang="sass">
	h2
		font-size: 2em
	.email-row
		display: flex
		flex-direction: row
		align-items: center
		margin-bottom: 12px
		a
			margin-left: 6px
			padding: 3px 9px
			font-size: .8em
			@media (min-width: dsn.$bp-tablet)
				font-size: 1em
	.link-row
		display: flex
		flex-direction: row
		justify-content: space-between
		width: 300px
		a
			display: flex
			justify-content: center
			align-content: center
			width: 58px
			height: 58px
	a
		color: dsn.$contact-link-fg
		transition: color 0.2s, border 0.2s
		border: 3px solid transparent
		border-radius: 9px
		padding: 2px
		&:hover, &:focus
			color: dsn.$contact-link-fg-hov
			border: 3px solid dsn.$contact-link-fg-hov
	.icon-mail-container
		height: 46px
		width: 46px
	#img-woke-free
		width: 300px
</style>
