<script>
	export let title, date, price, loc, beds, bath, garage, acres
</script>

<div>
	<h1>{title}</h1>
	<span class="location">{loc}</span>
	<span class="price">{price}</span>
	<div class="stat-block">
		{#if beds}
		<p><span class="stat">Bed: </span>{beds}</p>
		{/if}
		{#if bath}
			<p><span class="stat">Bath: </span>{bath}</p>
		{/if}
		{#if garage}
			<p><span class="stat">Garage: </span>{garage}</p>
		{/if}
		{#if acres}
			<p><span class="stat">Acres: </span>{acres}</p>
		{/if}
	</div>
	<slot />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
	}
	.stat-block {
		display: grid;
		grid-template-columns: 12ch 12ch;
		margin: 1ex 0 1ex 0;
	}
	.stat-block > p {
		margin: 0 0 0 0;
		font-weight: lighter;
	}
	h1 {
		margin: 0;
		padding: 0;
		font-size: 1.5em;
	}
	.location {
		font-size: 1.0em;
		color: hsl(330, 20%, 8%);
		font-weight: bold;
	}
	.price {
		font-size: 1.2em;
		color: hsl(326, 22%, 49%);
	}
	.stat {
		font-size: 1.0em;
		font-weight: bold;
		color: hsl(330, 20%, 8%);
	}
	div > :global(h2) {
		font-size: 1.25em;
		margin-top: 3ex;
		margin-bottom: 0;
	}
	div > :global(h3) {
		font-size: 1.05em;
		margin-top: 2ex;
		margin-bottom: 0;
		color: hsl(326, 22%, 60%);
		font-weight: 400;
	}
	div > :global(p) {
		font-size: 0.9em;
		font-weight: 400;
		line-height: 1.5;
		align-self: flex-start;
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
		margin-top: -16px;
		margin-bottom: -16px;
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
	:global(.action-list) {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-evenly;
		align-items: center;
		width: 100%;
		margin: 10px 0 30px 0;
	}
	:global(.listing-link) {
		flex: 0 1 95%;
		text-align: center;
	}
  :global(.listing-link + .listing-link) {
      margin-top: 10px;
  }
</style>
