import React from "react";

import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";

import Skills from "@/components/Skills";
import AboutMe from "@/components/AboutMe";

const namespaces = ["about"];

export default async function page({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, namespaces);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={namespaces}
    >
      <div className="flex flex-col justify-center items-center gap-10 mb-5 p-5">
        <AboutMe />
        <Skills />
      </div>
    </TranslationsProvider>
  );
}
