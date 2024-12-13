import { useTranslations } from "next-intl";
import LandingHero from "@/components/Hero/LandingHero";

import Overview from "@/components/Home/Overview";
import { Footer } from "@/components/Footer/Footer";
import ScrollArrow from "@/components/UI/ScrollArrow";
import fetchLighthouseStats from "@/utils/fetchLighthouseStats";

export function generateStaticParams() {
  return fetchLighthouseStats("https://www.dudleyspence.com/en").then(
    (stats) => {
      return {
        props: {
          stats,
        },
        revalidate: 3600, // 1 hour
      };
    }
  );
}

export default function Home({ params }) {
  console.log(params);
  const t = useTranslations("common");

  return (
    <div>
      <div className="fixed bottom-[20px] right-[20px]">
        <ScrollArrow />
      </div>
      <LandingHero t={t} />
      <Overview />
      <Footer stats={stats} />
    </div>
  );
}
