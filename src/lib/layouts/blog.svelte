<script>
	export let title
	export let date
</script>

<div>
	<h1>{title}</h1>
	<span>{new Date(date).toLocaleDateString()}</span>
	<slot />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
	}
	h1 {
		margin: 0;
		padding: 0;
		font-size: 1.5em;
	}
	span {
		font-size: 0.8em;
	}
	div > :global(p) {
		font-size: 0.9em;
		font-weight: 400;
		line-height: 1.5;
		align-self: center;
	}
	div :global(img) {
		max-width: calc(100% + 24px);
		margin-left: -12px;
		margin-right: -12px;
	}
</style>
