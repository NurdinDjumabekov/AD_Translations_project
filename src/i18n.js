import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ru from "./translation/ru.json";
import kg from "./translation/kg.json";
import en from "./translation/en.json";

const resources = {
  ru: { translation: ru },
  kg: { translation: kg },
  en: { translation: en },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
