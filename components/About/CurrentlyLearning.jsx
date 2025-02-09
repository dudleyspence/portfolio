import React from "react";
import SkillCard from "./SkillCard";

export default function CurrentlyLearning({ marquee }) {
  const skill2 = (
    <SkillCard
      imagePath="https://res.cloudinary.com/dvb1ktpjd/image/upload/c_thumb,w_200,g_face/v1739095109/visualstudio_ocu0tz.png"
      name="TypeScript"
      marquee={marquee}
    />
  );
  const skill1 = (
    <SkillCard
      imagePath="https://res.cloudinary.com/dvb1ktpjd/image/upload/c_thumb,w_200,g_face/v1739095105/nextjs_fftwta.png"
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
