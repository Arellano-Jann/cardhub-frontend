import { sveltekit } from '@sveltejs/kit/vite';
// import { defineConfig } from 'vite'; // not sure about this either, check later
import { webSocketServer } from './webSocketPluginVite.js';


// export default defineConfig({
/** @type {import('vite').UserConfig} */
const config = {
	server: {
		port: 3000
	},
	preview: {
		port: 3000
	},
	plugins: [sveltekit(), webSocketServer],
};
	
// });
