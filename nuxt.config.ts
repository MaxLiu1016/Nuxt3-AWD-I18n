import i18nConfig from "./config/i18n";
import piniaConfig from "./config/pinia";
export default defineNuxtConfig({
    css: ["~/assets/css/main.css"],
    modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxtjs/i18n"],
    imports: {
        dirs: ["./store", "./types/eums"],
    },
    components: {
        global: true,
        dirs: ["~/components", "~/components/MobilePage", "~/components/DesktopPage"],
    },
    ...piniaConfig,
    ...i18nConfig,
});
