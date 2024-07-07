import { defineConfig } from "vitepress";
import {
    demoblockPlugin,
    demoblockVitePlugin,
} from "vitepress-theme-demoblock";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
    title: "LoongArch Compatibility Database",
    description: "适用于龙架构的兼容性数据网站",
    themeConfig: {
        nav: [
            { text: "主页", link: "/" },
            {
                text: "兼容性列表",
                items: [
                    { text: "硬件兼容性", link: "/list-hardwares" },
                    { text: "LAT 兼容性", link: "/list-lat" },
                    { text: "LibLOL 兼容性", link: "/list-liblol" },
                ],
            },
            {
                text: "更多文档",
                items: [
                    { text: "硬件相关", link: "/item-1" },
                    { text: "LAT 相关", link: "/item-2" },
                    { text: "LibLOL 相关", link: "/item-3" },
                ],
            },
        ],

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
    demoblock: {
        root: {
            "view-source": "View source",
            "hide-source": "Hide source",
            "edit-in-editor": "Edit in Playground",
            "edit-on-github": "Edit on GitHub",
            "copy-code": "Copy code",
            "copy-success": "Copy success",
            "copy-error": "Copy error",
        },
        zh: {
            "view-source": "查看源代码",
            "hide-source": "隐藏源代码",
            "edit-in-editor": "在 Playground 中编辑",
            "edit-on-github": "在 Github 中编辑",
            "copy-code": "复制代码",
            "copy-success": "复制成功",
            "copy-error": "复制失败",
        },
    },
});
