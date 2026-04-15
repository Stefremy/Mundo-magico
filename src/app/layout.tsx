import type { Metadata } from "next";
import { Newsreader, Manrope, Work_Sans, Cinzel_Decorative } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const cinzelDecorative = Cinzel_Decorative({
  variable: "--font-cinzel-decorative",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mundo Mágico",
  description: "Desbloqueia as artes ancestrais. Descobre o teu caminho celestial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className={`dark ${newsreader.variable} ${manrope.variable} ${workSans.variable} ${cinzelDecorative.variable} antialiased`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body bg-surface text-on-surface selection:bg-primary/30 selection:text-primary min-h-screen">
        {children}
      </body>
    </html>
  );
}
