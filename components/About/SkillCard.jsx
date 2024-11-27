import Image from "next/image";
import React from "react";

export default function SkillCard({ imagePath, name }) {
  return (
    <div className="flex flex-row justify-start shadow-lg items-center py-0 px-2 gap-3 w-full bg-lowcontrast4 rounded-lg h-[50px]">
      <Image width={30} height={30} src={imagePath} alt={name} />
      <h3 className="font-sans font-bold">{name}</h3>
    </div>
  );
}
