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
import Skills from "@/components/Skills";

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
      <Skills />
    </div>
  );
}
