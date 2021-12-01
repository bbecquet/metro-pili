import { nodeResolve } from '@rollup/plugin-node-resolve'
import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/main.js',
    format: 'iife'
  },
  plugins: [nodeResolve(), commonjs(), babel({ babelHelpers: 'bundled' })]
}
