import React from "react";

export default function Project({
  image,
  title,
  type,
  frontskills,
  backskills,
  githubF,
  githubB,
  siteLink,
  description,
  reverse,
}) {
  // test point
  return (
    <div
      className={
        (reverse === true ? "lg:flex-row-reverse " : "lg:flex-row ") +
        "w-full max-w-[85vw] flex flex-col bg-background relative"
      }
    >
      <div className="m-0 w-full lg:w-3/5 shrink-0 rounded-xl relative overflow-hidden shadow-xl">
        <img src={image} className="rounded-lg h-full w-full object-cover" />
      </div>
      <div className="font-sans px-0 lg:w-2/5 lg:px-6 p-6">
        <h6 className="mb-4 uppercase font-bold text-text">{type}</h6>
        <h1 className="mb-4 text-2xl font-sans font-bold text-text">{title}</h1>
        {frontskills && (
          <div className="flex flex-row items-center gap-2 mb-2">
            <a href={githubF} target="_blank" rel="noopener noreferrer">
              <svg
                className="fill-text h-[25px] w-[25px] cursor-pointer"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                />
              </svg>
            </a>
            <p className="font-bold font-sans text-text">
              Frontend: <span>{frontskills.join(", ")}</span>
            </p>
          </div>
        )}
        {backskills && (
          <div className="flex flex-row items-center gap-2 mb-2 ">
            <a href={githubB} target="_blank" rel="noopener noreferrer">
              <svg
                className="fill-text h-[25px] w-[25px] cursor-pointer"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                />
              </svg>
            </a>
            <p className="font-bold font-sans text-text">
              Backend: <span>{backskills.join(", ")}</span>
            </p>
          </div>
        )}

        <p className="mb-8 font-sans text-text">{description}</p>

        {type === "dissertation" ? (
          <a
            href="Solving the N-Puzzle using Deep Reinforcement Learning.pdf"
            className="inline-block"
            download
          >
            <button
              variant="text"
              className="flex items-center gap-2 text-text"
            >
              Download Dissertation
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
        ) : (
          <a href={siteLink} className="inline-block">
            <button
              variant="text"
              className="flex items-center gap-2 text-text"
            >
              view live site
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
        )}
      </div>
    </div>
  );
}
