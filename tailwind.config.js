/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{ts,tsx,js,jsx,mdx}',
		'./src/**/*.stories.{ts,tsx,mdx}',
		'./.storybook/**/*.{ts,tsx}',
	],
	theme: {
		extend: {},
	},
	plugins: [],
	corePlugins: { preflight: false },
};

