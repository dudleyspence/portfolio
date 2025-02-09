"use client";

import React, { useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function MapImage() {
  const { resolvedTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return resolvedTheme === "dark" ? (
    <Image
      src="https://res.cloudinary.com/dvb1ktpjd/image/upload/v1739052975/mapdark_srgpgt.png"
      alt="Dark Mode Map"
      className={`object-cover rounded-xl shadow-xl !static ${
        isLoading ? "scale-[1.02] blur-xl grayscale" : "blur-0 grayscale-0"
      }`}
      fill
      priority
      onLoad={handleImageLoad}
      style={{
        transition: "filter 700ms ease, transform 150ms ease",
      }}
    />
  ) : (
    <Image
      src="https://res.cloudinary.com/dvb1ktpjd/image/upload/v1739052974/maplight_saklpr.png"
      alt="Light Mode Map"
      className={`object-cover rounded-xl shadow-xl !static ${
        isLoading ? "scale-[1.02] blur-xl grayscale" : "blur-0 grayscale-0"
      }`}
      fill
      priority
      onLoad={handleImageLoad}
      style={{
        transition: "filter 700ms ease, transform 150ms ease",
      }}
    />
  );
}
