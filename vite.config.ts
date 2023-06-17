import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcss from './postcss.config';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      types: `${path.resolve(__dirname, './src/types.d.ts')}`,
    },
  },
});
