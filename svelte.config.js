import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeAddClasses from 'rehype-add-classes'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [
		preprocess({
			sourceMap: true,
			babel: {
				presets: [
					[
						'@babel/preset-env',
						{
							loose: true,
							modules: false,
							targets: {
								esmodules: true
							}
						}
					]
				]
			},
			sass: {
				prependData: `@import 'src/styles/vars.sass'`,
				outputStyle: 'compressed'
			}
		}),
		mdsvex({
			extensions: ['.md'],
			layout: {
				blog: './src/lib/layouts/blog.svelte'
			},
			rehypePlugins: [
				[
					rehypeAddClasses,
					{
						'h1,h2,h3,pre,blockquote,p,ul,li,ol,strong,em,hr': 'markdown'
					}
				],
				rehypeSlug,
				rehypeAutolinkHeadings
			]
		})
	],

	kit: {
		adapter: adapter(),
		appDir: 'internal',
		prerender: {
			default: true
		}
	}
}

export default config
