import adapter from '@sveltejs/adapter-static'
import sveltePreprocess from 'svelte-preprocess'
import {mdsvex} from 'mdsvex'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeAddClasses from 'rehype-add-classes'
import remarkFootnotes from 'remark-footnotes'
import {s} from 'hastscript'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [
		sveltePreprocess({
			sourceMap: true,
			sass: {
				prependData: `@use 'src/lib/styles/_dsn.sass'`,
				outputStyle: 'compressed'
			}
		}),
		mdsvex({
			extensions: ['.md'],
			layout: {
				blog: './src/lib/layouts/blog.svelte',
				listing: './src/lib/layouts/listing.svelte'
			},
			remarkPlugins: [
				remarkFootnotes
			],
			rehypePlugins: [
				[
					rehypeAddClasses,
					{
						'h1,h2,h3,pre,blockquote,p,ul,li,ol,strong,em,hr': 'markdown'
					}
				],
				rehypeSlug,
				[
					rehypeAutolinkHeadings,
					{
						behavior: 'prepend',
						properties: {
							ariaHidden: true,
							tabIndex: -1,
							class: 'heading-anchor'
						},
						content: [
							s(
								'svg.autolink-icon',
								{
									xmlns: 'http://www.w3.org/2000/svg',
									fill: 'currentColor',
									viewBox: '0 0 48 48'
								},
								s('path', {
									d: 'M22.5 34H14q-4.15 0-7.075-2.925T4 24q0-4.15 2.925-7.075T14 14h8.5v3H14q-2.9 0-4.95 2.05Q7 21.1 7 24q0 2.9 2.05 4.95Q11.1 31 14 31h8.5Zm-6.25-8.5v-3h15.5v3ZM25.5 34v-3H34q2.9 0 4.95-2.05Q41 26.9 41 24q0-2.9-2.05-4.95Q36.9 17 34 17h-8.5v-3H34q4.15 0 7.075 2.925T44 24q0 4.15-2.925 7.075T34 34Z'
								})
							)
						]
					}
				]
			]
		})
	],
	kit: {
		adapter: adapter(),
		appDir: 'internal'
	}
}

export default config
