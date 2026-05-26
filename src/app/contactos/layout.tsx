import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contactos & Marcações",
  description: "Marque a sua consulta de Tarot presencial em Aveiro ou Online. Contacte o Mundo Mágico via WhatsApp, telefone ou visite-nos.",
  alternates: {
    canonical: "/contactos",
  },
  openGraph: {
    title: "Contactos & Marcações — Mundo Mágico",
    description: "Marque a sua consulta de Tarot presencial em Aveiro ou Online. Contacte o Mundo Mágico via WhatsApp, telefone ou visite-nos.",
    url: "https://www.lojamundomagico.pt/contactos",
  },
};

export default function ContactosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
