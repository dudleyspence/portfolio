import ContactForm from "@/components/Contact/ContactForm";
import { useTranslations } from "next-intl";
import { Footer } from "@/components/Footer/Footer";

export default function ContactPage() {
  const t = useTranslations("contact");
  return (
    <div>
      <div className="flex justify-center min-h-[calc(70vh)] items-center ">
        <div className="max-w-[600px] w-full flex gap-6 flex-col justify-center items-center bg-transparent shadow-none">
          <div className="text-center">
            <h4 className="mb-2 font-sans text-2xl text-foreground">
              {t("contactme")}
            </h4>
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
