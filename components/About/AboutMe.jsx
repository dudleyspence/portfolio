"use client";
import React from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

import { useTranslation } from "react-i18next";

export default function AboutMe() {
  const { t } = useTranslation("about");
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex w-full max-w-[550px] lg:max-w-[92vw] flex-col lg:flex-row bg-background relative">
      <div className="relative w-full lg:w-2/5 shrink-0 rounded-xl overflow-hidden shadow-xl">
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
      <div className="font-sans px-0 lg:w-3/5 lg:px-6 p-6">
        <h6 className="font-sans text-lg text-text mb-4 uppercase">
          {t("title")}
        </h6>
        <h4 className="font-sans text-3xl text-text mb-2 lg:mb-6">
          {t("heading")}
        </h4>
        <p className="font-sans text-text mb-8 font-normal lg:text-lg">
          {t("introduction")}
        </p>
        <p className="font-sans mb-3 font-normal lg:text-lg text-text">
          {t("portfolio_note")}
        </p>
      </div>
    </div>
  );
}
