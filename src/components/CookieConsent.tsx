"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type ConsentState = {
  analytics: boolean;
  functionality: boolean;
  marketing: boolean;
};

const STORAGE_KEY = "mundomagico_cookie_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [consent, setConsent] = useState<ConsentState>({
    analytics: false,
    functionality: false,
    marketing: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // Slight delay so the page loads first
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  function acceptAll() {
    const all: ConsentState = { analytics: true, functionality: true, marketing: true };
    save(all);
  }

  function rejectAll() {
    const none: ConsentState = { analytics: false, functionality: false, marketing: false };
    save(none);
  }

  function saveCustom() {
    save(consent);
  }

  function save(c: ConsentState) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...c, necessary: true, timestamp: Date.now() }));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[9998] bg-black/40 backdrop-blur-sm"
        aria-hidden="true"
      />

      {/* Banner */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Consentimento de Cookies"
        className="fixed bottom-0 left-0 right-0 z-[9999] md:bottom-6 md:left-6 md:right-auto md:max-w-md"
        style={{ animation: "slideUp 0.5s cubic-bezier(0.16,1,0.3,1) both" }}
      >
        <div className="bg-[#0D0A09] border border-[rgba(232,222,210,0.12)] shadow-[0_24px_80px_rgba(0,0,0,0.8)]">

          {/* Decorative top accent */}
          <div className="h-[2px] bg-gradient-to-r from-[#8C6A3B] via-[#C4A472] to-[#8C6A3B]" />

          <div className="p-7">
            {/* Header */}
            <div className="flex items-start gap-4 mb-5">
              <div className="shrink-0 w-9 h-9 border border-[rgba(140,106,59,0.4)] flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#8C6A3B]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
              </div>
              <div>
                <p className="font-serif italic text-[#E8DED2] text-lg leading-tight mb-1">
                  O seu conforto, a sua escolha
                </p>
                <p className="text-[0.6rem] font-sans tracking-[0.18em] uppercase text-[#4A4240]">
                  Cookies &amp; Privacidade
                </p>
              </div>
            </div>

            {/* Body text */}
            <p className="text-body text-[#B9AA9A] text-sm leading-relaxed mb-6">
              Utilizamos cookies para melhorar a sua experiência e analisar o tráfego do website. 
              Cookies estritamente necessários são sempre ativos. Pode escolher quais aceita.{" "}
              <Link href="/politica-cookies" className="text-[#8C6A3B] hover:text-[#C4A472] underline underline-offset-2 transition-colors duration-200">
                Saiba mais
              </Link>
            </p>

            {/* Detailed preferences (collapsible) */}
            {showDetails && (
              <div className="mb-6 space-y-3 border border-[rgba(232,222,210,0.06)] p-4">
                {/* Necessary — always on */}
                <label className="flex items-center justify-between gap-4 cursor-not-allowed">
                  <div>
                    <p className="font-sans font-medium text-[#E8DED2] text-xs tracking-wide">Necessários</p>
                    <p className="text-[#7E7065] text-[0.7rem] mt-0.5">Essenciais para o funcionamento do site</p>
                  </div>
                  <div className="shrink-0 w-9 h-5 rounded-full bg-[#8C6A3B] relative">
                    <div className="absolute right-1 top-0.5 w-4 h-4 rounded-full bg-white" />
                  </div>
                </label>

                {(["analytics", "functionality", "marketing"] as (keyof ConsentState)[]).map((key) => {
                  const labels: Record<keyof ConsentState, { title: string; desc: string }> = {
                    analytics: { title: "Análise e Desempenho", desc: "Ajuda-nos a melhorar o website" },
                    functionality: { title: "Funcionalidade", desc: "Recorda as suas preferências" },
                    marketing: { title: "Marketing", desc: "Conteúdo personalizado e anúncios" },
                  };
                  return (
                    <label key={key} className="flex items-center justify-between gap-4 cursor-pointer group">
                      <div>
                        <p className="font-sans font-medium text-[#E8DED2] text-xs tracking-wide group-hover:text-[#C4A472] transition-colors duration-200">
                          {labels[key].title}
                        </p>
                        <p className="text-[#7E7065] text-[0.7rem] mt-0.5">{labels[key].desc}</p>
                      </div>
                      <button
                        type="button"
                        role="switch"
                        aria-checked={consent[key]}
                        onClick={() => setConsent((prev) => ({ ...prev, [key]: !prev[key] }))}
                        className={`shrink-0 w-9 h-5 rounded-full relative transition-colors duration-300 ${
                          consent[key] ? "bg-[#8C6A3B]" : "bg-[rgba(232,222,210,0.1)] border border-[rgba(232,222,210,0.2)]"
                        }`}
                      >
                        <div
                          className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all duration-300 ${
                            consent[key] ? "right-1" : "left-1"
                          }`}
                        />
                      </button>
                    </label>
                  );
                })}
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col gap-2">
              <button
                id="cookie-accept-all"
                onClick={acceptAll}
                className="w-full py-3 px-6 bg-[#8C6A3B] text-[#0D0A09] text-[0.65rem] font-sans font-semibold tracking-[0.2em] uppercase hover:bg-[#A07840] transition-colors duration-300"
              >
                Aceitar Todos
              </button>

              <div className="flex gap-2">
                <button
                  id="cookie-reject-all"
                  onClick={rejectAll}
                  className="flex-1 py-2.5 px-4 border border-[rgba(232,222,210,0.15)] text-[#7E7065] text-[0.6rem] font-sans tracking-[0.18em] uppercase hover:border-[rgba(232,222,210,0.3)] hover:text-[#B9AA9A] transition-all duration-300"
                >
                  Rejeitar
                </button>

                {showDetails ? (
                  <button
                    id="cookie-save-custom"
                    onClick={saveCustom}
                    className="flex-1 py-2.5 px-4 border border-[rgba(140,106,59,0.4)] text-[#8C6A3B] text-[0.6rem] font-sans tracking-[0.18em] uppercase hover:border-[#8C6A3B] hover:text-[#C4A472] transition-all duration-300"
                  >
                    Guardar
                  </button>
                ) : (
                  <button
                    id="cookie-show-details"
                    onClick={() => setShowDetails(true)}
                    className="flex-1 py-2.5 px-4 border border-[rgba(140,106,59,0.4)] text-[#8C6A3B] text-[0.6rem] font-sans tracking-[0.18em] uppercase hover:border-[#8C6A3B] hover:text-[#C4A472] transition-all duration-300"
                  >
                    Gerir
                  </button>
                )}
              </div>
            </div>

            {/* Legal links */}
            <div className="flex gap-4 mt-4">
              <Link href="/politica-privacidade" className="text-[#4A4240] text-[0.6rem] font-sans tracking-widest uppercase hover:text-[#7E7065] transition-colors duration-200">
                Privacidade
              </Link>
              <Link href="/politica-cookies" className="text-[#4A4240] text-[0.6rem] font-sans tracking-widest uppercase hover:text-[#7E7065] transition-colors duration-200">
                Cookies
              </Link>
              <Link href="/termos-servico" className="text-[#4A4240] text-[0.6rem] font-sans tracking-widest uppercase hover:text-[#7E7065] transition-colors duration-200">
                Termos
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(2rem); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
