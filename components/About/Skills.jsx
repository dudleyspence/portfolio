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
          <div className="sm:h-16 sm:w-16 h-10 w-10 relative">
            <Image
              src="/skills/javascript.png"
              alt="JavaScript"
              fill
              className="object-cover"
            />
          </div>
          <div className="sm:h-16 sm:w-16 h-10 w-10 relative">
            <Image
              src="/skills/react.png"
              alt="React"
              fill
              className="object-cover"
            />
          </div>
          <div className="sm:h-16 sm:w-16 h-10 w-10 relative">
            <Image
              src="/skills/nextjs.png"
              alt="Next.js"
              fill
              className="object-cover"
            />
          </div>
          <div className="sm:h-16 sm:w-16 h-10 w-10 relative">
            <Image
              src="/skills/tailwind.png"
              alt="TailwindCSS"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div
        id="backend"
        className="w-full bg-lowcontrast2 p-4 rounded-xl shadow-lg text-xl sm:text-2xl"
      >
        <h4 className="mb-4 text-text">Backend</h4>
        <div className="flex flex-row flex-wrap gap-2">
          <div className="sm:h-16 sm:w-16 h-10 w-10 relative">
            <Image
              src="/skills/nodejs.png"
              alt="Node.js"
              fill
              className="object-cover"
            />
          </div>
          <div className="sm:h-16 sm:w-16 h-10 w-10 relative">
            <Image
              src="/skills/express.png"
              alt="Express.js"
              fill
              className="object-cover"
            />
          </div>
          <div className="sm:h-16 sm:w-16 h-10 w-10 relative">
            <Image
              src="/skills/fastAPI.png"
              alt="FastAPI"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div
        id="database"
        className="w-full bg-lowcontrast2 p-4 rounded-xl shadow-lg"
      >
        <h4 className="mb-4 text-text text-xl sm:text-2xl">Database</h4>
        <div className="flex flex-row flex-wrap gap-2">
          <div className="sm:h-16 sm:w-16 h-10 w-10 relative">
            <Image
              src="/skills/mongo-db.png"
              alt="MongoDB"
              fill
              className="object-cover"
            />
          </div>
          <div className="sm:h-16 sm:w-16 h-10 w-10 relative">
            <Image
              src="/skills/firebase.png"
              alt="Firebase"
              fill
              className="object-cover"
            />
          </div>
          <div className="sm:h-16 sm:w-16 h-10 w-10 relative">
            <Image
              src="/skills/mysql.png"
              alt="MySQL"
              fill
              className="object-cover"
            />
          </div>
          <div className="sm:h-16 sm:w-16 h-10 w-10 relative">
            <Image
              src="/skills/postgre.png"
              alt="PostgreSQL"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div
        id="additional"
        className="w-full bg-lowcontrast2  p-4 rounded-xl shadow-lg text-xl sm:text-2xl"
      >
        <h4 className="mb-4 text-text">Additional Tools</h4>
        <div className="flex flex-row flex-wrap gap-2">
          <div className="sm:h-16 sm:w-16 h-10 w-10 relative">
            <Image
              src="/skills/github.png"
              alt="GitHub"
              fill
              className="object-cover"
            />
          </div>
          <div className="sm:h-16 sm:w-16 h-10 w-10 relative">
            <Image
              src="/skills/vite.png"
              alt="Vite"
              fill
              className="object-cover"
            />
          </div>
          <div className="sm:h-16 sm:w-16 h-10 w-10 relative">
            <Image
              src="/skills/npm.png"
              alt="npm"
              fill
              className="object-cover"
            />
          </div>
          <div className="sm:h-16 sm:w-16 h-10 w-10 relative">
            <Image
              src="/skills/visualstudio.png"
              alt="Visual Studio Code"
              fill
              className="object-cover"
            />
          </div>
          <div className="sm:h-16 sm:w-16 h-10 w-10 relative">
            <Image
              src="/skills/Jest.png"
              alt="Jest"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
