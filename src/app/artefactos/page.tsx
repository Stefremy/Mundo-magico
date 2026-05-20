"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";

const PRODUCTS = [
  { id: 1,  name: "Vela Ritual Vira Pensamento",      desc: "Influência e Clareza Mental",     price: "12,50 €", img: "/images/WhatsApp Image 2026-03-30 at 17.39.09.jpeg" },
  { id: 2,  name: "Velão Mágico Volteio",              desc: "Retorno de Energias Negativas",   price: "15,00 €", img: "/images/WhatsApp Image 2026-03-30 at 17.39.10.jpeg" },
  { id: 3,  name: "Velas de Ritual Brancas",           desc: "Puras para Oração e Paz",         price: "8,00 €",  img: "/images/WhatsApp Image 2026-03-30 at 17.39.11.jpeg" },
  { id: 4,  name: "Velão 3 Pavios — Corta Trabalhos",  desc: "Quebra de Bruxaria Pesada",       price: "18,00 €", img: "/images/WhatsApp Image 2026-03-30 at 17.39.12.jpeg" },
  { id: 5,  name: "Vela Ritual do Sol",                desc: "Atração de Dinheiro e Sucesso",   price: "9,90 €",  img: "/images/WhatsApp Image 2026-03-30 at 17.39.13.jpeg" },
  { id: 6,  name: "Vela Ritual Dualidade",             desc: "Equilíbrio e Justiça",            price: "10,50 €", img: "/images/WhatsApp Image 2026-03-30 at 17.39.13 (1).jpeg" },
  { id: 7,  name: "Ritual 11 Mechas Caveira Vermelha", desc: "Ritual de Amor e Paixão",         price: "18,90 €", img: "/images/WhatsApp Image 2026-03-30 at 17.39.14.jpeg" },
  { id: 8,  name: "Vela Figurativa Casal Branco",      desc: "Paz e União Conjugal",            price: "10,00 €", img: "/images/WhatsApp Image 2026-03-30 at 17.39.15.jpeg" },
  { id: 9,  name: "Vela Tesoura de Ritual",            desc: "Corte de Laços e Energias",       price: "11,00 €", img: "/images/WhatsApp Image 2026-03-30 at 17.39.16.jpeg" },
  { id: 10, name: "Vela Figurativa Casa Branca",       desc: "Limpeza e Proteção do Lar",       price: "10,00 €", img: "/images/WhatsApp Image 2026-03-30 at 17.39.17.jpeg" },
  { id: 11, name: "Vela Figurativa Casal Mel",         desc: "Doçura e Encantamento no Amor",   price: "10,50 €", img: "/images/WhatsApp Image 2026-03-30 at 17.39.18.jpeg" },
  { id: 12, name: "Kit Ritual Impotência Máxima",      desc: "Inibição de Força Masculina",     price: "22,00 €", img: "/images/WhatsApp Image 2026-03-30 at 17.39.19.jpeg" },
  { id: 13, name: "Sabão Ritual Desata Nós",           desc: "Resolução de Problemas Difíceis", price: "7,50 €",  img: "/images/WhatsApp Image 2026-03-30 at 17.39.20.jpeg" },
  { id: 14, name: "Sabonete Proteção Espiritual",      desc: "Escudo Energético Diário",        price: "6,90 €",  img: "/images/WhatsApp Image 2026-03-30 at 17.39.21.jpeg" },
  { id: 15, name: "Kit Ritual És Só Para Mim",         desc: "Foco Absoluto no Amor",           price: "24,90 €", img: "/images/WhatsApp Image 2026-03-30 at 17.39.22.jpeg" },
  { id: 16, name: "Vela Ritual Zé Pelintra",           desc: "Abertura de Caminhos e Proteção", price: "12,00 €", img: "/images/WhatsApp Image 2026-03-30 at 17.39.23.jpeg" },
  { id: 17, name: "Velão 7 Mechas Branco",             desc: "Limpeza Profunda e Desbloqueio",  price: "16,00 €", img: "/images/WhatsApp Image 2026-03-30 at 17.39.23 (1).jpeg" },
  { id: 18, name: "Velão 7 Mechas Multicor",           desc: "Limpeza e Reequilíbrio Total",    price: "16,50 €", img: "/images/WhatsApp Image 2026-03-30 at 17.39.24.jpeg" },
  { id: 19, name: "Velão 7 Mechas Preto",              desc: "Quebra Radical de Feitiços",      price: "16,00 €", img: "/images/WhatsApp Image 2026-03-30 at 17.39.25.jpeg" },
];

const CATEGORIES = ["Todos", "Velas", "Kits Rituais", "Sabonetes", "Velões"];

export default function ArtefactosPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  return (
    <>
      {/* ── NAV ───────────────────────────────────────────────────── */}
      <nav
        className="fixed top-0 z-50 w-full px-8 md:px-16 py-6 flex justify-between items-center bg-[#0E0B0A]/92 backdrop-blur-xl border-b border-[rgba(232,222,210,0.07)]"
        aria-label="Navegação principal"
      >
        <Link
          href="/"
          aria-label="Mundo Mágico — Início"
          className="font-serif italic text-xl text-[#E8DED2] tracking-wide hover:text-[#8C6A3B] transition-colors duration-400"
        >
          Mundo Mágico
        </Link>
        <div className="hidden md:flex items-center gap-12">
          <Link className="text-label text-[#7E7065] hover:text-[#8C6A3B] transition-colors duration-300" href="/#novidades">Novidades</Link>
          <Link className="text-label text-[#8C6A3B]" href="/artefactos">Artefactos</Link>
          <Link className="text-label text-[#7E7065] hover:text-[#8C6A3B] transition-colors duration-300" href="/servicos">Serviços</Link>
          <Link className="text-label text-[#7E7065] hover:text-[#8C6A3B] transition-colors duration-300" href="/contactos">Contactos</Link>
        </div>
        <button aria-label="Carrinho" className="material-symbols-outlined text-[#7E7065] hover:text-[#8C6A3B] transition-colors duration-300 text-[20px]">
          shopping_bag
        </button>
      </nav>

      {/* ── PAGE HERO ─────────────────────────────────────────────── */}
      <header className="pt-48 pb-16 px-8 md:px-16 bg-[#0E0B0A] border-b border-[rgba(232,222,210,0.08)]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" delay={100}>
            <span className="eyebrow">Tesouros Consagrados</span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={250}>
            <h1 className="text-display text-[clamp(2.5rem,6vw,5.5rem)] text-[#E8DED2] leading-[1.04] max-w-3xl mb-8">
              Artefactos<br />
              <em className="text-[#8C6A3B]">de Ritual</em>
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={400}>
            <p className="text-body text-[#B9AA9A] max-w-[55ch] text-base leading-relaxed">
              Cada peça é de origem ética, consagrada segundo tradições ancestrais e tratada
              com a reverência que merece. Utilize com intenção pura.
            </p>
          </ScrollReveal>
        </div>
      </header>

      <main className="bg-[#F2EDE6] min-h-screen">
        {/* ── FILTER STRIP ──────────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-8 md:px-16 pt-12 pb-8">
          <div className="flex gap-2 flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-[0.6rem] font-sans font-medium tracking-[0.2em] uppercase transition-all duration-300 border ${
                  activeCategory === cat
                    ? "bg-[#8C6A3B] border-[#8C6A3B] text-[#0E0B0A]"
                    : "bg-transparent border-[rgba(29,24,21,0.2)] text-[#6B4E2D] hover:border-[#8C6A3B] hover:text-[#8C6A3B]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── PRODUCTS GRID ─────────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-8 md:px-16 pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-14">
            {PRODUCTS.map((product, i) => (
              <ScrollReveal key={product.id} delay={(i % 4) * 90} direction="up">
                <article className="group cursor-pointer">
                  <div className="relative aspect-[3/4] bg-[#E8E0D5] mb-5 overflow-hidden">
                    <Image
                      alt={product.name}
                      src={product.img}
                      fill
                      className="object-contain p-6 transition-transform duration-700 group-hover:scale-[1.06]"
                    />
                  </div>
                  <div className="space-y-1 px-1">
                    <h2 className="font-serif italic text-[#1D1815] text-lg leading-snug group-hover:text-[#6B4E2D] transition-colors duration-300">
                      {product.name}
                    </h2>
                    <p className="text-label" style={{ color: "#8C6A3B" }}>
                      {product.desc}
                    </p>
                    <p className="font-serif italic text-[#1D1815] text-base font-medium pt-1">
                      {product.price}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          {/* Disclaimer */}
          <ScrollReveal>
            <div className="mt-20 pt-10 border-t border-[rgba(29,24,21,0.1)] max-w-2xl">
              <p className="text-body text-sm text-[#8C7A6A] leading-relaxed italic">
                Todos os artefactos são preparados e consagrados segundo tradições ancestrais.
                Utilize sempre com intenção pura e respeito pelas leis universais.
                Para aconselhamento personalizado, consulte a nossa equipa.
              </p>
            </div>
          </ScrollReveal>
        </section>
      </main>

      {/* ── FOOTER ───────────────────────────────────────────────────── */}
      <footer className="bg-[#0E0B0A] border-t border-[rgba(232,222,210,0.08)] pt-16 pb-10 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div className="max-w-xs">
              <Link href="/" className="font-serif italic text-xl text-[#E8DED2] block mb-4">
                Mundo Mágico
              </Link>
              <p className="text-body text-sm text-[#7E7065] leading-relaxed">
                Loja esotérica portuguesa. Artefactos rituais, leituras de tarot e serviços
                espirituais desde o coração de Portugal.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-20 gap-y-3">
              <Link href="/artefactos" className="text-label text-[#7E7065] hover:text-[#8C6A3B] transition-colors">Artefactos</Link>
              <Link href="/servicos" className="text-label text-[#7E7065] hover:text-[#8C6A3B] transition-colors">Serviços</Link>
              <Link href="/contactos" className="text-label text-[#7E7065] hover:text-[#8C6A3B] transition-colors">Contactos</Link>
              <a href="#" className="text-label text-[#7E7065] hover:text-[#8C6A3B] transition-colors">Privacidade</a>
              <a href="#" className="text-label text-[#7E7065] hover:text-[#8C6A3B] transition-colors">Envios</a>
              <a href="#" className="text-label text-[#7E7065] hover:text-[#8C6A3B] transition-colors">Termos</a>
            </div>
          </div>
          <div className="divider mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-label text-[#7E7065]">&copy; 2026 Mundo Mágico. Todos os direitos reservados.</p>
            <p className="text-label text-[#7E7065]">Portugal</p>
          </div>
        </div>
      </footer>
    </>
  );
}
