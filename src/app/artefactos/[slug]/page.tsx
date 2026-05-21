import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, PRODUCTS } from "@/lib/products";
import ScrollReveal from "@/components/ScrollReveal";

type Props = {
  params: Promise<{ slug: string }>;
};

// Generate Static Params for all products at build time
export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

// Dynamic metadata generation for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Artefacto Não Encontrado",
    };
  }

  return {
    title: `${product.name} — Artefactos de Ritual`,
    description: product.metaDescription,
    alternates: {
      canonical: `/artefactos/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} — Mundo Mágico`,
      description: product.metaDescription,
      images: [
        {
          url: product.img,
          width: 800,
          height: 1067,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Get 4 related products from the same category or overall (excluding the current one)
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  // If there are not enough related products in the same category, fill with others
  if (relatedProducts.length < 4) {
    const additional = PRODUCTS.filter(
      (p) => p.id !== product.id && !relatedProducts.find((rp) => rp.id === p.id)
    ).slice(0, 4 - relatedProducts.length);
    relatedProducts.push(...additional);
  }

  // Pre-filled WhatsApp message URL
  const whatsappText = encodeURIComponent(
    `Olá! Encontrei o vosso site e gostaria de obter informações ou encomendar o artefacto consagrado: "${product.name}" (${product.price}).`
  );
  const whatsappUrl = `https://wa.me/351912672435?text=${whatsappText}`;

  // Structured Data (JSON-LD) for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": `https://mundo-magico-theta.vercel.app${product.img}`,
    "description": product.shortDesc,
    "sku": `MM-${product.id}`,
    "brand": {
      "@type": "Brand",
      "name": "Mundo Mágico"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://mundo-magico-theta.vercel.app/artefactos/${product.slug}`,
      "priceCurrency": "EUR",
      "price": product.priceNum,
      "priceValidUntil": "2027-12-31",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "LocalBusiness",
        "name": "Mundo Mágico",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rua do Gravito, 20A",
          "addressLocality": "Aveiro",
          "postalCode": "3800-192",
          "addressCountry": "PT"
        }
      }
    }
  };

  return (
    <>
      {/* Insert JSON-LD into the head */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-[#F2EDE6] text-[#1D1815] min-h-screen pt-28 pb-24">
        {/* ── BREADCRUMBS & BACK BUTTON ─────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-8 md:px-16 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <nav className="text-xs font-sans tracking-wider text-[#8C7A6A] flex items-center gap-2" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#8C6A3B] transition-colors">Início</Link>
            <span>/</span>
            <Link href="/artefactos" className="hover:text-[#8C6A3B] transition-colors">Artefactos</Link>
            <span>/</span>
            <span className="text-[#6B4E2D]">{product.category}</span>
            <span>/</span>
            <span className="text-[#1D1815] font-medium truncate max-w-[200px]">{product.name}</span>
          </nav>
          
          <Link
            href="/artefactos"
            className="inline-flex items-center gap-2 text-xs font-sans font-medium tracking-[0.2em] uppercase text-[#6B4E2D] hover:text-[#8C6A3B] transition-colors"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Voltar ao Catálogo
          </Link>
        </div>

        {/* ── PRODUCT DETAILED DISPLAY ──────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-8 md:px-16" aria-label={`Detalhes de ${product.name}`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left: Product Image Box */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="left" delay={100}>
                <div className="relative aspect-[3/4] bg-[#E8E0D5] border border-[rgba(29,24,21,0.08)] overflow-hidden rounded-sm shadow-sm group">
                  <Image
                    alt={product.name}
                    src={product.img}
                    fill
                    priority
                    className="object-contain p-8 transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  {product.badge && (
                    <div className="absolute top-6 left-0 bg-[#8C6A3B] text-[#0E0B0A] text-[10px] font-sans font-semibold tracking-wider px-4 py-1.5 uppercase shadow-sm">
                      {product.badge}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Product Meta & Description */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <ScrollReveal direction="right" delay={150}>
                <div className="space-y-6">
                  <div>
                    <span className="inline-block text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-[#8C6A3B] mb-3">
                      {product.category}
                    </span>
                    <h1 className="font-serif italic text-4xl md:text-5xl text-[#1D1815] leading-[1.1] mb-2">
                      {product.name}
                    </h1>
                    <p className="text-lg text-[#6B4E2D] italic font-serif">
                      {product.shortDesc}
                    </p>
                  </div>
                  
                  <div className="border-t border-b border-[rgba(29,24,21,0.1)] py-5 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-sans text-[#8C7A6A] block uppercase tracking-wider mb-1">Preço Consagrado</span>
                      <span className="text-3xl font-serif font-semibold text-[#1D1815]">{product.price}</span>
                    </div>
                    <span className="text-xs font-sans text-[#6B4E2D] bg-[#E8E0D5] px-3 py-1.5 rounded-sm uppercase tracking-wider font-medium">
                      Pronto para entrega
                    </span>
                  </div>

                  {/* Quick description & spiritual purpose */}
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xs font-sans font-bold tracking-[0.15em] uppercase text-[#1D1815] mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8C6A3B]" />
                        O que é este Artefacto?
                      </h2>
                      <p className="text-body text-sm text-[#4E443C] leading-relaxed">
                        {product.whatItIs}
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xs font-sans font-bold tracking-[0.15em] uppercase text-[#1D1815] mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8C6A3B]" />
                        Propósito Espiritual
                      </h2>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 mt-2">
                        {product.forWhat.map((item, idx) => (
                          <li key={idx} className="text-xs text-[#5C5045] leading-relaxed flex items-start gap-2">
                            <span className="material-symbols-outlined text-[#8C6A3B] text-sm mt-0.5 shrink-0">check_circle</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Call To Action */}
                <div className="mt-8 pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#6B4E2D] hover:bg-[#8C6A3B] text-[#F2EDE6] font-sans text-xs font-semibold tracking-[0.2em] uppercase rounded-sm transition-all duration-300 shadow-sm"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202 0 6.213 1.248 8.477 3.518 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005 0-3.973-.504-5.717-1.464L0 24zm6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654zm11.167-9.964c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
                    </svg>
                    Encomendar via WhatsApp
                  </a>
                  <p className="text-[10px] text-[#8C7A6A] mt-2 font-sans tracking-wide">
                    * Ao clicar, abrirá uma conversa no WhatsApp com um pedido pré-formatado.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── DETAIL TABS / RICH COPY ──────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-8 md:px-16 mt-20 pt-16 border-t border-[rgba(29,24,21,0.1)]">
          <ScrollReveal direction="up" delay={200}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Side: Full detailed description */}
              <div className="lg:col-span-8 space-y-8">
                <div>
                  <h2 className="font-serif italic text-2xl text-[#1D1815] mb-4">
                    História e Simbologia Ritual
                  </h2>
                  <div className="text-body text-sm text-[#4E443C] leading-relaxed whitespace-pre-line space-y-4">
                    {product.fullDescription}
                  </div>
                </div>

                <div className="bg-[#E8E0D5] p-8 border border-[rgba(29,24,21,0.06)] rounded-sm">
                  <h3 className="font-serif italic text-xl text-[#1D1815] mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#6B4E2D]">auto_stories</span>
                    Como Utilizar (Instruções Ritualísticas)
                  </h3>
                  <p className="text-body text-sm text-[#5C5045] leading-relaxed">
                    {product.howToUse}
                  </p>
                </div>
              </div>

              {/* Right Side: Specifications / Properties Card */}
              <div className="lg:col-span-4">
                <div className="border border-[rgba(29,24,21,0.08)] bg-[#E8E0D5]/50 p-8 rounded-sm space-y-6">
                  <h3 className="text-xs font-sans font-bold tracking-[0.15em] uppercase text-[#1D1815]">
                    Características do Artefacto
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <span className="text-[10px] font-sans text-[#8C7A6A] block uppercase tracking-wider">Origem & Preparação</span>
                      <span className="text-sm font-medium text-[#1D1815]">Consagrado em Aveiro, Portugal</span>
                    </div>

                    {product.ingredients && (
                      <div>
                        <span className="text-[10px] font-sans text-[#8C7A6A] block uppercase tracking-wider">Composição Mágica</span>
                        <span className="text-sm font-medium text-[#1D1815] leading-relaxed block mt-0.5">
                          {product.ingredients}
                        </span>
                      </div>
                    )}

                    <div>
                      <span className="text-[10px] font-sans text-[#8C7A6A] block uppercase tracking-wider">Propriedades Vibracionais</span>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {product.properties.map((prop, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-sans bg-[#F2EDE6] text-[#6B4E2D] px-2.5 py-1 uppercase tracking-wider font-medium border border-[rgba(29,24,21,0.04)]"
                          >
                            {prop}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[rgba(29,24,21,0.08)]">
                      <span className="text-[10px] font-sans text-[#8C7A6A] block uppercase tracking-wider mb-2">Garantia Espiritual</span>
                      <p className="text-[11px] text-[#6B5E50] leading-relaxed italic">
                        Todos os nossos produtos são limpos energeticamente e consagrados com intenção pura por Maria Manuela Gonçalves antes de serem disponibilizados.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ── RELATED PRODUCTS ──────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-8 md:px-16 mt-24" aria-label="Produtos Relacionados">
          <ScrollReveal direction="up">
            <div className="flex items-end justify-between border-b border-[rgba(29,24,21,0.1)] pb-4 mb-10">
              <h2 className="font-serif italic text-3xl text-[#1D1815]">
                Outros Artefactos Consagrados
              </h2>
              <Link
                href="/artefactos"
                className="text-xs font-sans font-medium tracking-[0.15em] uppercase text-[#6B4E2D] hover:text-[#8C6A3B] transition-colors flex items-center gap-1"
              >
                Ver Todos <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((rel, i) => (
              <ScrollReveal key={rel.id} delay={i * 80} direction="up">
                <Link href={`/artefactos/${rel.slug}`} className="group block cursor-pointer">
                  <article>
                    <div className="relative aspect-[3/4] bg-[#E8E0D5] mb-4 overflow-hidden rounded-sm border border-[rgba(29,24,21,0.04)]">
                      <Image
                        alt={rel.name}
                        src={rel.img}
                        fill
                        className="object-contain p-6 transition-transform duration-700 group-hover:scale-[1.06]"
                      />
                      {rel.badge && (
                        <div className="absolute top-3 left-0 bg-[#6B4E2D] text-[#F2EDE6] text-[8px] font-sans font-semibold tracking-wider px-2 py-0.5 uppercase">
                          {rel.badge}
                        </div>
                      )}
                    </div>
                    <div className="space-y-1 px-1">
                      <span className="text-[9px] font-sans tracking-widest uppercase text-[#8C6A3B] block">
                        {rel.category}
                      </span>
                      <h3 className="font-serif italic text-[#1D1815] text-base leading-snug group-hover:text-[#8C6A3B] transition-colors duration-300">
                        {rel.name}
                      </h3>
                      <p className="font-serif italic text-[#1D1815] text-sm font-medium pt-0.5">
                        {rel.price}
                      </p>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
