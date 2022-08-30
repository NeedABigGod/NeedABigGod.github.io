export async function load() {
	const imports = import.meta.glob('./posts/**/*.md', { eager: true })

	const posts = []
	for (const path in imports) {
		const post = imports[path]
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
}
