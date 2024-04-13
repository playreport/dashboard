/**
 * i18n configuration
 */
export default defineI18nConfig(() => ({
  legacy: false,
  defaultLocale: "en-GB",
  fallbackLocale: "en-GB",
  allowComposition: true,
  globalInjection: true,
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
      code: "es-ES",
      iso: "es-ES",
      file: "es-ES.ts",
    },
    {
      code: "fr-FR",
      iso: "fr-FR",
      file: "fr-FR.ts",
    },
    {
      code: "de-DE",
      iso: "de-DE",
      file: "de-DE.ts",
    },
  ],
}));
