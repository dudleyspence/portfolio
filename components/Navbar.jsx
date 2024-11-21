"use client";
import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
  Collapse,
} from "@material-tailwind/react";

import ThemeToggle from "./ThemeToggle";

export function BasicNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="large" className="p-1 font-bold text-text">
        <a href="/" className="flex items-center justify-end">
          Home
        </a>
      </Typography>
      <Typography as="li" variant="large" className="p-1 font-bold text-text">
        <a href="about" className="flex items-center justify-end">
          About
        </a>
      </Typography>
      <Typography as="li" variant="Large" className="p-1 font-bold text-text">
        <a href="experience" className="flex items-center justify-end">
          Experience
        </a>
      </Typography>
      <Typography as="li" variant="Large" className="p-1 font-bold text-text">
        <a href="projects" className="flex items-center justify-end">
          Projects
        </a>
      </Typography>

      <a as="li" href="/dudley-spence-cv.pdf" download>
        <Button size="sm" className="hidden lg:inline-block bg-buttonGreen">
          <span>Download Resume</span>
        </Button>
      </a>
      <a
        as="li"
        href="/dudley-spence-cv.pdf"
        className="flex items-center justify-end"
        download
      >
        <Button size="sm" className="lg:hidden inline-block bg-buttonGreen">
          <span>Resume</span>
        </Button>
      </a>
      <ThemeToggle />
    </ul>
  );

  return (
    <Navbar className="sticky bg-background top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 border-none !shadow-none">
      <div className="flex items-center justify-between">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-auto w-[25vw] max-w-[200px]"
        />
        <div className="flex items-center gap-4">
          <div className="lg:mr-0 hidden lg:block">{navList}</div>

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-text hover:bg-transparent
               focus:bg-transparent active:bg-transparent lg:hidden"
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
        className="absolute pr-5 left-0 right-0 bg-background shadow-md lg:hidden"
        open={openNav}
      >
        {navList}
      </Collapse>
    </Navbar>
  );
}
