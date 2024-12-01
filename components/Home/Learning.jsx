import React from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function Learning() {
  const t = useTranslations("about");
  const locale = useLocale();

  return (
    <Link href={`/${locale}/about`}>
      <div className="w-full cursor-pointer h-full flex flex-col gap-5 justify-center items-start rounded-xl shadow-xl p-6 bg-buttonGreen hover:shadow-highcontrast">
        <p className="text-[20px] self-start text-foreground">Who taught me?</p>
        <div className="flex flex-row justify-center items-center gap-5">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzLBzZ2_NO2ItFhIvKtKa21vUTGq6TE0oHew&s"
            alt={t("education.liverpool.institution")}
            width={40}
            height={40}
            className="relative inline-block rounded-lg object-cover object-center"
          />
          <h5 className="text-md font-medium text-foreground">
            {t("education.liverpool.institution")}
          </h5>
        </div>

        <div className="flex flex-row justify-center items-center gap-5">
          <Image
            src="https://pbs.twimg.com/profile_images/1333392601450426370/x_DT51WI_400x400.jpg"
            alt={t("education.northcoders.institution")}
            width={40}
            height={40}
            className="relative inline-block rounded-lg object-cover object-center"
          />
          <h5 className="text-md font-medium text-foreground">
            {t("education.northcoders.institution")}
          </h5>
        </div>
        <div className="flex flex-row justify-center items-center gap-5">
          <Image
            src="/Brand/profile.png"
            alt={t("education.selflearning.title")}
            width={40}
            height={40}
            className="relative inline-block rounded-lg object-cover object-center"
          />
          <h5 className="text-md font-medium text-foreground">
            {t("education.selflearning.title")}
          </h5>
        </div>
      </div>
    </Link>
  );
}
