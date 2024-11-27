import "./globals.css";
import { BasicNavbar } from "@/components/General/Navbar";
import ThemeProvider from "@/components/contexts/ThemeProvider";
import { Footer } from "@/components/General/Footer";
import TranslationsProvider from "@/components/contexts/TranslationsProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Dudley Spence",
  description: "Portfolio Website",
  image: "profile.png",
};

export default async function RootLayout({ children, params }) {
  const { locale = "en" } = (await params) || {};
  const namespaces = ["common"];

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="overflow-scroll h-[100vh]">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TranslationsProvider locale={locale} namespaces={namespaces}>
            <div>
              <BasicNavbar />
              {children}
            </div>
          </TranslationsProvider>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
