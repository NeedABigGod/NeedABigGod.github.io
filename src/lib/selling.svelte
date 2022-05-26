<h1>For Sellers</h1>
<div class="contents">
	<a href="https://roc.az.gov/"> Find a Contractor </a>
	<a href="https://www.realtor.com/myhome/">Home Value Tracker</a>
	<a href="https://www.houselogic.com/?cid=eo_rl_rcom">HouseLogic</a>
</div>

<style lang="sass">
	h1
		padding: 0 12px
	.contents
		box-sizing: border-box
		display: grid
		grid: auto-flow / 1fr 1fr
		column-gap: 6px
		row-gap: 6px
		max-width: 400px
		margin: 0 12px
		@media (min-width: $tablet-width)
			grid: 1fr / auto-flow
			max-width: unset
		a
			box-sizing: border-box
			height: 100px
			padding: 1ex 1ch
			font-size: 0.9em
			font-weight: 400
			color: $accent-light
			background-color: $primary
			border-left: 9px solid $accent-shade
			transition: background-color 0.2s, border 0.2s
			@media (min-width: $tablet-width)
				width: calc((836px / 3) - 12px)
			&:last-of-type
				margin-bottom: 0
			&:hover, &:focus
				background-color: $primary-shade
				border-left: 18px solid $accent
</style>
