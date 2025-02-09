import React from "react";
import PageSubTitle from "../UI/PageSubTitle.jsx";
import projects from "@/app/[locale]/projects/projects.js";
import PersonalProject from "./PersonalProject.jsx";

export default function PersonalProjects({ t }) {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-8 lg:gap-16">
      <PageSubTitle title={t("personal_projects")} />

      {projects.map((project) => {
        return (
          <div key={project.id}>
            <PersonalProject
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
    </div>
  );
}
