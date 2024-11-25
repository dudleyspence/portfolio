"use client";

import { useRouter, usePathname } from "next/navigation";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const countries = [
  {
    code: "en",
    flag: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 32 32"
      >
        <rect
          x="1"
          y="4"
          width="30"
          height="24"
          rx="4"
          ry="4"
          fill="#071b65"
        ></rect>
        <path
          d="M5.101,4h-.101c-1.981,0-3.615,1.444-3.933,3.334L26.899,28h.101c1.981,0,3.615-1.444,3.933-3.334L5.101,4Z"
          fill="#fff"
        ></path>
        <path
          d="M22.25,19h-2.5l9.934,7.947c.387-.353,.704-.777,.929-1.257l-8.363-6.691Z"
          fill="#b92932"
        ></path>
        <path
          d="M1.387,6.309l8.363,6.691h2.5L2.316,5.053c-.387,.353-.704,.777-.929,1.257Z"
          fill="#b92932"
        ></path>
        <path
          d="M5,28h.101L30.933,7.334c-.318-1.891-1.952-3.334-3.933-3.334h-.101L1.067,24.666c.318,1.891,1.952,3.334,3.933,3.334Z"
          fill="#fff"
        ></path>
        <rect x="13" y="4" width="6" height="24" fill="#fff"></rect>
        <rect x="1" y="13" width="30" height="6" fill="#fff"></rect>
        <rect x="14" y="4" width="4" height="24" fill="#b92932"></rect>
        <rect
          x="14"
          y="1"
          width="4"
          height="30"
          transform="translate(32) rotate(90)"
          fill="#b92932"
        ></rect>
      </svg>
    ),
    name: "English",
  },
  {
    code: "fr",
    flag: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 32 32"
      >
        <path fill="#fff" d="M10 4H22V28H10z"></path>
        <path
          d="M5,4h6V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z"
          fill="#092050"
        ></path>
        <path
          d="M25,4h6V28h-6c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z"
          transform="rotate(180 26 16)"
          fill="#be2a2c"
        ></path>
        <path
          d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
          opacity=".15"
        ></path>
        <path
          d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
          fill="#fff"
          opacity=".2"
        ></path>
      </svg>
    ),
    name: "French",
  },
];

export default function LanguageChanger() {
  const router = useRouter();
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);

  const handleChange = (locale) => {
    const segments = pathname.split("/").filter(Boolean);

    if (segments[0] === "en" || segments[0] === "fr") {
      segments[0] = locale;
    } else {
      segments.unshift(locale);
    }

    const newPath = `/${segments.join("/")}`;
    router.push(newPath);
    router.refresh();
    setOpenMenu(false);
  };

  return (
    <Menu open={openMenu} handler={setOpenMenu}>
      <MenuHandler>
        <Button
          size="sm"
          variant="outlined"
          className="flex border-text text-text items-center justify-center gap-2"
        >
          {countries.find((country) => pathname.startsWith(`/${country.code}`))
            ?.flag || countries[0].flag}
          {countries.find((country) => pathname.startsWith(`/${country.code}`))
            ?.name || countries[0].name}
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`w-3.5 h-3.5 !fill-text transition-transform inline-block ${
              openMenu ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="block max-h-72 w-32">
        {countries.map(({ name, flag, code }) => (
          <MenuItem
            key={code}
            className="flex items-center gap-2"
            onClick={() => handleChange(code)}
          >
            {flag} {name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
