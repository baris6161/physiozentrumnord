import type { Metadata } from "next";
import { Schibsted_Grotesk, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { site } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";
import JsonLd from "@/components/JsonLd";

const heading = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--fh",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--fb",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Physiotherapie Zentrum Nord | Praxis in Hannover List",
    template: "%s",
  },
  description:
    "Das Physiotherapie Zentrum Nord in Hannover behandelt die Ursache Ihres Beschwerdebildes mit gezielten Reha Maßnahmen wie Stoßwellentherapie und Lasertherapie.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: site.name,
    url: site.url,
    images: [
      {
        url: "/images/krankengymnsatik-in-hannover_praxis_08-558w.jpg",
        width: 558,
        height: 328,
        alt: site.name,
      },
    ],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${heading.variable} ${body.variable}`}>
      <body className="flex min-h-screen flex-col bg-paper">
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* Platz fuer die feste Mobile-Leiste */}
        <div className="h-[68px] lg:hidden" aria-hidden="true" />
        <MobileBar />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
