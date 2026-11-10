import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'FedExShippingRatesBroker',
      fileName: () => 'index.js',
      formats: ['iife']
    },
    outDir: 'dist',
    minify: false,
    sourcemap: false,
    rollupOptions: {
      output: {
        // Ensure single file output
        inlineDynamicImports: true,
        // Don't use strict mode for K2 compatibility
        strict: false
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
});
