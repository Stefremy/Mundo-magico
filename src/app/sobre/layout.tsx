import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nós & Tradição Esotérica",
  description: "Conheça Maria Manuela Gonçalves, taróloga e fundadora do Mundo Mágico em Aveiro com mais de 16 anos de experiência em orientação espiritual.",
  alternates: {
    canonical: "/sobre",
  },
  openGraph: {
    title: "Sobre Nós & Tradição Esotérica — Mundo Mágico",
    description: "Conheça Maria Manuela Gonçalves, taróloga e fundadora do Mundo Mágico em Aveiro com mais de 16 anos de experiência em orientação espiritual.",
    url: "https://www.lojamundomagico.pt/sobre",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
