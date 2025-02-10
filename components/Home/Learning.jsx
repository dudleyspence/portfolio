import React from "react";
import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function Learning() {
  const t = await getTranslations("about");
  const locale = await getLocale();

  return (
    <Link href={`/${locale}/about`}>
      <div className="w-full cursor-pointer h-full flex flex-col gap-7 justify-start items-start rounded-xl shadow-xl p-6 bg-buttonGreen hover:shadow-highcontrast">
        <div className="flex flex-row justify-center items-center gap-4">
          <svg
            className="fill-[#2c2e42] h-9 w-9"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="800px"
            height="800px"
            viewBox="0 0 31.771 31.771"
            xmlSpace="preserve"
          >
            <g>
              <g>
                <path
                  d="M31.771,20.319c0-0.474-0.279-0.87-0.676-1.066V11.9c0.09-0.034,0.146-0.119,0.145-0.214c0-0.095-0.062-0.179-0.149-0.21
          L15.92,6.125c-0.194-0.069-0.406-0.069-0.601,0L0.15,11.477c-0.089,0.031-0.149,0.115-0.15,0.21s0.056,0.18,0.144,0.214
          l15.148,5.896c0.211,0.081,0.444,0.081,0.655,0l14.102-5.492v6.947c-0.396,0.195-0.675,0.594-0.675,1.065
          c0,0.492,0.3,0.919,0.729,1.102c-0.429,0.847-0.729,2.585-0.729,3.081c0,0.661,0.537,1.197,1.198,1.197
          c0.66,0,1.197-0.536,1.197-1.197c0-0.496-0.301-2.234-0.729-3.081C31.47,21.238,31.771,20.811,31.771,20.319z"
                />
                <path
                  d="M4.888,14.87c0.001,1.696,0.002,3.692,0.002,4.009c0,3.158,4.753,5.729,10.73,5.89c5.976-0.161,10.729-2.729,10.729-5.89
          c0-0.315,0-2.312,0.002-4.009l-10.406,4.051c-0.211,0.082-0.444,0.082-0.655,0L4.888,14.87z"
                />
              </g>
            </g>
          </svg>
          <p className="text-[25px] self-start text-[#2c2e42]">
            {t("education.title")}
          </p>
        </div>
        <div className="flex flex-row justify-center items-center gap-5">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzLBzZ2_NO2ItFhIvKtKa21vUTGq6TE0oHew&s"
            alt={t("education.liverpool.institution")}
            width={40}
            height={40}
            className="relative inline-block rounded-lg object-cover object-center"
          />
          <h5 className="text-md font-medium text-[#2c2e42]">
            {t("education.liverpool.institution")}
          </h5>
        </div>

        <div className="flex flex-row justify-center items-center gap-5">
          <Image
            src="https://pbs.twimg.com/profile_images/1333392601450426370/x_DT51WI_400x400.jpg"
            alt={t("education.northcoders.institution")}
            width={40}
            height={40}
            className="relative inline-block rounded-lg object-cover object-center"
          />
          <h5 className="text-md font-medium text-[#2c2e42]">
            {t("education.northcoders.institution")}
          </h5>
        </div>
        <div className="flex flex-row justify-center items-center gap-5">
          <Image
            src="/Brand/profile.png"
            alt={t("education.selflearning.title")}
            width={40}
            height={40}
            className="relative inline-block rounded-lg object-cover object-center"
          />
          <h5 className="text-md font-medium text-[#2c2e42]">
            {t("education.selflearning.title")}
          </h5>
        </div>
      </div>
    </Link>
  );
}
