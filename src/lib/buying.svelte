<h1>For Buyers</h1>
<div class="contents">
	<div class="market-data">
		<h2 >Market Data</h2>
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
		<a href="https://homeplusaz.com/"
			>Arizona Department of Real Estate<br/>Consumer Resources</a
		>
	</div>
</div>

<style lang="sass">
	h1
		padding: 0 12px
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
			font-size: 0.9em
			font-weight: 400
			color: $accent-light
			background-color: $primary
			border-left: 9px solid $accent-shade
			margin-bottom: 3px
			transition: background-color 0.2s, border 0.2s
			&:last-of-type
				margin-bottom: 0
			&:hover, &:focus
				background-color: $primary-shade
				border-left: 18px solid $accent
</style>
