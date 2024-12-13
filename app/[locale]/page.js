import { useTranslations } from "next-intl";
import LandingHero from "@/components/Hero/LandingHero";

import Overview from "@/components/Home/Overview";
import { Footer } from "@/components/Footer/Footer";
import ScrollArrow from "@/components/UI/ScrollArrow";

export default function Home() {
  const t = useTranslations("common");

  return (
    <div>
      <div className="fixed bottom-[20px] right-[20px]">
        <ScrollArrow />
      </div>
      <LandingHero t={t} />
      <Overview />
      <Footer url={"https://www.dudleyspence.com/en"} />
    </div>
  );
}
