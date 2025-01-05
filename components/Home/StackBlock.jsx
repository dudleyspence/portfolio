import React from "react";
import SkillsMarquee from "../UI/Marquee";
import SkillCard from "../About/SkillCard";

export default function StackBlock({ t }) {
  return (
    <div className="w-full h-full flex flex-col gap-5 justify-evenly items-center rounded-xl shadow-xl p-6 bg-lowcontrast2">
      <p className="text-[25px] self-start text-foreground flex flex-row gap-2">
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          id="lightning"
          className="icon glyph h-9 w-9 fill-foreground"
        >
          <path d="M18,11.74a1,1,0,0,0-.52-.63L14.09,9.43,15,3.14a1,1,0,0,0-1.78-.75l-7,9a1,1,0,0,0-.17.87,1,1,0,0,0,.59.67l4.27,1.71L10,20.86a1,1,0,0,0,.63,1.07A.92.92,0,0,0,11,22a1,1,0,0,0,.83-.45l6-9A1,1,0,0,0,18,11.74Z" />
        </svg>
        {t("stack")}
      </p>
      <SkillsMarquee />
      <p className="text-[18px] self-start text-foreground">
        {t("current_focus")}
      </p>
      <div className="w-full flex flex-row gap-5 items-start">
        <SkillCard
          imagePath="/skills/nextjs.png"
          name="Next.js"
          marquee={true}
        />
        <SkillCard
          imagePath="/skills/react-query.png"
          name="react-query"
          marquee={true}
        />
      </div>
    </div>
  );
}

// file name change
