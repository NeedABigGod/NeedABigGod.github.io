import type { PageLoad } from './$types'

export const load = (async () => {
	return {
		title: 'Join Me On PublicSq!'
	}
}) satisfies PageLoad
