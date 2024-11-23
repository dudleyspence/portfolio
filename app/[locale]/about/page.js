import React from "react";
import AboutMe from "@/components/AboutMe";
import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "@/app/i18n";
import Skills from "@/components/Skills";

const namespaces = ["about"];

export default async function Page({ params }) {
  const { locale } = await params;
  const { resources } = await initTranslations(locale, namespaces);

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
