"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { generateBlurDataUrl } from "@/utils/BlurImageURL";

export default function DynamicBlurImage({ imagePath, blurHash, alt }) {
  const [loading, setLoading] = useState(true);
  const [blurredImage, setBlurredImage] = useState(null);

  const handleImageLoad = () => {
    setLoading(false);
  };

  useEffect(() => {
    setBlurredImage(generateBlurDataUrl(blurHash));
  }, []);

  return (
    <Image
      alt={alt}
      src={imagePath}
      className={`object-cover rounded-lg shadow-lg !static ${
        loading ? "scale-[1.02] blur-xl grayscale" : "blur-0 grayscale-0"
      }`}
      fill
      blurDataURL={blurredImage}
      onLoad={handleImageLoad}
      style={{
        transition: "filter 700ms ease, transform 150ms ease",
      }}
    />
  );
}
