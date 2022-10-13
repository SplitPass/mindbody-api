import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  dts: true,
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  sourcemap: true,
  splitting: false,
  target: 'ES2019',
  treeshake: true,
});
