/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			padding: {
			  DEFAULT: '0.3rem',
			  sm: '3rem',
			  lg: '6rem',
			  xl: '7rem',
			  '2xl': '6rem',
			},
		  },
		extend: {},
	},
	plugins: [],
}
