import React from "react";
import ProfileImage from "@/components/Hero/ProfileImage";

export default function LandingHero({ t }) {
  return (
    <div className="flex flex-col lg:flex-row gap-7 lg:gap-15 xl:gap-20 mt-5 md:mt-0 justify-start md:justify-center items-center h-[calc(100vh-60px)] lg:h-[calc(100vh-82px)]">
      <ProfileImage />
      <div className="flex flex-col justify-center items-center">
        <p className="text-[30px] lg:text-[50px] text-foreground">
          Dudley Spence
        </p>
        <p className="line-1 anim-typewriter text-[30px] lg:text-[50px] text-buttonGreen">
          {t("job_title")}
        </p>
        <p className=" w-[300px] lg:w-[400px] mt-5 text-center text-[18px] lg:text-[20px] text-foreground">
          {t("slogan")}
        </p>

        <div className="social-links flex flex-row gap-8 mt-10 justify-self-end">
          <a
            href="https://github.com/dudleyspence"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground-color"
          >
            <svg
              className="fill-foreground h-[30px] w-[30px] cursor-pointer  hover:fill-buttonGreen hover:scale-110 duration-100 ease-in"
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

          <a href="https://www.linkedin.com/in/dudleyspence">
            <svg
              id="linkedinIcon"
              className="fill-foreground h-[30px] w-[30px] cursor-pointer  hover:fill-buttonGreen hover:scale-110 duration-100 ease-in"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <circle
                  clipRule="evenodd"
                  cx="16"
                  cy="16"
                  fillRule="evenodd"
                  r="16"
                />
                <g>
                  <rect
                    className="fill-background"
                    height="14"
                    width="4"
                    x="7"
                    y="11"
                  />
                  <path
                    d="M20.499,11c-2.791,0-3.271,1.018-3.499,2v-2h-4v14h4v-8c0-1.297,0.703-2,2-2c1.266,0,2,0.688,2,2v8h4v-7    C25,14,24.479,11,20.499,11z"
                    className="fill-background"
                  />
                  <circle cx="9" cy="8" className="fill-background" r="2" />
                </g>
              </g>
            </svg>
          </a>

          <a href="mailto:dudleyspence5@gmail.com">
            <svg
              id="emailIcon"
              className="h-[30px] w-[30px] fill-foreground hover:scale-110 hover:fill-buttonGreen"
              viewBox="0 0 1920 1920"
              width="100%"
              height="100%"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path
                d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z"
                fillRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
