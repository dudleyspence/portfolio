import ContactForm from "@/components/Contact/ContactForm";
import { useTranslations } from "next-intl";
import { Footer } from "@/components/Footer/Footer";
import PageTitle from "@/components/UI/PageTitle";

export default function ContactPage() {
  const t = useTranslations("contact");
  return (
    <div className="min-h-[calc(100vh-60px)] justify-between flex flex-col items-center lg:min-h-[calc(100vh-82px)]">
      <PageTitle title={t("title")} extra_info={t("title_2")} />
      <ContactForm />
      <Footer />
    </div>
  );
}
