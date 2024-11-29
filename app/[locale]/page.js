import { useTranslations } from "next-intl";
import LandingHero from "@/components/Hero/LandingHero";

export default function Home() {
  const t = useTranslations("common");

  return (
    <div>
      <LandingHero t={t} />
    </div>
  );
}
