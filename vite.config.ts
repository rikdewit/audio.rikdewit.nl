
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vervang 'REPOSNAAM' door de naam van je github repository als het geen custom domein is
export default defineConfig({
  plugins: [react()],
  base: '/', 
  build: {
    outDir: 'dist',
  }
});
