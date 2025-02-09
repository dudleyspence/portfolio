import React from "react";
import { useTranslations } from "next-intl";
import { Footer } from "@/components/Footer/Footer";
import PageTitle from "@/components/UI/PageTitle.jsx";
import ThisPortfolio from "@/components/Projects/ThisPortfolio.jsx";
import PersonalProjects from "@/components/Projects/PersonalProjects";
import FreelanceProjects from "@/components/Projects/FreelanceProjects";
import AcademicProjects from "@/components/Projects/AcademicProjects";

export default function Page() {
  const t = useTranslations("projects");

  return (
    <div className="flex flex-col w-full justify-center items-center gap-8 lg:gap-16">
      <div>
        <PageTitle title={t("title")} />
        <p className="text-foreground text-xl">{t("page_summary")}</p>
      </div>

      <FreelanceProjects t={t} />
      <PersonalProjects t={t} />
      <AcademicProjects t={t} />
      <ThisPortfolio t={t} />
      <Footer />
    </div>
  );
}
