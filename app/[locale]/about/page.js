import React from "react";
import AboutMe from "@/components/About/AboutMe";
import { useTranslations } from "next-intl";
import Skills from "@/components/About/Skills";
import { Footer } from "@/components/Footer/Footer";

export default function Page() {
  const t = useTranslations("about");

  return (
    <div className="pt-6 min-h-[calc(100vh-60px)] lg:min-h-[calc(100vh-108px)] flex flex-col justify-center items-center gap-3 xl:gap-7 mb-5 lg:p-5 pb-0">
      <AboutMe t={t} />
      <Skills t={t} />
      <Footer />
    </div>
  );
}
