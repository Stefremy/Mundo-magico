import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contactos | Mundo Mágico",
  description: "Entra em contacto com o Mundo Mágico. Visita a nossa loja física em Aveiro.",
};

export default function ContactosPage() {
  return (
    <>
      {/* Navigation (Same as main page) */}
      <nav className="fixed top-0 z-50 w-full px-8 py-4 flex justify-between items-center bg-[#131313]/90 backdrop-blur-md border-b border-[#49454e]/15">
        <a href="/" className="font-['Newsreader'] italic text-2xl text-[#e9c349]">Mundo Mágico</a>
        <div className="hidden md:flex items-center gap-10 font-['Newsreader'] tracking-wide uppercase text-sm">
          <a className="text-[#e5e2e1]/70 hover:text-[#e9c349] transition-colors duration-300" href="/#grimorios">Grimórios</a>
          <a className="text-[#e5e2e1]/70 hover:text-[#e9c349] transition-colors duration-300" href="/#artefactos">Artefactos</a>
          <a className="text-[#e5e2e1]/70 hover:text-[#e9c349] transition-colors duration-300" href="/#pocoes">Poções</a>
          <a className="text-[#e9c349] border-b border-[#e9c349] pb-1 hover:text-[#e9c349] transition-colors duration-300" href="/contactos">Contactos</a>
        </div>
        <div className="flex items-center gap-6">
          <button className="material-symbols-outlined text-[#e9c349] hover:scale-95 duration-200" data-icon="shopping_bag">shopping_bag</button>
          <button className="material-symbols-outlined text-[#e9c349] hover:scale-95 duration-200" data-icon="person">person</button>
        </div>
      </nav>

      <main className="min-h-screen pt-32 pb-20 px-8 flex flex-col items-center">
        {/* Hero-like Title */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top duration-1000">
          <span className="font-label text-[10px] tracking-[0.4em] uppercase text-primary mb-4 block">Conecta-te Connosco</span>
          <h1 className="font-decorative text-5xl md:text-7xl text-primary tracking-widest text-glow mb-4">Contactos</h1>
          <div className="w-24 h-px bg-primary/30 mx-auto mt-8"></div>
        </div>

        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Information Card */}
          <div className="glass-panel border border-primary/20 p-8 md:p-12 space-y-12">
            <div>
              <h2 className="font-headline text-3xl italic text-on-surface mb-6">A Nossa Essência</h2>
              <p className="font-body text-on-surface/60 leading-relaxed italic">
                "O Mundo Mágico transcende o digital. Convidamos-te a sentir a energia dos nossos artefactos pessoalmente na nossa loja física."
              </p>
            </div>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-1" data-icon="location_on">location_on</span>
                <div>
                  <h3 className="font-label text-xs tracking-widest uppercase text-primary mb-2">Morada</h3>
                  <p className="font-body text-on-surface/80">Rua da Prata sn, Santa Joana</p>
                  <p className="font-body text-on-surface/80">3810-314 Aveiro, Portugal</p>
                  <span className="inline-block mt-2 px-3 py-1 border border-primary/30 rounded-full text-[9px] font-label text-primary/70 uppercase tracking-tighter">Loja Física</span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-1" data-icon="call">call</span>
                <div>
                  <h3 className="font-label text-xs tracking-widest uppercase text-primary mb-2">Telefone</h3>
                  <p className="font-body text-highlight text-on-surface/80">912 672 435</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-1" data-icon="mail">mail</span>
                <div>
                  <h3 className="font-label text-xs tracking-widest uppercase text-primary mb-2">Email</h3>
                  <a href="mailto:borboleta_mariana18@hotmail.com" className="font-body text-on-surface/80 hover:text-primary transition-colors">
                    borboleta_mariana18@hotmail.com
                  </a>
                </div>
              </div>

              {/* Socials */}
              <div className="flex items-start gap-4 opacity-50">
                <span className="material-symbols-outlined text-primary mt-1" data-icon="social_distance">public</span>
                <div>
                  <h3 className="font-label text-xs tracking-widest uppercase text-primary mb-2">Redes Sociais</h3>
                  <p className="font-body text-on-surface/80 italic text-sm">Encontra-nos no Facebook</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map or Visual Placeholder (Maintaining Mystique) */}
          <div className="relative aspect-square md:aspect-auto md:h-full min-h-[400px] overflow-hidden group">
            <div className="absolute inset-0 border border-primary/20 z-0 translate-x-4 translate-y-4"></div>
            <div className="absolute inset-0 bg-surface/40 backdrop-blur-sm z-10 flex items-center justify-center p-8 text-center border border-primary/20">
              <div className="space-y-4">
                <span className="material-symbols-outlined text-primary/40 text-6xl" data-icon="auto_awesome">auto_awesome</span>
                <p className="font-headline text-xl italic text-on-surface/80">
                  Um refúgio de magia espera por ti em Aveiro.
                </p>
                <div className="pt-8">
                   <button className="px-8 py-3 bg-primary text-on-primary font-label tracking-[0.2em] text-[10px] hover:bg-primary-container transition-all">
                    COMO CHEGAR
                  </button>
                </div>
              </div>
            </div>
            <img 
               alt="Mapa Místico" 
               className="w-full h-full object-cover grayscale opacity-30 group-hover:scale-105 transition-transform duration-1000" 
               src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLUDsBxcsY8z7f4UBiPanHfmoLVtaN418LKhJ4Bw1F0SyZEefDifweOjQvnDfOTzTsfdpY_EwfAv2sljENlg3Np_eBEfXY9bb5d8Yd91nWEK8VCrI1Ms4xuWlJ8-KwIyct2QPIMjHogjJqn3T9jundJ71tEh_1a2hTBtYwb_wHpLjv9CLim1Nz31re00PY9lJw77pt0Lp0fwTwTsxDKImC9wDJomGYdBrn9PDmpzfWFLlJdUXU3NlteWXLHl197m2O_P-8mpyMNXCt"
            />
          </div>
        </div>
      </main>

      {/* Footer (Same as main page) */}
      <footer className="bg-[#0e0e0e] flex flex-col items-center gap-8 py-12 px-4 w-full border-t border-primary/10">
        <div className="font-['Newsreader'] text-xl text-[#e9c349]">Mundo Mágico</div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 font-['Manrope'] text-xs tracking-widest uppercase">
          <a className="text-[#e5e2e1]/50 hover:text-[#dcb8ff] transition-all duration-500 opacity-80 hover:opacity-100" href="#">Política de Privacidade</a>
          <a className="text-[#e5e2e1]/50 hover:text-[#dcb8ff] transition-all duration-500 opacity-80 hover:opacity-100" href="#">Envios & Devoluções</a>
          <a className="text-[#e5e2e1]/50 hover:text-[#dcb8ff] transition-all duration-500 opacity-80 hover:opacity-100" href="#">Termos de Serviço</a>
          <a className="text-[#e5e2e1]/50 hover:text-[#dcb8ff] transition-all duration-500 opacity-80 hover:opacity-100" href="/contactos">Contactos</a>
        </div>
        <div className="flex gap-6 mt-4">
          <span className="material-symbols-outlined text-[#e5e2e1]/30 hover:text-[#e9c349] cursor-pointer transition-colors" data-icon="star_rate">star_rate</span>
          <span className="material-symbols-outlined text-[#e5e2e1]/30 hover:text-[#e9c349] cursor-pointer transition-colors" data-icon="auto_fix">auto_fix</span>
          <span className="material-symbols-outlined text-[#e5e2e1]/30 hover:text-[#e9c349] cursor-pointer transition-colors" data-icon="history_edu">history_edu</span>
        </div>
        <div className="text-[#e5e2e1]/30 font-['Manrope'] text-[9px] tracking-[0.4em] uppercase mt-8">
          © 2026 MUNDO MÁGICO. TODOS OS DIREITOS RESERVADOS.
        </div>
      </footer>
    </>
  );
}
