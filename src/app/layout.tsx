import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

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
    default: "Mundo Mágico — Loja Esotérica & Serviços Espirituais Portugal",
    template: "%s | Mundo Mágico",
  },
  description:
    "Loja esotérica portuguesa especializada em artefactos rituais, velas, cristais, tarot e serviços espirituais: rituais de amor, proteção, prosperidade e limpeza energética. Atendimento presencial e online.",
  keywords: [
    "loja esotérica Portugal",
    "artefactos rituais",
    "velas rituais",
    "cristais",
    "tarot Portugal",
    "ritual de amor",
    "amarração",
    "limpeza energética",
    "ritual de proteção",
    "prosperidade espiritual",
    "magia branca",
    "espiritualidade Portugal",
    "mundo mágico",
  ],
  openGraph: {
    title: "Mundo Mágico — Loja Esotérica & Serviços Espirituais Portugal",
    description:
      "Artefactos rituais, velas, cristais, tarot e rituais espirituais de amor, proteção e prosperidade. Atendimento presencial e online em todo Portugal.",
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
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,0&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#0E0B0A] text-[#E8DED2] min-h-screen selection:bg-[#8C6A3B]/30 selection:text-[#E8DED2]">
        {children}
      </body>
    </html>
  );
}
