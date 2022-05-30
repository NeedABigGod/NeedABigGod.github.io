<h1>For Buyers</h1>
<p class="summary">
	Finding the right property for the right price takes a little research. Use
	these links to get the information you need. Then contact me and I will dig
	deeper and help you through the buying process.
</p>
<div class="contents">
	<div class="market-data">
		<h2>Market Data</h2>
		<img
			src="https://mlssaz.stats.showingtime.com/infoserv/s-v1/K41a-ozc?w=400&h=300"
			alt="Median Sales Prices"
		/>
	</div>
	<div class="buyer-links">
		<a href="https://azre.gov/consumers/topics-research-purchasing-real-estate">
			Topics to Research
		</a>
		<a href="https://homeplusaz.com/">Home Buyer Down Payment Assistance</a>
		<a href="https://www.tucsonrealtors.org/consumer-resources/">
			TAR Consumer Resources
		</a>
		<a href="https://homeplusaz.com/">
			Arizona Department of Real Estate<br />Consumer Resources
		</a>
	</div>
</div>

<style lang="sass">
	h1
		margin: 0
		padding: 0 12px
	.summary
		max-width: 836px
		padding: 0 14px
		font-size: 0.85em
	.contents
		display: flex
		flex-direction: column
		padding: 0 12px
		@media (min-width: $tablet-width)
			flex-direction: row
	.market-data
		h2
			margin-top: 0
			margin-bottom: 9px
			font-weight: 400
			border-top: 3px solid $primary-light
	.buyer-links
		display: flex
		flex-direction: column
		margin-top: 12px
		@media (min-width: $tablet-width)
			margin-top: 0
			margin-left: 12px
		a
			box-sizing: border-box
			max-width: 400px
			padding: 1ex 1ch
			font-size: 0.85em
			font-weight: 400
			color: $accent-light
			background-color: $primary
			border-left: 9px solid $tertiary
			margin-bottom: 3px
			transition: background-color 0.2s, border 0.2s
			@media (min-width: $phablet-width)
				width: 400px
			&:last-of-type
				margin-bottom: 0
			&:hover, &:focus
				background-color: $primary-shade
				border-left: 18px solid $tertiary-light
</style>
