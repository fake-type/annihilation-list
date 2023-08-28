import reactPlugin from '@vitejs/plugin-react-swc'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
	root: 'src',
	publicDir: resolve(__dirname, 'public'),
	build: {
		target: 'exnext',
		outDir: resolve(__dirname, 'dist'),
	},
	plugins: [reactPlugin()],
})
