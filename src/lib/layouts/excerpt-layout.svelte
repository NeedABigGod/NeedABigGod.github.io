<script>
	import { fly } from 'svelte/transition'
	export let transitionScale = 1
</script>

<div
	class="container"
	in:fly={{ x: 800 * transitionScale }}
	out:fly={{ x: -800 * transitionScale }}
>
	<slot />
</div>

<style>
	/* Investigate why MDSVEX errors when trying to use the preprocessors. */
	.container {
		position: absolute;
	}
</style>
