import React from "react";
import SkillCard from "./SkillCard";

export default function Skills({ t }) {
  return (
    <div className="w-full flex flex-col-reverse xl:flex-row justify-center items-center">
      <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-5 self-start">
        <div id="frontend" className="w-full bg-lowcontrast2 p-4 rounded-lg">
          <h4 className="mb-4 font-sans font-extrabold text-xl text-text">
            {t("frontend")}
          </h4>
          <div className="w-full flex flex-row flex-wrap gap-x-2 gap-y-2 md:gap-y-4">
            <SkillCard imagePath="/skills/html.png" name="HTML" />
            <SkillCard imagePath="/skills/css.png" name="CSS" />
            <SkillCard imagePath="/skills/javascript.png" name="JavaScript" />
            <SkillCard imagePath="/skills/react.png" name="React" />
            <SkillCard imagePath="/skills/nextjs.png" name="Next.js" />
            <SkillCard imagePath="/skills/tailwind.png" name="TailwindCSS" />
          </div>
        </div>

        <div id="backend" className="w-full bg-lowcontrast2 p-4 rounded-lg">
          <h4 className="mb-4 font-sans font-extrabold text-xl text-text">
            {t("backend")}
          </h4>
          <div className="w-full flex flex-row flex-wrap gap-x-2 gap-y-2 md:gap-y-4">
            <SkillCard imagePath="/skills/nodejs.png" name="Node.js" />
            <SkillCard imagePath="/skills/express.png" name="Express.js" />
            <SkillCard imagePath="/skills/fastAPI.png" name="FastAPI" />
          </div>
        </div>

        <div id="database" className="w-full bg-lowcontrast2 p-4 rounded-lg">
          <h4 className="mb-4 font-sans font-extrabold text-xl text-text">
            {t("database")}
          </h4>
          <div className="w-full flex flex-row flex-wrap gap-x-2 gap-y-2 md:gap-y-4">
            <SkillCard imagePath="/skills/mongo-db.png" name="MongoDB" />
            <SkillCard imagePath="/skills/firebase.png" name="Firebase" />
            <SkillCard imagePath="/skills/mysql.png" name="MySQL" />
            <SkillCard imagePath="/skills/postgre.png" name="PostgreSQL" />
          </div>
        </div>

        <div id="additional" className="w-full bg-lowcontrast2 p-4 rounded-lg">
          <h4 className="mb-4 font-sans font-extrabold text-xl text-text">
            {t("additional_tools")}
          </h4>
          <div className="w-full flex flex-row flex-wrap gap-x-2 gap-y-2 md:gap-y-4">
            <SkillCard imagePath="/skills/github.png" name="GitHub" />
            <SkillCard imagePath="/skills/visualstudio.png" name="VSCode" />
            <SkillCard imagePath="/skills/Jest.png" name="Jest" />
            <SkillCard imagePath="/skills/vite.png" name="Vite" />
            <SkillCard imagePath="/skills/npm.png" name="npm" />
          </div>
        </div>
      </div>
    </div>
  );
}
