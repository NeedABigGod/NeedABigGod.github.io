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
	div > :global(blockquote) {
		margin: 0.5ex 0 0.5ex 2ch;
		padding: 0.5ex 0.5ch 0.5ex 1ch;
		border-left: 3px solid hsla(356, 93%, 16%, 1);
		background-color: hsla(356, 92%, 29%, 0.125);
	}
	div > :global(blockquote > p) {
		margin: 0;
		padding: 0;
		font-size: 0.8em;
		color: hsla(356, 93%, 16%, 0.8);
		font-style: italic;
	}
	div :global(p > img) {
		max-width: calc(100% + 24px);
		margin-left: -12px;
		margin-right: -12px;
	}
	:global(.external-article-outer) {
		display: flex;
		flex-direction: row;
	}
	:global(.external-article-image) {
		flex: 0 1 auto;
		margin-left: 0;
		margin-right: 1ch;
	}
	:global(.external-article-details) {
		display: flex;
		flex-direction: column;
		font-size: 0.7em;
	}
	:global(.external-article-details h3) {
		margin: 0.5ex 0;
		padding: 0;
	}
	:global(.external-article-details p) {
		margin: 0.5ex 0;
		padding: 0;
	}
	:global(.copyright) {
		font-size: 0.8em;
	}
	:global(ol > li) {
		font-size: 0.8em;
		font-weight: 200;
		margin-bottom: 1.5ex;
	}
</style>
