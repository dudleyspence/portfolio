import Project from "@/components/Project";
import React from "react";

const projects = [
  {
    image: "PeaceOfMind.png",
    type: "Full-stack",
    title: "Peace of Mind",
    frontskills: ["JavaScript", "React", "Redux", "Tailwind"],
    backskills: ["Node.js", "express.js", "MongoDB"],
    githubF: "https://github.com/dudleyspence/PeaceOfMind-FE",
    githubB: "https://github.com/dudleyspence/PeaceOfMind-API",
    siteLink: "https://peaceofmind-fe-production.up.railway.app",
    description:
      "Peace of Mind connects families of geriatric patients with their carers, offering a shared space for scheduling tasks like medication, hygiene, meals, and medical appointments. Carers log task completions and leave notes on activities giving families insight into their loved one's well-being.",
    reverse: false,
  },
  {
    image: "FrenchLanguage.png",
    type: "Full-stack",
    title: "French Language App",
    frontskills: ["Next.js", "Tailwind", "Axios"],
    backskills: ["MongoDB"],
    githubF: "https://github.com/dudleyspence/french-learning-journey",
    githubB: "",
    siteLink: "https://french-learning-journey-production.up.railway.app/",
    description:
      "This simple app acts as a vocabulary storage tool for remembering new French nouns and verbs. It features tools like search functionality, verb conjugation tables, and gender-adaptive prenoun tables.",
    reverse: true,
  },
  {
    image: "TrailTalk.png",
    type: "Full-stack",
    title: "TrailTalk",
    frontskills: ["JavaScript", "React", "HTML", "CSS"],
    backskills: ["Node.js", "PostgreSQL", "express.js"],
    githubF: "https://github.com/dudleyspence/TrailTalk",
    githubB: "https://github.com/dudleyspence/be-news-api",
    siteLink: "https://trailtalk-production.up.railway.app",
    description:
      "A Reddit-style social media and blog platform designed for hikers to connect and stay informed with related news. Users can upload, view, and comment on articles. The platform features voting for both articles and comments, and articles can be sorted by topic or organized by date, votes, and comment count.",
    reverse: false,
  },
  {
    image: "TravelSync.png",
    type: "Full-stack",
    title: "TravelSync",
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
    description:
      "A web app that makes collaborative planning of group itineraries easy. With features like map-based location searches, an interactive itinerary list, document storage, and location details.",
    reverse: true,
  },

  {
    image: "Npuzzle.png",
    type: "dissertation",
    title: "Solving the N-puzzle using Deep Reinforcement Learning",
    backskills: ["Python", "TensorFlow", "NumPy"],
    githubF: "",
    githubB: "https://github.com/dudleyspence/N-Puzzle-DQN",
    siteLink: "",
    description:
      "My MSc Computer Science dissertation used Python and TensorFlow to create a deep reinforcement learning model that learns to solve the N-puzzle.",
    reverse: false,
  },
  {
    image: "PortfolioSinglePage.png",
    type: "Frontend",
    title: "Original Single Page Portfolio Site",
    frontskills: ["HTML", "CSS", "JavaScript"],
    githubF: "https://github.com/dudleyspence/old-portfolio-site",
    githubB: "",
    siteLink: "https://old-portfolio-site-production.up.railway.app",
    description:
      "While my current portfolio is built with Next.js, I value a strong foundation in web development. This original portfolio site, crafted with HTML, CSS, and JavaScript, showcases my ability to create responsive and user-friendly designs without relying on frameworks.",
    reverse: true,
  },
  // Add more projects here...
];

export default function page() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 lg:gap-16 my-10">
      {projects.map((project) => (
        <Project
          key={project.title}
          image={project.image}
          title={project.title}
          type={project.type}
          frontskills={project.frontskills}
          backskills={project.backskills}
          githubF={project.githubF}
          githubB={project.githubB}
          siteLink={project.siteLink}
          description={project.description}
          reverse={project.reverse}
        />
      ))}
    </div>
  );
}
