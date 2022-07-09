import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: '_scripts/main.js',
  output: {
    file: 'assets/scripts/bundle.js',
    format: 'iife'
  },
  plugins: [json(), nodeResolve()]
};