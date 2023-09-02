import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import reactPlugin from '@vitejs/plugin-react-swc'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
	root: 'src',
	publicDir: resolve(__dirname, 'public'),
	plugins: [reactPlugin(), vanillaExtractPlugin()],
})
