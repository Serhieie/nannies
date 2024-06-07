import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: { watch: { usePolling: true } },
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
      pages: '/src/pages',
      assets: '/src/assets',
    },
  },
  base: '/nannies',
  build: {
    outDir: 'dist',
    assetsDir: '.',
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
});
