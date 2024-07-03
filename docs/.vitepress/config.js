import { defineConfig } from "vitepress";
import {
  demoblockPlugin,
  demoblockVitePlugin,
} from "vitepress-theme-demoblock";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/example/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/example/markdown-examples" },
          { text: "Runtime API Examples", link: "/example/api-examples" },
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
