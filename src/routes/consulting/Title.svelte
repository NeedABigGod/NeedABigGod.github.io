<div class="wrapper">
	<h1>Consulting Services</h1>
	<div class="link-row">
		<a href="#home-ed">Education</a>
		<a href="#business">Business</a>
	</div>
</div>

<style lang="sass">
.wrapper
	display: flex
	flex-direction: column
	justify-content: flex-end
	height: 0
	transform: translateY(2.5ex)
.link-row
	display: flex
	flex-direction: row
	justify-content: space-evenly
	width: 375px
	a
		display: flex
		flex-direction: row
		justify-content: center
		align-items: center
		width: 10ch
		height: 4ex
		color: dsn.$landing-link-fg
		background-color: dsn.$landing-link-bg
		border: 6px solid dsn.$landing-link-brdr
		font-size: 1.1em
		transition: background-color 0.2s
		&:hover, &:focus
			background-color: dsn.$landing-link-bg-hov
</style>
