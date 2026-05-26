"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import StickyServices from "@/components/StickyServices";
import { useEffect, useState } from "react";

/* -- product data ------------------------------------------------- */
const PRODUCTS = [
  {
    title: "Vela Ritual Vira Pensamento",
    desc: "Influência & Clareza Mental",
    price: "12,50 €",
    img: "/images/vela-vira-pensamento.jpeg",
    badge: "Novo",
  },
  {
    title: "Ritual 11 Mechas Caveira Vermelha",
    desc: "Amor & Paixão",
    price: "18,90 €",
    img: "/images/vela-11-mechas-caveira-vermelha.jpeg",
    badge: null,
  },
  {
    title: "Kit Ritual És Só Para Mim",
    desc: "Amarração & Fidelidade",
    price: "24,90 €",
    img: "/images/kit-ritual-es-so-para-mim.jpeg",
    badge: null,
  },
  {
    title: "Kit Ritual Impotência Máxima",
    desc: "Trabalho de Quebra",
    price: "22,00 €",
    img: "/images/kit-ritual-impotencia-maxima.jpeg",
    badge: null,
  },
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Store",
            "name": "Mundo Mágico",
            "image": "https://mundo-magico-theta.vercel.app/images/magical-products.png",
            "@id": "https://mundo-magico-theta.vercel.app/#store",
            "url": "https://mundo-magico-theta.vercel.app",
            "telephone": "+351912672435",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rua da Prata sn, Santa Joana",
              "addressLocality": "Aveiro",
              "postalCode": "3810-314",
              "addressCountry": "PT"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 40.6385,
              "longitude": -8.6186
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "10:00",
              "closes": "19:00"
            },
            "sameAs": [
              "https://www.facebook.com/share/v/1CEd3RzpGz/"
            ],
            "founder": {
              "@type": "Person",
              "name": "Maria Manuela Moutinho Gonçalves",
              "jobTitle": "Taróloga e Praticante Esotérica"
            }
          })
        }}
      />
      {/* Organization schema for Knowledge Panel */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://mundo-magico-theta.vercel.app/#org",
            "name": "Mundo Mágico",
            "url": "https://mundo-magico-theta.vercel.app",
            "logo": "https://mundo-magico-theta.vercel.app/icon.png",
            "description": "Loja esotérica de referência em Aveiro, Portugal. Artefactos rituais consagrados, velas, cristais, tarot e serviços espirituais de amor, proteção e prosperidade.",
            "telephone": "+351912672435",
            "email": "borboleta_mariana18@hotmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rua da Prata sn, Santa Joana",
              "addressLocality": "Aveiro",
              "postalCode": "3810-314",
              "addressRegion": "Aveiro",
              "addressCountry": "PT"
            },
            "sameAs": [
              "https://www.facebook.com/share/v/1CEd3RzpGz/"
            ],
            "founder": {
              "@type": "Person",
              "name": "Maria Manuela Moutinho Gonçalves"
            },
            "foundingDate": "2020",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+351912672435",
              "contactType": "customer service",
              "availableLanguage": ["Portuguese", "English"]
            }
          })
        }}
      />
      {/* WebSite schema for sitelinks search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://mundo-magico-theta.vercel.app/#website",
            "name": "Mundo Mágico",
            "url": "https://mundo-magico-theta.vercel.app",
            "description": "Loja esotérica em Aveiro, Portugal — artefactos rituais, velas, cristais, tarot e serviços espirituais.",
            "publisher": {
              "@id": "https://mundo-magico-theta.vercel.app/#org"
            },
            "inLanguage": "pt-PT"
          })
        }}
      />
      {/* BreadcrumbList — Home */}
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
              }
            ]
          })
        }}
      />
      {/* == HERO ==================================================
          Full-screen cinematic. One monumental headline.
          Inspired by the editorial calm of PieterKoopt.nl -- story first,
          interface second. No glow, no borders around the text.
      ======================================================== */}
      <header className="relative h-screen min-h-[700px] w-full flex items-end justify-start overflow-hidden">
        {/* Background -- parallax image, sepia-treated */}
        <div
          className="absolute inset-0 z-0"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          aria-hidden="true"
        >
          <Image
            alt=""
            src="/images/magic%20forest.jpg"
            fill
            priority
            className="object-cover scale-105"
            style={{ filter: "brightness(0.72) saturate(1.1)" }}
          />
        </div>

        {/* Multi-stop gradient veil -- bottom-heavy, warm */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to top, #181310 0%, rgba(24,19,16,0.80) 28%, rgba(24,19,16,0.30) 60%, rgba(24,19,16,0.05) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Hero text -- bottom-left, asymmetric, editorial */}
        <div
          className="relative z-10 px-8 md:px-16 pb-20 md:pb-28 max-w-5xl"
          style={{ transform: `translateY(${-scrollY * 0.08}px)` }}
        >
          <ScrollReveal direction="up" delay={200}>
            <span className="font-sans text-[0.75rem] font-medium tracking-[0.25em] uppercase text-white block mb-6">
              Loja Esotérica &amp; Rituais Ancestrais — Aveiro, Portugal
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={380}>
            <h1 className="text-display text-[clamp(3rem,8vw,7rem)] text-[#E8DED2] mb-8 leading-[1.02]">
              <span className="sr-only">Mundo Mágico — Loja Esotérica em Aveiro, Portugal: Rituais Ancestrais &amp; Tarot</span>
              O segredo que<br />
              <em>sempre soubeste</em><br />
              existir.
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={560}>
            <p className="text-body text-[#B9AA9A] max-w-md mb-12 text-base">
              Artefactos rituais, tarot, e serviços espirituais para quem
              procura mais do que o visível. Tradição ancestral com presença
              no presente.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={700}>
            <div className="flex flex-wrap items-center gap-5">
              <Link href="/servicos" className="btn-bronze">
                Explorar Serviços
              </Link>
              <Link
                href="/artefactos"
                className="relative inline-flex items-center gap-4 px-8 py-3.5 border border-[#8C6A3B]/45 hover:border-[#8C6A3B] text-white hover:text-white font-sans text-[0.72rem] font-medium tracking-[0.25em] uppercase transition-all duration-500 overflow-hidden group rounded-sm bg-transparent"
              >
                <span className="relative z-10 flex items-center gap-2.5">
                  <span className="font-serif italic text-[#8C6A3B] group-hover:text-white transition-colors duration-300 text-sm">✦</span>
                  Ver Artefactos
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#8C6A3B]/0 via-[#8C6A3B]/10 to-[#8C6A3B]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#8C6A3B] group-hover:w-full transition-all duration-500" />
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 right-8 md:right-16 z-10 flex flex-col items-center gap-3"
          aria-hidden="true"
        >
          <span className="text-label text-[#7E7065]" style={{ writingMode: "vertical-rl" }}>
            rolar
          </span>
          <div className="w-px h-16 bg-gradient-to-b from-[rgba(232,222,210,0.3)] to-transparent" />
        </div>
      </header>

      {/* == EDITORIAL INTRODUCTION & GEO-SEO ATOMIC ANSWER ================== */}
      <section className="py-20 bg-[#1D1815] border-b border-[rgba(232,222,210,0.08)]">
        <div className="max-w-4xl mx-auto px-8 md:px-16 text-center">
          <ScrollReveal direction="up">
            <h2 className="font-serif italic text-[#8C6A3B] text-2xl md:text-3xl mb-6">
              A Tua Loja Esotérica de Confiança em Aveiro
            </h2>
            <p className="text-body text-[#E8DED2] text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              O <strong>Mundo Mágico</strong> é a referência em <strong>loja esotérica em Aveiro</strong>. 
              Fundado pela conceituada taróloga Maria Manuela Gonçalves, o nosso espaço físico e online oferece 
              consultas de tarot, rituais consagrados de amor, amarração e proteção espiritual, além de 
              velas rituais e produtos esotéricos de alta qualidade para Portugal e o mundo.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* == ARCHIVE STRIP =========================================
          Horizontal categories. Numbered. No icons -- pure typography.
      ======================================================== */}
      <section className="py-16 border-b border-[rgba(232,222,210,0.10)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-0">
            {["Velas Rituais", "Cristais", "Tarot", "Ervas Sagradas", "Amuletos"].map(
              (label, i) => (
                <ScrollReveal key={label} delay={i * 80}>
                  <Link
                    href="/artefactos"
                    className="group block py-6 px-4 border-r border-[rgba(232,222,210,0.08)] last:border-r-0 hover:bg-[#1D1815] transition-colors duration-400"
                  >
                    <span className="text-label text-[#7E7065] block mb-2">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-serif italic text-[#B9AA9A] text-base group-hover:text-[#E8DED2] transition-colors duration-300">
                      {label}
                    </span>
                  </Link>
                </ScrollReveal>
              )
            )}
          </div>
        </div>
      </section>

      {/* == NEW ARRIVALS ==========================================
          Light (inverted) section -- archival white cards with dark type.
          Asymmetric header: title left, link right (editorial rhythm).
      ======================================================== */}
      <section id="novidades" className="py-24 md:py-32 bg-[#F2EDE6]">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <span
                  className="eyebrow text-[#8C6A3B]"
                  style={{ color: "#8C6A3B" }}
                >
                  Novidades
                </span>
                <h2 className="text-heading text-[#1D1815] text-4xl md:text-5xl">
                  Lançamentos da Colecção
                </h2>
              </div>
              <Link
                href="/artefactos"
                className="btn-text"
                style={{ color: "#6B4E2D" }}
              >
                Coleção Completa
                <span
                  className="arrow-line"
                  style={{ backgroundColor: "rgba(107,78,45,0.4)" }}
                />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.map((prod, i) => (
              <ScrollReveal key={prod.title} delay={i * 110} direction="up">
                <article className="group cursor-pointer">
                  <div className="relative aspect-[3/4] bg-[#E8E0D5] mb-5 overflow-hidden">
                    <Image
                      alt={prod.title}
                      src={prod.img}
                      fill
                      className="object-contain p-6 transition-transform duration-700 group-hover:scale-[1.06]"
                    />
                    {prod.badge && (
                      <div className="absolute top-4 left-0 bg-[#8C6A3B] px-4 py-1">
                        <span className="text-label text-[#0E0B0A]">{prod.badge}</span>
                      </div>
                    )}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-serif italic text-[#1D1815] text-lg leading-snug">
                      {prod.title}
                    </h3>
                    <p
                      className="text-label"
                      style={{ color: "#8C6A3B" }}
                    >
                      {prod.desc}
                    </p>
                    <p className="font-serif italic text-[#1D1815] text-base font-medium pt-1">
                      {prod.price}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* == BRAND STORY ===========================================
          Full-width cinematic image left. Editorial text right.
          Asymmetric columns (5/7). Offset frame for depth.
          Quote rendered as large pull-quote, not a blockquote widget.
      ======================================================== */}
      <section className="relative z-0 py-24 md:py-40 bg-[#0E0B0A]">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center">

            {/* Image -- 5 columns, offset frame */}
            <div className="md:col-span-5 relative">
              <ScrollReveal direction="right">
                <div
                  aria-hidden="true"
                  className="absolute -top-5 -left-5 w-full h-full border border-[rgba(140,106,59,0.18)] pointer-events-none z-0"
                />
                <Image
                  alt="Artefactos Mágicos e Rituais"
                  src="/images/magical-products.png"
                  width={560}
                  height={700}
                  className="relative z-10 w-full aspect-[4/5] object-cover img-archival"
                />
              </ScrollReveal>
            </div>

            {/* Text -- 7 columns */}
            <div className="md:col-span-7 space-y-10">
              <ScrollReveal direction="left" delay={150}>
                <span className="eyebrow-accent">A Nossa Essência</span>
                <h2 className="text-heading text-[#E8DED2] text-4xl md:text-5xl">
                  Portais de Intenção<br />para a tua jornada
                </h2>
              </ScrollReveal>

              {/* Pull-quote -- large, serif italic */}
              <ScrollReveal direction="left" delay={300}>
                <p className="font-serif italic text-[#B9AA9A] text-2xl md:text-3xl leading-relaxed border-l-2 border-[rgba(140,106,59,0.40)] pl-8">
                  Não são simples objectos; são cúmplices de luz criados para nutrir o teu espírito.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={450}>
                <div className="text-body space-y-4 max-w-[54ch]">
                  <p>
                    No Mundo Mágico, acreditamos que a verdadeira magia reside nos pequenos gestos.
                    As nossas velas figurativas de mel para adoçar o coração, os sabonetes artesanais para
                    desatar nós difíceis e os velões consagrados são preparados manualmente, com ingredientes puros, 
                    respeito pelas leis universais e a energia mais elevada.
                  </p>
                  <p>
                    Acender uma mecha, purificar o teu espaço ou concentrar a tua mente num ritual
                    são formas doces e poderosas de cuidares de ti, de ouvires a tua própria intuição e de 
                    manifestares os teus desejos mais profundos.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={600}>
                <Link href="/artefactos" className="btn-text">
                  Ver Colecção
                  <span className="arrow-line" />
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* == SERVICES -- sticky parallax editorial reveal ======= */}
      <StickyServices />

      {/* == TESTIMONIAL / QUOTE =================================== */}
      <section className="py-24 md:py-40 bg-[#0E0B0A] border-t border-[rgba(232,222,210,0.08)]">
        <div className="max-w-5xl mx-auto px-8 md:px-16 text-center">
          <ScrollReveal direction="up">
            <span className="eyebrow flex justify-center mb-10">
              Testemunho
            </span>
            <blockquote className="font-serif italic text-[#E8DED2] text-3xl md:text-4xl lg:text-5xl leading-relaxed mb-10">
              &ldquo;Nunca acreditei até ao dia em que acreditei. O Mundo Mágico
              devolveu-me algo que pensava ter perdido para sempre.&rdquo;
            </blockquote>
            <div className="divider-accent mx-auto mb-6" />
            <cite className="text-label text-[#7E7065] not-italic">
              M.F. &mdash; Aveiro, 2025
            </cite>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
