import adapter from '@sveltejs/adapter-node';
// import { vitePreprocess } from '@sveltejs/kit/vite'; // not sure about this either, check later
import preprocess from 'svelte-preprocess';


// save forpossible fututre use
// import { Server} from 'socket.io'

// export const webSocketServer = {
// 	name: 'webSocketServer',
// 	configerServer(server) {
// 		const io = new Server(server.httpServer); // might need to change in the future, from vite config
		
// 		io.on('connection', (socket) => {
// 			socket.emit('eventFromServer', 'Hello from the server')})
// 	}
// }


/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true
		})
	],
	kit:{
		adapter: adapter()
	}

	// preprocess: vitePreprocess(),
	// kit: {
	// 	adapter: adapter(),
	// 	vite: {
	// 		plugins: [webSocketServer],
	// 	},
	// },
	
};

export default config;