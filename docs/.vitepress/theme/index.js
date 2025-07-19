import DefaultTheme from "vitepress/theme";
import './custom.css'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/base.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import { nextTick } from "vue";

import compatibleBadge from './components/badges/compatible.vue'
import partialBadge from './components/badges/partial.vue'
import nativeBadge from './components/badges/native.vue'
import newWorldBadge from './components/badges/newWorld.vue'
import unknownBadge from './components/badges/unknown.vue'
import unsupportedBadge from './components/badges/unsupported.vue'

import CpuCompare from "./components/compare/CpuCompare.vue";

import i18n from "./i18n";
import Layout from "./components/Layout.vue";

export default {
    ...DefaultTheme,
    Layout: Layout,
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx);
        ctx.app.use(i18n);
        ctx.app.use(ElementPlus);
        ctx.app.mixin({
            mounted() {
                nextTick(() => {
                    // Used for execute switch language after insert "lang" in <html>
                    if (typeof window !== "undefined") {
                        // Determine if the "window" exists to allow Vite to build smoothly
                        // There's black magic on the frontend, too!!!
                        const current_lang = document.documentElement.lang || "en";
                        localStorage.setItem("lang", current_lang);
                        if (ctx.app.config.globalProperties.$i18n) {
                            ctx.app.config.globalProperties.$i18n.locale = current_lang;
                        }
                        this.$forceUpdate();
                    }
                });
            },
        });
        // Global badges
        ctx.app.component("Compatible", compatibleBadge);
        ctx.app.component("Partial", partialBadge);
        ctx.app.component("Native", nativeBadge);
        ctx.app.component("NewWorld", newWorldBadge);
        ctx.app.component("Unknown", unknownBadge);
        ctx.app.component("Unsupported", unsupportedBadge);

        ctx.app.component("CpuCompare", CpuCompare);
    },
};
