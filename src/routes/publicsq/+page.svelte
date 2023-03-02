<div id="pitch" class="section outer">
	<div class="inner">
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

	#pitch
		margin-top: 60px
		margin-bottom: 120px
		.inner
			flex: 0 1 400px
			align-items: center
			@media (min-width: dsn.$bp-tablet)
				flex: 0 1 850px
			img
				margin: 2ex 2ch
				max-width: min(100%, 94vw)
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
			border-radius: 18px
			filter: hue-rotate(40deg)
</style>
