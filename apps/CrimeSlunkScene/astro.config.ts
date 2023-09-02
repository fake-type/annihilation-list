import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
	markdown: {
		syntaxHighlight: 'shiki',
	},
	integrations: [mdx(), react()],
	vite: { plugins: [vanillaExtractPlugin()] },
})
