"use client";
import React from "react";
import projects from "@/app/[locale]/projects/projects";
import DynamicBlurImage from "../UI/DynamicBlurImage";
import { useTranslations } from "next-intl";
import Link from "next/link";

const project1 = projects[3];
const project2 = projects[2];

const project1ImagePath = project1.image;
const project1ImageBlur = project1.blurHash;
const project2ImagePath = project2.image;
const project2ImageBlur = project2.blurHash;

export default function SelectedProjects() {
  const t = useTranslations("projects");
  const tHome = useTranslations("homepage");

  return (
    <div className="flex flex-col gap-10 justify-center items-center w-full">
      <p className="text-[25px] lg:text-[30px] text-foreground">
        {tHome("selectedprojects")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 w-full">
        <Link href={project1.siteLink}>
          <figure className="relative w-full shadow-xl rounded-xl hover:shadow-highcontrast">
            <DynamicBlurImage
              imagePath={project1ImagePath}
              blurHash={project1ImageBlur}
            />
            <figcaption className="absolute bottom-3 left-2/4 flex  w-[60%] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-3 px-3 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
              <h5 className="text-md font-medium text-black">
                {t(project1.title)}
              </h5>
            </figcaption>
          </figure>
        </Link>
        <Link href={project2.siteLink}>
          <figure className="relative w-full shadow-xl shadow-black/5 rounded-xl hover:shadow-highcontrast">
            <DynamicBlurImage
              imagePath={project2ImagePath}
              blurHash={project2ImageBlur}
            />
            <figcaption className="absolute bottom-3 left-2/4 flex  w-[60%] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-3 px-3 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
              <h5 className="text-md font-medium text-black">
                {t(project2.title)}
              </h5>
            </figcaption>
          </figure>
        </Link>
      </div>
    </div>
  );
}
