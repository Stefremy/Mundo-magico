import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import CookieConsent from "@/components/CookieConsent";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Mundo Mágico — Loja Esotérica em Aveiro, Portugal",
    template: "%s | Mundo Mágico",
  },
  description:
    "Loja esotérica em Aveiro, Portugal, especializada em artefactos rituais, velas, cristais, tarot e serviços espirituais: rituais de amor, proteção, prosperidade e limpeza energética. Atendimento presencial e online.",
  keywords: [
    "loja esotérica Aveiro",
    "loja esotérica em Aveiro Portugal",
    "artefactos rituais",
    "velas rituais",
    "cristais",
    "tarot Aveiro",
    "ritual de amor",
    "amarração",
    "limpeza energética",
    "ritual de proteção",
    "prosperidade espiritual",
    "magia branca",
    "espiritualidade Aveiro",
    "mundo mágico",
  ],
  openGraph: {
    title: "Mundo Mágico — Loja Esotérica em Aveiro, Portugal",
    description:
      "Artefactos rituais, velas, cristais, tarot e rituais espirituais de amor, proteção e prosperidade. Atendimento presencial em Aveiro e online para todo o país.",
    type: "website",
    locale: "pt_PT",
    siteName: "Mundo Mágico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className={`${cormorant.variable} ${manrope.variable} antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,0&display=swap"
        />
      </head>
      <body className="bg-[#181310] text-[#EDE4D8] min-h-screen selection:bg-[#8C6A3B]/30 selection:text-[#EDE4D8]">
        <SiteNav />
        <main className="pt-[58px]">
          {children}
        </main>
        <SiteFooter />
        <CookieConsent />
      </body>
    </html>
  );
}
