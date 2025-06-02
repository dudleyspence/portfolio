import React from "react";
import PageSubTitle from "../UI/PageSubTitle";
import Project from "./PersonalProject";
import WorkProject from "./WorkProject";

export const freelaceProject = {
  WIP: false,
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

export const saasProject = {
  WIP: false,
  image:
    "https://res.cloudinary.com/dvb1ktpjd/image/upload/v1748887548/ProductHunt_Graphics_3_iz3b4t.png",
  companyRole: "chunk_company_role",
  companyLogo:
    "https://res.cloudinary.com/dhe8ympcr/image/upload/v1747430397/ChunkLogo_dmaj1i_yzmz7n.png",
  title: "chunk_project_title",
  frontskills: ["TypeScript", "React.js", "Next.js", "TailwindCSS"],
  backskills: ["Tauri", "SQLite", "LemonSqueezy"],
  githubF: "",
  githubB: "",
  dates: "chunk_dates",
  siteLink: "https://www.chunkapp.net",
  description_1: "chunk_desc_1",
  responsibilities: ["chunk_res_1", "chunk_res_2", "chunk_res_3"],
  reverse: false,
  linktag: "view_site",
  isPriority: true,
  blurURL:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAI0lEQVR4nGNoqCi/cupYbXYyO7ckw+o5E+5ePPX/zR05eXUApZAMxLwUT7AAAAAASUVORK5CYII=",
};

export default function FreelanceProjects({ t }) {
  const eventHubResponsibilities = freelaceProject.responsibilities.map((res) =>
    t(res)
  );
  const chunkResponsibilities = saasProject.responsibilities.map((res) =>
    t(res)
  );

  return (
    <div className="flex flex-col w-full justify-center items-center gap-8 lg:gap-16">
      <PageSubTitle title={t("freelance_projects")} />
      <WorkProject
        WIP={saasProject.WIP}
        image={saasProject.image}
        dates={t(saasProject.dates)}
        title={t(saasProject.title)}
        companyRole={t(saasProject.companyRole)}
        companyLogo={saasProject.companyLogo}
        frontskills={saasProject.frontskills}
        backskills={saasProject.backskills}
        githubF={saasProject.githubF}
        githubB={saasProject.githubB}
        siteLink={saasProject.siteLink}
        description_1={t(saasProject.description_1)}
        responsibilities={chunkResponsibilities}
        reverse={saasProject.reverse}
        linktag={t(saasProject.linktag)}
        isPriority={saasProject.isPriority}
        blurURL={saasProject.blurURL}
      />
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
        responsibilities={eventHubResponsibilities}
        reverse={freelaceProject.reverse}
        linktag={t(freelaceProject.linktag)}
        isPriority={freelaceProject.isPriority}
        blurURL={freelaceProject.blurURL}
      />
    </div>
  );
}
