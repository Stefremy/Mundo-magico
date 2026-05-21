"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";

const PRODUCTS = [
  { id: 1,  name: "Vela Ritual Vira Pensamento",      desc: "Influência e Clareza Mental",     price: "12,50 €", img: "/images/vela-vira-pensamento.jpeg", category: "Velas" },
  { id: 2,  name: "Velão Mágico Volteio",              desc: "Retorno de Energias Negativas",   price: "15,00 €", img: "/images/velao-magico-volteio.jpeg", category: "Velões" },
  { id: 3,  name: "Velas de Ritual Brancas",           desc: "Puras para Oração e Paz",         price: "8,00 €",  img: "/images/velas-ritual-brancas.jpeg", category: "Velas" },
  { id: 4,  name: "Velão 3 Pavios — Corta Trabalhos",  desc: "Quebra de Bruxaria Pesada",       price: "18,00 €", img: "/images/velao-3-pavios-corta-trabalhos.jpeg", category: "Velões" },
  { id: 5,  name: "Vela Ritual do Sol",                desc: "Atração de Dinheiro e Sucesso",   price: "9,90 €",  img: "/images/vela-ritual-sol.jpeg", category: "Velas" },
  { id: 6,  name: "Vela Ritual Dualidade",             desc: "Equilíbrio e Justiça",            price: "10,50 €", img: "/images/vela-ritual-dualidade.jpeg", category: "Velas" },
  { id: 7,  name: "Ritual 11 Mechas Caveira Vermelha", desc: "Ritual de Amor e Paixão",         price: "18,90 €", img: "/images/vela-11-mechas-caveira-vermelha.jpeg", category: "Velas" },
  { id: 8,  name: "Vela Figurativa Casal Branco",      desc: "Paz e União Conjugal",            price: "10,00 €", img: "/images/vela-figurativa-casal-branco.jpeg", category: "Velas" },
  { id: 9,  name: "Vela Tesoura de Ritual",            desc: "Corte de Laços e Energias",       price: "11,00 €", img: "/images/vela-tesoura-ritual.jpeg", category: "Velas" },
  { id: 10, name: "Vela Figurativa Casa Branca",       desc: "Limpeza e Proteção do Lar",       price: "10,00 €", img: "/images/vela-figurativa-casa-branca.jpeg", category: "Velas" },
  { id: 11, name: "Vela Figurativa Casal Mel",         desc: "Doçura e Encantamento no Amor",   price: "10,50 €", img: "/images/vela-figurativa-casal-mel.jpeg", category: "Velas" },
  { id: 12, name: "Kit Ritual Impotência Máxima",      desc: "Inibição de Força Masculina",     price: "22,00 €", img: "/images/kit-ritual-impotencia-maxima.jpeg", category: "Kits Rituais" },
  { id: 13, name: "Sabão Ritual Desata Nós",           desc: "Resolução de Problemas Difíceis", price: "7,50 €",  img: "/images/sabao-ritual-desata-nos.jpeg", category: "Sabonetes" },
  { id: 14, name: "Sabonete Proteção Espiritual",      desc: "Escudo Energético Diário",        price: "6,90 €",  img: "/images/sabonete-protecao-espiritual.jpeg", category: "Sabonetes" },
  { id: 15, name: "Kit Ritual És Só Para Mim",         desc: "Foco Absoluto no Amor",           price: "24,90 €", img: "/images/kit-ritual-es-so-para-mim.jpeg", category: "Kits Rituais" },
  { id: 16, name: "Vela Ritual Zé Pelintra",           desc: "Abertura de Caminhos e Proteção", price: "12,00 €", img: "/images/vela-ritual-ze-pelintra.jpeg", category: "Velas" },
  { id: 17, name: "Velão 7 Mechas Branco",             desc: "Limpeza Profunda e Desbloqueio",  price: "16,00 €", img: "/images/velao-7-mechas-branco.jpeg", category: "Velões" },
  { id: 18, name: "Velão 7 Mechas Multicor",           desc: "Limpeza e Reequilíbrio Total",    price: "16,50 €", img: "/images/velao-7-mechas-multicor.jpeg", category: "Velões" },
  { id: 19, name: "Velão 7 Mechas Preto",              desc: "Quebra Radical de Feitiços",      price: "16,00 €", img: "/images/velao-7-mechas-preto.jpeg", category: "Velões" },
  { id: 20, name: "Vela Aromática Flor de Lótus e Calêndula", desc: "Equilíbrio, Paz e Proteção Espiritual", price: "14,50 €", img: "/images/vela-decorativa-flores.png", category: "Velas" },
  { id: 21, name: "Baralho de Tarot Destiny",           desc: "Baralho Ricamente Ilustrado Detalhe Ouro", price: "28,00 €", img: "/images/tarot-destiny.png", category: "Tarot" },
  { id: 22, name: "Velão Ritualístico União e Domínio",  desc: "Ervas e Resinas para Relações Firmes", price: "19,50 €", img: "/images/velao-uniao-dominio.png", category: "Velões" },
  { id: 23, name: "Vela 7 Mechas Corda de Amarrar",     desc: "Desbloqueio e Libertação de Amarras", price: "17,00 €", img: "/images/vela-7-mechas-corda.png", category: "Velões" },
  { id: 24, name: "Vela Figurativa Casal — União de Almas", desc: "Aproximação, Paixão e União Eterna", price: "12,90 €", img: "/images/vela-figurativa-casal.png", category: "Velas" },
  { id: 25, name: "Vela Figurativa Caixão de Banimento", desc: "Quebra de Feitiço e Fim de Negatividade", price: "9,50 €", img: "/images/vela-figurativa-caixao.png", category: "Velas" },
  { id: 26, name: "Conjunto de Velas Finas de Ritual",   desc: "Cromoterapia e Rituais Rápidos de Intensão", price: "8,50 €", img: "/images/velas-finas-ritual.png", category: "Velas" },
  { id: 27, name: "Óleo de Ritual Pega e Não Larga",     desc: "Atração Amorosa Persistente e Conexão", price: "15,00 €", img: "/images/oleo-pega-nao-larga.png", category: "Óleos de Ritual" },
  { id: 28, name: "Óleo de Ritual Limpeza e Purificação", desc: "Purificação da Aura e Escudo Espiritual", price: "15,00 €", img: "/images/oleo-limpeza-purificacao.png", category: "Óleos de Ritual" },
  { id: 29, name: "Óleo de Ritual Quebra Macumba",       desc: "Destruição Imediata de Magia e Mau-olhado", price: "15,00 €", img: "/images/oleo-quebra-macumba.png", category: "Óleos de Ritual" },
  { id: 30, name: "Óleo de Ritual Rutura e Separação",   desc: "Corte de Laços Nocivos e Rivalidades", price: "15,00 €", img: "/images/oleo-rutura-separacao.png", category: "Óleos de Ritual" },
  { id: 31, name: "Óleo de Ritual Amansar",             desc: "Paz Familiar e Harmonia de Temperamentos", price: "15,00 €", img: "/images/oleo-amansar.png", category: "Óleos de Ritual" },
  { id: 32, name: "Óleo de Ritual Afasta e Desaparece",   desc: "Afastamento de Pessoas Indesejadas", price: "15,00 €", img: "/images/oleo-afasta-desaparece.png", category: "Óleos de Ritual" },
  { id: 33, name: "Óleo de Ritual Xangô",               desc: "Justiça Celestial, Poder e Vitória", price: "15,00 €", img: "/images/oleo-xango.png", category: "Óleos de Ritual" },
  { id: 34, name: "Óleo de Ritual Maias",               desc: "Bloqueio de Inveja e Intrigas do Quotidiano", price: "15,00 €", img: "/images/oleo-maias.png", category: "Óleos de Ritual" },
  { id: 35, name: "Óleo de Ritual Domínio",             desc: "Liderança, Poder e Domínio de Obstáculos", price: "15,00 €", img: "/images/oleo-dominio.png", category: "Óleos de Ritual" },
  { id: 36, name: "Kit de Ritual de Alta Magia Suprema",  desc: "Kit Completo com Velas e Óleos de Poder", price: "35,00 €", img: "/images/kit-ritual-alta-magia.png", category: "Kits Rituais" },
  { id: 37, name: "Dagida Feminina — Boneca de Pano de Ritual", desc: "Boneca Consagrada para Rituais de Intenção", price: "12,50 €", img: "/images/boneca-pano-dagida.png", category: "Acessórios" },
];

const CATEGORIES = ["Todos", "Velas", "Velões", "Óleos de Ritual", "Kits Rituais", "Sabonetes", "Tarot", "Acessórios"];

export default function ArtefactosPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProducts = activeCategory === "Todos"
    ? PRODUCTS
    : PRODUCTS.filter((product) => product.category === activeCategory);

  return (
    <>

      {/* ── PAGE HERO ─────────────────────────────────────────────── */}
      <header className="relative pt-36 pb-24 px-8 md:px-16 overflow-hidden min-h-[420px] flex items-end border-b border-[rgba(232,222,210,0.08)]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            alt="Floresta Mística"
            src="/images/floresta.jpg"
            fill
            priority
            className="object-cover object-center"
            style={{ filter: "brightness(0.5) sepia(10%) contrast(1.05)" }}
          />
          {/* Multi-stop gradient overlay for legibility and transition */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, #0E0B0A 0%, rgba(14,11,10,0.72) 40%, rgba(14,11,10,0.3) 100%)",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <ScrollReveal direction="up" delay={100}>
            <span className="eyebrow text-[#E8DED2]">Tesouros Consagrados</span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={250}>
            <h1 className="text-display text-[clamp(2.5rem,6vw,5.5rem)] text-[#E8DED2] leading-[1.04] max-w-3xl mb-8">
              Artefactos<br />
              <em className="text-[#E8DED2]">de Ritual</em>
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={400}>
            <p className="text-body text-[#EDE4D8] max-w-[55ch] text-base leading-relaxed opacity-95">
              Cada peça é de origem ética, consagrada segundo tradições ancestrais no nosso espaço em Aveiro, Portugal, e tratada com a reverência que merece. Utilize com intenção pura.
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
            {filteredProducts.map((product, i) => (
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
    </>
  );
}
