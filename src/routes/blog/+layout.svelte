<script lang="ts">
	import type { PageData } from '.svelte-kit/types/src/routes/blog/$types'
	export let data: PageData
	let postsClosed = true
</script>

<div class="outer">
	<div class="feed"><slot /></div>
	<div class="blog-nav">
		<div class="nav-title" on:click={() => (postsClosed = !postsClosed)}>
			<span class="expand-arrow" class:closed={postsClosed}>▼</span>
			<span class="all-posts">All Posts</span>
		</div>
		<div class="link-list" class:closed={postsClosed}>
			{#each data.posts as post (post.date)}
				<a href="/blog/{post.navPath}">
					<span class="post-title">{post.title}</span>
					<span class="post-date">{post.date}</span>
				</a>
			{/each}
		</div>
	</div>
</div>

<style lang="sass">
	a
		text-decoration: none
	.outer
		display: flex
		flex-direction: column
		align-items: center
		@media (min-width: $tablet-width)
			flex-direction: row
			justify-content: center
			align-items: flex-start
			padding-top: 40px
	.feed
		display: flex
		flex-direction: column
		order: 2
		padding: 60px 12px 180px 12px
		@media (min-width: $tablet-width)
			flex: 0 1 800px
			order: 1
			padding-right: 60px
	.blog-nav
		display: flex
		flex-direction: column
		order: 1
		width: 100%
		background-color: $primary
		@media (min-width: $tablet-width)
			flex: 0 1 360px
			order: 2
			padding: 80px 0
			background-color: transparent
		a
			display: flex
			flex-direction: column
			padding-left: 6px
			margin-bottom: 0.6ex
			color: $accent
			border-left: 4px solid $accent
			transition: all 0.2s
			&:hover, &:focus
				color: $accent-light
				border-left: 12px solid $accent-light
			@media (min-width: $tablet-width)
				color: $accent-shade
				border-color: $accent-shade
				&:hover, &:focus
					color: $accent
					border-color: $accent
			.post-title
				font-weight: 400
			.post-date
				font-size: 0.8em
	.nav-title
		display: flex
		flex-direction: row
		&>span
			margin: 1ex 8px
			font-size: 1.2em
			@media (min-width: $tablet-width)
				margin-left: 0
		.all-posts
			color: $accent-shade
			@media (min-width: $tablet-width)
				color: $text-dark
		.expand-arrow
			color: $text-light
			transform: rotateZ(0deg)
			transition: all 0.4s
			&.closed
				transform: rotateZ(-90deg)
			@media (min-width: $tablet-width)
				display: none
	.link-list
		flex: 0 0 260px
		overflow-x: hidden
		overflow-y: scroll
		padding: 1ex 0
		background-color: hsla(0,0%,0%,0.2)
		transition: all 0.4s
		&.closed
			@media (max-width: $tablet-width)
				flex: 0 0 0px
				padding: 0
				overflow: hidden
		@media (min-width: $tablet-width)
			flex: 0 1 500px
			background-color: transparent
</style>
