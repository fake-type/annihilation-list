import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import reactPlugin from '@vitejs/plugin-react-swc'
import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
	root: 'src',
	publicDir: resolve(__dirname, 'public'),
	test: {
		environment: 'happy-dom',
		globals: true,
		dir: __dirname,
	},
	plugins: [reactPlugin(), vanillaExtractPlugin()],
})
