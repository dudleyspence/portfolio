import React from "react";
import projects from "@/app/[locale]/projects/projects";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import Image from "next/image";

const project1 = projects[0];
const project2 = projects[2];

const project1ImagePath = project1.image;
const project2ImagePath = project2.image;

export default async function SelectedProjects() {
  const t = await getTranslations("projects");
  const tHome = await getTranslations("homepage");

  return (
    <div className="flex flex-col gap-10 justify-center items-center w-full">
      <p className="text-[25px] lg:text-[30px] text-foreground">
        {tHome("selectedprojects")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 w-full">
        <Link
          href={project1.siteLink}
          target="_blank"
          aria-label={`Link to live site of ${t(project1.title)}`}
        >
          <figure className="relative w-full h-full cursor-pointer shadow-xl rounded-xl hover:shadow-highcontrast">
            <Image
              src={project1ImagePath}
              placeholder="blur"
              fill
              className="object-cover rounded-lg shadow-lg !static"
              blurDataURL={project1.blurURL}
              alt={`${t(project1.title)} Image`}
            />
            <figcaption className="absolute bottom-3 left-2/4 flex  w-[60%] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-3 px-3 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
              <h5 className="text-md font-medium text-black">
                {t(project1.title)}
              </h5>
            </figcaption>
          </figure>
        </Link>
        <Link
          href={project2.siteLink}
          target="_blank"
          aria-label={`Link to live site of ${t(project2.title)}`}
        >
          <figure className="relative w-full h-full cursor-pointer shadow-xl shadow-black/5 rounded-xl hover:shadow-highcontrast">
            <Image
              src={project2ImagePath}
              placeholder="blur"
              fill
              className="object-cover rounded-lg shadow-lg !static"
              blurDataURL={project2.blurURL}
              alt={`${t(project2.title)} Image`}
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
