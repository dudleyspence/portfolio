"use client";
import React from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

const about = {
  title: "About Me",
  maplight: "maplight.png",
  mapdark: "mapdark.png",
  profile: "about.jpeg",
};

export default function page() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col justify-center items-center gap-10 mb-5 p-5">
      <Card
        className="w-full max-w-[550px] lg:max-w-[92vw] flex-col-reverse lg:flex-row-reverse bg-background"
        shadow={false}
      >
        <CardHeader className="m-0 w-full lg:w-2/5 shrink-0  rounded-xl">
          <img
            src={theme === "dark" ? about.mapdark : about.maplight}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody className="px-0 lg:px-6">
          <Typography
            variant="h6"
            color="gray"
            className="text-text mb-4 uppercase"
          >
            About
          </Typography>
          <Typography variant="h4" className="text-text mb-2 lg:mb-6">
            Full-Stack Developer in Paris
          </Typography>
          <Typography className="text-text mb-8 font-normal lg:text-lg">
            Hi, I'm <span className=" font-bold">Dudley Spence</span>, a
            <span className="font-bold"> full-stack developer </span>
            currently based in Paris, passionate about building elegant and
            intuitive applications while maintaining a strong focus on writing
            efficient and scalable code.
          </Typography>
          <Typography className="mb-3 font-normal lg:text-lg text-text">
            My portfolio showcases a variety of projects that reflect my skills,
            dedication, and passion for continuous learning and improvement as a
            developer.
          </Typography>
        </CardBody>
      </Card>
      <div className="w-full max-w-[550px] lg:max-w-[92vw] grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div
          id="frontend"
          className="w-full bg-lowcontrast2 p-4 rounded-xl shadow-lg"
        >
          <Typography
            variant="h4"
            className="mb-4 text-xl sm:text-2xl text-text"
          >
            Frontend
          </Typography>
          <div className="flex flex-row flex-wrap gap-2">
            <Tooltip
              content="HTML"
              placement="bottom"
              className="bg-buttonGreen"
            >
              <img
                className="sm:h-16 sm:w-16  h-10 w-10"
                src="/skills/html.png"
              />
            </Tooltip>
            <Tooltip
              content="CSS"
              placement="bottom"
              className="bg-buttonGreen"
            >
              <img
                className="sm:h-16 sm:w-16  h-10 w-10"
                src="/skills/css.png"
              />
            </Tooltip>
            <Tooltip
              content="JavaScript"
              placement="bottom"
              className="bg-buttonGreen"
            >
              <img
                className="sm:h-16 sm:w-16  h-10 w-10"
                src="/skills/javascript.png"
              />
            </Tooltip>
            <Tooltip
              content="React"
              placement="bottom"
              className="bg-buttonGreen"
            >
              <img
                className="sm:h-16 sm:w-16  h-10 w-10"
                src="/skills/react.png"
              />
            </Tooltip>
            <Tooltip
              content="Next.js"
              placement="bottom"
              className="bg-buttonGreen"
            >
              <img
                className="sm:h-16 sm:w-16  h-10 w-10"
                src="/skills/nextjs.png"
              />
            </Tooltip>
            <Tooltip
              content="TailwindCSS"
              placement="bottom"
              className="bg-buttonGreen"
            >
              <img
                className="sm:h-16 sm:w-16  h-10 w-10"
                src="/skills/tailwind.png"
              />
            </Tooltip>
          </div>
        </div>

        <div
          id="backend"
          className="w-full bg-lowcontrast2 p-4 rounded-xl shadow-lg text-xl sm:text-2xl"
        >
          <Typography variant="h4" className="mb-4 text-text">
            Backend
          </Typography>
          <div className="flex flex-row flex-wrap gap-2">
            <Tooltip
              content="Node.js"
              placement="bottom"
              className="bg-buttonGreen"
            >
              <img
                className="sm:h-16 sm:w-16  h-10 w-10"
                src="/skills/nodejs.png"
              />
            </Tooltip>
            <Tooltip
              content="Express.js"
              placement="bottom"
              className="bg-buttonGreen"
            >
              <img
                className="sm:h-16 sm:w-16  h-10 w-10"
                src="/skills/express.png"
              />
            </Tooltip>
            <Tooltip
              content="FastAPI"
              placement="bottom"
              className="bg-buttonGreen"
            >
              <img
                className="sm:h-16 sm:w-16  h-10 w-10"
                src="/skills/fastAPI.png"
              />
            </Tooltip>
          </div>
        </div>

        <div
          id="database"
          className="w-full bg-lowcontrast2 p-4 rounded-xl shadow-lg"
        >
          <Typography
            variant="h4"
            className="mb-4 text-text text-xl sm:text-2xl"
          >
            Database
          </Typography>
          <div className="flex flex-row flex-wrap gap-2">
            <Tooltip
              content="MongoDB"
              placement="bottom"
              className="bg-buttonGreen"
            >
              <img
                className="sm:h-16 sm:w-16  h-10 w-10"
                src="/skills/mongo-db.png"
              />
            </Tooltip>
            <Tooltip
              content="Firebase"
              placement="bottom"
              className="bg-buttonGreen"
            >
              <img
                className="sm:h-16 sm:w-16  h-10 w-10"
                src="/skills/firebase.png"
              />
            </Tooltip>
            <Tooltip
              content="MySQL"
              placement="bottom"
              className="bg-buttonGreen"
            >
              <img
                className="sm:h-16 sm:w-16  h-10 w-10"
                src="/skills/mysql.png"
              />
            </Tooltip>
            <Tooltip
              content="PostgreSQL"
              placement="bottom"
              className="bg-buttonGreen"
            >
              <img
                className="sm:h-16 sm:w-16  h-10 w-10"
                src="/skills/postgre.png"
              />
            </Tooltip>
          </div>
        </div>

        <div
          id="additional"
          className="w-full bg-lowcontrast2  p-4 rounded-xl shadow-lg text-xl sm:text-2xl"
        >
          <Typography variant="h4" className="mb-4 text-text">
            Additional Tools
          </Typography>
          <div className="flex flex-row flex-wrap gap-2">
            <Tooltip
              content="GitHub"
              placement="bottom"
              className="bg-buttonGreen"
            >
              <img
                className="sm:h-16 sm:w-16  h-10 w-10"
                src="/skills/github.png"
              />
            </Tooltip>
            <Tooltip
              content="Vite"
              placement="bottom"
              className="bg-buttonGreen"
            >
              <img
                className="sm:h-16 sm:w-16  h-10 w-10"
                src="/skills/vite.png"
              />
            </Tooltip>
            <Tooltip
              content="npm"
              placement="bottom"
              className="bg-buttonGreen"
            >
              <img
                className="sm:h-16 sm:w-16  h-10 w-10"
                src="/skills/npm.png"
              />
            </Tooltip>
            <Tooltip
              content="Visual Studio Code"
              placement="bottom"
              className="bg-buttonGreen"
            >
              <img
                className="sm:h-16 sm:w-16  h-10 w-10"
                src="/skills/visualstudio.png"
              />
            </Tooltip>
            <Tooltip
              content="Jest"
              placement="bottom"
              className="bg-buttonGreen"
            >
              <img
                className="sm:h-16 sm:w-16  h-10 w-10"
                src="/skills/jest.png"
              />
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}
