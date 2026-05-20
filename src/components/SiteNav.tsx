"use client";

import Link from "next/link";

export default function SiteNav() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-[#0E0B0A]/95 backdrop-blur-lg border-b border-[rgba(232,222,210,0.12)] flex items-stretch h-[58px]">

      {/* Brand */}
      <Link
        href="/"
        aria-label="Mundo Mágico"
        className="flex items-center px-6 md:px-10 border-r border-[rgba(232,222,210,0.10)] font-serif italic text-white text-[1.2rem] font-semibold tracking-wide hover:text-[#8C6A3B] transition-colors duration-300 shrink-0"
      >
        Mundo Mágico
      </Link>

      {/* Centre nav links */}
      <div className="hidden md:flex items-stretch flex-1 justify-center">
        {[
          { label: "Novidades", href: "/#novidades" },
          { label: "Artefactos", href: "/artefactos" },
          { label: "Serviços", href: "/servicos" },
          { label: "Sobre Nós", href: "/sobre" },
          { label: "Contactos", href: "/contactos" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center px-8 font-sans uppercase text-white hover:text-[#8C6A3B] hover:bg-[rgba(232,222,210,0.05)] border-r border-[rgba(232,222,210,0.10)] transition-all duration-200 tracking-[0.25em] text-[0.78rem] font-medium"
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
          className="flex items-center px-6 border-l border-[rgba(232,222,210,0.10)] text-white/80 hover:text-white hover:bg-[rgba(232,222,210,0.05)] transition-all duration-200"
        >
          <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
        </button>

        <Link
          href="/servicos"
          className="hidden md:flex items-center gap-3 px-7 border-l border-[rgba(232,222,210,0.10)] bg-[#2D6A4F] hover:bg-[#3E8B62] text-white font-semibold font-sans uppercase tracking-[0.22em] text-[0.78rem] transition-all duration-300 group"
        >
          CONSULTAR
          <span className="flex items-center justify-center w-6 h-6 bg-[rgba(255,255,255,0.15)] group-hover:bg-[rgba(255,255,255,0.22)] transition-colors duration-300">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </Link>
      </div>
    </nav>
  );
}
