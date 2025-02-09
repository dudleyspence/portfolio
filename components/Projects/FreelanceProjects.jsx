import React from "react";
import PageSubTitle from "../UI/PageSubTitle";
import Project from "./PersonalProject";
import WorkProject from "./WorkProject";

const project = {
  WIP: true,
  image:
    "https://res.cloudinary.com/dvb1ktpjd/image/upload/v1739131481/Portfolio/Projects/zjzkpq8y1zrvek1rwgsn.png",
  companyRole: "eventhub_company_role",
  companyLogo:
    "https://media.licdn.com/dms/image/v2/C4D0BAQFXj6DQEb5OMQ/company-logo_200_200/company-logo_200_200/0/1679915981113/techreturners_logo?e=2147483647&v=beta&t=5ji3p9kQSBwi7SCqbNuooaew7QBn6EDa2Wm43wyEKJQ",
  title: "eventhub_project_title",
  frontskills: ["TypeScript", "Next.js", "TailwindCSS", "React-hook-form"],
  backskills: ["Prisma", "MySQL", "Vitest", "Server Actions"],
  githubF: "https://github.com/dudleyspence/eventhub",
  githubB: "",
  dates: "eventhub_dates",
  siteLink: "https://eventhub-liard.vercel.app/",
  description_1: "eventhub_desc_1",
  responsibilities: ["eventhub_res_1", "eventhub_res_2", "eventhub_res_3"],
  reverse: true,
  linktag: "view_site",
  isPriority: true,
  blurHash: "LJMtK*My?w?wsVROXARjcZxuROxD",
};

export default function FreelanceProjects({ t }) {
  const responsibilities = project.responsibilities.map((res) => t(res));
  return (
    <div className="w-full">
      <PageSubTitle title={t("freelance_projects")} />
      <WorkProject
        WIP={project.WIP}
        image={project.image}
        dates={t(project.dates)}
        title={t(project.title)}
        companyRole={t(project.companyRole)}
        companyLogo={project.companyLogo}
        frontskills={project.frontskills}
        backskills={project.backskills}
        githubF={project.githubF}
        githubB={project.githubB}
        siteLink={project.siteLink}
        description_1={t(project.description_1)}
        responsibilities={responsibilities}
        reverse={project.reverse}
        linktag={t(project.linktag)}
        isPriority={project.isPriority}
      />
    </div>
  );
}
