import React from "react";
import Image from "next/image";

export default function ProfileImage() {
  return (
    <div className="relative w-72 h-72 lg:w-[400px] lg:h-[400px] overflow-hidden rounded-full bg-backgroundColor">
      <Image
        src="https://res.cloudinary.com/dvb1ktpjd/image/upload/v1734133760/Brand/njoo86hfxzs3fcafrac4.png"
        alt="Dudley Spence Profile Image"
        fill
        priority
        sizes="(max-width: 1080px) 288px, 400px"
        className="object-cover transition-opacity duration-700 ease-in-out"
      />
    </div>
  );
}
