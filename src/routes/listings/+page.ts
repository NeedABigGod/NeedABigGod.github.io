import type { PageLoad } from './$types'

const showOnly = 3

export const load = (async ({params}) => {
	const imports = import.meta.glob('./posts/**/*.md', { eager: true })

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const posts: any[] = []
	for (const path in imports) {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const post: any = imports[path]
		if (post) {
			posts.push({
				...post.metadata,
				page: post.default,
				sortTime: new Date(post.metadata.date).getTime()
			})
		}
	}

	const filteredPosts = posts
		.filter((post) => !post.hidden)
		.filter((post) => Date.now() > post.sortTime)
		.sort((a, b) => b.sortTime - a.sortTime)
		.slice(0, showOnly)

	return {
		posts: filteredPosts
	}
}) satisfies PageLoad
