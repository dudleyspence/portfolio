"use client";
import React from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

import { useTranslation } from "react-i18next";

export default function AboutMe() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  //   useEffect(() => {
  //     setMounted(true);
  //   }, []);

  //   if (!mounted) {
  //     return null;
  //   }
  return (
    <Card
      className="w-full max-w-[550px] lg:max-w-[92vw] flex-col-reverse lg:flex-row-reverse bg-background"
      shadow={false}
    >
      <CardHeader className="m-0 w-full lg:w-2/5 shrink-0  rounded-xl">
        <img
          src={theme === "dark" ? "mapdark.png" : "maplight.png"}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="px-0 lg:px-6">
        <Typography
          variant="h6"
          color="gray"
          className="text-text mb-4 uppercase"
        >
          {t("title")}
        </Typography>
        <Typography variant="h4" className="text-text mb-2 lg:mb-6">
          {t("heading")}
        </Typography>
        <Typography className="text-text mb-8 font-normal lg:text-lg">
          {t("introduction")}
        </Typography>
        <Typography className="mb-3 font-normal lg:text-lg text-text">
          {t("portfolio_note")}
        </Typography>
      </CardBody>
    </Card>
  );
}
