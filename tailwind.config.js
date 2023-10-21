/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				background: '#1a1a1a',
				foreground: '#2E2E2E',
				accent: '#FF3E00'
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
