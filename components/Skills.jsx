import React from "react";
import Image from "next/image";

export default function Skills() {
  return (
    <div className="w-full max-w-[550px] lg:max-w-[92vw] grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div
        id="frontend"
        className="w-full bg-lowcontrast2 p-4 rounded-xl shadow-lg"
      >
        <h4 className="mb-4 text-xl sm:text-2xl text-text">Frontend</h4>
        <div className="flex flex-row flex-wrap gap-2">
          <div className="sm:h-16 sm:w-16 h-10 w-10 relative">
            <Image
              src="/skills/html.png"
              alt="HTML"
              fill
              className="object-cover"
            />
          </div>
          <div className="sm:h-16 sm:w-16 h-10 w-10 relative">
            <Image
              src="/skills/css.png"
              alt="CSS"
              fill
              className="object-cover"
            />
          </div>
          <img
            className="sm:h-16 sm:w-16  h-10 w-10"
            src="/skills/javascript.png"
            alt="JavaScript"
          />
          <img
            className="sm:h-16 sm:w-16  h-10 w-10"
            src="/skills/react.png"
            alt="React"
          />
          <img
            className="sm:h-16 sm:w-16  h-10 w-10"
            src="/skills/nextjs.png"
            alt="Next.js"
          />
          <img
            className="sm:h-16 sm:w-16  h-10 w-10"
            src="/skills/tailwind.png"
            alt="TailwindCSS"
          />
        </div>
      </div>

      <div
        id="backend"
        className="w-full bg-lowcontrast2 p-4 rounded-xl shadow-lg text-xl sm:text-2xl"
      >
        <h4 className="mb-4 text-text">Backend</h4>
        <div className="flex flex-row flex-wrap gap-2">
          <img
            className="sm:h-16 sm:w-16  h-10 w-10"
            src="/skills/nodejs.png"
            alt="Node.js"
          />
          <img
            className="sm:h-16 sm:w-16  h-10 w-10"
            src="/skills/express.png"
            alt="Express.js"
          />
          <img
            className="sm:h-16 sm:w-16  h-10 w-10"
            src="/skills/fastAPI.png"
            alt="FastAPI"
          />
        </div>
      </div>

      <div
        id="database"
        className="w-full bg-lowcontrast2 p-4 rounded-xl shadow-lg"
      >
        <h4 className="mb-4 text-text text-xl sm:text-2xl">Database</h4>
        <div className="flex flex-row flex-wrap gap-2">
          <img
            className="sm:h-16 sm:w-16  h-10 w-10"
            src="/skills/mongo-db.png"
            alt="MongoDB"
          />
          <img
            className="sm:h-16 sm:w-16  h-10 w-10"
            src="/skills/firebase.png"
            alt="Firebase"
          />
          <img
            className="sm:h-16 sm:w-16  h-10 w-10"
            src="/skills/mysql.png"
            alt="MySQL"
          />
          <img
            className="sm:h-16 sm:w-16  h-10 w-10"
            src="/skills/postgre.png"
            alt="PostgreSQL"
          />
        </div>
      </div>

      <div
        id="additional"
        className="w-full bg-lowcontrast2  p-4 rounded-xl shadow-lg text-xl sm:text-2xl"
      >
        <h4 className="mb-4 text-text">Additional Tools</h4>
        <div className="flex flex-row flex-wrap gap-2">
          <img
            className="sm:h-16 sm:w-16  h-10 w-10"
            src="/skills/github.png"
            alt="GitHub"
          />
          <img
            className="sm:h-16 sm:w-16  h-10 w-10"
            src="/skills/vite.png"
            alt="Vite"
          />
          <img
            className="sm:h-16 sm:w-16  h-10 w-10"
            src="/skills/npm.png"
            alt="npm"
          />
          <img
            className="sm:h-16 sm:w-16  h-10 w-10"
            src="/skills/visualstudio.png"
            alt="Visual Studio Code"
          />
          <img
            className="sm:h-16 sm:w-16  h-10 w-10"
            src="/skills/Jest.png"
            alt="Jest"
          />
        </div>
      </div>
    </div>
  );
}
