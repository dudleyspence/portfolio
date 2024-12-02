"use client";

import React, { useState, useEffect } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { useTranslations } from "next-intl";
import Link from "next/link";
import LanguageChanger from "./LanguageChanger";

export function BasicNavbar({ locale }) {
  const t = useTranslations("common");
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const closeNav = () => {
    setOpenNav(false);
  };

  const navList = (
    <ul className="mt-2 h-full lg:mr-4 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Link href={`/${locale}/`} onClick={closeNav}>
        <Typography
          as="li"
          variant="large"
          className="h-full p-1 font-normal text-text text-md lg:text-lg cursor-pointer hover:text-orange hover:underline hover:underline-offset-[0.7rem]  ease-in"
        >
          {t("nav_home")}
        </Typography>
      </Link>

      <Link href={`/${locale}/about`} onClick={closeNav}>
        <Typography
          as="li"
          variant="large"
          className="p-1 font-normal text-text text-md lg:text-lg cursor-pointer hover:text-orange hover:underline hover:underline-offset-[0.7rem]  ease-in"
        >
          {t("nav_about")}
        </Typography>
      </Link>
      <Link href={`/${locale}/projects`} onClick={closeNav}>
        <Typography
          as="li"
          variant="large"
          className="p-1 font-normal text-text text-md lg:text-lg cursor-pointer hover:text-orange hover:underline hover:underline-offset-[0.7rem]  ease-in"
        >
          {t("nav_projects")}
        </Typography>
      </Link>
      <Link href={`/${locale}/contact`} onClick={closeNav}>
        <Typography
          as="li"
          variant="large"
          className="p-1 font-normal text-text text-md lg:text-lg cursor-pointer hover:text-orange hover:underline hover:underline-offset-[0.7rem] ease-in"
        >
          {t("nav_contact")}
        </Typography>
      </Link>
    </ul>
  );

  return (
    <Navbar className="sticky bg-background top-0 z-10 h-[60px] lg:h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 border-none !shadow-none">
      <div className="flex items-center justify-between">
        <Link href={`/${locale}`} className="h-full relative">
          <Image
            src="/Brand/logosmall.png"
            alt="Logo"
            fill
            className="!static max-h-[30px] max-w-[30px] md:max-h-[50px] md:max-w-[50px] hover:-rotate-6 cursor-pointer"
            priority
          />
        </Link>

        <div className="h-full hidden lg:flex items-center gap-6">
          {navList}
          <a href="/Docs/dudley-spence-cv.pdf" download>
            <Button
              size="sm"
              className="bg-buttonGreen text-white flex items-center justify-center gap-2 rounded-lg !h-[38px]"
            >
              <span>{t("nav_resume")}</span>
            </Button>
          </a>
          <div className="max-w-50px">
            <LanguageChanger />
          </div>
          <ThemeToggle />
        </div>

        <div className="flex justify-center items-center gap-5 flex-row lg:hidden">
          <ThemeToggle />
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-text hover:bg-transparent focus:bg-transparent active:bg-transparent"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 fill-foreground"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 fill-background"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>

      <Collapse
        className="absolute rounded-lg right-0 w-[200px] bg-lowcontrast3 shadow-md lg:hidden"
        open={openNav}
      >
        <div className="flex flex-col justify-center gap-3 mb-3 items-center px-4 py-2">
          {navList}

          <a href="/dudley-spence-cv.pdf" download className="w-full">
            <Button
              size="sm"
              className="bg-buttonGreen text-white flex items-center justify-center gap-2 rounded-lg h-10 lg:h-12 my-1 w-full"
            >
              <span>{t("nav_resume")}</span>
            </Button>
          </a>
          <div className="w-full">
            <LanguageChanger />
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
}
