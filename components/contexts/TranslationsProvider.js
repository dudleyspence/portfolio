"use client";

import { I18nextProvider } from "react-i18next";
import initTranslations from "@/app/i18n";
import { createInstance } from "i18next";

let i18n;

export default function TranslationsProvider({
  children,
  locale,
  namespaces,
  resources,
}) {
  if (!i18n) {
    i18n = createInstance();
    initTranslations(locale, namespaces, i18n, resources);
  } else {
    i18n.changeLanguage(locale);
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
