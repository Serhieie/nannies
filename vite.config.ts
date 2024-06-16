import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  server: { watch: { usePolling: true } },
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      components: fileURLToPath(new URL('./src/components', import.meta.url)),
      assets: fileURLToPath(new URL('./src/assets', import.meta.url)),
      nannies: fileURLToPath(new URL('./src/redux/nannies', import.meta.url)),
      users: fileURLToPath(new URL('./src/redux/user', import.meta.url)),
      modalsState: fileURLToPath(
        new URL('./src/redux/modals', import.meta.url)
      ),
      filters: fileURLToPath(new URL('./src/redux/filters', import.meta.url)),
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
