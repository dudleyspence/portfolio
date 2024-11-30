import React from "react";
import { Liverpool } from "@/components/Experience/Liverpool";
import { Northcoders } from "@/components/Experience/Northcoders";
import { useTranslations } from "next-intl";
import { Footer } from "@/components/Footer/Footer";

export default function page() {
  const t = useTranslations("experience");

  return (
    <div className=" min-h-[calc(100vh-60px)] lg:min-h-[calc(100vh-108px)] flex flex-col p-10 justify-between">
      <p className="text-[30px] p-10 self-start text-foreground">
        {t("title")}
      </p>
      <div className="mt-8 h-min flex flex-col gap-6 lg:gap-10 xl:flex-row  lg:justify-around items-center ">
        <Liverpool t={t} />
        <Northcoders t={t} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
