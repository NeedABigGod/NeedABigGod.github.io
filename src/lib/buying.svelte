<h1>For Buyers</h1>
<p class="summary">
	Finding the right property for the right price takes a little research. Use these links to get the
	information you need. Then contact me and I will dig deeper and help you through the buying
	process.
</p>
<div class="contents">
	<div class="market-data">
		<h2>Market Data</h2>
		<img
			src="https://mlssaz.stats.showingtime.com/infoserv/s-v1/LmgE-Ll3?w=400&h=300"
			alt="Median Sales Prices"
		/>
	</div>
	<div class="buyer-links">
		<a href="https://azre.gov/consumers/topics-research-purchasing-real-estate">
			ADRE — Topics to Research
		</a>
		<a href="https://azre.gov/persona/consumers"> ADRE — Consumer Resources </a>
		<a href="https://www.tucsonrealtors.org/consumer-resources/"> TAR Consumer Resources </a>
		<a href="https://homeplusaz.com/">Home Buyer Down Payment Assistance</a>
	</div>
</div>

<style lang="sass">
	h1
		margin: 0
		padding: 0 12px
		color: dsn.$main-hdg-fg
	img
		max-width: min(100%, 94vw)
	.summary
		max-width: 836px
		padding: 0 14px
		font-size: 0.85em
		line-height: 1.5
	.contents
		display: flex
		flex-direction: column
		padding: 0 12px
		@media (min-width: dsn.$bp-tablet)
			flex-direction: row
	.market-data
		h2
			margin-top: 0
			margin-bottom: 9px
			font-weight: 400
			color: dsn.$main-hdg2-fg
			border-top: 3px solid dsn.$main-hdg-brdr-clr
	.buyer-links
		display: flex
		flex-direction: column
		margin-top: 12px
		@media (min-width: dsn.$bp-tablet)
			margin-top: 0
			margin-left: 12px
		a
			box-sizing: border-box
			max-width: 400px
			padding: 1ex 1ch
			font-size: 0.85em
			font-weight: 400
			color: dsn.$link-list-fg
			background-color: dsn.$link-list-bg
			border-left: 9px solid dsn.$link-list-brdr-clr
			margin-bottom: 3px
			transition: background-color 0.2s, border 0.2s
			@media (min-width: dsn.$bp-phablet)
				width: 400px
			&:last-of-type
				margin-bottom: 0
			&:hover, &:focus
				background-color: dsn.$link-list-bg-hov
				border-left: 18px solid dsn.$link-list-brdr-clr-hov
</style>
