import React from "react";
import SkillsMarquee from "../UI/Marquee";

export default function () {
  return (
    <div className="w-full h-full flex flex-col gap-5 justify-center items-center rounded-xl shadow-xl p-6 bg-lowcontrast2">
      <p className="text-[20px] self-start text-foreground">My Stack</p>
      <SkillsMarquee />
    </div>
  );
}
