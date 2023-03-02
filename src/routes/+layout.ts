import type { LayoutLoad } from "./$types"

export const load = (({ url }) => {
	const path = url.pathname

	return {
		path
	}
}) satisfies LayoutLoad

export const prerender = true
