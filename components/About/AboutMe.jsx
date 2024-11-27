import React from "react";

import MapImage from "./MapImage";

export default function AboutMe({ t }) {
  return (
    <div className="flex w-full max-w-[650px] xl:max-w-[92vw] flex-col xl:flex-row-reverse bg-background relative">
      <div className=" relative w-full xl:w-2/5 shrink-0 rounded-xl overflow-hidden shadow-xl">
        <MapImage />
      </div>
      <div className="font-sans xl:w-3/5 xl:pr-6 pt-6 xl:pt-0">
        <h6 className="font-sans text-lg text-text mb-4 uppercase">
          {t("title")}
        </h6>
        <h4 className="font-sans text-3xl text-text mb-2 xl:mb-6">
          {t("heading")}
        </h4>
        <p className="font-sans text-text mb-8 font-normal xl:text-lg">
          {t("introduction")}
        </p>
        <p className="font-sans mb-8 font-normal xl:text-lg text-text">
          {t("portfolio_note")}
        </p>
        <p className="font-sans mb-3 xl:mb-0 font-normal xl:text-lg text-text">
          {t("reach_out")}
        </p>
      </div>
    </div>
  );
}
