<script lang="ts" context="module">
	const showOnly: number = 3

	export async function load() {
		const imports = import.meta.globEager('./posts/**/*.md')

		const posts = []
		for (const path in imports) {
			const post = imports[path]
			if (post) {
				posts.push({
					...post.metadata,
					page: post.default,
					sortTime: new Date(post.metadata.date).getTime()
				})
			}
		}

		const filteredPosts = posts
			.filter((post) => !post.hidden)
			.filter((post) => Date.now() > post.sortTime)
			.sort((a, b) => b.sortTime - a.sortTime)
			.slice(0, showOnly)

		return {
			props: {
				posts: filteredPosts
			}
		}
	}
</script>

<script>
	export let posts
</script>

<h1>Latest Posts</h1>

{#each posts as post (post.date)}
	<div class="spacer" />
	<svelte:component this={post.page} />
{/each}

<style lang="sass">
	h1
		margin: 0
		padding: 0
		font-size: 2.6em
	.spacer
		flex: 0 0 50px
</style>