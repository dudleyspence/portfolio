import "./globals.css";
import { BasicNavbar } from "@/components/Header/Navbar";
import ThemeProvider from "@/components/contexts/ThemeProvider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata = {
  title: "Dudley Spence",
  description: "Portfolio Website",
  image: "profile.png",
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const messages = await getMessages(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextIntlClientProvider messages={messages}>
            <main className="flex flex-col items-center min-h-screen min-w-screen">
              <BasicNavbar locale={locale} />
              <div className="w-full max-w-[85vw] lg:max-w-[80vw]">
                {children}
              </div>
            </main>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
