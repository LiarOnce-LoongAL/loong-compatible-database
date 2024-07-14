import { defineConfig } from "vitepress";
import { shared } from './shared'

import { zh } from "./zh/main";
import { en } from "./en/main";

export default defineConfig({
    ...shared,
    locales: {
        root: { label: '简体中文', ...zh },
        en: { label: 'English', ...en },
    }
});
