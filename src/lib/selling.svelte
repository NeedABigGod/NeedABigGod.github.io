<h1>For Sellers</h1>
<p class="summary">
	Before you sell, here are some links to get the information you may find useful in getting your
	property ready. Contact me and I will help you with all the details of the selling process.
</p>
<div class="contents">
	<a href="https://roc.az.gov/"> Find a Contractor </a>
	<a href="https://www.realtor.com/myhome/">Home Value Tracker</a>
	<a href="https://www.houselogic.com/?cid=eo_rl_rcom">HouseLogic</a>
</div>

<style lang="sass">
	h1
		margin: 0
		padding: 0 12px
		color: dsn.$main-hdg-fg
	.summary
		max-width: 836px
		padding: 0 14px
		font-size: 0.85em
		line-height: 1.5
	.contents
		box-sizing: border-box
		display: grid
		grid: auto-flow / 1fr 1fr
		column-gap: 6px
		row-gap: 6px
		max-width: 400px
		margin: 0 12px
		@media (min-width: dsn.$bp-tablet)
			grid: 1fr / auto-flow
			max-width: unset
		a
			box-sizing: border-box
			height: 100px
			padding: 1ex 1ch
			font-size: 0.85em
			font-weight: 400
			color: dsn.$link-list-fg
			background-color: dsn.$link-list-bg
			border-left: 9px solid dsn.$link-list-brdr-clr
			transition: background-color 0.2s, color 0.2s, border 0.2s
			@media (min-width: dsn.$bp-tablet)
				width: calc((836px / 3) - 12px)
			&:last-of-type
				margin-bottom: 0
			&:hover, &:focus
				background-color: dsn.$link-list-bg-hov
				border-left: 18px solid dsn.$link-list-brdr-clr-hov
</style>
