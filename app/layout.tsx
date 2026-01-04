import "@/app/globals.css";
import { Inter, Crimson_Text, JetBrains_Mono } from "next/font/google";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import ThemeInitScript from "@/components/site/ThemeInitScript";
import LeadCapturePopup from "@/components/ui/LeadCapturePopup";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const crimson = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-crimson",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${crimson.variable} ${jetbrains.variable}`}>
      <body>
        <ThemeInitScript />
        <Header />
        <main>{children}</main>
        <Footer />
        <LeadCapturePopup />
      </body>
    </html>
  );
}
