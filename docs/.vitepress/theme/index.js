import DefaultTheme from "vitepress/theme";
import './custom.css'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/base.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

import i18n from "./i18n";

export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx);
        ctx.app.use(ElementPlus);
        ctx.app.use(i18n);
    },
};
