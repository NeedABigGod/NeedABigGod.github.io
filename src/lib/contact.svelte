<script lang="ts">
	import { envelope, instagram, linkedin } from 'svelte-awesome/icons'
	import rumble from './icons/rumble-logo'
	import Icon from 'svelte-awesome'
</script>

<h1>Contact</h1>

<div class="email-row">
	<Icon data={envelope} scale={2.25} label="email icon" />
	<a href="mailto:AZRealEstateBetty@outlook.com">
		AZRealEstateBetty@outlook.com
	</a>
</div>
<div class="link-row">
	<a href="https://www.instagram.com/azrealestatebetty/"><Icon data={instagram} scale={3} label="instagram" /></a>
	<a href="https://www.linkedin.com/in/beth-mcgwire-25ba11227/"><Icon data={linkedin} scale={3} label="linkedIn" /></a>
	<a href="https://rumble.com/c/c-1405544"><Icon data={rumble} scale={3} label="rumble" /></a>
</div>

<style lang="sass">
	.email-row
		display: flex
		flex-direction: row
		align-items: center
		margin-bottom: 12px
		a
			margin-left: 6px
			padding: 3px 9px
			font-size: .8em
			@media (min-width: $tablet-width)
				font-size: 1em
	.link-row
		display: flex
		flex-direction: row
		justify-content: space-between
		width: 230px
		a
			display: flex
			justify-content: center
			align-content: center
			padding-top: 3px
			width: 60px
			height: 60px
	a
		box-sizing: border-box
		color: $accent-shade
		transition: color 0.2s, border 0.2s
		border: 3px solid transparent
		border-radius: 9px
		&:hover, &:focus
			color: $accent
			border: 3px solid $accent
</style>