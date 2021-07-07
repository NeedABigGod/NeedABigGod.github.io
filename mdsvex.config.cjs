module.exports = {
	extensions: ['.svelte.md', '.md', '.svx'],
	layout: {
		excerpt: './src/lib/layouts/excerpt-layout.svelte',
	},
	smartypants: {
		dashes: 'oldschool'
	},
	remarkPlugins: [
		[
			require('remark-github'),
			{
				// Use your own repository
				repository: 'https://github.com/NeedABigGod/NeedABigGod.github.io.git'
			}
		],
		require('remark-abbr')
	],
	rehypePlugins: [
		require('rehype-slug')
		// [require("rehype-autolink-headings"), {
		// 	behavior: "wrap",
		// }],
	]
}
