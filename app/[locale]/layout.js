import "./globals.css";
import { BasicNavbar } from "@/components/Header/Navbar";
import ThemeProvider from "@/components/contexts/ThemeProvider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export const metadata = {
  title: "Dudley Spence",
  description: "Portfolio Website",
  image: "profile.png",
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextIntlClientProvider messages={messages}>
            <main className="min-h-screen min-w-screen">
              <BasicNavbar locale={locale} />
              {children}
            </main>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
