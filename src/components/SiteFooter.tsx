import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-[#0D0A09] border-t border-[rgba(232,222,210,0.08)]">

      {/* Main footer body */}
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 pt-20 pb-16 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">

        {/* Col 1 — Brand + tagline */}
        <div className="flex flex-col justify-between gap-10">
          <div>
            <Link href="/" className="font-serif italic text-[clamp(2.8rem,5vw,4.5rem)] text-[#E8DED2] leading-none block mb-6 hover:text-[#8C6A3B] transition-colors duration-300">
              Mundo Mágico
            </Link>
            <p className="font-serif italic text-[#7E7065] text-lg leading-relaxed max-w-[28ch]">
              Sem atalhos, sem ilusões — apenas tradição ancestral e presença no presente.
            </p>
          </div>
          <p className="text-label text-[#4A4240] text-xs leading-relaxed max-w-[36ch]">
            Mundo Mágico é uma loja esotérica em Aveiro, Portugal, dedicada à prática ritual séria e consciente.
          </p>
        </div>

        {/* Col 2 — Giant nav links */}
        <div className="flex flex-col justify-start gap-1 md:px-8">
          {[
            { label: "Início", href: "/" },
            { label: "Artefactos", href: "/artefactos" },
            { label: "Serviços", href: "/servicos" },
            { label: "Sobre Nós", href: "/sobre" },
            { label: "Novidades", href: "/#novidades" },
            { label: "Contactos", href: "/contactos" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center gap-3 py-2"
            >
              <span className="w-2 h-2 rounded-full border border-[#8C6A3B] group-hover:bg-[#8C6A3B] transition-all duration-300 shrink-0" />
              <span className="font-sans font-medium text-[clamp(1.1rem,2.2vw,1.6rem)] tracking-[0.12em] uppercase text-[#7E7065] group-hover:text-[#E8DED2] transition-colors duration-300">
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        {/* Col 3 — Contact details */}
        <div className="flex flex-col gap-8">
          <div>
            <p className="text-label text-[#4A4240] tracking-widest mb-3">CONTACTO</p>
            <a href="mailto:borboleta_mariana18@hotmail.com" className="text-body text-[#B9AA9A] hover:text-[#E8DED2] transition-colors duration-200 block break-all">
              borboleta_mariana18@hotmail.com
            </a>
            <a href="tel:+351912672435" className="text-body text-[#B9AA9A] hover:text-[#E8DED2] transition-colors duration-200 block mt-1">
              +351 912 672 435
            </a>
          </div>

          <div>
            <p className="text-label text-[#4A4240] tracking-widest mb-3">WHATSAPP</p>
            <a
              href="https://wa.me/351912672435"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 border border-[rgba(232,222,210,0.15)] text-[#7E7065] hover:text-[#E8DED2] hover:border-[rgba(232,222,210,0.4)] transition-all duration-200"
              aria-label="WhatsApp"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>

          <div>
            <p className="text-label text-[#4A4240] tracking-widest mb-3">MORADA</p>
            <p className="text-body text-[#7E7065] leading-relaxed">
              Rua da Prata sn, Santa Joana<br />
              3810-314 Aveiro, Portugal
            </p>
          </div>

          <div>
            <p className="text-label text-[#4A4240] tracking-widest mb-3">REDES SOCIAIS</p>
            <div className="flex gap-2">
              <a href="https://www.facebook.com/share/v/1CEd3RzpGz/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="inline-flex items-center justify-center w-10 h-10 border border-[rgba(232,222,210,0.15)] text-[#7E7065] hover:text-[#E8DED2] hover:border-[rgba(232,222,210,0.4)] transition-all duration-200">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="inline-flex items-center justify-center w-10 h-10 border border-[rgba(232,222,210,0.15)] text-[#7E7065] hover:text-[#E8DED2] hover:border-[rgba(232,222,210,0.4)] transition-all duration-200">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="#" aria-label="TikTok" className="inline-flex items-center justify-center w-10 h-10 border border-[rgba(232,222,210,0.15)] text-[#7E7065] hover:text-[#E8DED2] hover:border-[rgba(232,222,210,0.4)] transition-all duration-200">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[rgba(232,222,210,0.06)]">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-label text-[#4A4240] text-xs tracking-widest uppercase">
            Mundo Mágico &copy; 2026
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <Link href="/politica-privacidade" className="text-label text-[#4A4240] text-xs tracking-widest uppercase hover:text-[#7E7065] transition-colors duration-200">Privacidade</Link>
            <Link href="/politica-cookies" className="text-label text-[#4A4240] text-xs tracking-widest uppercase hover:text-[#7E7065] transition-colors duration-200">Política de Cookies</Link>
            <Link href="/termos-servico" className="text-label text-[#4A4240] text-xs tracking-widest uppercase hover:text-[#7E7065] transition-colors duration-200">Termos &amp; Condições</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
