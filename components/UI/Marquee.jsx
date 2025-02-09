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
          <SkillCard
            imagePath="https://res.cloudinary.com/dvb1ktpjd/image/upload/c_thumb,w_200,g_face/v1739095103/html_z4ek47.png"
            name="HTML"
            marquee
          />
        </div>
        <div className="mx-3">
          <SkillCard
            imagePath="https://res.cloudinary.com/dvb1ktpjd/image/upload/c_thumb,w_200,g_face/v1739095101/css_hlam1n.png"
            name="CSS"
            marquee
          />
        </div>
        <div className="mx-3">
          <SkillCard
            imagePath="https://res.cloudinary.com/dvb1ktpjd/image/upload/c_thumb,w_200,g_face/v1739095107/react-query_irkpz5.png"
            name="React Query"
            marquee
          />
        </div>
        <div className="mx-3">
          <SkillCard
            imagePath="https://res.cloudinary.com/dvb1ktpjd/image/upload/c_thumb,w_200,g_face/v1739095103/javascript_fmu58q.png"
            name="JavaScript"
            marquee
          />
        </div>
        <div className="mx-3">
          <SkillCard
            imagePath="https://res.cloudinary.com/dvb1ktpjd/image/upload/c_thumb,w_200,g_face/v1739095108/react_wyrptj.png"
            name="React"
            marquee
          />
        </div>
        <div className="mx-3">
          <SkillCard
            imagePath="https://res.cloudinary.com/dvb1ktpjd/image/upload/c_thumb,w_200,g_face/v1739095105/nextjs_fftwta.png"
            name="Next.js"
            marquee
          />
        </div>
        <div className="mx-3">
          <SkillCard
            imagePath="https://res.cloudinary.com/dvb1ktpjd/image/upload/c_thumb,w_200,g_face/v1739095109/tailwind_bjoe4f.png"
            name="TailwindCSS"
            marquee
          />
        </div>
        <div className="mx-3">
          <SkillCard
            imagePath="https://res.cloudinary.com/dvb1ktpjd/image/upload/c_thumb,w_200,g_face/v1739095105/nodejs_odcua8.png"
            name="Node.js"
            marquee
          />
        </div>
        <div className="mx-3">
          <SkillCard
            imagePath="https://res.cloudinary.com/dvb1ktpjd/image/upload/c_thumb,w_200,g_face/v1739095101/express_lj32sy.png"
            name="Express.js"
            marquee
          />
        </div>
        <div className="mx-3">
          <SkillCard
            imagePath="https://res.cloudinary.com/dvb1ktpjd/image/upload/c_thumb,w_200,g_face/v1739095109/typescript_npobqq.png"
            name="TypeScript"
            marquee
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
            imagePath="https://res.cloudinary.com/dvb1ktpjd/image/upload/c_thumb,w_200,g_face/v1739095101/fastAPI_smazly.png"
            name="FastAPI"
            marquee
          />
        </div>
        <div className="mx-3">
          <SkillCard
            imagePath="https://res.cloudinary.com/dvb1ktpjd/image/upload/c_thumb,w_200,g_face/v1739095104/mongo-db_he1wmx.png"
            name="MongoDB"
            marquee
          />
        </div>
        <div className="mx-3">
          <SkillCard
            imagePath="https://res.cloudinary.com/dvb1ktpjd/image/upload/c_thumb,w_200,g_face/v1739095102/firebase_xeygrr.png"
            name="Firebase"
            marquee
          />
        </div>
        <div className="mx-3">
          <SkillCard
            imagePath="https://res.cloudinary.com/dvb1ktpjd/image/upload/c_thumb,w_200,g_face/v1739095104/mysql_r8mfqt.png"
            name="MySQL"
            marquee
          />
        </div>
        <div className="mx-3">
          <SkillCard
            imagePath="https://res.cloudinary.com/dvb1ktpjd/image/upload/c_thumb,w_200,g_face/v1739095106/postgre_rnwqfn.png"
            name="PostgreSQL"
            marquee
          />
        </div>
        <div className="mx-3">
          <SkillCard
            imagePath="https://res.cloudinary.com/dvb1ktpjd/image/upload/c_thumb,w_200,g_face/v1739095102/github_akppo1.png"
            name="GitHub"
            marquee
          />
        </div>
        <div className="mx-3">
          <SkillCard
            imagePath="https://res.cloudinary.com/dvb1ktpjd/image/upload/c_thumb,w_200,g_face/v1739095109/vite_rf6u5c.png"
            name="Vite"
            marquee
          />
        </div>
        <div className="mx-3">
          <SkillCard
            imagePath="https://res.cloudinary.com/dvb1ktpjd/image/upload/c_thumb,w_200,g_face/v1739095106/npm_z09hbg.png"
            name="npm"
            marquee
          />
        </div>
        <div className="mx-3">
          <SkillCard
            imagePath="https://res.cloudinary.com/dvb1ktpjd/image/upload/c_thumb,w_200,g_face/v1739095109/visualstudio_ocu0tz.png"
            name="VSCode"
            marquee
          />
        </div>
        <div className="mx-3">
          <SkillCard
            imagePath="https://res.cloudinary.com/dvb1ktpjd/image/upload/c_thumb,w_200,g_face/v1739095103/Jest_ogs7ll.png"
            name="Jest"
            marquee
          />
        </div>
        <div className="mx-3">
          <SkillCard
            imagePath="https://res.cloudinary.com/dvb1ktpjd/image/upload/c_thumb,w_200,g_face/v1739095101/canva_losood.png"
            name="Canva"
            marquee
          />
        </div>
      </Marquee>
    </div>
  );
}
