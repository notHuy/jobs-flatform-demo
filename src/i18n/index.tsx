import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJSON from "./translations/en";
import deJSON from "./translations/de";
import esJSON from "./translations/es";
import frJSON from "./translations/fr";
import cnJSON from "./translations/cn";
import saJSON from "./translations/sa";

const resources = {
  en: { translation: enJSON },
  de: { translation: deJSON },
  es: { translation: esJSON },
  fr: { translation: frJSON },
  cn: { translation: cnJSON },
  sa: { translation: saJSON },
};

i18n.use(initReactI18next).init({
  resources,
  keySeparator: false,
  lng: "en",
  fallbackLng: "en",
  react: {
    useSuspense: true,
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
