"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

const SERVICES = [
  {
    num: "01",
    title: "Leitura de Tarot",
    desc: "Uma sessão individual de 60 minutos que revela os padrões ocultos do teu caminho. Cartas do Tarot de Marselha interpretadas com rigor ancestral.",
    tag: "Consulta Privada",
  },
  {
    num: "02",
    title: "Amarração Ritual",
    desc: "Trabalho de vinculação energética entre duas almas. Conduzido em três noites consecutivas sob a lua minguante, com velas, ervas e selagem de nomes.",
    tag: "Ritual de 3 Noites",
  },
  {
    num: "03",
    title: "Limpeza de Entidade",
    desc: "Diagnóstico e remoção de influências adversas do campo áurico. Inclui defumação, banho de ervas e proteção pós-ritual.",
    tag: "Purificação",
  },
  {
    num: "04",
    title: "Mapa Astrológico",
    desc: "Análise profunda do mapa natal: propósito, talentos, bloqueios e trânsitos do ano corrente. Entregue em documento escrito + sessão de 45 min.",
    tag: "Astrologia",
  },
];

const CARD_STEP = 330; // px between card centres in the track

export default function StickyServices() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);
  const reducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  const NAV_H = 58; // px — height of the fixed SiteNav bar

  const onScroll = useCallback(() => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const el = sectionRef.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const viewH = window.innerHeight - NAV_H;
      // Offset top so progress starts once the section top passes below the nav
      const adjustedTop = top - NAV_H;
      const travel = height - viewH;
      const raw = travel > 0 ? -adjustedTop / travel : 0;
      setProgress(Math.min(1, Math.max(0, raw)));
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [onScroll]);

  const activeFloat = progress * (SERVICES.length - 1);
  const trackY = reducedMotion ? 0 : -(activeFloat * CARD_STEP);
  const ctaVisible = progress > 0.82;

  return (
    <section
      ref={sectionRef}
      className="relative z-10 bg-[#0E0B0A]"
      style={{ height: `${(SERVICES.length + 1) * 100}vh` }}
      aria-label="Os nossos servicos"
    >
      {/* Sticky viewport frame */}
      <div
        className="sticky w-full overflow-hidden flex items-center z-10"
        style={{ top: "58px", height: "calc(100vh - 58px)" }}
      >
        {/* Background Image -- sintra gogh.png with rich dark vignette overlay */}
        <div className="absolute inset-0 z-0 opacity-70 pointer-events-none select-none">
          <Image
            alt=""
            src="/images/sintra%20gogh.png"
            fill
            priority
            className="object-cover"
            style={{ filter: "brightness(0.7) saturate(1.2)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E0B0A] via-transparent to-[#0E0B0A] opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0E0B0A] via-transparent to-[#0E0B0A] opacity-60" />
        </div>

        {/* Left -- static glyph + label */}
        <div className="relative z-10 hidden md:flex flex-col items-center justify-center w-24 lg:w-32 h-full border-r border-[rgba(232,222,210,0.07)] shrink-0">
          <span className="font-serif italic text-[#8C6A3B] text-5xl select-none" aria-hidden="true">
            ✦
          </span>
          <span
            className="text-label text-[#7E7065] mt-6"
            style={{ writingMode: "vertical-rl", letterSpacing: "0.2em" }}
          >
            Servicos
          </span>
        </div>

        {/* Centre -- section heading */}
        <div className="relative z-10 flex-1 h-full flex flex-col justify-center px-8 md:px-16 max-w-2xl">
          <span className="eyebrow mb-4">O que fazemos</span>
          <h2 className="text-heading text-[#E8DED2] text-4xl md:text-5xl leading-tight mb-6">
            Rituais &amp;<br />
            <em className="text-[#8C6A3B]">Serviços</em><br />
            Espirituais
          </h2>
          <p className="text-body text-[#7E7065] max-w-sm">
            Cada serviço é conduzido com intenção, silêncio e rigor. Não há
            pressa. Não há atalhos.
          </p>
          <div
            className="mt-10 transition-all duration-700"
            style={{
              opacity: ctaVisible ? 1 : 0,
              transform: ctaVisible ? "translateY(0)" : "translateY(12px)",
              pointerEvents: ctaVisible ? "auto" : "none",
            }}
          >
            <Link href="/servicos" className="btn-bronze">
              Todos os Serviços
            </Link>
          </div>
        </div>

        {/* Right -- scrolling card track */}
        <div className="relative z-10 hidden md:block w-[380px] lg:w-[420px] h-full shrink-0 overflow-hidden">
          {/* Fade masks */}
          <div
            className="absolute inset-x-0 top-0 h-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, #0E0B0A 0%, transparent 100%)" }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-x-0 bottom-0 h-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to top, #0E0B0A 0%, transparent 100%)" }}
            aria-hidden="true"
          />

          {/* Card track — top set so card 01's centre is at 50vh on load */}
          <div
            className="absolute inset-x-6"
            style={{
              top: "calc(50% - 165px)",
              transform: `translateY(${trackY}px)`,
              transition: reducedMotion ? "none" : "transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)",
            }}
          >
            {SERVICES.map((svc, i) => {
              const dist = Math.abs(activeFloat - i);
              const isActive = dist < 0.6;
              const opacity = Math.max(0.25, 1 - dist * 0.55);
              const scale = isActive ? 1 : 0.94;

              return (
                <div
                  key={svc.num}
                  className="mb-10 last:mb-0 rounded-sm border transition-all duration-500"
                  style={{
                    borderColor: isActive ? "rgba(140,106,59,0.35)" : "rgba(232,222,210,0.07)",
                    backgroundColor: isActive ? "rgba(29,24,21,0.95)" : "rgba(14,11,10,0.60)",
                    opacity,
                    transform: `scale(${scale})`,
                    padding: "2.2rem",
                    minHeight: "250px",
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-label text-[#8C6A3B] text-[0.8rem]">{svc.num}</span>
                    <span
                      className="text-label px-3.5 py-1 rounded-full"
                      style={{ color: "#8C6A3B", border: "1px solid rgba(140,106,59,0.3)", fontSize: "0.75rem" }}
                    >
                      {svc.tag}
                    </span>
                  </div>
                  <h3 className="font-serif italic text-[#E8DED2] text-3xl mb-3 leading-snug">
                    {svc.title}
                  </h3>
                  <p className="text-body text-[#7E7065] text-base leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile -- simple stacked list */}
        <div className="relative z-10 md:hidden flex flex-col gap-6 px-8 py-12 overflow-y-auto h-full w-full">
          {SERVICES.map((svc) => (
            <div key={svc.num} className="border border-[rgba(232,222,210,0.10)] p-6 rounded-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-label text-[#8C6A3B] text-[0.8rem]">{svc.num}</span>
                <span
                  className="text-label px-2.5 py-0.5 rounded-full"
                  style={{ color: "#8C6A3B", border: "1px solid rgba(140,106,59,0.3)", fontSize: "0.68rem" }}
                >
                  {svc.tag}
                </span>
              </div>
              <h3 className="font-serif italic text-[#E8DED2] text-2xl mb-2">{svc.title}</h3>
              <p className="text-body text-[#7E7065] text-base leading-relaxed">{svc.desc}</p>
            </div>
          ))}
          <Link href="/servicos" className="btn-bronze self-start mt-4">
            Todos os Serviços
          </Link>
        </div>
      </div>
    </section>
  );
}
