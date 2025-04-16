import { defineConfig } from "vitepress";
import path from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import { fileURLToPath } from 'url'

import { search_locales_zh } from "./zh/main";

export const shared = defineConfig({
    i18nRouting: true,
    themeConfig: {
        footer: {
            message: 'CC BY-SA 4.0 International<br /><a href="https://beian.miit.gov.cn" target="_blank">鄂ICP备2022017735号-10</a>',
            copyright: 'Copyright © 2023-2025 <a href="https://github.com/LiarOnce" target="_blank">LiarOnce</a>'
        },
        search: {
            provider: "local",
            options: {
                locales: {
                    root: search_locales_zh
                },
            },
        },
        socialLinks: [
            {
                icon: "github",
                link: "https://github.com/LiarOnce-LoongAL/loong-compatible-database",
            },
        ],
    },
    markdown: {
        config: (md) => { },
    },
    vite: {
        ssr: {
            noExternal: ["element-plus", "vue-i18n"],
        },
        plugins: [
            AutoImport({
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                resolvers: [ElementPlusResolver()],
            }),
            VueI18nPlugin({
                include: [path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../i18n/**")]
            }),
        ],
        build: {
            rollupOptions: {
                external: ['document'],
            },
        }
    },
});
