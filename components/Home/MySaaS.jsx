import React from "react";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";
import Image from "next/image";
import { saasProject } from "../Projects/FreelanceProjects";

const chunkSite =
  "https://res.cloudinary.com/dvb1ktpjd/image/upload/v1748889879/Screenshot_2025-06-02_at_20.44.30_qlcgxu.png";
const chunkBlur =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAMElEQVR4nGNwSg9mEGWIqS85/uMug3akW0RDUunMzqz2PAYBd0OJQJvX/79Z2xoAABDdDqy7bJb5AAAAAElFTkSuQmCC";

export default async function MySaaS() {
  const t = await getTranslations("projects");
  const tHome = await getTranslations("homepage");
  const loc = await getLocale();

  return (
    <div className="flex flex-col gap-10 justify-center items-center w-full">
      <p className="text-[25px] lg:text-[30px] text-foreground">
        {tHome("mySaaS")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 w-full">
        <Link
          href="https://www.chunkapp.net"
          target="_blank"
          aria-label={`Link to Chunk`}
        >
          <figure className="relative w-full h-full cursor-pointer shadow-xl rounded-xl hover:shadow-highcontrast">
            <Image
              src={chunkSite}
              placeholder="blur"
              fill
              className="object-cover rounded-lg shadow-lg !static"
              blurDataURL={chunkBlur}
              alt="Chunk Site"
              style={{
                transition: "filter 700ms ease, transform 150ms ease",
              }}
            />
          </figure>
        </Link>
        <Link href={`${loc}/projects`} aria-label="Link to projects section">
          <figure className="relative w-full h-full cursor-pointer shadow-xl shadow-black/5 rounded-xl hover:shadow-highcontrast">
            <Image
              src={saasProject.image}
              placeholder="blur"
              fill
              className="object-cover rounded-lg shadow-lg !static"
              blurDataURL={saasProject.blurURL}
              alt="current project"
              style={{
                transition: "filter 700ms ease, transform 150ms ease",
              }}
            />
            <figcaption className="absolute bottom-3 left-2/4 flex flex-col w-[80%] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-3 px-3 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
              <div className="flex flex-row items-center gap-3 mb-1">
                <Image
                  src={saasProject.companyLogo}
                  width={20}
                  height={20}
                  alt="company logo"
                />
                <h6 className="p-0 uppercase text-sm lg:text-md font-bold text-black">
                  {t(saasProject.companyRole)}
                </h6>
              </div>
            </figcaption>
          </figure>
        </Link>
      </div>
    </div>
  );
}
