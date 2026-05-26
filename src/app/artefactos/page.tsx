"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";
import { PRODUCTS, CATEGORIES } from "@/lib/products";

const FAQS = [
  {
    q: "Os vossos artefactos são realmente consagrados e energeticamente limpos?",
    a: "Sim. Todos os produtos — velas, velões, óleos, sabonetes e kits rituais — passam por um processo cuidadoso de descarga energética e consagração com intenção purificada por Maria Manuela Gonçalves antes de serem expostos ou enviados. Receberá um produto com energia limpa e alinhada.",
  },
  {
    q: "Como devo escolher o artefacto certo para a minha situação?",
    a: "Se não tiver a certeza qual produto é o mais indicado para a sua situação, pode contactar-nos gratuitamente via WhatsApp. Após uma breve descrição da sua situação, a Maria Manuela orientá-lo-á para o artefacto mais adequado, seja para amor, proteção, prosperidade ou limpeza energética.",
  },
  {
    q: "Enviam para fora de Portugal? Qual o prazo e custo?",
    a: "Sim. Enviamos para todo o território nacional (Continente e Ilhas) e para o estrangeiro, nomeadamente para comunidades portuguesas no mundo. O prazo de entrega é de 3 a 5 dias úteis. Para encomendas acima de 50 €, os portes são gratuitos em Portugal.",
  },
  {
    q: "Os artefactos perdem a energia durante o transporte?",
    a: "Não. Cada encomenda é embalada com intenção e protecção energética especial para manter a sua carga vibracional intacta durante o transporte. Os produtos chegam prontos a serem utilizados tal como foram consagrados.",
  },
  {
    q: "Posso devolver ou trocar um produto?",
    a: "Sim. Aceitamos devoluções no prazo de 14 dias úteis após a recepção da encomenda, desde que o produto esteja em perfeitas condições e na embalagem original. Produtos personalizados ou já utilizados não são reembolsáveis, salvo defeito de fabrico.",
  },
];

export default function ArtefactosPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProducts = activeCategory === "Todos"
    ? PRODUCTS
    : PRODUCTS.filter((product) => product.category === activeCategory);

  return (
    <>
      {/* ItemList Schema — All products */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Loja de Artefactos Rituais & Produtos Esotéricos",
            "url": "https://mundo-magico-theta.vercel.app/artefactos",
            "numberOfItems": PRODUCTS.length,
            "itemListElement": PRODUCTS.map((product, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "url": `https://mundo-magico-theta.vercel.app/artefactos/${product.slug}`
            }))
          })
        }}
      />
      {/* BreadcrumbList — Artefactos */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Início",
                "item": "https://mundo-magico-theta.vercel.app"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Artefactos",
                "item": "https://mundo-magico-theta.vercel.app/artefactos"
              }
            ]
          })
        }}
      />
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
          {/* Breadcrumbs */}
          <ScrollReveal direction="down" delay={50}>
            <nav className="text-xs font-sans tracking-wider text-[#A89885] flex items-center gap-2 mb-6 relative z-20" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#EDE4D8] transition-colors">Início</Link>
              <span>/</span>
              <span className="text-[#EDE4D8]/60 font-medium">Artefactos</span>
            </nav>
          </ScrollReveal>

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

      <main>
        {/* ── FILTER STRIP + PRODUCTS (light bg) ───────────────────── */}
        <div className="bg-[#F2EDE6]">
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

          {/* ── PRODUCTS GRID ───────────────────────────────────────── */}
          <section className="max-w-7xl mx-auto px-8 md:px-16 pb-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-14">
              {filteredProducts.map((product, i) => (
                <ScrollReveal key={product.id} delay={(i % 4) * 90} direction="up">
                  <Link href={`/artefactos/${product.slug}`} className="group block cursor-pointer">
                    <article>
                      <div className="relative aspect-[3/4] bg-[#E8E0D5] mb-5 overflow-hidden">
                        <Image
                          alt={product.name}
                          src={product.img}
                          fill
                          className="object-contain p-6 transition-transform duration-700 group-hover:scale-[1.06]"
                        />
                        {product.badge && (
                          <div className="absolute top-4 left-0 bg-[#8C6A3B] text-[#0E0B0A] text-[9px] font-sans font-semibold tracking-wider px-3 py-1 uppercase">
                            {product.badge}
                          </div>
                        )}
                      </div>
                      <div className="space-y-1 px-1">
                        <h2 className="font-serif italic text-[#1D1815] text-lg leading-snug group-hover:text-[#8C6A3B] transition-colors duration-300">
                          {product.name}
                        </h2>
                        <p className="text-label text-sm" style={{ color: "#8C6A3B" }}>
                          {product.shortDesc}
                        </p>
                        <p className="font-serif italic text-[#1D1815] text-base font-medium pt-1">
                          {product.price}
                        </p>
                      </div>
                    </article>
                  </Link>
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
        </div>

        {/* ── FAQ SECTION ────────────────────────────────────────────── */}
        <section
          className="py-24 md:py-32 bg-[#161210] border-t border-[rgba(232,222,210,0.08)]"
          aria-label="Perguntas frequentes sobre artefactos"
        >
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": FAQS.map((faq) => ({
                  "@type": "Question",
                  "name": faq.q,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.a,
                  },
                })),
              }),
            }}
          />
          <div className="max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <ScrollReveal>
                <span className="eyebrow">Dúvidas</span>
                <h2 className="text-heading text-[#E8DED2] text-3xl md:text-4xl mt-3">
                  Perguntas<br />frequentes
                </h2>
                <p className="text-body text-sm text-[#A89885] leading-relaxed mt-4 max-w-[36ch]">
                  Tudo o que precisa de saber sobre os nossos artefactos consagrados, envios e garantias.
                </p>
                <div className="mt-8">
                  <Link
                    href="/contactos"
                    className="inline-flex items-center gap-2 text-xs font-sans font-medium tracking-[0.2em] uppercase text-[#8C6A3B] hover:text-[#EDE4D8] transition-colors duration-300"
                  >
                    Falar connosco
                    <span className="w-8 h-px bg-current inline-block" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
            <div className="md:col-span-8">
              {FAQS.map((faq, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className="py-8 border-t border-[rgba(232,222,210,0.08)] first:border-t-0">
                    <h3 className="font-serif italic text-[#E8DED2] text-lg mb-3">{faq.q}</h3>
                    <p className="text-body text-sm leading-relaxed text-[#A89885]">{faq.a}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

