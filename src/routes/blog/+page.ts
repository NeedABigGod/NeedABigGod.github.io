const showOnly = 3

export async function load() {
	const imports = import.meta.glob('./posts/**/*.md', { eager: true })

	const posts: any[] = []
	for (const path in imports) {
		const post = imports[path]
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
}
