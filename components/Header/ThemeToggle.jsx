"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div
      className="relative lg:self-auto lg:mt-0 cursor-pointer"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <Image src="/theme/sun.png" alt="Sun Icon" height={20} width={20} />
      ) : (
        <Image src="/theme/moon.png" alt="Moon Icon" height={20} width={20} />
      )}
    </div>
  );
}