import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loja de Artefactos Rituais & Produtos Esotéricos",
  description: "Compre online velas rituais, velões consagrados, óleos esotéricos, defumadores e acessórios de ritual sagrado no Mundo Mágico.",
  alternates: {
    canonical: "/artefactos",
  },
  openGraph: {
    title: "Loja de Artefactos Rituais & Produtos Esotéricos — Mundo Mágico",
    description: "Compre online velas rituais, velões consagrados, óleos esotéricos, defumadores e acessórios de ritual sagrado no Mundo Mágico.",
    url: "https://mundo-magico-theta.vercel.app/artefactos",
  },
};

export default function ArtefactosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
