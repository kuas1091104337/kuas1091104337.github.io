import { fileURLToPath, URL } from 'node:url';
import path from "path";

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // imports 是加入按裝套件的地方 API自動引入
      imports: ["vue", "vue-router", "vue-i18n"],
      dts: "src/auto-imports.js",
    }),
    Components({
      // 從 `./src/components/` 路徑查找
      extensions: ["vue"],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: "src/auto-components.js",
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/assets/svg")],
      symbolId: "[dir]/[name]",
    }),
    Pages(),
    Layouts(),
  ],
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
      // '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/variablesExtendMixin.scss";` 
      }
    }
  },
  server: {
    host: '0.0.0.0'
  }
})
