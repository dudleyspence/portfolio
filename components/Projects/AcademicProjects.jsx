import React from "react";
import PageSubTitle from "../UI/PageSubTitle";
import PersonalProject from "./PersonalProject";

const project = {
  image:
    "https://res.cloudinary.com/dvb1ktpjd/image/upload/v1739051718/Npuzzle_vyxizc.png",
  type: "dissertation",
  title: "n_puzzle_title",
  backskills: ["Python", "TensorFlow", "NumPy"],
  githubF: "",
  githubB: "https://github.com/dudleyspence/N-Puzzle-DQN",
  siteLink: "download",
  description: "n_puzzle_desc",
  reverse: true,
  linktag: "download_diss",
  isPriority: false,
  blurHash: "LfM?;v*0McDO^$xuozi_V=IotRxu",
};

export default function AcademicProjects({ t }) {
  return (
    <div className="w-full">
      <PageSubTitle title={t("academic_projects")} />
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
}
