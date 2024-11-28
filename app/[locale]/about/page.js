import React from "react";
import AboutMe from "@/components/About/AboutMe";
import initTranslations from "@/app/i18n";
import Skills from "@/components/About/Skills";
import { Footer } from "@/components/Footer/Footer";

const namespaces = ["about"];

export default async function Page({ params }) {
  const { locale } = await params;
  const { t } = await initTranslations(locale, namespaces);

  return (
    <div className="flex flex-col justify-center items-center gap-3 xl:gap-7 mb-5 p-5 pb-0">
      <AboutMe t={t} />
      <Skills t={t} />
      <Footer />
    </div>
  );
}
