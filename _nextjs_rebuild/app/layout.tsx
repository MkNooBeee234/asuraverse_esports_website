import type { Metadata } from "next";
import { Bebas_Neue, Rajdhani, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { SITE } from "@/lib/constants";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const rajdhani = Rajdhani({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-rajdhani",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Team AsuraVerse Esports Pvt Ltd",
    template: "%s — AsuraVerse Esports",
  },
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.name,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
  keywords: ["esports", "BGMI", "AsuraVerse", "India esports", "Valorant", "Free Fire", "Gandhinagar esports"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${rajdhani.variable} ${spaceMono.variable}`}>
      <body style={{ fontFamily: "var(--font-rajdhani, 'Rajdhani', sans-serif)" }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#0D1017",
              color: "#f0f0f0",
              border: "1px solid rgba(255,123,0,0.3)",
              fontFamily: "var(--font-rajdhani, Rajdhani, sans-serif)",
              fontWeight: 600,
              letterSpacing: "0.05em",
              clipPath: "polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)",
            },
            success: {
              iconTheme: { primary: "#FF7B00", secondary: "#090B10" },
            },
            error: {
              iconTheme: { primary: "#ef4444", secondary: "#090B10" },
            },
          }}
        />
      </body>
    </html>
  );
}
