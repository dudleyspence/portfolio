// "use client";
// import { Tooltip, Typography } from "@material-tailwind/react";
// import React from "react";

// export default function Skills() {
//   return (
//     <div className="w-full max-w-[550px] lg:max-w-[92vw] grid grid-cols-1 lg:grid-cols-2 gap-10">
//       <div
//         id="frontend"
//         className="w-full bg-lowcontrast2 p-4 rounded-xl shadow-lg"
//       >
//         <Typography variant="h4" className="mb-4 text-xl sm:text-2xl text-text">
//           Frontend
//         </Typography>
//         <div className="flex flex-row flex-wrap gap-2">
//           <Tooltip content="HTML" placement="bottom" className="bg-buttonGreen">
//             <img
//               className="sm:h-16 sm:w-16  h-10 w-10"
//               src="/skills/html.png"
//             />
//           </Tooltip>
//           <Tooltip content="CSS" placement="bottom" className="bg-buttonGreen">
//             <img className="sm:h-16 sm:w-16  h-10 w-10" src="/skills/css.png" />
//           </Tooltip>
//           <Tooltip
//             content="JavaScript"
//             placement="bottom"
//             className="bg-buttonGreen"
//           >
//             <img
//               className="sm:h-16 sm:w-16  h-10 w-10"
//               src="/skills/javascript.png"
//             />
//           </Tooltip>
//           <Tooltip
//             content="React"
//             placement="bottom"
//             className="bg-buttonGreen"
//           >
//             <img
//               className="sm:h-16 sm:w-16  h-10 w-10"
//               src="/skills/react.png"
//             />
//           </Tooltip>
//           <Tooltip
//             content="Next.js"
//             placement="bottom"
//             className="bg-buttonGreen"
//           >
//             <img
//               className="sm:h-16 sm:w-16  h-10 w-10"
//               src="/skills/nextjs.png"
//             />
//           </Tooltip>
//           <Tooltip
//             content="TailwindCSS"
//             placement="bottom"
//             className="bg-buttonGreen"
//           >
//             <img
//               className="sm:h-16 sm:w-16  h-10 w-10"
//               src="/skills/tailwind.png"
//             />
//           </Tooltip>
//         </div>
//       </div>

//       <div
//         id="backend"
//         className="w-full bg-lowcontrast2 p-4 rounded-xl shadow-lg text-xl sm:text-2xl"
//       >
//         <Typography variant="h4" className="mb-4 text-text">
//           Backend
//         </Typography>
//         <div className="flex flex-row flex-wrap gap-2">
//           <Tooltip
//             content="Node.js"
//             placement="bottom"
//             className="bg-buttonGreen"
//           >
//             <img
//               className="sm:h-16 sm:w-16  h-10 w-10"
//               src="/skills/nodejs.png"
//             />
//           </Tooltip>
//           <Tooltip
//             content="Express.js"
//             placement="bottom"
//             className="bg-buttonGreen"
//           >
//             <img
//               className="sm:h-16 sm:w-16  h-10 w-10"
//               src="/skills/express.png"
//             />
//           </Tooltip>
//           <Tooltip
//             content="FastAPI"
//             placement="bottom"
//             className="bg-buttonGreen"
//           >
//             <img
//               className="sm:h-16 sm:w-16  h-10 w-10"
//               src="/skills/fastAPI.png"
//             />
//           </Tooltip>
//         </div>
//       </div>

//       <div
//         id="database"
//         className="w-full bg-lowcontrast2 p-4 rounded-xl shadow-lg"
//       >
//         <Typography variant="h4" className="mb-4 text-text text-xl sm:text-2xl">
//           Database
//         </Typography>
//         <div className="flex flex-row flex-wrap gap-2">
//           <Tooltip
//             content="MongoDB"
//             placement="bottom"
//             className="bg-buttonGreen"
//           >
//             <img
//               className="sm:h-16 sm:w-16  h-10 w-10"
//               src="/skills/mongo-db.png"
//             />
//           </Tooltip>
//           <Tooltip
//             content="Firebase"
//             placement="bottom"
//             className="bg-buttonGreen"
//           >
//             <img
//               className="sm:h-16 sm:w-16  h-10 w-10"
//               src="/skills/firebase.png"
//             />
//           </Tooltip>
//           <Tooltip
//             content="MySQL"
//             placement="bottom"
//             className="bg-buttonGreen"
//           >
//             <img
//               className="sm:h-16 sm:w-16  h-10 w-10"
//               src="/skills/mysql.png"
//             />
//           </Tooltip>
//           <Tooltip
//             content="PostgreSQL"
//             placement="bottom"
//             className="bg-buttonGreen"
//           >
//             <img
//               className="sm:h-16 sm:w-16  h-10 w-10"
//               src="/skills/postgre.png"
//             />
//           </Tooltip>
//         </div>
//       </div>

//       <div
//         id="additional"
//         className="w-full bg-lowcontrast2  p-4 rounded-xl shadow-lg text-xl sm:text-2xl"
//       >
//         <Typography variant="h4" className="mb-4 text-text">
//           Additional Tools
//         </Typography>
//         <div className="flex flex-row flex-wrap gap-2">
//           <Tooltip
//             content="GitHub"
//             placement="bottom"
//             className="bg-buttonGreen"
//           >
//             <img
//               className="sm:h-16 sm:w-16  h-10 w-10"
//               src="/skills/github.png"
//             />
//           </Tooltip>
//           <Tooltip content="Vite" placement="bottom" className="bg-buttonGreen">
//             <img
//               className="sm:h-16 sm:w-16  h-10 w-10"
//               src="/skills/vite.png"
//             />
//           </Tooltip>
//           <Tooltip content="npm" placement="bottom" className="bg-buttonGreen">
//             <img className="sm:h-16 sm:w-16  h-10 w-10" src="/skills/npm.png" />
//           </Tooltip>
//           <Tooltip
//             content="Visual Studio Code"
//             placement="bottom"
//             className="bg-buttonGreen"
//           >
//             <img
//               className="sm:h-16 sm:w-16  h-10 w-10"
//               src="/skills/visualstudio.png"
//             />
//           </Tooltip>
//           <Tooltip content="Jest" placement="bottom" className="bg-buttonGreen">
//             <img
//               className="sm:h-16 sm:w-16  h-10 w-10"
//               src="/skills/jest.png"
//             />
//           </Tooltip>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";

export default function Skills() {
  return (
    <div className="w-full max-w-[550px] lg:max-w-[92vw] grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div
        id="frontend"
        className="w-full bg-lowcontrast2 p-4 rounded-xl shadow-lg"
      >
        <h4 className="mb-4 text-xl sm:text-2xl text-text">Frontend</h4>
        <div className="flex flex-row flex-wrap gap-2">
          <img
            className="sm:h-16 sm:w-16  h-10 w-10"
            src="/skills/html.png"
            alt="HTML"
          />
          <img
            className="sm:h-16 sm:w-16  h-10 w-10"
            src="/skills/css.png"
            alt="CSS"
          />
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
