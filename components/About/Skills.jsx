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
            <SkillCard
              imagePath="https://res.cloudinary.com/dvb1ktpjd/image/upload/c_thumb,w_200,g_face/v1739095103/html_z4ek47.png"
              name="HTML"
            />
            <SkillCard
              imagePath="https://res.cloudinary.com/dvb1ktpjd/image/upload/c_thumb,w_200,g_face/v1739095101/css_hlam1n.png"
              name="CSS"
            />
            <SkillCard
              imagePath="https://res.cloudinary.com/dvb1ktpjd/image/upload/c_thumb,w_200,g_face/v1739095103/javascript_fmu58q.png"
              name="JavaScript"
            />
            <SkillCard
              imagePath="https://res.cloudinary.com/dvb1ktpjd/image/upload/c_thumb,w_200,g_face/v1739095108/react_wyrptj.png"
              name="React"
            />
            <SkillCard
              imagePath="https://res.cloudinary.com/dvb1ktpjd/image/upload/c_thumb,w_200,g_face/v1739095105/nextjs_fftwta.png"
              name="Next.js"
            />
            <SkillCard
              imagePath="https://res.cloudinary.com/dvb1ktpjd/image/upload/c_thumb,w_200,g_face/v1739095109/tailwind_bjoe4f.png"
              name="TailwindCSS"
            />
            <SkillCard
              imagePath="https://res.cloudinary.com/dvb1ktpjd/image/upload/c_thumb,w_200,g_face/v1739095109/typescript_npobqq.png"
              name="TypeScript"
            />
          </div>
        </div>

        <div id="backend" className="w-full bg-lowcontrast2 p-4 rounded-lg">
          <h4 className="mb-4 font-sans font-extrabold text-xl text-text">
            {t("backend")}
          </h4>
          <div className="w-full flex flex-row flex-wrap gap-x-2 gap-y-2 md:gap-y-4">
            <SkillCard
              imagePath="https://res.cloudinary.com/dvb1ktpjd/image/upload/c_thumb,w_200,g_face/v1739095105/nodejs_odcua8.png"
              name="Node.js"
            />
            <SkillCard
              imagePath="https://res.cloudinary.com/dvb1ktpjd/image/upload/c_thumb,w_200,g_face/v1739095107/python_fcik6k.png"
              name="Python"
            />
            <SkillCard
              imagePath="https://res.cloudinary.com/dvb1ktpjd/image/upload/c_thumb,w_200,g_face/v1739095101/express_lj32sy.png"
              name="Express.js"
            />
            <SkillCard
              imagePath="https://res.cloudinary.com/dvb1ktpjd/image/upload/c_thumb,w_200,g_face/v1739095101/fastAPI_smazly.png"
              name="FastAPI"
            />
          </div>
        </div>

        <div id="database" className="w-full bg-lowcontrast2 p-4 rounded-lg">
          <h4 className="mb-4 font-sans font-extrabold text-xl text-text">
            {t("database")}
          </h4>
          <div className="w-full flex flex-row flex-wrap gap-x-2 gap-y-2 md:gap-y-4">
            <SkillCard
              imagePath="https://res.cloudinary.com/dvb1ktpjd/image/upload/c_thumb,w_200,g_face/v1739095104/mongo-db_he1wmx.png"
              name="MongoDB"
            />
            <SkillCard
              imagePath="https://res.cloudinary.com/dvb1ktpjd/image/upload/c_thumb,w_200,g_face/v1739095102/firebase_xeygrr.png"
              name="Firebase"
            />
            <SkillCard
              imagePath="https://res.cloudinary.com/dvb1ktpjd/image/upload/c_thumb,w_200,g_face/v1739095104/mysql_r8mfqt.png"
              name="MySQL"
            />
            <SkillCard
              imagePath="https://res.cloudinary.com/dvb1ktpjd/image/upload/c_thumb,w_200,g_face/v1739095106/postgre_rnwqfn.png"
              name="PostgreSQL"
            />
          </div>
        </div>

        <div id="additional" className="w-full bg-lowcontrast2 p-4 rounded-lg">
          <h4 className="mb-4 font-sans font-extrabold text-xl text-text">
            {t("additional_tools")}
          </h4>
          <div className="w-full flex flex-row flex-wrap gap-x-2 gap-y-2 md:gap-y-4">
            <SkillCard
              imagePath="https://res.cloudinary.com/dvb1ktpjd/image/upload/c_thumb,w_200,g_face/v1739095102/github_akppo1.png"
              name="GitHub"
            />
            <SkillCard
              imagePath="https://res.cloudinary.com/dvb1ktpjd/image/upload/c_thumb,w_200,g_face/v1739095109/visualstudio_ocu0tz.png"
              name="VSCode"
            />
            <SkillCard
              imagePath="https://res.cloudinary.com/dvb1ktpjd/image/upload/c_thumb,w_200,g_face/v1739095103/Jest_ogs7ll.png"
              name="Jest"
            />
            <SkillCard
              imagePath="https://res.cloudinary.com/dvb1ktpjd/image/upload/c_thumb,w_200,g_face/v1739095109/vite_rf6u5c.png"
              name="Vite"
            />
            <SkillCard
              imagePath="https://res.cloudinary.com/dvb1ktpjd/image/upload/c_thumb,w_200,g_face/v1739095106/npm_z09hbg.png"
              name="npm"
            />
            <SkillCard
              imagePath="https://res.cloudinary.com/dvb1ktpjd/image/upload/c_thumb,w_200,g_face/v1739095101/canva_losood.png"
              name="Canva"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
