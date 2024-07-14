import { defineConfig } from "vitepress";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

import { search_locales_zh } from "./zh/main";

export const shared = defineConfig({
    themeConfig: {
        locales: {
            root: {
                label: "简体中文",
                lang: "zh"
            },
            en: {
                label: "English",
                lang: "en"
            }
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
        config: (md) => {},
    },
    vite: {
        ssr: {
            noExternal: ["element-plus"],
        },
        plugins: [
            AutoImport({
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                resolvers: [ElementPlusResolver()],
            }),
        ],
    },
});
