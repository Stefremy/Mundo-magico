export default function Home() {
  return (
    <>
      <nav className="fixed top-0 z-50 w-full px-8 py-4 flex justify-between items-center bg-[#131313]/90 backdrop-blur-md border-b border-[#49454e]/15">
        <div className="font-['Newsreader'] italic text-2xl text-[#e9c349]">Mundo Mágico</div>
        <div className="hidden md:flex items-center gap-10 font-['Newsreader'] tracking-wide uppercase text-sm">
          <a className="text-[#e9c349] border-b border-[#e9c349] pb-1 hover:text-[#e9c349] transition-colors duration-300" href="#">Grimórios</a>
          <a className="text-[#e5e2e1]/70 hover:text-[#e9c349] transition-colors duration-300" href="#">Artefactos</a>
          <a className="text-[#e5e2e1]/70 hover:text-[#e9c349] transition-colors duration-300" href="#">Poções</a>
          <a className="text-[#e5e2e1]/70 hover:text-[#e9c349] transition-colors duration-300" href="/contactos">Contactos</a>
        </div>
        <div className="flex items-center gap-6">
          <button className="material-symbols-outlined text-[#e9c349] hover:scale-95 duration-200" data-icon="shopping_bag">shopping_bag</button>
          <button className="material-symbols-outlined text-[#e9c349] hover:scale-95 duration-200" data-icon="person">person</button>
        </div>
      </nav>

      <header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img alt="Biblioteca Mística" className="w-full h-full object-cover grayscale opacity-60 scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLUDsBxcsY8z7f4UBiPanHfmoLVtaN418LKhJ4Bw1F0SyZEefDifweOjQvnDfOTzTsfdpY_EwfAv2sljENlg3Np_eBEfXY9bb5d8Yd91nWEK8VCrI1Ms4xuWlJ8-KwIyct2QPIMjHogjJqn3T9jundJ71tEh_1a2hTBtYwb_wHpLjv9CLim1Nz31re00PY9lJw77pt0Lp0fwTwTsxDKImC9wDJomGYdBrn9PDmpzfWFLlJdUXU3NlteWXLHl197m2O_P-8mpyMNXCt"/>
          <div className="absolute inset-0 bg-gradient-to-b from-surface/40 via-surface/20 to-surface"></div>
        </div>
        <div className="relative z-10 p-12 md:p-24 border border-primary/20 glass-panel max-w-4xl text-center">
          <h1 className="font-decorative text-4xl md:text-7xl text-primary tracking-widest text-glow mb-8 leading-tight">
            O TEU PODER COMEÇA AQUI
          </h1>
          <p className="font-body text-on-surface/80 max-w-xl mx-auto mb-10 tracking-widest uppercase text-xs">
            Desbloqueia as artes ancestrais. Descobre o teu caminho celestial através dos nossos artefactos rituais.
          </p>
          <button className="px-10 py-4 border border-primary text-primary font-label tracking-[0.2em] text-xs hover:bg-primary hover:text-on-primary transition-all duration-500">
            COMPRAR AGORA
          </button>
        </div>
      </header>

      <section className="py-20 bg-surface-container-low">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-wrap justify-center gap-12 md:gap-24">
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-20 h-20 rounded-full border border-primary/30 flex items-center justify-center group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(233,195,73,0.2)] transition-all duration-500">
                <span className="material-symbols-outlined text-primary text-3xl" data-icon="local_fire_department">local_fire_department</span>
              </div>
              <span className="mt-4 font-label text-[10px] tracking-widest uppercase text-on-surface/60 group-hover:text-primary transition-colors">Velas</span>
            </div>
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-20 h-20 rounded-full border border-primary/30 flex items-center justify-center group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(233,195,73,0.2)] transition-all duration-500">
                <span className="material-symbols-outlined text-primary text-3xl" data-icon="diamond">diamond</span>
              </div>
              <span className="mt-4 font-label text-[10px] tracking-widest uppercase text-on-surface/60 group-hover:text-primary transition-colors">Cristais</span>
            </div>
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-20 h-20 rounded-full border border-primary/30 flex items-center justify-center group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(233,195,73,0.2)] transition-all duration-500">
                <span className="material-symbols-outlined text-primary text-3xl" data-icon="style">style</span>
              </div>
              <span className="mt-4 font-label text-[10px] tracking-widest uppercase text-on-surface/60 group-hover:text-primary transition-colors">Tarot</span>
            </div>
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-20 h-20 rounded-full border border-primary/30 flex items-center justify-center group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(233,195,73,0.2)] transition-all duration-500">
                <span className="material-symbols-outlined text-primary text-3xl" data-icon="eco">eco</span>
              </div>
              <span className="mt-4 font-label text-[10px] tracking-widest uppercase text-on-surface/60 group-hover:text-primary transition-colors">Ervas</span>
            </div>
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-20 h-20 rounded-full border border-primary/30 flex items-center justify-center group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(233,195,73,0.2)] transition-all duration-500">
                <span className="material-symbols-outlined text-primary text-3xl" data-icon="auto_awesome">auto_awesome</span>
              </div>
              <span className="mt-4 font-label text-[10px] tracking-widest uppercase text-on-surface/60 group-hover:text-primary transition-colors">Amuletos</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f5] py-24 text-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <span className="font-label text-[10px] tracking-[0.3em] uppercase text-surface/40 block mb-2">Novidades</span>
              <h2 className="font-headline text-5xl italic font-light">Explora os Nossos Novos Produtos</h2>
            </div>
            <a className="font-label text-xs tracking-widest border-b border-surface/20 pb-1 hover:border-surface transition-colors" href="#">VER TODA A COLECÇÃO</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-white mb-6">
                <img alt="Vela Ritual Vira Pensamento" className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105" src="/images/WhatsApp Image 2026-03-30 at 17.39.09.jpeg"/>
                <div className="absolute top-4 left-4 bg-primary px-3 py-1 text-[9px] font-label tracking-widest uppercase text-on-primary">Novo</div>
              </div>
              <div className="space-y-1">
                <h3 className="font-headline text-xl italic">Vela Ritual Vira Pensamento</h3>
                <p className="font-label text-[10px] tracking-widest uppercase text-surface/50">Influência e Clareza Mental</p>
                <p className="font-body text-sm font-bold pt-2">12,50 €</p>
              </div>
            </div>
            <div className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-white mb-6">
                <img alt="Ritual 11 Mechas Caveira Vermelha" className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105" src="/images/WhatsApp Image 2026-03-30 at 17.39.14.jpeg"/>
              </div>
              <div className="space-y-1">
                <h3 className="font-headline text-xl italic">Ritual 11 Mechas Caveira Vermelha</h3>
                <p className="font-label text-[10px] tracking-widest uppercase text-surface/50">Ritual de Amor e Paixão</p>
                <p className="font-body text-sm font-bold pt-2">18,90 €</p>
              </div>
            </div>
            <div className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-white mb-6">
                <img alt="Kit Ritual És Só Para Mim" className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105" src="/images/WhatsApp Image 2026-03-30 at 17.39.22.jpeg"/>
              </div>
              <div className="space-y-1">
                <h3 className="font-headline text-xl italic">Kit Ritual "És Só Para Mim"</h3>
                <p className="font-label text-[10px] tracking-widest uppercase text-surface/50">Amarração e Fidelidade</p>
                <p className="font-body text-sm font-bold pt-2">24,90 €</p>
              </div>
            </div>
            <div className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-white mb-6">
                <img alt="Kit Ritual Impotência Máxima" className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105" src="/images/WhatsApp Image 2026-03-30 at 17.39.19.jpeg"/>
              </div>
              <div className="space-y-1">
                <h3 className="font-headline text-xl italic">Kit Ritual "Impotência Máxima"</h3>
                <p className="font-label text-[10px] tracking-widest uppercase text-surface/50">Inibição de Força Masculina</p>
                <p className="font-body text-sm font-bold pt-2">22,00 €</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-8 bg-surface">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -top-6 -left-6 w-full h-full border border-primary/20 z-0"></div>
            <img alt="A Tecedeira de Sombras" className="relative z-10 w-full aspect-[4/5] object-cover grayscale brightness-75" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgj0luYHPi3M6zZsvzKxdl19N9qA994BaLay20Rc6emLftQFpGfnPoac18C90ndhTi1chJMxD_G_QvoefbwHzz5pyTpN95cBJ59EOP_iLthO8KLzSQe3bptEDxBgxYdCoLHjpT2gqzsTUacjgLUeeCKbxHKGoX8090usx361eEbm8C_FVciY2UjSiWCgdQYwXggLd9S923fo13I2U765Czm3XD6o_kM31ShZ69Mbizj2tZKXi98Kgc9--b6xszqfRJrrk8DmEI5kjp"/>
          </div>
          <div className="w-full md:w-1/2 space-y-8">
            <div>
              <span className="font-label text-[10px] tracking-[0.4em] uppercase text-primary mb-4 block">A Ancestralidade</span>
              <h2 className="font-headline text-5xl md:text-6xl italic text-on-surface leading-tight">A Tecedeira de Sombras</h2>
            </div>
            <p className="font-headline text-2xl text-on-surface/80 italic leading-relaxed">
              "Não vendemos apenas objectos; curamos veículos de intenção. Cada artefacto no Mundo Mágico é selecionado à mão e abençoado sob a lua prateada."
            </p>
            <div className="font-body text-on-surface/60 leading-relaxed space-y-4 max-w-lg">
              <p>Há mais de sete gerações, a linhagem da Tecedeira preservou o conhecimento oculto dos reinos celestiais. A nossa missão é unir o mundo mundano ao mágico, proporcionando ao buscador moderno ferramentas que ressoam com poder ancestral.</p>
              <p>Cada peça é de origem ética e tratada com a reverência que merece, garantindo que a tua jornada espiritual seja apoiada pelas vibrações mais elevadas.</p>
            </div>
            <div className="pt-6">
              <button className="flex items-center gap-4 group text-primary font-label text-[10px] tracking-[0.3em] uppercase">
                A Nossa História
                <span className="w-12 h-px bg-primary/40 group-hover:w-20 transition-all duration-500"></span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0e0e0e] flex flex-col items-center gap-8 py-12 px-4 w-full">
        <div className="font-['Newsreader'] text-xl text-[#e9c349]">Mundo Mágico</div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 font-['Manrope'] text-xs tracking-widest uppercase">
          <a className="text-[#e5e2e1]/50 hover:text-[#dcb8ff] transition-all duration-500 opacity-80 hover:opacity-100" href="#">Política de Privacidade</a>
          <a className="text-[#e5e2e1]/50 hover:text-[#dcb8ff] transition-all duration-500 opacity-80 hover:opacity-100" href="#">Envios &amp; Devoluções</a>
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
