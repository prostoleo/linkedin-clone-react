import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
// import reactRefresh from '@vitejs/plugin-react-refresh';
import reactCssModule from 'vite-plugin-react-css-modules';
const generateScopedName = '[name]__[local]___[hash:base64:5]';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		reactCssModule({
			generateScopedName,
			filetypes: {
				'.less': {
					syntax: 'postcss-less',
				},
				/* '.scss': {
					syntax: 'postcss-scss',
				}, */
			},
		}),
		react(),
		// reactRefresh(),
	],
	resolve: {
		alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
	},
});
