"use client";

import React, { useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import mapDark from "@/public/About/mapdark.png";
import mapLight from "@/public/About/maplight.png";

export default function MapImage() {
  const { resolvedTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return resolvedTheme === "dark" ? (
    <Image
      src={mapDark}
      alt="Dark Mode Map"
      className={`object-cover rounded-xl shadow-xl !static ${
        isLoading ? "scale-[1.02] blur-xl grayscale" : "blur-0 grayscale-0"
      }`}
      fill
      placeholder="blur"
      priority
      onLoad={handleImageLoad}
      style={{
        transition: "filter 700ms ease, transform 150ms ease",
      }}
    />
  ) : (
    <Image
      src={mapLight}
      alt="Light Mode Map"
      className={`object-cover rounded-xl shadow-xl !static ${
        isLoading ? "scale-[1.02] blur-xl grayscale" : "blur-0 grayscale-0"
      }`}
      fill
      placeholder="blur"
      priority
      onLoad={handleImageLoad}
      style={{
        transition: "filter 700ms ease, transform 150ms ease",
      }}
    />
  );
}
