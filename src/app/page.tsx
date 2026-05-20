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
    img: "/images/WhatsApp Image 2026-03-30 at 17.39.09.jpeg",
    badge: "Novo",
  },
  {
    title: "Ritual 11 Mechas Caveira Vermelha",
    desc: "Amor & Paixão",
    price: "18,90 €",
    img: "/images/WhatsApp Image 2026-03-30 at 17.39.14.jpeg",
    badge: null,
  },
  {
    title: "Kit Ritual És Só Para Mim",
    desc: "Amarração & Fidelidade",
    price: "24,90 €",
    img: "/images/WhatsApp Image 2026-03-30 at 17.39.22.jpeg",
    badge: null,
  },
  {
    title: "Kit Ritual Impotência Máxima",
    desc: "Trabalho de Quebra",
    price: "22,00 €",
    img: "/images/WhatsApp Image 2026-03-30 at 17.39.19.jpeg",
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
      {/* == NAV ===================================================
          PieterKoopt-style: always-solid dark bar, brand left,
          links centred, bordered CTA right. Vertical separators.
      ======================================================== */}
      <nav className="fixed top-0 z-50 w-full bg-[#110E0D]/95 backdrop-blur-md border-b border-[rgba(232,222,210,0.08)] flex items-stretch h-[58px]">

        {/* Brand */}
        <Link
          href="/"
          aria-label="Mundo Mágico"
          className="flex items-center px-6 md:px-10 border-r border-[rgba(232,222,210,0.08)] font-serif italic text-[#E8DED2] text-[1.05rem] tracking-wide hover:text-[#8C6A3B] transition-colors duration-300 shrink-0"
        >
          Mundo Mágico
        </Link>

        {/* Centre nav links */}
        <div className="hidden md:flex items-stretch flex-1 justify-center">
          {[
            { label: "Novidades", href: "/#novidades" },
            { label: "Artefactos", href: "/artefactos" },
            { label: "Serviços", href: "/servicos" },
            { label: "Contactos", href: "/contactos" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center px-7 text-label text-[#B9AA9A] hover:text-[#E8DED2] hover:bg-[rgba(232,222,210,0.04)] border-r border-[rgba(232,222,210,0.08)] transition-all duration-200 tracking-widest"
            >
              {item.label.toUpperCase()}
            </Link>
          ))}
        </div>

        {/* Spacer on mobile */}
        <div className="flex-1 md:hidden" />

        {/* Right — cart icon + CTA */}
        <div className="flex items-stretch">
          <button
            aria-label="Carrinho"
            className="flex items-center px-5 border-l border-[rgba(232,222,210,0.08)] text-[#7E7065] hover:text-[#E8DED2] hover:bg-[rgba(232,222,210,0.04)] transition-all duration-200"
          >
            <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
          </button>

          <Link
            href="/servicos"
            className="hidden md:flex items-center gap-3 px-6 border-l border-[rgba(232,222,210,0.08)] bg-transparent hover:bg-[#8C6A3B] text-[#E8DED2] text-label tracking-widest transition-all duration-300 group"
          >
            CONSULTAR
            <span className="flex items-center justify-center w-6 h-6 border border-[rgba(232,222,210,0.3)] group-hover:border-[#E8DED2] transition-colors duration-300">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>
        </div>
      </nav>

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
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLUDsBxcsY8z7f4UBiPanHfmoLVtaN418LKhJ4Bw1F0SyZEefDifweOjQvnDfOTzTsfdpY_EwfAv2sljENlg3Np_eBEfXY9bb5d8Yd91nWEK8VCrI1Ms4xuWlJ8-KwIyct2QPIMjHogjJqn3T9jundJ71tEh_1a2hTBtYwb_wHpLjv9CLim1Nz31re00PY9lJw77pt0Lp0fwTwTsxDKImC9wDJomGYdBrn9PDmpzfWFLlJdUXU3NlteWXLHl197m2O_P-8mpyMNXCt"
            fill
            priority
            className="object-cover img-cinematic scale-105"
          />
        </div>

        {/* Multi-stop gradient veil -- bottom-heavy, warm */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to top, #0E0B0A 0%, rgba(14,11,10,0.88) 30%, rgba(14,11,10,0.45) 65%, rgba(14,11,10,0.15) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Hero text -- bottom-left, asymmetric, editorial */}
        <div
          className="relative z-10 px-8 md:px-16 pb-20 md:pb-28 max-w-5xl"
          style={{ transform: `translateY(${-scrollY * 0.08}px)` }}
        >
          <ScrollReveal direction="up" delay={200}>
            <span className="eyebrow mb-6">
              Loja Esotérica &amp; Rituais Ancestrais — Portugal
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={380}>
            <h1 className="text-display text-[clamp(3rem,8vw,7rem)] text-[#E8DED2] mb-8 leading-[1.02]">
              O segredo que<br />
              <em className="text-[#8C6A3B]">sempre soubeste</em><br />
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
            <div className="flex flex-wrap gap-4">
              <Link href="/servicos" className="btn-bronze">
                Explorar Serviços
              </Link>
              <Link href="/#novidades" className="btn-ghost">
                Ver Artefactos
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
                  alt="A fundadora do Mundo Mágico, a Tecedeira de Sombras"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgj0luYHPi3M6zZsvzKxdl19N9qA994BaLay20Rc6emLftQFpGfnPoac18C90ndhTi1chJMxD_G_QvoefbwHzz5pyTpN95cBJ59EOP_iLthO8KLzSQe3bptEDxBgxYdCoLHjpT2gqzsTUacjgLUeeCKbxHKGoX8090usx361eEbm8C_FVciY2UjSiWCgdQYwXggLd9S923fo13I2U765Czm3XD6o_kM31ShZ69Mbizj2tZKXi98Kgc9--b6xszqfRJrrk8DmEI5kjp"
                  width={560}
                  height={700}
                  className="relative z-10 w-full aspect-[4/5] object-cover img-archival"
                />
              </ScrollReveal>
            </div>

            {/* Text -- 7 columns */}
            <div className="md:col-span-7 space-y-10">
              <ScrollReveal direction="left" delay={150}>
                <span className="eyebrow-accent">A Linhagem</span>
                <h2 className="text-heading text-[#E8DED2] text-4xl md:text-5xl">
                  A Tecedeira<br />de Sombras
                </h2>
              </ScrollReveal>

              {/* Pull-quote -- large, serif italic */}
              <ScrollReveal direction="left" delay={300}>
                <p className="font-serif italic text-[#B9AA9A] text-2xl md:text-3xl leading-relaxed border-l-2 border-[rgba(140,106,59,0.40)] pl-8">
                  Não vendemos apenas objectos &mdash;
                  curamos veículos de intenção.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={450}>
                <div className="text-body space-y-4 max-w-[54ch]">
                  <p>
                    Há mais de sete gerações, a linhagem da Tecedeira preservou
                    o conhecimento oculto dos reinos celestiais. A nossa missão
                    é unir o mundo mundano ao mágico, proporcionando ao buscador
                    moderno ferramentas que ressoam com poder ancestral.
                  </p>
                  <p>
                    Cada peça é de origem ética e tratada com a reverência que
                    merece, garantindo que a tua jornada espiritual seja apoiada
                    pelas vibrações mais elevadas.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={600}>
                <button className="btn-text">
                  A Nossa História
                  <span className="arrow-line" />
                </button>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* == SERVICES -- sticky parallax editorial reveal ======= */}
      <StickyServices />

      {/* == TESTIMONIAL / QUOTE ===================================
          Full-width dark section. Single large statement.
          Atmospheric, ceremonial. No rating stars, no avatars.
      ======================================================== */}
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
              M.F. — Lisboa, 2025
            </cite>
          </ScrollReveal>
        </div>
      </section>

      {/* == FOOTER ================================================ */}
      <footer className="bg-[#0D0A09] border-t border-[rgba(232,222,210,0.08)]">

        {/* Main footer body */}
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 pt-20 pb-16 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">

          {/* Col 1 — Brand + tagline */}
          <div className="flex flex-col justify-between gap-10">
            <div>
              <Link href="/" className="font-serif italic text-[clamp(2.8rem,5vw,4.5rem)] text-[#E8DED2] leading-none block mb-6 hover:text-[#8C6A3B] transition-colors duration-300">
                Mundo Mágico
              </Link>
              <p className="font-serif italic text-[#7E7065] text-lg leading-relaxed max-w-[28ch]">
                Sem atalhos, sem ilusões — apenas tradição ancestral e presença no presente.
              </p>
            </div>
            <p className="text-label text-[#4A4240] text-xs leading-relaxed max-w-[36ch]">
              Mundo Mágico é uma loja esotérica portuguesa dedicada à prática ritual séria e consciente.
            </p>
          </div>

          {/* Col 2 — Giant nav links */}
          <div className="flex flex-col justify-start gap-1 md:px-8">
            {[
              { label: "Início", href: "/", active: true },
              { label: "Artefactos", href: "/artefactos" },
              { label: "Serviços", href: "/servicos" },
              { label: "Novidades", href: "/#novidades" },
              { label: "Contactos", href: "/contactos" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center gap-3 py-2"
              >
                <span
                  className="w-2 h-2 rounded-full border border-[#8C6A3B] transition-all duration-300 shrink-0"
                  style={{ backgroundColor: item.active ? "#8C6A3B" : "transparent" }}
                />
                <span className="font-sans font-medium text-[clamp(1.1rem,2.2vw,1.6rem)] tracking-[0.12em] uppercase text-[#7E7065] group-hover:text-[#E8DED2] transition-colors duration-300">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Col 3 — Contact details */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-label text-[#4A4240] tracking-widest mb-3">CONTACTO</p>
              <a href="mailto:geral@mundomagico.pt" className="text-body text-[#B9AA9A] hover:text-[#E8DED2] transition-colors duration-200 block">
                geral@mundomagico.pt
              </a>
              <a href="tel:+351912345678" className="text-body text-[#B9AA9A] hover:text-[#E8DED2] transition-colors duration-200 block mt-1">
                +351 912 345 678
              </a>
            </div>

            <div>
              <p className="text-label text-[#4A4240] tracking-widest mb-3">WHATSAPP</p>
              <a
                href="https://wa.me/351912345678"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 border border-[rgba(232,222,210,0.15)] text-[#7E7065] hover:text-[#E8DED2] hover:border-[rgba(232,222,210,0.4)] transition-all duration-200"
                aria-label="WhatsApp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>

            <div>
              <p className="text-label text-[#4A4240] tracking-widest mb-3">MORADA</p>
              <p className="text-body text-[#7E7065] leading-relaxed">
                Rua do Carmo 12<br />
                1200-094 Lisboa
              </p>
            </div>

            <div>
              <p className="text-label text-[#4A4240] tracking-widest mb-3">REDES SOCIAIS</p>
              <div className="flex gap-2">
                {[
                  { label: "Instagram", href: "#", icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /> },
                  { label: "TikTok", href: "#", icon: <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" /> },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="inline-flex items-center justify-center w-10 h-10 border border-[rgba(232,222,210,0.15)] text-[#7E7065] hover:text-[#E8DED2] hover:border-[rgba(232,222,210,0.4)] transition-all duration-200"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">{s.icon}</svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[rgba(232,222,210,0.06)]">
          <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-label text-[#4A4240] text-xs tracking-widest uppercase">
              Mundo Mágico &copy; 2026
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-label text-[#4A4240] text-xs tracking-widest uppercase hover:text-[#7E7065] transition-colors duration-200">Privacidade</a>
              <a href="#" className="text-label text-[#4A4240] text-xs tracking-widest uppercase hover:text-[#7E7065] transition-colors duration-200">Política de Cookies</a>
              <a href="#" className="text-label text-[#4A4240] text-xs tracking-widest uppercase hover:text-[#7E7065] transition-colors duration-200">Termos &amp; Condições</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
