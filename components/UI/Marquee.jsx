import React from "react";
import Marquee from "react-fast-marquee";
import SkillCard from "../About/SkillCard";

export default function SkillsMarquee() {
  return (
    <div className="w-full mx-auto flex flex-col gap-4">
      <Marquee
        direction="left"
        gradient={true}
        speed={25}
        gradientWidth={60}
        gradientColor="var(--marqueeFade)"
        aria-label="Skills carousel, cycling through skill cards"
        aria-live="polite"
      >
        <div className="mx-3">
          <SkillCard imagePath="/skills/html.png" name="HTML" marquee={true} />
        </div>
        <div className="mx-3">
          <SkillCard imagePath="/skills/css.png" name="CSS" marquee={true} />
        </div>
        <div className="mx-3">
          <SkillCard
            imagePath="/skills/javascript.png"
            name="JavaScript"
            marquee={true}
          />
        </div>
        <div className="mx-3">
          <SkillCard
            imagePath="/skills/react.png"
            name="React"
            marquee={true}
          />
        </div>
        <div className="mx-3">
          <SkillCard
            imagePath="/skills/nextjs.png"
            name="Next.js"
            marquee={true}
          />
        </div>
        <div className="mx-3">
          <SkillCard
            imagePath="/skills/tailwind.png"
            name="TailwindCSS"
            marquee={true}
          />
        </div>
        <div className="mx-3">
          <SkillCard
            imagePath="/skills/nodejs.png"
            name="Node.js"
            marquee={true}
          />
        </div>
        <div className="mx-3">
          <SkillCard
            imagePath="/skills/express.png"
            name="Express.js"
            marquee={true}
          />
        </div>
      </Marquee>

      <Marquee
        direction="right"
        gradient={true}
        speed={25}
        gradientWidth={60}
        gradientColor="var(--marqueeFade)"
      >
        <div className="mx-3">
          <SkillCard
            imagePath="/skills/fastAPI.png"
            name="FastAPI"
            marquee={true}
          />
        </div>
        <div className="mx-3">
          <SkillCard
            imagePath="/skills/mongo-db.png"
            name="MongoDB"
            marquee={true}
          />
        </div>
        <div className="mx-3">
          <SkillCard
            imagePath="/skills/firebase.png"
            name="Firebase"
            marquee={true}
          />
        </div>
        <div className="mx-3">
          <SkillCard
            imagePath="/skills/mysql.png"
            name="MySQL"
            marquee={true}
          />
        </div>
        <div className="mx-3">
          <SkillCard
            imagePath="/skills/postgre.png"
            name="PostgreSQL"
            marquee={true}
          />
        </div>
        <div className="mx-3">
          <SkillCard
            imagePath="/skills/github.png"
            name="GitHub"
            marquee={true}
          />
        </div>
        <div className="mx-3">
          <SkillCard imagePath="/skills/vite.png" name="Vite" marquee={true} />
        </div>
        <div className="mx-3">
          <SkillCard imagePath="/skills/npm.png" name="npm" marquee={true} />
        </div>
        <div className="mx-3">
          <SkillCard
            imagePath="/skills/visualstudio.png"
            name="VSCode"
            marquee={true}
          />
        </div>
        <div className="mx-3">
          <SkillCard imagePath="/skills/Jest.png" name="Jest" marquee={true} />
        </div>
      </Marquee>
    </div>
  );
}
