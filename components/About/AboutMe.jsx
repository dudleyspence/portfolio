"use client";
import React from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

import { useTranslation } from "react-i18next";

export default function AboutMe() {
  const { t } = useTranslation("about");
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex w-full max-w-[650px] xl:max-w-[92vw] flex-col xl:flex-row-reverse bg-background relative">
      <div className="relative w-full xl:w-2/5 shrink-0 rounded-xl overflow-hidden shadow-xl">
        <div className="h-full w-full">
          {resolvedTheme === "dark" ? (
            <Image
              src="/mapdark.png"
              alt="Dark Mode Map"
              className="object-cover !static"
              fill
              priority
            />
          ) : (
            <Image
              src="/maplight.png"
              alt="Light Mode Map"
              className="object-cover !static"
              fill
              priority
            />
          )}
        </div>
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
