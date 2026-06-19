import { defineConfig } from 'vite';
import monacoEditorPlugin from '../dist/index.js';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log(path.resolve(__dirname, 'src/worker/share.worker'));
export default defineConfig({
  root: 'test',
  // base: 'sub',
  build: {
    minify: false,
  },
  plugins: [
    vue(),
    monacoEditorPlugin({
      publicPath: 'a/monacoeditorwork',
      // customDistPath: (root, buildOutDir, base) => {
      //   return path.join(root, buildOutDir);
      // },
      // publicPath: 'https://unpkg.com/@dvaji/vite-plugin-monaco-editor@2.0.0/cdn',
      // forceBuildCDN: true,
      customWorkers: [
        {
          label: 'graphql',
          entry: 'monaco-graphql/dist/graphql.worker',
        },
        {
          label: 'share',
          entry: path.resolve(__dirname, 'src/worker/share.worker'),
        },
      ],
    }),
  ],
});
