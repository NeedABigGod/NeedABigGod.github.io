<div class="section landing outer">
	<div class="landing inner">
		<div class="landing upper-banner">
			<div class="title-div">
				<div class="page-title-box">
					<span class="tagline-span">Join Me on PublicSq!</span>
				</div>
			</div>
		</div>
	</div>
</div>

<div id="pitch" class="section pitch outer">
	<div class="pitch inner">
		<p>
			Connect with businesses that support your love of America and the freedom we have here. Find
			local and online businesses you want to support, all across America. Use the app (from your
			app store) or in your browser.
		</p>
		<img
			src="img/public-square-promo.jpg"
			alt="Creating the alternate economy. Public Square is on a mission to restore the marketplace."
		/>
		<p>
			You can use the following link to easily register your business.
			<em> This is completely free... </em> free to list your business and free for everyone to use to
			find businesses.
		</p>
		<a class="register-link" href="https://publicsq.typeform.com/PSQFree#source=BethPSQ108">
			Register your business with PublicSq. today!
		</a>
	</div>
</div>

<style lang="sass">
	.section
		display: flex
		flex-direction: row
		justify-content: center
		align-items: center
		width: 100vw
		margin-bottom: 20px
	.inner
		display: flex
		flex-direction: column

	.landing.outer
		position: relative
		display: flex
		flex: 1 0 250px
		justify-content: center
		align-items: flex-start
		background-color: $landing-background
	.landing.inner
		display: flex
		flex-direction: column
		align-items: center
		height: 100%
	.landing.upper-banner
		flex: 0 1 100%
		display: flex
		flex-direction: row
		justify-content: center
		align-items: flex-end
		width: 100vw
		background-color: $landing-upper
	.title-div
		display: flex
		flex: 0 1 1000px
		flex-direction: row
		justify-content: center
		align-items: flex-end
	.page-title-box
		flex: 0 1 100%
		.tagline-span
			display: block
			font-size: 2em
			color: $landing-upper-text
			margin: 0
			padding: 6px
			@media (min-width: $phablet-width)
				font-size: 3.5em

	.pitch.outer
		margin-bottom: 120px
	.pitch.inner
		flex: 0 1 400px
		align-items: center
		@media (min-width: $tablet-width)
			flex: 0 1 950px
		img
			margin: 2ex 2ch
		p
			padding: 0 1ch

	.register-link
		margin: 0 2ch
		padding: 2ex 2ch
		font-size: 1.15em
		color: white
		background: linear-gradient(45deg, #bd4a9c, #59ade1)
		background-size: 120% 120%
		border-radius: 9px
		transition: all 0.2s
		&:hover, &:focus
			// color: #fde311
			border-radius: 18px
			filter: hue-rotate(40deg)
	//@media screen and (max-width: wide-tablet-width)
</style>
