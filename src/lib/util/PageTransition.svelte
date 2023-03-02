<script lang="ts">
	import { blur } from 'svelte/transition'

	export let key: string
	export let duration: number = 300
</script>

{#key key}
	<div in:blur={{ duration, delay: 0 }} out:blur={{ duration: 0 }}>
		<slot />
	</div>
{/key}
