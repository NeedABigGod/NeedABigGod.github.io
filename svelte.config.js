import { mdsvex } from 'mdsvex'
import { mdsvexConfig } from './mdsvex.config.js'
import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
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
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter(),

		vite: {
			server: {
				cors: false
			}
		}
	}
}

export default config
