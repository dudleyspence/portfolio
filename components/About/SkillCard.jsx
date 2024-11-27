import Image from "next/image";
import React from "react";

export default function SkillCard({ imagePath, name }) {
  return (
    <div className="flex flex-row justify-start shadow-lg items-center py-0 px-3 gap-3 bg-lowcontrast4 rounded-lg h-[50px] w-max">
      <Image width={30} height={30} src={imagePath} alt={name} />
      <h4 className="font-sans text-sm font-bold">{name}</h4>
    </div>
  );
}
