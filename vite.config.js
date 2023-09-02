import { sveltekit } from '@sveltejs/kit/vite';
import Icons from 'unplugin-icons/vite';
import { imagetools } from 'vite-imagetools';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [
		sveltekit(),
		Icons({ compiler: 'svelte' }),
		imagetools({
			defaultDirectives: new URLSearchParams(`format=avif;webp&as=picture`)
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
