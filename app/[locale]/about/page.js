import React from "react";
import AboutMe from "@/components/About/AboutMe";
import { getTranslations } from "next-intl/server";
import Skills from "@/components/About/Skills";
import { Footer } from "@/components/Footer/Footer";
import PageTitle from "@/components/UI/PageTitle";
import Education from "@/components/About/Education";
import PageSubTitle from "@/components/UI/PageSubTitle";

export default async function Page() {
  const t = await getTranslations("about");

  return (
    <div className="pt-6 min-h-[calc(100vh-60px)] lg:min-h-[calc(100vh-108px)] flex flex-col justify-center items-center gap-3 xl:gap-7 lg:p-5 lg:pb-0 pb-0">
      <PageTitle title={t("title")} />
      <AboutMe t={t} />

      <PageSubTitle title={t("skills")} />
      <Skills t={t} />
      <PageSubTitle title={t("education.title")} />
      <Education t={t} />
      <Footer />
    </div>
  );
}
