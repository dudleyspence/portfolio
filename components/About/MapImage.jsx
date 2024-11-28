"use client";
import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import mapDark from "@/public/About/mapdark.png";
import mapLight from "@/public/About/maplight.png";
import MapSkeleton from "./MapSkeleton";

export default function MapImage() {
  const { resolvedTheme } = useTheme();

  if (!resolvedTheme) return <MapSkeleton />;

  return (
    <div className="h-full w-full">
      {resolvedTheme === "dark" ? (
        <Image
          src={mapDark}
          alt="Dark Mode Map"
          className="object-cover !static"
          fill
          placeholder="blur"
          priority
        />
      ) : (
        <Image
          src={mapLight}
          alt="Light Mode Map"
          className="object-cover !static"
          placeholder="blur"
          fill
          priority
        />
      )}
    </div>
  );
}
