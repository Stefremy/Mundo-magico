"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { useEffect, useState } from "react";

/* ── product data ───────────────────────────────────────────────── */
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

const SERVICES_PREVIEW = [
  { name: "Leitura de Tarot", note: "Presencial & Online", href: "/servicos#leitura-tarot" },
  { name: "Rituais de Amor", note: "Amarração & Atracção", href: "/servicos#ritual-amor" },
  { name: "Proteção Espiritual", note: "Escudos & Limpeza", href: "/servicos#ritual-protecao" },
  { name: "Prosperidade", note: "Abertura de Caminhos", href: "/servicos#ritual-prosperidade" },
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setNavScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ══ NAV ═══════════════════════════════════════════════════════════
          Starts transparent. Transitions to dark blurred on scroll.
          No logo icon — the name IS the mark.
      ═══════════════════════════════════════════════════════════════════ */}
      <nav
        className={`fixed top-0 z-50 w-full px-8 md:px-16 py-6 flex justify-between items-center transition-all duration-700 ${
          navScrolled
            ? "bg-[#0E0B0A]/92 backdrop-blur-xl border-b border-[rgba(232,222,210,0.07)]"
            : "bg-transparent"
        }`}
      >
        <Link
          href="/"
          aria-label="Mundo Mágico — Início"
          className="font-serif italic text-xl text-[#E8DED2] tracking-wide hover:text-[#8C6A3B] transition-colors duration-400"
        >
          Mundo Mágico
        </Link>

        <div className="hidden md:flex items-center gap-12">
          <Link className="text-label hover:text-[#8C6A3B] transition-colors duration-300" href="/#novidades">
            Novidades
          </Link>
          <Link className="text-label hover:text-[#8C6A3B] transition-colors duration-300" href="/artefactos">
            Artefactos
          </Link>
          <Link className="text-label hover:text-[#8C6A3B] transition-colors duration-300" href="/servicos">
            Serviços
          </Link>
          <Link className="text-label hover:text-[#8C6A3B] transition-colors duration-300" href="/contactos">
            Contactos
          </Link>
        </div>

        <div className="flex items-center gap-5">
          <button
            aria-label="Carrinho"
            className="material-symbols-outlined text-[#7E7065] hover:text-[#8C6A3B] transition-colors duration-300 text-[20px]"
          >
            shopping_bag
          </button>
        </div>
      </nav>

      {/* ══ HERO ══════════════════════════════════════════════════════════
          Full-screen cinematic. One monumental headline.
          Inspired by the editorial calm of PieterKoopt.nl — story first,
          interface second. No glow, no borders around the text.
      ═══════════════════════════════════════════════════════════════════ */}
      <header className="relative h-screen min-h-[700px] w-full flex items-end justify-start overflow-hidden">
        {/* Background — parallax image, sepia-treated */}
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

        {/* Multi-stop gradient veil — bottom-heavy, warm */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to top, #0E0B0A 0%, rgba(14,11,10,0.88) 30%, rgba(14,11,10,0.45) 65%, rgba(14,11,10,0.15) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Hero text — bottom-left, asymmetric, editorial */}
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

      {/* ══ ARCHIVE STRIP ════════════════════════════════════════════════
          Horizontal categories. Numbered. No icons — pure typography.
      ═══════════════════════════════════════════════════════════════════ */}
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

      {/* ══ NEW ARRIVALS ══════════════════════════════════════════════════
          Light (inverted) section — archival white cards with dark type.
          Asymmetric header: title left, link right (editorial rhythm).
      ═══════════════════════════════════════════════════════════════════ */}
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

      {/* ══ BRAND STORY ═══════════════════════════════════════════════════
          Full-width cinematic image left. Editorial text right.
          Asymmetric columns (5/7). Offset frame for depth.
          Quote rendered as large pull-quote, not a blockquote widget.
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-40 bg-[#0E0B0A]">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center">

            {/* Image — 5 columns, offset frame */}
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

            {/* Text — 7 columns */}
            <div className="md:col-span-7 space-y-10">
              <ScrollReveal direction="left" delay={150}>
                <span className="eyebrow-accent">A Linhagem</span>
                <h2 className="text-heading text-[#E8DED2] text-4xl md:text-5xl">
                  A Tecedeira<br />de Sombras
                </h2>
              </ScrollReveal>

              {/* Pull-quote — large, serif italic */}
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

      {/* ══ SERVICES ══════════════════════════════════════════════════════
          Dark surface section. Numbered list rhythm — editorial, not SaaS.
          No icons, no cards. Typography as the primary structural element.
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="servicos" className="py-24 md:py-32 bg-[#161210] border-t border-[rgba(232,222,210,0.08)]">
        <div className="max-w-7xl mx-auto px-8 md:px-16">

          <ScrollReveal>
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
              <div>
                <span className="eyebrow">O que fazemos</span>
                <h2 className="text-heading text-[#E8DED2] text-4xl md:text-5xl">
                  Serviços Espirituais
                </h2>
              </div>
              <Link href="/servicos" className="btn-text">
                Todos os Serviços
                <span className="arrow-line" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {SERVICES_PREVIEW.map((s, i) => (
              <ScrollReveal key={s.name} delay={i * 90}>
                <Link
                  href={s.href}
                  className="group block py-8 px-0 border-t border-[rgba(232,222,210,0.08)] hover:border-[rgba(140,106,59,0.30)] transition-colors duration-500 md:pr-16"
                >
                  <div className="flex items-start justify-between gap-8">
                    <div>
                      <span className="text-label text-[#7E7065] block mb-3">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-serif italic text-[#E8DED2] text-2xl mb-2 group-hover:text-[#8C6A3B] transition-colors duration-400">
                        {s.name}
                      </h3>
                      <p className="text-label text-[#7E7065]">{s.note}</p>
                    </div>
                    <span className="material-symbols-outlined text-[#7E7065] group-hover:text-[#8C6A3B] transition-colors duration-400 mt-2 text-xl shrink-0">
                      arrow_forward
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIAL / QUOTE ═══════════════════════════════════════════
          Full-width dark section. Single large statement.
          Atmospheric, ceremonial. No rating stars, no avatars.
      ═══════════════════════════════════════════════════════════════════ */}
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

      {/* ══ FOOTER ════════════════════════════════════════════════════════
          Minimal, clean. Logo, links, and legal — nothing more.
      ═══════════════════════════════════════════════════════════════════ */}
      <footer className="bg-[#0E0B0A] border-t border-[rgba(232,222,210,0.08)] pt-16 pb-10 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">

          {/* Top row */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div className="max-w-xs">
              <Link href="/" className="font-serif italic text-xl text-[#E8DED2] block mb-4">
                Mundo Mágico
              </Link>
              <p className="text-body text-sm text-[#7E7065] leading-relaxed">
                Loja esotérica portuguesa. Artefactos rituais, leituras de tarot
                e serviços espirituais desde o coração de Portugal.
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

          {/* Divider */}
          <div className="divider mb-8" />

          {/* Bottom row */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-label text-[#7E7065]">
              &copy; 2026 Mundo Mágico. Todos os direitos reservados.
            </p>
            <p className="text-label text-[#7E7065]">Portugal</p>
          </div>
        </div>
      </footer>
    </>
  );
}
