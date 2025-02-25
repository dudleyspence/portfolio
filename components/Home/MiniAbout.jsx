import React from "react";
import StackBlock from "./StackBlock";
import MyLocation from "./MyLocation";
import Learning from "./Learning";
import { getTranslations } from "next-intl/server";

export default async function MiniAbout() {
  const t = await getTranslations("homepage");

  return (
    <div
      id="overview"
      className="flex flex-col gap-10 justify-center items-center w-full"
    >
      <p className="text-[25px] lg:text-[30px] text-foreground">
        {t("summary")}
      </p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-10">
        <MyLocation />
        <Learning />
        <div className="col-span-1 md:col-span-2 xl:col-span-1">
          <StackBlock t={t} />
        </div>
      </div>
    </div>
  );
}
