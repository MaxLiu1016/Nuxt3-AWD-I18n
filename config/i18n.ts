import { NuxtI18nOptions } from "@nuxtjs/i18n";

export default {
    i18n: {
        defaultLocale: "zh",
        langDir: "locales",
        locales: [
            { code: "en", file: "en-US.json", iso: "en-US", name: "English" },
            { code: "zh", file: "zh-TW.json", iso: "zh-TW", name: "繁體中文" },
        ],
        strategy: "no_prefix",
        vueI18n: {
            legacy: false,
        },
    } as NuxtI18nOptions,
};
