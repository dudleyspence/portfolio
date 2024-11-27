import ContactForm from "@/components/Contact/ContactForm";
import TranslationsProvider from "@/components/contexts/TranslationsProvider";
import initTranslations from "@/app/i18n";
import { Footer } from "@/components/General/Footer";

const namespaces = ["contact"];

export default async function ContactPage({ params }) {
  const { locale } = await params;
  const { t, resources } = await initTranslations(locale, namespaces);

  return (
    <div>
      <div className="flex justify-center min-h-[calc(70vh)] items-center ">
        <div className="max-w-[600px] w-full flex gap-6 flex-col justify-center items-center bg-transparent shadow-none">
          <div className="text-center">
            <h4 className="mb-2 font-sans text-2xl text-foreground">
              {t("contactme")}
            </h4>
            <TranslationsProvider
              resources={resources}
              locale={locale}
              namespaces={namespaces}
            >
              <ContactForm />
            </TranslationsProvider>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
