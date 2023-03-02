import type { PageLoad } from './$types'

export const load = (async () => {
	const taglineComponent = await import('./Tagline.md')

	return {
		title: 'Real Estate Services',
		tagline: taglineComponent.default
	}
}) satisfies PageLoad
