import React from "react";
import Image from "next/image";

export default function WorkProject({
  WIP,
  image,
  title,
  companyRole,
  companyLogo,
  dates,
  frontskills,
  backskills,
  githubF,
  githubB,
  siteLink,
  description_1,
  responsibilities,
  reverse,
  linktag,
  isPriority,
  blurURL,
}) {
  return (
    <div
      className={`${
        reverse ? "2xl:flex-row-reverse" : "2xl:flex-row"
      } flex w-full flex-col 2xl:flex bg-background relative`}
    >
      <div className="relative w-full 2xl:w-1/2 shrink-0 rounded-xl overflow-hidden shadow-xl">
        <Image
          src={image}
          alt={`${title} Image`}
          className="rounded-lg !static  object-cover"
          loading={isPriority ? "eager" : "lazy"}
          priority={isPriority}
          fill
          placeholder="blur"
          blurDataURL={blurURL}
          style={{
            transition: "filter 700ms ease, transform 150ms ease",
          }}
        />
        {WIP && (
          <div className="absolute top-5 right-5 z-50">
            <Image
              height={60}
              width={120}
              src="https://res.cloudinary.com/dvb1ktpjd/image/upload/v1739133455/Portfolio/Projects/lmqol4es1vtzyb87ivue.png"
              alt="work in progress"
            />
          </div>
        )}
      </div>

      <div
        className={`font-sans px-0 2xl:w-1/2 2xl:px-6 p-6 pb-2 ${
          reverse ? "2xl:pl-0" : "2xl:pr-0"
        }`}
      >
        <div className="flex flex-row items-center gap-3 mb-4">
          <Image src={companyLogo} width={20} height={20} alt="company logo" />
          <h6 className=" uppercase font-bold text-text">{companyRole}</h6>
        </div>

        <h1 className="mb-4 text-2xl font-sans font-bold text-text">{title}</h1>
        <h6 className=" mb-4 uppercase font-bold text-text">Dates: {dates}</h6>

        {frontskills && (
          <div className="flex flex-row items-start gap-2 mb-2 ">
            <div className="flex flex-row justify-center items-center gap-2">
              {githubF && (
                <a
                  href={githubF}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`link to the github frontend repo for ${title}`}
                >
                  <svg
                    className="fill-text h-[25px] w-[25px] cursor-pointer"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                    />
                  </svg>
                </a>
              )}
              <span className="font-bold font-sans text-text">Frontend: </span>
            </div>

            <div className="flex flex-row gap-2 flex-wrap">
              {frontskills.map((skill) => (
                <p
                  key={skill}
                  className="text-sm text-text px-2 py-1 bg-lowcontrast2 rounded-md"
                >
                  {skill}
                </p>
              ))}
            </div>
          </div>
        )}

        {backskills && (
          <div className="flex flex-row items-start gap-2 mb-2 ">
            <div className="flex flex-row justify-center items-center gap-2">
              {githubB && (
                <a
                  href={githubB}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`link to the github backend repo for ${title}`}
                >
                  <svg
                    className="fill-text h-[25px] w-[25px] cursor-pointer"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                    />
                  </svg>
                </a>
              )}
              <span className="font-bold font-sans text-text">Backend: </span>
            </div>

            <div className="flex flex-row gap-2 flex-wrap">
              {backskills.map((skill) => (
                <p
                  key={skill}
                  className="text-sm text-text px-2 py-1 bg-lowcontrast2 rounded-md"
                >
                  {skill}
                </p>
              ))}
            </div>
          </div>
        )}

        <p className="mb-4 mt-8 font-sans text-text">{description_1}</p>
        <ul className="mb-8 list-disc list-inside space-y-2">
          {responsibilities.map((res, index) => (
            <li key={`responsibility_${index}`}>{res}</li>
          ))}
        </ul>

        <a
          target="_blank"
          href={siteLink}
          aria-label={`link to live site for ${title}`}
          className="inline-block"
        >
          <button
            variant="text"
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-text hover:bg-highcontrast active:bg-gray-900/20 flex items-center gap-2"
          >
            {linktag}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </a>
      </div>
    </div>
  );
}
