"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";

export default function ContactosPage() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "", submitted: false });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState((s) => ({ ...s, submitted: true }));
  }

  return (
    <>

      {/* ── PAGE HERO ─────────────────────────────────────────────── */}
      <header className="pt-32 pb-24 px-8 md:px-16 bg-[#0E0B0A] border-b border-[rgba(232,222,210,0.08)]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" delay={100}>
            <span className="eyebrow">Fala connosco</span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={250}>
            <h1 className="text-display text-[clamp(2.5rem,6vw,5.5rem)] text-[#E8DED2] leading-[1.04] max-w-3xl mb-8">
              Contactos
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={400}>
            <p className="text-body text-[#B9AA9A] max-w-[55ch] text-base leading-relaxed">
              Estamos aqui para te ouvir. A consulta inicial é gratuita e sem compromisso.
              Fala connosco por WhatsApp, email ou visita-nos na nossa loja em Aveiro.
            </p>
          </ScrollReveal>
        </div>
      </header>

      <main className="bg-[#0E0B0A]">
        {/* ── CONTACT GRID ──────────────────────────────────────────── */}
        <section className="py-24 md:py-32 px-8 md:px-16 border-b border-[rgba(232,222,210,0.08)]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">

            {/* Contact info — 4 cols */}
            <div className="md:col-span-4 space-y-12">
              <ScrollReveal direction="right">
                <div>
                  <span className="eyebrow">Morada</span>
                  <p className="text-body text-[#E8DED2] text-base">
                    Rua da Prata sn, Santa Joana<br />
                    3810-314 Aveiro, Portugal
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={120}>
                <div>
                  <span className="eyebrow">Telefone & WhatsApp</span>
                  <a
                    href="tel:+351912672435"
                    className="text-body text-[#E8DED2] text-base hover:text-[#8C6A3B] transition-colors duration-300 block"
                  >
                    912 672 435
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={240}>
                <div>
                  <span className="eyebrow">Email</span>
                  <a
                    href="mailto:borboleta_mariana18@hotmail.com"
                    className="text-body text-[#E8DED2] text-base hover:text-[#8C6A3B] transition-colors duration-300 block break-all"
                  >
                    borboleta_mariana18@hotmail.com
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={360}>
                <div>
                  <span className="eyebrow">Horário</span>
                  <p className="text-body text-[#B9AA9A] text-base">
                    Segunda — Sábado<br />
                    10:00 — 19:00
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={480}>
                <div>
                  <span className="eyebrow">Redes Sociais</span>
                  <p className="text-body text-[#B9AA9A] text-base italic">
                    Encontra-nos no Facebook &amp; Instagram
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact form — 7 cols (offset 1) */}
            <div className="md:col-span-7 md:col-start-6">
              <ScrollReveal direction="left" delay={150}>
                <div className="mb-10">
                  <span className="eyebrow-accent">Formulário</span>
                  <h2 className="text-heading text-[#E8DED2] text-3xl md:text-4xl">
                    Envia uma mensagem
                  </h2>
                </div>

                {formState.submitted ? (
                  <div className="py-16 border border-[rgba(140,106,59,0.30)] text-center">
                    <p className="font-serif italic text-[#E8DED2] text-2xl mb-3">
                      Mensagem recebida.
                    </p>
                    <p className="text-body text-[#B9AA9A] text-sm">
                      Respondemos em 24 horas. Obrigada pela tua confiança.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                    {/* Name */}
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-label text-[#7E7065] block"
                      >
                        Nome
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={formState.name}
                        onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                        className="w-full bg-transparent border-b border-[rgba(232,222,210,0.18)] py-3 text-[#E8DED2] font-sans text-sm font-light placeholder:text-[#7E7065] focus:outline-none focus:border-[#8C6A3B] transition-colors duration-300"
                        placeholder="O teu nome"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-label text-[#7E7065] block">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={formState.email}
                        onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                        className="w-full bg-transparent border-b border-[rgba(232,222,210,0.18)] py-3 text-[#E8DED2] font-sans text-sm font-light placeholder:text-[#7E7065] focus:outline-none focus:border-[#8C6A3B] transition-colors duration-300"
                        placeholder="o-teu@email.com"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-label text-[#7E7065] block">
                        Mensagem
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formState.message}
                        onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                        className="w-full bg-transparent border-b border-[rgba(232,222,210,0.18)] py-3 text-[#E8DED2] font-sans text-sm font-light placeholder:text-[#7E7065] focus:outline-none focus:border-[#8C6A3B] transition-colors duration-300 resize-none"
                        placeholder="Descreve brevemente a tua situação ou pedido…"
                      />
                    </div>

                    <button type="submit" className="btn-bronze">
                      Enviar Mensagem
                    </button>

                    <p className="text-label text-[#7E7065]">
                      Consulta inicial gratuita · Resposta em 24h · Confidencial
                    </p>
                  </form>
                )}
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── PULL QUOTE ────────────────────────────────────────────── */}
        <section className="py-24 md:py-32 px-8 md:px-16 bg-[#161210]">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal direction="up">
              <blockquote className="font-serif italic text-[#E8DED2] text-2xl md:text-3xl lg:text-4xl leading-relaxed">
                &ldquo;Um refúgio de magia espera por ti em Aveiro.
                A tua jornada começa com uma simples conversa.&rdquo;
              </blockquote>
              <div className="divider-accent mx-auto mt-10 mb-6" />
              <cite className="text-label text-[#7E7065] not-italic">
                Mundo Mágico, Aveiro
              </cite>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </>
  );
}
