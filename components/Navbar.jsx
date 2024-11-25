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
import LanguageChanger from "./LanguageChanger";
import { useTranslation } from "react-i18next";

export function BasicNavbar() {
  const { t } = useTranslation();
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const navList = (
    <ul className="mt-2 h-full mb-4 lg:mr-4 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="large"
        className=" h-full p-1 font-normal text-text text-md lg:text-lg cursor-pointer hover:text-orange hover:underline hover:underline-offset-8 "
      >
        <a href="/" className="flex items-center">
          {t("nav_home")}
        </a>
      </Typography>
      <Typography
        as="li"
        variant="large"
        className=" p-1 font-normal text-text text-md lg:text-lg cursor-pointer hover:text-orange hover:underline hover:underline-offset-8 "
      >
        <a href="/about" className="flex items-center">
          {t("nav_about")}
        </a>
      </Typography>
      <Typography
        as="li"
        variant="large"
        className="p-1 font-normal text-text text-md lg:text-lg cursor-pointer hover:text-orange hover:underline hover:underline-offset-8 "
      >
        <a href="/experience" className="flex items-center">
          {t("nav_experience")}
        </a>
      </Typography>
      <Typography
        as="li"
        variant="large"
        className="p-1 font-normal text-text text-md lg:text-lg cursor-pointer hover:text-orange hover:underline hover:underline-offset-8 "
      >
        <a href="/projects" className="flex items-center">
          {t("nav_projects")}
        </a>
      </Typography>
      <Typography
        as="li"
        variant="large"
        className="p-1 font-normal text-text text-md lg:text-lg cursor-pointer hover:text-orange hover:underline hover:underline-offset-8 "
      >
        <a href="/contact" className="flex items-center">
          {t("nav_contact")}
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="sticky bg-background top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 border-none !shadow-none">
      <div className="flex items-center justify-between">
        <a href="/" className="h-auto w-[25vw] max-w-[200px] relative">
          <Image
            src="/logo.png"
            alt="Logo"
            fill
            className="!static h-auto w-full hover:-rotate-3 cursor-pointer"
            priority
          />
        </a>

        <div className="h-full hidden lg:flex items-center gap-6">
          {navList}
          <a href="/dudley-spence-cv.pdf" download>
            <Button
              size="sm"
              className="bg-buttonGreen text-white flex items-center justify-center gap-2 rounded-lg !h-[38px]"
            >
              <span>{t("nav_resume")}</span>
            </Button>
          </a>
          <LanguageChanger />
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
        className="absolute left-0 right-0 bg-background shadow-md lg:hidden"
        open={openNav}
      >
        <div className="flex flex-col items-start px-4 py-2">
          {navList}
          <div className="flex flex-row gap-5 items-center">
            <a href="/dudley-spence-cv.pdf" download className="w-full">
              <Button
                size="sm"
                className="bg-buttonGreen text-white flex items-center justify-center gap-2 rounded-lg h-10 lg:h-12"
              >
                <span>{t("nav_resume")}</span>
              </Button>
            </a>
            <LanguageChanger />
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
}
