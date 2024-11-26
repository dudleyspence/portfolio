"use client";
import { Typography } from "@material-tailwind/react";
import Socials from "./Socials";

export function Footer() {
  return (
    <footer className="mb-5 mt-5">
      <Socials />
      <Typography className=" text-center mt-5 text-foreground">
        &copy; 2024 Dudley Spence. All rights reserved.
      </Typography>
    </footer>
  );
}
