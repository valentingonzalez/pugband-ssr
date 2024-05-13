import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  root: path.resolve(__dirname), // This should generally be your project root
  build: {
    outDir: 'dist/client', // Outputs build files to the 'dist/client' directory
    ssrManifest: true, // Ensure this is set to true to generate ssr-manifest.json in the specified outDir
    rollupOptions: {
      input: path.resolve(__dirname, 'public', 'index.html') // Ensure this points to your entry HTML file
    }
  },
  ssr: {
    noExternal: true // Adjust this based on your needs for external dependencies in SSR
  }
});
