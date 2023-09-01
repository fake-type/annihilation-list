import mdx from '@astrojs/mdx'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
	markdown: {
		syntaxHighlight: 'shiki',
	},
	integrations: [mdx()],
	vite: { plugins: [vanillaExtractPlugin()] },
})
