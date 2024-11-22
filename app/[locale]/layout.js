import "./globals.css";
import { BasicNavbar } from "@/components/Navbar";
import ThemeProvider from "@/utils/ThemeProvider";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Dudley Spence",
  description: "Portfolio Website",
  image: "profile.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="overflow-scroll h-[100vh]">
            <BasicNavbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
