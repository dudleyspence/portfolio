import React from "react";
import Marquee from "react-fast-marquee";
import SkillCard from "../About/SkillCard";

export default function SkillsMarquee() {
  return (
    <div className="w-full mx-auto flex flex-col gap-4">
      <Marquee
        direction="left"
        gradient={false}
        speed={25}
        gradientWidth={50}
        gradientColor="var(--lowcontrast)"
      >
        <div className="mx-3">
          <SkillCard imagePath="/skills/html.png" name="HTML" />
        </div>
        <div className="mx-3">
          <SkillCard imagePath="/skills/css.png" name="CSS" />
        </div>
        <div className="mx-3">
          <SkillCard imagePath="/skills/javascript.png" name="JavaScript" />
        </div>
        <div className="mx-3">
          <SkillCard imagePath="/skills/react.png" name="React" />
        </div>
        <div className="mx-3">
          <SkillCard imagePath="/skills/nextjs.png" name="Next.js" />
        </div>
        <div className="mx-3">
          <SkillCard imagePath="/skills/tailwind.png" name="TailwindCSS" />
        </div>
        <div className="mx-3">
          <SkillCard imagePath="/skills/nodejs.png" name="Node.js" />
        </div>
        <div className="mx-3">
          <SkillCard imagePath="/skills/express.png" name="Express.js" />
        </div>
      </Marquee>

      <Marquee
        direction="right"
        gradient={false}
        speed={25}
        gradientColor="var(--lowcontrast2)"
      >
        <div className="mx-3">
          <SkillCard imagePath="/skills/fastAPI.png" name="FastAPI" />
        </div>
        <div className="mx-3">
          <SkillCard imagePath="/skills/mongo-db.png" name="MongoDB" />
        </div>
        <div className="mx-3">
          <SkillCard imagePath="/skills/firebase.png" name="Firebase" />
        </div>
        <div className="mx-3">
          <SkillCard imagePath="/skills/mysql.png" name="MySQL" />
        </div>
        <div className="mx-3">
          <SkillCard imagePath="/skills/postgre.png" name="PostgreSQL" />
        </div>
        <div className="mx-3">
          <SkillCard imagePath="/skills/github.png" name="GitHub" />
        </div>
        <div className="mx-3">
          <SkillCard imagePath="/skills/vite.png" name="Vite" />
        </div>
        <div className="mx-3">
          <SkillCard imagePath="/skills/npm.png" name="npm" />
        </div>
        <div className="mx-3">
          <SkillCard imagePath="/skills/visualstudio.png" name="VSCode" />
        </div>
        <div className="mx-3">
          <SkillCard imagePath="/skills/Jest.png" name="Jest" />
        </div>
      </Marquee>
    </div>
  );
}
