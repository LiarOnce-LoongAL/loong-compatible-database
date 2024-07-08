import DefaultTheme from "vitepress/theme";
import './custom.css'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/base.css'

export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx);
        ctx.app.use(ElementPlus)
    },
};
