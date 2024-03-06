import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginRequire from 'vite-plugin-require';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // Add the base option to specify the base URL
  plugins: [react(),vitePluginRequire.default()],
});
