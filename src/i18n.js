// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Translations
const resources = {
  en: {
    translation: {
      firstName: "First Name",
      lastName: "Last Name",
      // Other translations can go here
    },
  },
  es: {
    translation: {
      firstName: "Nombre",
      lastName: "Apellido",
      // Other translations can go here
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
