import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // 实时联调你的库（直接使用源码）
      '@leeyh-labs/lhooks': path.resolve(__dirname, '../hooks/src'),
    },
  },
});
