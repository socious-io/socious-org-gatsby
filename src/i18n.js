import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import HttpBackend from "i18next-http-backend"
import LanguageDetector from "i18next-browser-languagedetector"

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: ["en","ja","fr","es"],
    ns: ["navbar", "hero", "benefits", "howitworks", "faq", "thank", "footer"],
    defaultNS: "navbar",
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    detection: {
      order: ["localStorage", "cookie", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
    reloadOnLanguageChange: true,
    debug: true, // Turn this ON to see i18n logs in the browser console
  })

export default i18n
