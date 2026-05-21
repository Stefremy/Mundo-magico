"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function SiteNav() {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on route change
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navItems = [
    { label: "Novidades", href: "/#novidades" },
    { label: "Artefactos", href: "/artefactos" },
    { label: "Serviços", href: "/servicos" },
    { label: "Sobre Nós", href: "/sobre" },
    { label: "Contactos", href: "/contactos" },
  ];

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-[#0E0B0A]/95 backdrop-blur-lg border-b border-[rgba(232,222,210,0.12)] flex items-stretch h-[58px]">
        {/* Brand */}
        <Link
          href="/"
          aria-label="Mundo Mágico"
          onClick={handleLinkClick}
          className="flex items-center px-6 md:px-10 border-r border-[rgba(232,222,210,0.10)] font-serif italic text-white text-[1.2rem] font-semibold tracking-wide hover:text-[#8C6A3B] transition-colors duration-300 shrink-0"
        >
          Mundo Mágico
        </Link>

        {/* Centre nav links (Desktop) */}
        <div className="hidden md:flex items-stretch flex-1 justify-center">
          {navItems.map((item) => (
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

        {/* Right — cart icon + CTA / Burger */}
        <div className="flex items-stretch">
          <button
            aria-label="Carrinho"
            className="flex items-center px-6 border-l border-[rgba(232,222,210,0.10)] text-white/80 hover:text-white hover:bg-[rgba(232,222,210,0.05)] transition-all duration-200"
          >
            <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
          </button>

          {/* Desktop CTA */}
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

          {/* Mobile/Tablet Burger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fechar Menu" : "Abrir Menu"}
            className="flex md:hidden items-center justify-center px-6 border-l border-[rgba(232,222,210,0.10)] text-white hover:bg-[rgba(232,222,210,0.05)] transition-all duration-200"
          >
            <div className="w-6 h-5 relative flex items-center justify-center">
              <span className={`absolute block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45" : "-translate-y-1.5"}`} />
              <span className={`absolute block w-6 h-0.5 bg-white transition-all duration-200 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`absolute block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45" : "translate-y-1.5"}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile/Tablet Overlay Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-[#0E0B0A]/98 backdrop-blur-xl transition-all duration-500 ease-in-out md:hidden flex flex-col pt-[58px] ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex-1 flex flex-col justify-between px-8 py-12 overflow-y-auto">
          {/* Mobile Nav Links */}
          <div className="flex flex-col space-y-6 pt-4">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                style={{ transitionDelay: `${isOpen ? index * 60 : 0}ms` }}
                className={`font-serif italic text-3xl text-white hover:text-[#8C6A3B] transition-all duration-300 transform ${
                  isOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Footer content inside mobile nav */}
          <div
            className={`space-y-8 transition-all duration-500 transform ${
              isOpen ? "translate-y-0 opacity-100 delay-300" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="h-[1px] bg-[rgba(232,222,210,0.1)] w-full" />
            
            {/* CTA in mobile menu */}
            <Link
              href="/servicos"
              onClick={handleLinkClick}
              className="flex items-center justify-between px-6 py-4 bg-[#2D6A4F] hover:bg-[#3E8B62] text-white font-semibold font-sans uppercase tracking-[0.22em] text-[0.85rem] transition-all duration-300 rounded-sm"
            >
              MARCAR CONSULTA
              <span className="flex items-center justify-center w-6 h-6 bg-[rgba(255,255,255,0.15)]">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>

            {/* Quick Contacts */}
            <div className="flex flex-col space-y-3 text-white/60 text-xs font-sans tracking-wide">
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-[#8C6A3B]">location_on</span>
                Rua da Prata, Aveiro, Portugal
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-[#8C6A3B]">schedule</span>
                Segunda a Sexta: 10h - 19h | Sábado: 10h - 13h
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

