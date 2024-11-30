import { useTranslations } from "next-intl";
import LandingHero from "@/components/Hero/LandingHero";

import Overview from "@/components/Home/Overview";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  const t = useTranslations("common");

  return (
    <div>
      <LandingHero t={t} />
      <Overview />
      <Footer />
    </div>
  );
}
