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
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: false,
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: false,
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
};

export default config;

