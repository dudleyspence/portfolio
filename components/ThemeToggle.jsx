"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <img
      className="h-[20px] w-[20px] self-end lg:self-auto mt-3 lg:mt-0"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      src={theme === "dark" ? "theme/sun.png" : "theme/moon.png"}
    />
  );
}
