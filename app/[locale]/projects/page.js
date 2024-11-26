import Project from "@/components/Projects/Project";
import React from "react";
import initTranslations from "@/app/i18n";

const projects = [
  {
    image: "/PeaceOfMind.png",
    type: "fullstack",
    title: "peace_of_mind_title",
    frontskills: ["JavaScript", "React", "Redux", "Tailwind"],
    backskills: ["Node.js", "express.js", "MongoDB"],
    githubF: "https://github.com/dudleyspence/PeaceOfMind-FE",
    githubB: "https://github.com/dudleyspence/PeaceOfMind-API",
    siteLink: "https://peaceofmind-fe-production.up.railway.app",
    description: "peace_of_mind_desc",
    reverse: false,
    linktag: "view_site",
  },
  {
    image: "/FrenchLanguage.png",
    type: "fullstack",
    title: "french_language_title",
    frontskills: ["Next.js", "Tailwind", "Axios"],
    backskills: ["MongoDB"],
    githubF: "https://github.com/dudleyspence/french-learning-journey",
    githubB: "",
    siteLink: "https://french-learning-journey-production.up.railway.app/",
    description: "french_language_desc",
    reverse: true,
    linktag: "view_site",
  },
  {
    image: "/TrailTalk.png",
    type: "fullstack",
    title: "trailtalk_title",
    frontskills: ["JavaScript", "React", "HTML", "CSS"],
    backskills: ["Node.js", "PostgreSQL", "express.js"],
    githubF: "https://github.com/dudleyspence/TrailTalk",
    githubB: "https://github.com/dudleyspence/be-news-api",
    siteLink: "https://trailtalk-production.up.railway.app",
    description: "trailtalk_desc",
    reverse: false,
    linktag: "view_site",
  },
  {
    image: "/TravelSync.png",
    type: "fullstack",
    title: "travelsync_title",
    frontskills: ["React.js", "HTML", "CSS", "Mapbox"],
    backskills: [
      "Python",
      "fastAPI",
      "MySql",
      "SQLAlchemy",
      "FirebaseAuth",
      "GooglePlaces API",
    ],
    githubF: "https://github.com/dudleyspence/TravelSync-FE-Extended",
    githubB: "https://github.com/dudleyspence/TravelSyncAPI-Extended",
    siteLink: "https://travelsync-fe-extended-production.up.railway.app",
    description: "travelsync_desc",
    reverse: true,
    linktag: "view_site",
  },
  {
    image: "/Npuzzle.png",
    type: "dissertation",
    title: "n_puzzle_title",
    backskills: ["Python", "TensorFlow", "NumPy"],
    githubF: "",
    githubB: "https://github.com/dudleyspence/N-Puzzle-DQN",
    siteLink: "download",
    description: "n_puzzle_desc",
    reverse: false,
    linktag: "download_diss",
  },
  {
    image: "/PortfolioSinglePage.png",
    type: "frontend",
    title: "original_portfolio_title",
    frontskills: ["HTML", "CSS", "JavaScript"],
    githubF: "https://github.com/dudleyspence/old-portfolio-site",
    githubB: "",
    siteLink: "https://old-portfolio-site-production.up.railway.app",
    description: "original_portfolio_desc",
    reverse: true,
    linktag: "view_site",
  },
];

export default async function page({ params }) {
  const { locale } = await params;
  const { t } = await initTranslations(locale, ["projects"]);
  {
    console.log(t(projects[0].linktag));
  }
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
    </div>
  );
}
