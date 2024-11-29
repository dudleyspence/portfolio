import React from "react";
import AboutMe from "@/components/About/AboutMe";
import { useTranslations } from "next-intl";
import Skills from "@/components/About/Skills";
import { Footer } from "@/components/Footer/Footer";

export default function Page() {
  const t = useTranslations("about");

  return (
    <div className="flex flex-col justify-center items-center gap-3 xl:gap-7 mb-5 p-5 pb-0">
      <AboutMe t={t} />
      <Skills t={t} />
      <Footer />
    </div>
  );
}
