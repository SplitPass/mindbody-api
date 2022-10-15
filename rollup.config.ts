import cleanup from 'rollup-plugin-cleanup';
import dts from 'rollup-plugin-dts';
import typescript from '@rollup/plugin-typescript';

export default [
  {
    input: 'src/index.ts',
    external: ['axios'],
    output: [
      {
        file: 'dist/esm/index.mjs',
        format: 'esm',
        generatedCode: {
          constBindings: true,
        },
        exports: 'named',
      },
      {
        file: 'dist/cjs/index.cjs',
        format: 'cjs',
        exports: 'named',
      },
    ],
    plugins: [
      typescript(),
      cleanup({
        comments: 'none',
        extensions: '.ts',
      }),
    ],
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
