<script>
	import Contact from '$lib/contact.svelte'
	import IconFile from '$lib/icons/File.svelte'
</script>

<div id="home-ed" class="section outer service anchor">
	<div class="inner">
		<div class="prose-column img-overlay">
			<h2>Home Education</h2>
			<p>
				Let's face it! If you understood everything involved in educating your kids at home, you
				would probably already be doing it. Consider working with me to work through some of the
				details you hadn't considered.
			</p>
			<h3>Homeschool Resources for Arizona</h3>
			<a
				href="https://hslda.org/legal/arizona"
				class="link-band-h"
				target="_blank"
				rel="noreferrer"
			>
				HSLDA — Arizona Homeschool Law ❯
			</a>
		</div>
		<div class="prose-column img-overlay">
			<blockquote>
				You shall love the LORD your God with all your heart and with all your soul and with all
				your might. And these words that I command you today shall be on your heart. You shall teach
				them diligently to your children and shall talk of them when you sit in your house, and when
				you walk by the way, and when you lie down, and when you rise. <strong
					>Deuteronomy 6:6-8</strong
				>
			</blockquote>
			<p>
				If we keep sending our children to government schools, where they are influenced by ideas
				and people who do not share our values, for forty or more hours a week, we should not be
				surprised when they come back to us with different values. I am looking forward to helping
				you implement an education system that works for your family.
			</p>
		</div>
	</div>
</div>

<div id="private-ed" class="section outer service anchor">
	<div class="inner">
		<div class="prose-column img-overlay">
			<h2>Private Education</h2>
			<p>
				If homeschool is not the best choice for your family, there are other education options.
			</p>
		</div>
		<div class="prose-column">
			<a href="https://face.net/" class="link-band-h" target="_blank" rel="noreferrer">
				The Foundation for American Christian Education
			</a>
			<a
				href="https://www.azleg.gov/viewdocument/?docName=https://www.azleg.gov/ars/15/00802.htm"
				class="link-band-h"
				target="_blank"
				rel="noreferrer"
			>
				Arizona Revised Statute for School Attendance
			</a>
		</div>
	</div>
</div>

<div id="business" class="section outer service anchor">
	<div class="inner">
		<div class="prose-column img-overlay">
			<h2>Business</h2>
			<p>
				It's not enough to have a great business idea. A great idea is developed with a robust
				discussion of the details of that business. Working with a business consultant gives an
				outside perspective on neutral grounds.
			</p>
			<!-- TODO: Get the PDF for this in static and make the link work -->
			<a
				href="/files/business-plan-worksheet.pdf"
				class="bttn-link"
				target="_blank"
				rel="noreferrer"
			>
				Get started: Planning worksheet <span class="icon-inline"><IconFile /></span>
			</a>
		</div>
		<div class="prose-column img-overlay">
			<h3>Planning Your Business</h3>
			<p>
				From idea to plan, I help you formulate the building blocks that will devise your business
				concept. I can help you write out this plan as a document you will use to keep you on track,
				or you can simply take our conversations as overall advisement. I will provide you the level
				of consultation you desire to start your business.
			</p>
			<h3>Updating an Existing Business Plan</h3>
			<p>
				Maybe you have been operating your business for a while, but you are feeling a bit stuck. I
				will work with you to revise and update your business plan.
			</p>
		</div>
	</div>
</div>

<div id="contact" class="section outer anchor">
	<div class="inner">
		<Contact />
	</div>
</div>

<style lang="sass">
.section
	margin-bottom: 120px

.service
	&.outer
		flex-direction: row
	& > .inner
		flex: 0 1 1200px
		flex-direction: row
		flex-wrap: wrap
	&:nth-of-type(2n)
		& > .inner
			justify-content: flex-end
.prose-column
	flex: 0 1 36ch
	display: flex
	flex-direction: column
	overflow-x: hidden
	@media (max-width: dsn.$bp-partial)
		padding-top: 2ex
		&:last-of-type
			padding-bottom: 3ex
	@media (min-width: dsn.$bp-partial)
		padding-top: 4ex
		padding-bottom: 6ex
		& + &
			margin-left: 24px
	h2
		box-sizing: border-box
		max-width: 80%
		margin: 0 0 0 16px
		font-size: 3em
		color: dsn.$main-service-hdg-fg
	h3
		box-sizing: border-box
		max-width: 80%
		margin: 0 0 0 16px
		font-size: 1.5em
		font-weight: 400
		color: dsn.$main-service-hdg-fg
	p
		box-sizing: border-box
		max-width: 80%
		margin: 1ex 0 0 16px
		& + h3
			margin-top: 2ex
		& + a
			margin-top: 2ex
	blockquote
		font-style: italic
		font-weight: 200
	a
		margin-bottom: 2ex
		&:first-child
			margin-top: 2ex
	h3 + a
		margin-top: 2ex
	.bttn-link
		margin-left: 16px
		margin-right: 16px

#home-ed
	margin-top: 60px
	margin-bottom: 0
	background-image: url("/img/bg/az03.jpg")
	background-repeat: no-repeat
	background-size: cover
	background-position: center
#business
	background-image: url("/img/bg/az01.jpg")
	background-repeat: no-repeat
	background-size: cover
	background-position: center

#contact
	margin: dsn.$def-contact-marg
	.inner
		align-items: center
</style>
