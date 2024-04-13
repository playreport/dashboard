export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/supabase",
    "@nuxtjs/i18n",
    "@nuxtjs/color-mode",
    "@nuxt/image",
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  supabase: {
    redirectOptions: {
      login: "/login",
      callback: "/confirm",
      include: undefined,
      exclude: ["/forgot", "/signup", "/confirm"],
      cookieRedirect: false,
    },
  },
  colorMode: {
    classSuffix: "",
  },
  i18n: {
    strategy: "prefix_except_default",
    defaultLocale: "en-GB",
    detectBrowserLanguage: false,
    langDir: "./i18n/src/langs/",
    vueI18n: "./i18n/config",
    locales: [
      {
        code: "en-GB",
        iso: "en-GB",
        file: "en-GB.ts",
      },
      {
        code: "pt-PT",
        iso: "pt-PT",
        file: "pt-PT.ts",
      },
      {
        code: "de-DE",
        iso: "de-DE",
        file: "de-DE.ts",
      },
      {
        code: "fr-FR",
        iso: "fr-FR",
        file: "fr-FR.ts",
      },
      {
        code: "es-ES",
        iso: "es-ES",
        file: "es-ES.ts",
      },
    ],
  },
});
