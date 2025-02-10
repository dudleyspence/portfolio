import React from "react";
import { getTranslations } from "next-intl/server";
import { Footer } from "@/components/Footer/Footer";
import PageTitle from "@/components/UI/PageTitle.jsx";
import ThisPortfolio from "@/components/Projects/ThisPortfolio.jsx";
import PersonalProjects from "@/components/Projects/PersonalProjects";
import FreelanceProjects from "@/components/Projects/FreelanceProjects";
import AcademicProjects from "@/components/Projects/AcademicProjects";

export default async function Page() {
  const t = await getTranslations("projects");

  return (
    <div className="flex flex-col w-full justify-center items-center gap-8 lg:gap-16">
      <div>
        <PageTitle title={t("title")} />
        <p className="text-foreground text-sm sm:text-xl">
          {t("page_summary")}
        </p>
      </div>

      <FreelanceProjects t={t} />
      <PersonalProjects t={t} />
      <AcademicProjects t={t} />
      <ThisPortfolio t={t} />
      <Footer />
    </div>
  );
}
