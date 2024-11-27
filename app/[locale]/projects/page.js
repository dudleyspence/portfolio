import Project from "@/components/Projects/Project";
import React from "react";
import initTranslations from "@/app/i18n";
import { Footer } from "@/components/General/Footer";
import projects from "./projects.js";

export default async function page({ params }) {
  const { locale } = await params;
  const { t } = await initTranslations(locale, ["projects"]);

  return (
    <div className="flex flex-col justify-center items-center gap-8 lg:gap-16 my-10">
      {projects.map((project) => (
        <Project
          key={t(project.title)}
          image={project.image}
          title={t(project.title)}
          type={t(project.type)}
          frontskills={project.frontskills}
          backskills={project.backskills}
          githubF={project.githubF}
          githubB={project.githubB}
          siteLink={project.siteLink}
          description={t(project.description)}
          reverse={project.reverse}
          linktag={t(project.linktag)}
        />
      ))}
      <Footer />
    </div>
  );
}
