import { mdsvex } from 'mdsvex'
import { mdsvexConfig } from './mdsvex.config.js'
import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
export default {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [
		mdsvex(mdsvexConfig),
		preprocess({
			sass: {
				prependData: `@import 'src/styles/vars.sass'`,
				outputStyle: 'compressed'
			}
		})
	],

	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false
		}),
		prerender: {
			default: true
		},
		vite: {
			server: {
				cors: false
			}
		}
	}
}
