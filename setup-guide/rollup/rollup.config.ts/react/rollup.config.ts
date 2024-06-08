// FILE LEVEL ESLINT SUPPRESSIONS:
// Rollup throws the following error when the const declarations have a type definition.
// 'const' declarations must be initialized (Note that you need plugins to import files that are not JavaScript)
/* eslint-disable @typescript-eslint/typedef */

import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import terser from '@rollup/plugin-terser';
import path from 'path';
import {fileURLToPath} from 'url';
import preserveDirectives from 'rollup-plugin-preserve-directives';
import pkg from './package.json' assert {type: 'json'};

// eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const LIB_TSCONFIG = path.resolve(__dirname, 'tsconfig.lib.json');
const MERGED_TYPINGS_INPUT = path.resolve(__dirname, 'dist/esm/types/index.d.ts');
const MERGED_TYPINGS_OUTPUT = path.resolve(__dirname, 'dist/index.d.ts');

const rollupConfig = [
  {
    cache: false,
    input: path.join(__dirname, 'src', 'index.ts'),
    output: [
      {
        exports: 'named',
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        exportConditions: ['node'],
      }),
      commonjs(),
      typescript({tsconfig: LIB_TSCONFIG}),
      terser({
        compress: {
          directives: false, // Stop terser from removing directives like 'use client'.
        },
      }),
      preserveDirectives(),
    ],
  },
  {
    cache: false,
    external: [/\.s?css$/, /react/, /react-dom/],
    input: MERGED_TYPINGS_INPUT,
    output: [{file: MERGED_TYPINGS_OUTPUT, format: 'esm'}],
    plugins: [dts()],
  },
];

export default rollupConfig;
