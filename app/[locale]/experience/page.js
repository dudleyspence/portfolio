import React from "react";
import { Liverpool } from "@/components/Liverpool";
import { Northcoders } from "@/components/Northcoders";
import initTranslations from "@/app/i18n";

const namespaces = ["experience"];

export default async function page({ params }) {
  const { locale } = await params;
  const { t } = await initTranslations(locale, namespaces);

  return (
    <div className="mt-8 min-h-[70vh] p-8 flex flex-col gap-6 lg:gap-10 lg:flex-row  justify-center items-center ">
      <Liverpool t={t} />
      <Northcoders t={t} />
    </div>
  );
}
