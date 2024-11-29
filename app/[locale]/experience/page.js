import React from "react";
import { Liverpool } from "@/components/Experience/Liverpool";
import { Northcoders } from "@/components/Experience/Northcoders";
import { useTranslations } from "next-intl";
import { Footer } from "@/components/Footer/Footer";

export default function page() {
  const t = useTranslations("experience");

  return (
    <div>
      <div className="mt-8 min-h-[70vh] p-8 flex flex-col gap-6 lg:gap-10 lg:flex-row  justify-center items-center ">
        <Liverpool t={t} />
        <Northcoders t={t} />
      </div>
      <Footer />
    </div>
  );
}
