import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"
import fr_translation from "./languages/fr";
import en_translation from "./languages/en";
import ar_translation from "./languages/ar";

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        //debug: true,
        fallbackLng: 'en',
        resources: {
            en: en_translation,
            fr: fr_translation,
            ar: ar_translation,
        }
})
