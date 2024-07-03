import DefaultTheme from "vitepress/theme";
import "vitepress-theme-demoblock/dist/theme/styles/index.css";
import { useComponents } from "./useComponents";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx);
        useComponents(ctx.app);
        ctx.app.use(ElementPlus, { locale: cn })
    },
};
