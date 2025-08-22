import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import dts from 'rollup-plugin-dts';

/** @type {import('rollup').RollupOptions[]} */
const config = [
	// Build JavaScript bundles
	{
		input: 'src/index.ts',
		output: [
			{
				file: 'dist/index.js',
				format: 'cjs',
				sourcemap: false,
				exports: 'named',
			},
			{
				file: 'dist/index.esm.js',
				format: 'esm',
				sourcemap: false,
				exports: 'named',
			},
		],
		plugins: [
			resolve({
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			}),
			commonjs(),
			typescript({
				tsconfig: './tsconfig.json',
				declaration: false, // Không tạo declarations ở đây
				declarationMap: false,
			}),
			postcss({
				extract: 'styles.css',
				minimize: true,
				plugins: [tailwindcss(), autoprefixer()],
			}),
		],
		external: ['react', 'react-dom'],
		treeshake: {
			moduleSideEffects: false,
			propertyReadSideEffects: false,
			unknownGlobalSideEffects: false,
		},
		preserveModules: false,
	},
	// Build TypeScript declarations
	{
		input: 'src/index.ts',
		output: {
			file: 'dist/index.d.ts',
			format: 'esm',
		},
		plugins: [
			dts({
				// Loại bỏ CSS imports khỏi declarations
				respectExternal: true,
			}),
		],
		external: ['react', 'react-dom', './index.css'],
	},
];

export default config;

