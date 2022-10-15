import dts from 'rollup-plugin-dts';
import typescript from '@rollup/plugin-typescript';

export default [
  {
    input: 'src/index.ts',
    external: ['axios'],
    output: [
      {
        file: 'dist/esm/index.js',
        format: 'esm',
        generatedCode: {
          constBindings: true,
        },
        exports: 'named',
      },
      {
        file: 'dist/cjs/index.mjs',
        format: 'cjs',
        exports: 'default',
      },
    ],
    plugins: [typescript()],
  },
  {
    input: 'src/index.ts',
    external: ['axios'],
    output: [
      {
        file: 'dist/types.d.ts',
        format: 'es',
      },
    ],
    plugins: [typescript(), dts()],
  },
];
