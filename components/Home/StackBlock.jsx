import React from "react";
import SkillsMarquee from "../UI/Marquee";
import SkillCard from "../About/SkillCard";

export default function () {
  return (
    <div className="w-full h-full flex flex-col gap-5 justify-evenly items-center rounded-xl shadow-xl p-6 bg-lowcontrast2">
      <p className="text-[20px] self-start text-foreground">My Stack</p>
      <SkillsMarquee />
      <p className="text-[20px] self-start text-foreground">
        What am I currently focussed on?
      </p>
      <div className="w-full flex flex-row gap-5 items-start">
        <SkillCard
          imagePath="/skills/nextjs.png"
          name="Next.js"
          marquee={true}
        />
        <SkillCard
          imagePath="/skills/mongo-db.png"
          name="MongoDB"
          marquee={true}
        />
      </div>
    </div>
  );
}
