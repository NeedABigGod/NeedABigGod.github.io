<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<h1>Latest Posts</h1>

{#each data.posts as post (post.date)}
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
