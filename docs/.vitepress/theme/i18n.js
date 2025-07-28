import { createI18n } from "vue-i18n";
import zh from "../i18n/zh.json";
import en from "../i18n/en.json";

let current_lang;
if (typeof window !== "undefined") {
    current_lang = localStorage.getItem('lang');
}

const i18n = createI18n({
    // locale: document.documentElement.lang || "zh",
    legacy: false,
    locale: current_lang,
    globalInjection: true,
    silentTranslationWarn: true,
    missingWarn: false,
    silentFallbackWarn: true,
    fallbackWarn:false,
    messages: {
        zh: zh,
        en: en,
    },
});

export default i18n;
