import React from "react";
import PageSubTitle from "../UI/PageSubTitle";
import Project from "./PersonalProject";
import WorkProject from "./WorkProject";

export const freelaceProject = {
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
  blurURL:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAI0lEQVR4nGNoqCi/cupYbXYyO7ckw+o5E+5ePPX/zR05eXUApZAMxLwUT7AAAAAASUVORK5CYII=",
};

export default function FreelanceProjects({ t }) {
  const responsibilities = freelaceProject.responsibilities.map((res) =>
    t(res)
  );
  return (
    <div className="w-full">
      <PageSubTitle title={t("freelance_projects")} />
      <WorkProject
        WIP={freelaceProject.WIP}
        image={freelaceProject.image}
        dates={t(freelaceProject.dates)}
        title={t(freelaceProject.title)}
        companyRole={t(freelaceProject.companyRole)}
        companyLogo={freelaceProject.companyLogo}
        frontskills={freelaceProject.frontskills}
        backskills={freelaceProject.backskills}
        githubF={freelaceProject.githubF}
        githubB={freelaceProject.githubB}
        siteLink={freelaceProject.siteLink}
        description_1={t(freelaceProject.description_1)}
        responsibilities={responsibilities}
        reverse={freelaceProject.reverse}
        linktag={t(freelaceProject.linktag)}
        isPriority={freelaceProject.isPriority}
        blurURL={freelaceProject.blurURL}
      />
    </div>
  );
}
