import { defineConfig } from "vitepress";

import { navbar } from "./navbar";
import { sidebar_hardwares } from "./sidebar_hardwares";
import { sidebar_lat } from "./sidebar_lat";
import { sidebar_liblol } from "./sidebar_liblol";
import { sidebar_contribution } from "./sidebar_contribution";
import { sidebar_chips } from "./sidebar_chips";

export const en = defineConfig({
    lang: "en",
    title: "Loong 1-2-3",
    description: "Compatibility Data Site for LoongArch",
    themeConfig: {
        outline: {
            label: "On this page",
        },
        nav: navbar,
        sidebar: {
            "/en/hardwares/": [
                {
                    text: "Hardwares Info",
                    items: sidebar_hardwares,
                },
            ],
            "/en/lat/": [
                {
                    text: "LAT Info",
                    items: sidebar_lat,
                },
            ],
            "/en/liblol/": [
                {
                    text: "LibLoL Info",
                    items: sidebar_liblol,
                },
            ],
            "/en/contribution/": [
                {
                    text: "Contribution",
                    items: sidebar_contribution,
                },
            ],
            "/en/chips/": sidebar_chips,
        }
    },
});
