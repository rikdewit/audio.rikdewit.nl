
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Voor een custom domein zoals audio.rikdewit.nl moet de base altijd '/' zijn.
export default defineConfig({
  plugins: [react()],
  base: '/', 
  build: {
    outDir: 'dist',
  }
});
