import type { LayoutServerLoad } from './$types'

export const load = (async () => {
	const imports = import.meta.glob('./posts/**/*.md', { eager: true })

	const posts = []
	for (const path in imports) {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const post: any = imports[path]
		if (post) {
			posts.push({
				navPath: path.slice(2, -9),
				...post.metadata,
				sortTime: new Date(post.metadata.date).getTime()
			})
		}
	}

	const filteredPosts = posts
		.filter((post) => !post.hidden)
		.filter((post) => Date.now() > post.sortTime)
		.sort((a, b) => b.sortTime - a.sortTime)

	return {
		posts: filteredPosts
	}
}) satisfies LayoutServerLoad
