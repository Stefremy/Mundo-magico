"use client";

import ParallaxWrapper from "@/components/ParallaxWrapper";
import ScrollReveal from "@/components/ScrollReveal";
import { useEffect, useState } from "react";

const products = [
  { id: 1, name: "Vela Ritual Vira Pensamento", desc: "Influência e Clareza Mental", price: "12,50 €", img: "/images/WhatsApp Image 2026-03-30 at 17.39.09.jpeg" },
  { id: 2, name: "Velão Mágico Volteio", desc: "Retorno de Energias Negativas", price: "15,00 €", img: "/images/WhatsApp Image 2026-03-30 at 17.39.10.jpeg" },
  { id: 3, name: "Velas de Ritual Brancas", desc: "Puras para Oração e Paz", price: "8,00 €", img: "/images/WhatsApp Image 2026-03-30 at 17.39.11.jpeg" },
  { id: 4, name: "Velão 3 Pavios - Corta Trabalhos", desc: "Quebra de Bruxaria Pesada", price: "18,00 €", img: "/images/WhatsApp Image 2026-03-30 at 17.39.12.jpeg" },
  { id: 5, name: "Vela Ritual do Sol", desc: "Atração de Dinheiro e Sucesso", price: "9,90 €", img: "/images/WhatsApp Image 2026-03-30 at 17.39.13.jpeg" },
  { id: 6, name: "Vela Ritual Dualidade", desc: "Equilíbrio e Justiça", price: "10,50 €", img: "/images/WhatsApp Image 2026-03-30 at 17.39.13 (1).jpeg" },
  { id: 7, name: "Ritual 11 Mechas Caveira Vermelha", desc: "Ritual de Amor e Paixão", price: "18,90 €", img: "/images/WhatsApp Image 2026-03-30 at 17.39.14.jpeg" },
  { id: 8, name: "Vela Figurativa Casal Branco", desc: "Paz e União Conjugal", price: "10,00 €", img: "/images/WhatsApp Image 2026-03-30 at 17.39.15.jpeg" },
  { id: 9, name: "Vela Tesoura de Ritual", desc: "Corte de Laços e Energias", price: "11,00 €", img: "/images/WhatsApp Image 2026-03-30 at 17.39.16.jpeg" },
  { id: 10, name: "Vela Figurativa Casa Branca", desc: "Limpeza e Proteção do Lar", price: "10,00 €", img: "/images/WhatsApp Image 2026-03-30 at 17.39.17.jpeg" },
  { id: 11, name: "Vela Figurativa Casal Mel", desc: "Doçura e Encantamento no Amor", price: "10,50 €", img: "/images/WhatsApp Image 2026-03-30 at 17.39.18.jpeg" },
  { id: 12, name: "Kit Ritual Impotência Máxima", desc: "Inibição de Força Masculina", price: "22,00 €", img: "/images/WhatsApp Image 2026-03-30 at 17.39.19.jpeg" },
  { id: 13, name: "Sabão Ritual Desata Nós", desc: "Resolução de Problemas Difíceis", price: "7,50 €", img: "/images/WhatsApp Image 2026-03-30 at 17.39.20.jpeg" },
  { id: 14, name: "Sabonete Proteção Espiritual", desc: "Escudo Energético Diário", price: "6,90 €", img: "/images/WhatsApp Image 2026-03-30 at 17.39.21.jpeg" },
  { id: 15, name: "Kit Ritual És Só Para Mim", desc: "Foco Absoluto no Amor", price: "24,90 €", img: "/images/WhatsApp Image 2026-03-30 at 17.39.22.jpeg" },
  { id: 16, name: "Vela Ritual Zé Pelintra", desc: "Abertura de Caminhos e Proteção", price: "12,00 €", img: "/images/WhatsApp Image 2026-03-30 at 17.39.23.jpeg" },
  { id: 17, name: "Velão 7 Mechas Branco", desc: "Limpeza Profunda e Desbloqueio", price: "16,00 €", img: "/images/WhatsApp Image 2026-03-30 at 17.39.23 (1).jpeg" },
  { id: 18, name: "Velão 7 Mechas Multicor", desc: "Limpeza e Reequilíbrio Total", price: "16,50 €", img: "/images/WhatsApp Image 2026-03-30 at 17.39.24.jpeg" },
  { id: 19, name: "Velão 7 Mechas Preto", desc: "Quebra Radical de Feitiços", price: "16,00 €", img: "/images/WhatsApp Image 2026-03-30 at 17.39.25.jpeg" },
];

export default function ArtefactosPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 z-50 w-full px-8 py-4 flex justify-between items-center bg-[#131313]/90 backdrop-blur-md border-b border-[#49454e]/15">
        <a href="/" className="font-['Newsreader'] italic text-2xl text-[#e9c349]">Mundo Mágico</a>
        <div className="hidden md:flex items-center gap-10 font-['Newsreader'] tracking-wide uppercase text-sm">
          <a className="text-[#e5e2e1]/70 hover:text-[#e9c349] transition-colors duration-300" href="/">Início</a>
          <a className="text-[#e9c349] border-b border-[#e9c349] pb-1 hover:text-[#e9c349] transition-colors duration-300" href="/artefactos">Artefactos</a>
          <a className="text-[#e5e2e1]/70 hover:text-[#e9c349] transition-colors duration-300" href="/contactos">Contactos</a>
        </div>
        <div className="flex items-center gap-6">
          <button className="material-symbols-outlined text-[#e9c349] hover:scale-95 duration-200" data-icon="shopping_bag">shopping_bag</button>
          <button className="material-symbols-outlined text-[#e9c349] hover:scale-95 duration-200" data-icon="person">person</button>
        </div>
      </nav>

      <main className="min-h-screen pt-32 pb-20 px-8 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div 
          className="absolute top-20 right-0 text-primary/5 pointer-events-none"
          style={{ transform: `translateY(${scrollY * 0.15}px) rotate(${scrollY * -0.01}deg)` }}
        >
          <span className="material-symbols-outlined text-[400px]" data-icon="brightness_7">brightness_7</span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal direction="down">
            <div className="text-center mb-20">
              <span className="font-label text-[10px] tracking-[0.4em] uppercase text-primary mb-4 block">Tesouros Consagrados</span>
              <h1 className="font-headline text-5xl md:text-7xl italic text-on-surface text-glow">Artefactos de Ritual</h1>
              <div className="w-24 h-px bg-primary/30 mx-auto mt-8"></div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
            {products.map((product, i) => (
              <ScrollReveal key={product.id} delay={(i % 4) * 100} direction="up">
                <div className="group">
                  <div className="relative aspect-[3/4] overflow-hidden bg-white mb-6 border border-primary/5">
                    <img 
                      alt={product.name} 
                      className="w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-110" 
                      src={product.img}
                    />
                  </div>
                  <div className="space-y-1 px-2">
                    <h3 className="font-headline text-xl italic text-on-surface">{product.name}</h3>
                    <p className="font-label text-[10px] tracking-widest uppercase text-on-surface/50">{product.desc}</p>
                    <p className="font-body text-sm font-bold pt-2 text-primary">{product.price}</p>
                    <p className="font-body text-[11px] text-on-surface/40 leading-relaxed pt-2 italic">
                      Utilize este artefacto com intenção pura e respeito pelas leis universais. Todos os nossos produtos são consagrados segundo tradições ancestrais.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-[#0e0e0e] flex flex-col items-center gap-8 py-12 px-4 w-full border-t border-primary/10">
        <div className="font-['Newsreader'] text-xl text-[#e9c349]">Mundo Mágico</div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 font-['Manrope'] text-xs tracking-widest uppercase">
          <a className="text-[#e5e2e1]/50 hover:text-[#dcb8ff] transition-all duration-500 opacity-80 hover:opacity-100" href="#">Privacidade</a>
          <a className="text-[#e5e2e1]/50 hover:text-[#dcb8ff] transition-all duration-500 opacity-80 hover:opacity-100" href="#">Envios</a>
          <a className="text-[#e5e2e1]/50 hover:text-[#dcb8ff] transition-all duration-500 opacity-80 hover:opacity-100" href="/artefactos">Artefactos</a>
          <a className="text-[#e5e2e1]/50 hover:text-[#dcb8ff] transition-all duration-500 opacity-80 hover:opacity-100" href="/contactos">Contactos</a>
        </div>
        <div className="text-[#e5e2e1]/30 font-['Manrope'] text-[9px] tracking-[0.4em] uppercase mt-8">
          © 2026 MUNDO MÁGICO. TODOS OS DIREITOS RESERVADOS.
        </div>
      </footer>
    </>
  );
}

