import { getTranslations } from "next-intl/server";
import LandingHero from "@/components/Hero/LandingHero";

import Overview from "@/components/Home/Overview";
import { Footer } from "@/components/Footer/Footer";
import ScrollArrow from "@/components/UI/ScrollArrow";

export default async function Home() {
  const t = await getTranslations("common");

  return (
    <div>
      <div className="fixed bottom-[20px] right-[20px]">
        <ScrollArrow />
      </div>
      <LandingHero t={t} />
      <Overview />
      <Footer />
    </div>
  );
}
