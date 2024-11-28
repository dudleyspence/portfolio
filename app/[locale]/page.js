import initTranslations from "@/app/i18n";
import LandingHero from "@/components/Hero/LandingHero";

const namespaces = ["common"];

export default async function Home({ params }) {
  const { locale } = await params;
  const { t } = await initTranslations(locale, namespaces);

  return (
    <div>
      <LandingHero t={t} />
    </div>
  );
}
