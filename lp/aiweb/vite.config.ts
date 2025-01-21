import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base: '/lp/aiweb', // サブディレクトリのパス
  build: {
    outDir: 'dist', // 出力先ディレクトリ
  },
});
