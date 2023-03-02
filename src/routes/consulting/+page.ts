import type { PageLoad } from './$types'

export const load = (async () => {
	const titleComponent = await import('./Title.svelte')
	const taglineComponent = await import('./Tagline.md')

	return {
		title: titleComponent.default,
		tagline: taglineComponent.default
	}
}) satisfies PageLoad
