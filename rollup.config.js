import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'
import svelte from 'rollup-plugin-svelte'
import svg from 'rollup-plugin-svg'
import { terser } from 'rollup-plugin-terser'

const prod = process.env.NODE_ENV == 'production'

export default {
  input: 'src/scripts/_main.js',
  output: {
    sourcemap: false,
    format: 'iife',
    name: 'main',
    file: 'dist/assets/main.bundle.js',
  },
  plugins: [
    replace({
      DEV_MODE: !prod,
    }),
    svelte({
      dev: !prod,
    }),
    svg(),
    postcss({
      extract: 'dist/assets/main.bundle.css',
      minimize: prod,
    }),
    resolve({
      browser: true,
      dedupe: (importee) =>
        importee === 'svelte' || importee.startsWith('svelte/'),
    }),
    commonjs(),
    prod && terser(),
  ],
  watch: {
    clearScreen: false,
  },
}
