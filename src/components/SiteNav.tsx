"use client";

import Link from "next/link";

export default function SiteNav() {
  return (
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
  );
}
