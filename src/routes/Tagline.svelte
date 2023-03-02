<script>
	import { slide } from 'svelte/transition'
</script>

<p>
	Helping residential <strong>real estate</strong> clients. Working with <strong>business entrepreneurs</strong>. Guiding
	families in <strong>alternative education</strong> solutions.
</p>
<a
	href="/about"
	in:slide={{ delay: 800, duration: 200 }}
	out:slide={{ duration: 200 }}
>
	Full Bio ❯
</a>
