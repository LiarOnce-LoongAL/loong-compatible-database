import { createI18n } from "vue-i18n";
import zh from "../i18n/zh.json";
import en from "../i18n/en.json";

const i18n = createI18n({
    // locale: document.documentElement.lang || "zh",
    locale: localStorage.getItem('lang'),
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
