import "./globals.css";
import { BasicNavbar } from "@/components/Navbar";
import ThemeProvider from "@/utils/ThemeProvider";
import { Footer } from "@/components/Footer";
import TranslationsProvider from "@/components/TranslationsProvider";

export const metadata = {
  title: "Dudley Spence",
  description: "Portfolio Website",
  image: "profile.png",
};

export default async function RootLayout({ children, params }) {
  const { locale = "en" } = (await params) || {};
  const namespaces = ["common"];

  return (
    <html lang={locale}>
      <body className="overflow-scroll h-[100vh]">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TranslationsProvider locale={locale} namespaces={namespaces}>
            <div>
              <BasicNavbar />
              {children}
              <Footer />
            </div>
          </TranslationsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
