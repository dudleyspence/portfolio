import React from "react";
import { Liverpool } from "@/components/Liverpool";
import { Northcoders } from "@/components/Northcoders";
import initTranslations from "@/app/i18n";

const namespaces = ["experience"];

export default async function page({ params }) {
  const { locale } = await params;
  const { t } = await initTranslations(locale, namespaces);

  return (
    <div className="flex mt-8 flex-col gap-6 lg:gap-10 justify-center items-center p-8">
      <Liverpool t={t} />
      <Northcoders t={t} />
    </div>
  );
}
