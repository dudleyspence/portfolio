"use client";

import React from "react";
import Image from "next/image";
import profileImg from "@/public/profile.png";
import { useState } from "react";

export default function ProfileImage() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative h-72 w-72 lg:h-[400px] lg:w-[400px]">
      <Image
        className="rounded-full"
        src={profileImg}
        alt="Profile"
        fill
        placeholder="blur"
        priority
      />
    </div>
  );
}
