import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		proxy: {
			//api 
			'/api': {
				target: 'http://localhost:4242',
				changeOrigin: true,
				ws: true,
				rewrite: (path) => path.replace(/^\/api/, '' )
			},
		}
	}
});
