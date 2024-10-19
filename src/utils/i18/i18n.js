import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from './en.json'
import ar from './ar.json'
const resources = {
    en: {
        translation: en
    },
    ar: {
        translation: ar
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        fallbacklng: 'en',
        lng: "en",
        interpolation: {
            escapeValue: false
        }
    });
export default i18n; 