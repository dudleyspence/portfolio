import { useTranslations } from "next-intl";
import LandingHero from "@/components/Hero/LandingHero";
import SkillsMarquee from "@/components/UI/Marquee";

export default function Home() {
  const t = useTranslations("common");

  return (
    <div>
      <LandingHero t={t} />
    </div>
  );
}
