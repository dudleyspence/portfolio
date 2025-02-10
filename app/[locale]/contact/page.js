import ContactForm from "@/components/Contact/ContactForm";
import { getTranslations } from "next-intl/server";
import PageTitle from "@/components/UI/PageTitle";
import ReachOut from "@/components/Contact/ReachOut";
import Copyright from "@/components/Footer/Copyright";

export default async function ContactPage() {
  const t = await getTranslations("contact");
  return (
    <div className="min-h-[calc(100vh-60px)] justify-between flex flex-col items-center lg:min-h-[calc(100vh-82px)]">
      <PageTitle title={t("title")} extra_info={t("title_2")} />
      <div
        className="flex flex-col-reverse w-full lg:flex-row-reverse justify-center
       items-start pb-8"
      >
        <ReachOut t={t} />
        <ContactForm />
      </div>
      <Copyright />
    </div>
  );
}
