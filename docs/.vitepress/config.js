import { defineConfig } from "vitepress";
import {
    demoblockPlugin,
    demoblockVitePlugin,
} from "vitepress-theme-demoblock";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

import { demoblock } from "./config_files/demoblock";
import { navbar } from "./config_files/navbar";
import { sidebar_hardwares } from "./config_files/sidebar_hardwares";
import { sidebar_lat } from "./config_files/sidebar_lat";
import { sidebar_liblol } from "./config_files/sidebar_liblol";

export default defineConfig({
    title: "LoongArch Compatibility Database",
    description: "适用于龙架构的兼容性数据网站",
    themeConfig: {
        outline: {
            label: "页面导航"
        },
        nav: navbar,
        sidebar: {
            "/hardwares/": [{
                text: '硬件相关',
                items: sidebar_hardwares
            }],
            "/lat/": [{
                text: 'LAT 相关',
                items: sidebar_lat
            }],
            "/liblol/": [{
                text: 'LibLOL 相关',
                items: sidebar_liblol
            }]
        },
        socialLinks: [
            { icon: "github", link: "https://github.com/vuejs/vitepress" },
        ],
    },
    markdown: {
        config: (md) => {
            md.use(demoblockPlugin);
        },
    },
    vite: {
        plugins: [
            demoblockVitePlugin(),
            AutoImport({
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                resolvers: [ElementPlusResolver()],
            }),
        ],
    },
    demoblock: demoblock,
});
