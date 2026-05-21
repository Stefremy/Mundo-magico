"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { useEffect, useRef, useState } from "react";

const CATEGORIES = [
  {
    name: "Amor",
    desc: "Adoçamentos, uniões, equilíbrio emocional e harmonia afetiva.",
    arcana: "A Sacerdotisa",
    romanNum: "II",
    imagePath: "/images/tarot/tarot_sacerdotisa.png",
  },
  {
    name: "Prosperidade",
    desc: "Abertura de caminhos financeiros, atração de sucesso e negócios.",
    arcana: "A Roda da Fortuna",
    romanNum: "X",
    imagePath: "/images/tarot/tarot_roda_fortuna.png",
  },
  {
    name: "Limpeza",
    desc: "Purificação de energias densas, quebra de feitiços e desobsessão.",
    arcana: "O Julgamento",
    romanNum: "XX",
    imagePath: "/images/tarot/tarot_julgamento.png",
  },
  {
    name: "Proteções",
    desc: "Escudos energéticos, amuletos e rituais para afastar a negatividade.",
    arcana: "O Imperador",
    romanNum: "IV",
    imagePath: "/images/tarot/tarot_imperador.png",
  },
  {
    name: "Família",
    desc: "Harmonização do lar, resolução de conflitos e união familiar.",
    arcana: "Os Amantes",
    romanNum: "VI",
    imagePath: "/images/tarot/tarot_amantes.png",
  },
];

const FAQS = [
  {
    q: "O que é o Mundo Mágico e qual a sua origem?",
    a: "O Mundo Mágico é um espaço esotérico de referência em Aveiro, fundado em 2020 por Maria Manuela Gonçalves. O projeto surgiu após mais de 16 anos de atendimento privado e dedicação sincera à espiritualidade, cartomancia e aconselhamento holístico.",
  },
  {
    q: "Como são preparados e consagrados os produtos do vosso catálogo?",
    a: "Todos os nossos artefactos rituais (velas, velões, óleos e preparados de ervas) passam por um cuidadoso processo de limpeza energética (descarga) e consagração com intenção purificada por Maria Manuela Gonçalves antes de serem expostos ou enviados.",
  },
  {
    q: "Qual é a vossa missão e ética espiritual?",
    a: "A nossa missão é ajudar quem nos procura a superar bloqueios de amor, dinheiro, saúde ou família, partilhando orientação clara. Pautamo-nos pela magia de intenção pura (magia branca), respeitando integralmente o livre-arbítrio e a confidencialidade de cada consulente.",
  },
];

// Bidirectional scroll-aware tarot card
function TarotCard({ cat, index }: { cat: (typeof CATEGORIES)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"hidden-below" | "visible" | "hidden-above">("hidden-below");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("visible");
        } else {
          const rect = entry.boundingClientRect;
          setState(rect.top > 0 ? "hidden-below" : "hidden-above");
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const transform =
    state === "visible"
      ? "translateY(0px) rotateX(0deg) scale(1)"
      : state === "hidden-below"
      ? "translateY(60px) rotateX(10deg) scale(0.93)"
      : "translateY(-50px) rotateX(-8deg) scale(0.93)";

  return (
    <div
      ref={ref}
      className="flex flex-col items-center group cursor-default"
      style={{
        opacity: state === "visible" ? 1 : 0,
        transform,
        transition: `opacity 0.75s cubic-bezier(0.22,1,0.36,1), transform 0.75s cubic-bezier(0.22,1,0.36,1)`,
        transitionDelay: `${index * 80}ms`,
        perspective: "1000px",
      }}
    >
      {/* Card wrapper — antique parchment paper stock */}
      <div
        className="relative group-hover:scale-[1.04] transition-transform duration-500"
        style={{
          width: "190px",
          background: "#FAF5EC",
          padding: "10px",
          boxShadow: "0 16px 40px rgba(0,0,0,0.65), 0 4px 12px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(180,140,60,0.2)",
          borderRadius: "6px",
        }}
      >
        {/* Double-ruled woodcut frame */}
        <div
          style={{
            border: "1.5px solid #1A1105",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          {/* Roman numeral header */}
          <div
            style={{
              textAlign: "center",
              padding: "4px 0",
              borderBottom: "1px solid #1A1105",
              background: "#FAF5EC",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 700,
              fontSize: "11px",
              letterSpacing: "0.2em",
              color: "#1A1105",
            }}
          >
            {cat.romanNum}
          </div>

          {/* Image — fills the card body */}
          <div className="relative" style={{ aspectRatio: "1 / 1.45", overflow: "hidden" }}>
            <Image
              src={cat.imagePath}
              alt={cat.arcana}
              fill
              sizes="190px"
              className="object-cover object-top"
              style={{ filter: "brightness(0.97) contrast(1.04) saturate(1.05)" }}
            />
          </div>

          {/* Arcana name footer */}
          <div
            style={{
              textAlign: "center",
              padding: "5px 4px",
              borderTop: "1px solid #1A1105",
              background: "#FAF5EC",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 700,
              fontSize: "8px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#1A1105",
            }}
          >
            {cat.arcana}
          </div>
        </div>

        {/* Gold glow on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[6px]"
          style={{ boxShadow: "0 0 30px rgba(229,184,59,0.35), 0 0 60px rgba(229,184,59,0.18)" }}
        />
      </div>

      {/* Title + description below card */}
      <div className="mt-5 text-center px-2">
        <h4 className="font-serif text-[#E8DED2] text-base md:text-lg font-medium tracking-wide group-hover:text-[#E7C57F] transition-colors duration-300">
          {cat.name}
        </h4>
        <p className="text-[11px] md:text-xs text-[#A89885] leading-relaxed mt-1.5 max-w-[200px] mx-auto">
          {cat.desc}
        </p>
      </div>
    </div>
  );
}

export default function SobrePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Maria Manuela Moutinho Gonçalves",
            "jobTitle": "Taróloga e Praticante Esotérica",
            "worksFor": {
              "@type": "Store",
              "name": "Mundo Mágico",
              "url": "https://mundo-magico-theta.vercel.app"
            },
            "url": "https://mundo-magico-theta.vercel.app/sobre",
            "image": "https://mundo-magico-theta.vercel.app/images/magic-products.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rua da Prata sn, Santa Joana",
              "addressLocality": "Aveiro",
              "postalCode": "3810-314",
              "addressCountry": "PT"
            },
            "description": "Maria Manuela Moutinho Gonçalves é fundadora do Mundo Mágico, taróloga profissional e praticante esotérica em Aveiro com mais de 16 anos de experiência em orientação espiritual, cartomancia e rituais consagrados de magia branca.",
            "sameAs": []
          })
        }}
      />
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
      {/* ── PAGE HERO ─────────────────────────────────────────────── */}
      <header className="relative pt-36 pb-24 px-8 md:px-16 overflow-hidden min-h-[440px] flex items-end border-b border-[rgba(232,222,210,0.08)]">
        {/* Parallax / cover image */}
        <div className="absolute inset-0 z-0">
          <Image
            alt="Mundo Mágico - A Nossa Essência"
            src="/images/magic forest.jpg"
            fill
            priority
            className="object-cover object-center"
            style={{ filter: "brightness(0.4) sepia(15%) contrast(1.05)" }}
          />
          {/* Veil gradient */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, #0E0B0A 0%, rgba(14,11,10,0.75) 45%, rgba(14,11,10,0.3) 100%)",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          {/* Breadcrumbs */}
          <ScrollReveal direction="down" delay={50}>
            <nav className="text-xs font-sans tracking-wider text-[#A89885] flex items-center gap-2 mb-6 relative z-20" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#EDE4D8] transition-colors">Início</Link>
              <span>/</span>
              <span className="text-[#EDE4D8]/60 font-medium">Sobre</span>
            </nav>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <span className="eyebrow text-[#E8DED2]">A Nossa História</span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={250}>
            <h1 className="text-display text-[clamp(2.5rem,6vw,5.5rem)] text-[#E8DED2] leading-[1.04] max-w-4xl mb-8">
              Sobre o<br />
              <em className="text-[#E8DED2]">Mundo Mágico</em>
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={400}>
            <p className="text-body text-[#EDE4D8] max-w-[55ch] text-base leading-relaxed opacity-95">
              Uma jornada de 16 anos dedicados à espiritualidade, rituais consagrados e auxílio a quem procura caminhos de clareza e luz em Aveiro e no mundo.
            </p>
          </ScrollReveal>
        </div>
      </header>

      <main className="bg-[#0E0B0A] text-[#EDE4D8]">
        {/* ── THE FOUNDER SECTION ───────────────────────────────────── */}
        <section className="py-24 md:py-32 px-8 md:px-16 border-b border-[rgba(232,222,210,0.08)]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center">
            
            {/* Story text */}
            <div className="md:col-span-7 space-y-8">
              <ScrollReveal direction="right">
                <span className="eyebrow-accent">A Fundadora &amp; Taróloga</span>
                <h2 className="text-heading text-[#E8DED2] text-3xl md:text-5xl leading-tight">
                  Maria Manuela<br />Moutinho Gonçalves
                </h2>
                <p className="text-label text-[#8C6A3B] mt-2 font-medium tracking-wide">
                  Taróloga Credível &amp; Praticante de Rituais Ancestrais em Aveiro
                </p>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={150}>
                <div className="text-body text-[#C8BAA8] space-y-5 max-w-[62ch]">
                  <p>
                    Olá, bem-vindo. Sou a fundadora do <strong>Mundo Mágico</strong>. A minha caminhada na espiritualidade e nas artes esotéricas começou há mais de <strong>16 anos</strong>, motivada por um chamamento profundo para compreender o invisível e guiar os outros.
                  </p>
                  <p>
                    Durante muitos anos, prestei consultas privadas diretamente na minha própria casa. Esse período de recolhimento e ligação profunda com cada pessoa deu-me a fundação necessária para dar o passo seguinte. Em <strong>2020</strong>, decidi abrir as portas da nossa loja física em Aveiro, criando um porto de abrigo oficial para quem procura auxílio espiritual sério.
                  </p>
                  <p>
                    Trabalho com a leitura de cartas (Cartomancia &amp; Tarot) e dedico-me à elaboração de rituais e trabalhos específicos. A minha missão de vida é apoiar as pessoas em momentos de dor, incerteza e bloqueio, partilhando ensinamentos e ferramentas energéticas consagradas.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Asymmetric Image / Card */}
            <div className="md:col-span-5 relative pt-8 md:pt-0">
              <ScrollReveal direction="left" delay={200}>
                <div className="absolute -top-4 -left-4 w-full h-full border border-[rgba(140,106,59,0.18)] pointer-events-none z-0" />
                <div className="relative z-10 bg-[#1D1815] border border-[rgba(232,222,210,0.10)] p-8 md:p-10 space-y-6">
                  <span className="eyebrow">Missão Espiritual</span>
                  <p className="font-serif italic text-[#E8DED2] text-xl leading-relaxed">
                    &ldquo;Ajudar outras pessoas a superarem bloqueios de saúde, dinheiro, amor, harmonia na família e a partilharem a luz universal.&rdquo;
                  </p>
                  <div className="divider-accent" />
                  <p className="text-body text-xs text-[#9A8C7E] leading-relaxed uppercase tracking-wider">
                    — Maria Manuela, Mundo Mágico
                  </p>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </section>

        {/* ── VISUAL BREAKOUT BANNER ───────────────────────────────── */}
        <section className="relative h-[280px] md:h-[420px] overflow-hidden border-b border-[rgba(232,222,210,0.08)]">
          <Image
            alt="Leitura de Tarot - Mundo Mágico"
            src="/images/tarot-cards.jpg"
            fill
            className="object-cover object-center"
            style={{ filter: "brightness(0.55) sepia(12%) contrast(1.05)" }}
          />
          {/* Blend gradients for smooth section transitions */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#161210] via-transparent to-[#0E0B0A]" />
        </section>

        {/* ── CONSULTATIONS & SPECIALTIES ───────────────────────────── */}
        <section className="py-24 md:py-32 px-8 md:px-16 bg-[#161210] border-b border-[rgba(232,222,210,0.08)]">
          <div className="max-w-7xl mx-auto">
            
            <div className="mb-16 max-w-3xl">
              <ScrollReveal>
                <span className="eyebrow-accent">Serviços e Consultas</span>
                <h2 className="text-heading text-[#E8DED2] text-3xl md:text-5xl mb-6">
                  Leituras de Tarot e Trabalhos Rituais
                </h2>
                <p className="text-body text-[#C8BAA8] text-base leading-relaxed">
                  Realizamos orientação espiritual profunda e personalizada. As consultas podem ser presenciais na nossa loja física em Aveiro ou à distância, mantendo a mesma precisão e força energética.
                </p>
              </ScrollReveal>
            </div>

            {/* Consultation Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              <ScrollReveal direction="up" delay={100}>
                <div className="border border-[rgba(232,222,210,0.12)] p-10 bg-[#1D1815] group hover:border-[#8C6A3B] transition-all duration-300">
                  <span className="text-label text-[#8C6A3B] block mb-2">Presencial em Aveiro</span>
                  <h3 className="font-serif italic text-[#E8DED2] text-2xl mb-4">Consulta Presencial</h3>
                  <p className="text-body text-sm text-[#C8BAA8] mb-8 leading-relaxed">
                    Realizada no nosso espaço ritual em Aveiro. Um atendimento calmo, reservado, com foco total nas tuas questões físicas, mentais e espirituais.
                  </p>
                  <div className="flex justify-between items-baseline pt-4 border-t border-[rgba(232,222,210,0.08)]">
                    <span className="text-label text-[#7E7065]">Valor do Atendimento</span>
                    <span className="font-serif italic text-2xl text-[#E8DED2]">30,00 €</span>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={250}>
                <div className="border border-[rgba(232,222,210,0.12)] p-10 bg-[#1D1815] group hover:border-[#8C6A3B] transition-all duration-300">
                  <span className="text-label text-[#8C6A3B] block mb-2">À Distância (Nacional & Estrangeiro)</span>
                  <h3 className="font-serif italic text-[#E8DED2] text-2xl mb-4">Consulta Online</h3>
                  <p className="text-body text-sm text-[#C8BAA8] mb-8 leading-relaxed">
                    Realizada por chamada ou videochamada para qualquer parte de Portugal ou do estrangeiro. A energia não conhece barreiras físicas.
                  </p>
                  <div className="flex justify-between items-baseline pt-4 border-t border-[rgba(232,222,210,0.08)]">
                    <span className="text-label text-[#7E7065]">Valor do Atendimento</span>
                    <span className="font-serif italic text-2xl text-[#E8DED2]">40,00 €</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Tarot card specialties */}
            <div className="pt-12 border-t border-[rgba(232,222,210,0.08)]">
              <ScrollReveal>
                <h4 className="text-label text-[#7E7065] tracking-widest mb-10">ÁREAS DE ATUAÇÃO E CATEGORIAS</h4>
              </ScrollReveal>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
                {CATEGORIES.map((cat, i) => (
                  <TarotCard key={cat.name} cat={cat} index={i} />
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── ABSOLUTE CONFIDENTIALITY (TESTIMONIAL STATEMENT) ───────── */}
        <section className="py-20 md:py-28 px-8 md:px-16 bg-[#0E0B0A] border-b border-[rgba(232,222,210,0.08)]">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <ScrollReveal direction="up">
              <span className="eyebrow flex justify-center mb-6">Confidencialidade Absoluta</span>
              <h2 className="text-heading text-[#E8DED2] text-3xl md:text-4xl italic">
                &ldquo;O silêncio é a nossa maior garantia de respeito e discrição.&rdquo;
              </h2>
              <div className="divider-accent mx-auto my-6" />
              <p className="text-body text-sm text-[#C8BAA8] max-w-xl mx-auto leading-relaxed">
                Muitos clientes perguntam por que motivo não publicamos avaliações ou testemunhos na nossa página. A resposta é simples: a sua privacidade espiritual é sagrada.
              </p>
              <p className="text-body text-xs text-[#9A8C7E] max-w-lg mx-auto leading-relaxed pt-2">
                Acreditamos que as dores, os anseios e a jornada espiritual de quem nos procura devem permanecer em segredo inviolável. Por respeito a si e ao trabalho esotérico sério, mantemos sigilo absoluto sobre cada consulta e ritual realizado.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── FAQ SECTION ───────────────────────────────────────────── */}
        <section
          className="py-24 md:py-32 bg-[#161210] border-b border-[rgba(232,222,210,0.08)]"
          aria-label="Perguntas frequentes"
        >
          <div className="max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <ScrollReveal>
                <span className="eyebrow">Dúvidas</span>
                <h2 className="text-heading text-[#E8DED2] text-3xl md:text-4xl">
                  Perguntas<br />frequentes
                </h2>
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

        {/* ── SHIPPING & TERMS DETAIL GRID ───────────────────────────── */}
        <section className="py-24 md:py-32 px-8 md:px-16 bg-[#0E0B0A]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              
              {/* Left Column — Delivery & Payment */}
              <div className="lg:col-span-7 space-y-12">
                <ScrollReveal>
                  <span className="eyebrow-accent">Termos da Loja &amp; Envios</span>
                  <h2 className="text-heading text-[#E8DED2] text-3xl md:text-4xl mb-8">
                    Encomendas e Pagamentos
                  </h2>
                </ScrollReveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <ScrollReveal delay={100}>
                    <div className="space-y-3">
                      <span className="text-label text-[#8C6A3B]">✈️ Envios Nacionais &amp; Estrangeiro</span>
                      <h4 className="font-serif italic text-lg text-[#E8DED2]">Prazos e Cobertura</h4>
                      <p className="text-body text-sm text-[#C8BAA8] leading-relaxed">
                        Enviamos os nossos produtos consagrados para todo o território de **Portugal** (Continente e Ilhas) e para o **estrangeiro** (comunidades portuguesas e destinos mundiais).
                      </p>
                      <p className="text-body text-xs text-[#9A8C7E]">
                        Prazo de Entrega: **3 a 5 dias úteis**.
                      </p>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={200}>
                    <div className="space-y-3">
                      <span className="text-label text-[#8C6A3B]">📦 Portes Gratuitos</span>
                      <h4 className="font-serif italic text-lg text-[#E8DED2]">Vantagem para Encomendas</h4>
                      <p className="text-body text-sm text-[#C8BAA8] leading-relaxed">
                        Para compras no valor igual ou superior a **50,00 €**, os portes de envio são **completamente grátis** para qualquer destino em Portugal.
                      </p>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={300}>
                    <div className="space-y-3">
                      <span className="text-label text-[#8C6A3B]">💳 Métodos de Pagamento</span>
                      <h4 className="font-serif italic text-lg text-[#E8DED2]">Segurança e Facilidade</h4>
                      <p className="text-body text-sm text-[#C8BAA8] leading-relaxed">
                        Disponibilizamos as formas de pagamento mais seguras e convenientes em Portugal e no estrangeiro:
                      </p>
                      <p className="text-body text-xs text-[#9A8C7E] font-medium">
                        • MB Way · Cartão de Crédito · Transferência Bancária · PayPal
                      </p>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={400}>
                    <div className="space-y-3">
                      <span className="text-label text-[#8C6A3B]">🛡️ Garantia &amp; Apoio</span>
                      <h4 className="font-serif italic text-lg text-[#E8DED2]">Prazo de Reclamação</h4>
                      <p className="text-body text-sm text-[#C8BAA8] leading-relaxed">
                        Se algum artigo chegar com defeito de fabrico ou partido devido ao transporte, dispõe de um prazo legal de **14 dias úteis** após a recepção da encomenda para efetuar a sua reclamação e obter substituição.
                      </p>
                    </div>
                  </ScrollReveal>
                </div>
              </div>

              {/* Right Column — Legal & Opening hours */}
              <div className="lg:col-span-5 space-y-10 lg:pl-8">
                <ScrollReveal>
                  <span className="eyebrow">Informações Úteis</span>
                  <h2 className="text-heading text-[#E8DED2] text-3xl mb-8">
                    Dados Legais &amp; Localização
                  </h2>
                </ScrollReveal>

                <ScrollReveal delay={150}>
                  <div className="bg-[#1D1815] border border-[rgba(232,222,210,0.08)] p-8 space-y-6">
                    <div>
                      <span className="text-label text-[#7E7065] block mb-1">DADOS LEGAIS DA EMPRESA</span>
                      <p className="font-sans text-sm text-[#E8DED2] leading-relaxed font-light">
                        <strong>Titular:</strong> Maria Manuela Moutinho Gonçalves<br />
                        <strong>NIF:</strong> 225865882<br />
                        <strong>Nome Comercial:</strong> Mundo Mágico<br />
                        <strong>Categoria:</strong> Loja Esotérica
                      </p>
                    </div>

                    <div className="border-t border-[rgba(232,222,210,0.08)] pt-6">
                      <span className="text-label text-[#7E7065] block mb-1">LOJA FÍSICA E HORÁRIO</span>
                      <p className="font-sans text-sm text-[#E8DED2] leading-relaxed font-light">
                        Rua da Prata sn, Santa Joana<br />
                        3810-314 Aveiro, Portugal
                      </p>
                      <p className="text-body text-xs text-[#8C6A3B] font-medium pt-2">
                        Segunda a Sábado · **10:00 às 19:00**<br />
                        *(Não fecha à hora de almoço)*
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Local & SEO map text link */}
                <ScrollReveal delay={300}>
                  <div className="border border-[rgba(232,222,210,0.08)] p-6 text-center space-y-3">
                    <p className="text-body text-xs text-[#9A8C7E] leading-relaxed">
                      Procura auxílio espiritual ou quer visitar o nosso santuário? Estamos sediados na bela região de **Aveiro** (perto de Ílhavo, Águeda, Ovar e arredores), disponíveis para consultas presenciais ou online em qualquer parte de **Portugal e Europa**.
                    </p>
                    <Link href="/contactos" className="text-label text-[#8C6A3B] hover:text-[#EDE4D8] transition-colors duration-200 block underline underline-offset-4">
                      Fala Connosco via WhatsApp
                    </Link>
                  </div>
                </ScrollReveal>
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  );
}
