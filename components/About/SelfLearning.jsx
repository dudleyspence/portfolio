import Image from "next/image";
import SkillCard from "./SkillCard";

const skill2 = (
  <SkillCard imagePath="/skills/mongo-db.png" name="MongoDB" marquee={false} />
);
const skill1 = (
  <SkillCard imagePath="/skills/nextjs.png" name="Next.js" marquee={false} />
);

export function SelfLearning({ t }) {
  return (
    <div className="font-sans relative flex w-full p-6 flex-col rounded-lg bg-lowcontrast2 h-full">
      <div className="relative bg-clip-border mt-4 rounded-lg overflow-hidden bg-transparent text-gray-700 shadow-none mx-0 flex items-center gap-4 pt-0 pb-2">
        <Image
          src="/Brand/profile.png"
          alt={t("education.northcoders.institution")}
          width={70}
          height={70}
          className="relative inline-block rounded-lg object-cover object-center"
        />
        <div className="flex gap-1 w-full flex-col">
          <div className="flex items-center justify-between">
            <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-text">
              {t("education.selflearning.title")}
            </h5>
          </div>
          <p className="block antialiased font-sans text-base font-bold leading-relaxed text-text">
            {t("education.selflearning.currentlylearning")}
          </p>
        </div>
      </div>

      <div className=" flex flex-row gap-4 mt-3">
        {skill1}
        {skill2}
      </div>
    </div>
  );
}
