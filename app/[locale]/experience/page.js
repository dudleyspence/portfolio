import React from "react";
import { Liverpool } from "@/components/Experience/Liverpool";
import { Northcoders } from "@/components/Experience/Northcoders";
import initTranslations from "@/app/i18n";
import { Footer } from "@/components/General/Footer";

const namespaces = ["experience"];

export default async function page({ params }) {
  const { locale } = await params;
  const { t } = await initTranslations(locale, namespaces);

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
