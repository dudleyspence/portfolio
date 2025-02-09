import React from "react";
import SkillCard from "./SkillCard";

export default function CurrentlyLearning({ marquee }) {
  const skill2 = (
    <SkillCard
      imagePath="@/public/skills/TypeScript.png"
      name="TypeScript"
      marquee={marquee}
    />
  );
  const skill1 = (
    <SkillCard
      imagePath="@/public/skills/nextjs.png"
      name="Next.js"
      marquee={marquee}
    />
  );
  return (
    <div className="w-full flex flex-row gap-5 mt-3">
      {skill1}
      {skill2}
    </div>
  );
}
