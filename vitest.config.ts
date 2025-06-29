import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
   coverage: {
      provider: 'istanbul',
      reporter: ['text', 'html'],
      exclude: [
        'src/test/**',
        'src/index.tsx',
        'src/db/**'
      ]
   }
  },
});