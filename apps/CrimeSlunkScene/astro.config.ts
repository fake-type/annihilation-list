import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
	experimental: {
		assets: true,
	},
	vite: { plugins: [vanillaExtractPlugin()] },
})
