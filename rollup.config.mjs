import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

/** @type {import('rollup').RollupOptions} */
const config = {
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
			declaration: true,
			declarationDir: './dist',
			declarationMap: false,
			// Tạo declarations nhưng không tạo thư mục con
			composite: false,
			outDir: undefined,
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
};

export default config;

