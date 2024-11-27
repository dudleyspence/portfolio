"use client";

import { I18nextProvider } from "react-i18next";
import initTranslations from "@/app/i18n";
import { createInstance } from "i18next";
import { useEffect, useRef } from "react";

let i18n;

export default function TranslationsProvider({
  children,
  locale,
  namespaces,
  resources,
}) {
  const isFirstRender = useRef(true);

  if (!i18n) {
    i18n = createInstance();
    initTranslations(locale, namespaces, i18n, resources);
  }

  useEffect(() => {
    if (!isFirstRender.current) {
      i18n.changeLanguage(locale);
    } else {
      isFirstRender.current = false;
    }
  }, [locale]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
