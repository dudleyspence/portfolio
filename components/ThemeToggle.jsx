"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div
      className="relative h-[20px] w-[20px] self-end lg:self-auto mt-3 lg:mt-0 cursor-pointer"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Image
        src={theme === "dark" ? "/theme/sun.png" : "/theme/moon.png"}
        alt={theme === "dark" ? "Sun Icon" : "Moon Icon"}
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
}
