import React from "react";
import SkillCard from "./SkillCard";
import nextIcon from "public/Skills/nextjs.png";
import typescriptIcon from "public/Skills/typescript.png";

export default function CurrentlyLearning({ marquee }) {
  const skill2 = (
    <SkillCard imagePath={typescriptIcon} name="TypeScript" marquee={marquee} />
  );
  const skill1 = (
    <SkillCard imagePath={nextIcon} name="Next.js" marquee={marquee} />
  );
  return (
    <div className="w-full flex flex-row gap-5 mt-3">
      {skill1}
      {skill2}
    </div>
  );
}
