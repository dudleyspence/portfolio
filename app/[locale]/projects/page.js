import Project from "@/components/Projects/Project";
import React from "react";
import { useTranslations } from "next-intl";
import { Footer } from "@/components/Footer/Footer";
import projects from "./projects.js";

export default function Page() {
  const t = useTranslations("projects");

  return (
    <div className="flex flex-col w-full justify-center items-center gap-8 lg:gap-16 my-10">
      <p className="text-[25px] lg:text-[30px] self-start text-foreground">
        {t("title")}
      </p>

      {projects.map((project) => {
        return (
          <div key={project.id}>
            <Project
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
              isPriority={project.isPriority}
            />
          </div>
        );
      })}
      <Footer />
    </div>
  );
}
