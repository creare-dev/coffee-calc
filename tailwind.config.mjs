/** @type {import('tailwindcss').Config} */

const espressoDark = '#2C1A15';
const creamyBeige = '#F5E6D3';
const carmelTan = '#C69C6D';
const richCoffeeBrown = '#3B2A20';
const mochaGray = "#B0A99F";


export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			"surface-l": creamyBeige,
			"primary-l": richCoffeeBrown,
			"secondary-l": mochaGray,
			"headers-l": espressoDark,
			"links-l": carmelTan,
			"accent-l": carmelTan,
			"surface-d": espressoDark,
			"primary-d": creamyBeige,
			'secondary-d':richCoffeeBrown,
			'headers-d':  carmelTan,
			'links-d': carmelTan,
			'accent-d': mochaGray,
		}
	},
	plugins: [],
}
