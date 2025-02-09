import DefaultTheme from "vitepress/theme";
import './custom.css'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/base.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

import compatibleBadge from '../../components/badges/compatible.vue'
import partialBadge from '../../components/badges/partial.vue'
import nativeBadge from '../../components/badges/native.vue'
import newWorldBadge from '../../components/badges/newWorld.vue'
import unknownBadge from '../../components/badges/unknown.vue'
import unsupportedBadge from '../../components/badges/unsupported.vue'

import i18n from "./i18n";

export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx);
        ctx.app.use(i18n);
        ctx.app.use(ElementPlus);
        // Global badges
        ctx.app.component("Compatible", compatibleBadge);
        ctx.app.component("Partial", partialBadge);
        ctx.app.component("Native", nativeBadge);
        ctx.app.component("NewWorld", newWorldBadge);
        ctx.app.component("Unknown", unknownBadge);
        ctx.app.component("Unsupported", unsupportedBadge);
    },
};
