import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

/* ── SEO METADATA ───────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Serviços Místicos & Espirituais | Mundo Mágico",
  description:
    "Leitura de tarot, rituais de amor e amarração, rituais de proteção e prosperidade, consulta espiritual, limpeza energética e banhos rituais. Atendimento presencial em Aveiro e online para todo o país.",
  keywords: [
    "leitura de tarot Aveiro",
    "ritual de amor",
    "amarração amorosa",
    "ritual de proteção",
    "limpeza energética",
    "banho ritual",
    "consulta espiritual",
    "ritual de prosperidade",
    "magia branca Aveiro",
    "mundo mágico serviços",
    "tarot online Aveiro",
  ],
  alternates: {
    canonical: "/servicos",
  },
  openGraph: {
    title: "Serviços Místicos & Espirituais | Mundo Mágico",
    description:
      "Rituais de amor, tarot, proteção, prosperidade e limpeza energética. Serviços espirituais personalizados em Aveiro e online com décadas de tradição ancestral.",
    type: "website",
    locale: "pt_PT",
  },
};

/* ── SERVICE DATA ───────────────────────────────────────────────── */
const SERVICES = [
  {
    id: "leitura-tarot",
    num: "01",
    name: "Consulta de Tarot Aveiro",
    tagline: "Clareza para o teu caminho — Presencial e Online",
    fullDesc:
      "O tarot é uma das ferramentas de autoconhecimento mais antigas do mundo ocidental. Cada tiragem é única e personalizada à tua situação — seja em amor, carreira, família ou espiritualidade. Utilizamos baralhos tradicionais de Marselha e Rider-Waite, lidos por praticantes com mais de 15 anos de experiência. A leitura é confidencial, respeitosa e sem julgamentos.",
    details: [
      "Duração: 45 a 60 minutos",
      "Modalidade: presencial ou online (videochamada)",
      "Tiragens: passado/presente/futuro, cruz celta, tiragem anual",
      "Gravação da sessão disponível mediante pedido",
    ],
    price: "A partir de 35 €",
    badge: "Mais Pedido",
  },
  {
    id: "ritual-amor",
    num: "02",
    name: "Rituais de Amor & Amarração",
    tagline: "Restabelece ligações, fortalece vínculos",
    fullDesc:
      "Os rituais de amor são dos trabalhos mais delicados e requerem responsabilidade e ética espiritual. No Mundo Mágico, cada ritual é preparado individualmente com ingredientes naturais — velas artesanais, ervas secas, óleos essenciais e selos rituais. Trabalhamos a atracção, a reconciliação, a fidelidade e a proteção do casal. Não realizamos trabalhos que violem o livre-arbítrio ou causem dano a terceiros.",
    details: [
      "Consulta prévia obrigatória (gratuita, 15 min)",
      "Prazo de preparo: 3 a 7 dias úteis",
      "Acompanhamento pós-ritual de 30 dias",
      "Relatório fotográfico do processo",
    ],
    price: "A partir de 55 €",
    badge: null,
  },
  {
    id: "ritual-protecao",
    num: "03",
    name: "Rituais de Proteção",
    tagline: "Escudo energético contra inveja e energias negativas",
    fullDesc:
      "Energias negativas, inveja, mau-olhado e cargas acumuladas podem manifestar-se como azar persistente, mal-estar físico, conflitos familiares ou dificuldades financeiras. Os rituais de proteção do Mundo Mágico combinam defumações com ervas sagradas, selos de proteção, cristais programados e velas de limpeza. Também preparamos colares, pulseiras e amuletos personalizados para uso diário.",
    details: [
      "Limpeza energética de lar ou negócio: 90 min no local",
      "Amuleto de proteção personalizado incluído",
      "Recomendação de ervas para manutenção em casa",
      "Follow-up ao fim de 15 dias",
    ],
    price: "A partir de 45 €",
    badge: null,
  },
  {
    id: "ritual-prosperidade",
    num: "04",
    name: "Rituais de Prosperidade",
    tagline: "Abre caminhos, atrai abundância",
    fullDesc:
      "Quando o dinheiro não entra, as oportunidades não aparecem ou os negócios estagnam, pode existir um bloqueio energético a necessitar de atenção. Os rituais de prosperidade do Mundo Mágico utilizam ervas de atracção financeira, velas verdes e douradas, selos de Mercúrio e Júpiter, e afirmações personalizadas. Realizados em dias e horas planetárias favoráveis para maximizar o resultado.",
    details: [
      "Análise prévia da situação financeira/profissional",
      "Ritual realizado em lua crescente ou nova",
      "Kit de manutenção de prosperidade enviado por correio",
      "Acompanhamento durante 21 dias",
    ],
    price: "A partir de 50 €",
    badge: "Novo",
  },
  {
    id: "limpeza-energetica",
    num: "05",
    name: "Limpeza Espiritual Portugal",
    tagline: "Renova a tua aura e dissolve bloqueios energéticos",
    fullDesc:
      "A limpeza energética pessoal é recomendada para quem sente cansaço inexplicável, má sorte persistente, sonhos perturbadores ou sensação de peso emocional constante. A sessão combina defumação com palo santo e ervas sagradas, passes de cristais de quartzo e ametista, e um banho ritual preparado com ervas específicas para a situação da pessoa.",
    details: [
      "Duração: 60 minutos",
      "Modalidade: presencial",
      "Banho ritual de ervas incluído (para realizar em casa)",
      "Proteção pós-limpeza com amuleto simples",
    ],
    price: "A partir de 40 €",
    badge: null,
  },
  {
    id: "consulta-espiritual",
    num: "06",
    name: "Consulta Espiritual",
    tagline: "Orientação para o teu momento de vida",
    fullDesc:
      "A consulta espiritual combina diferentes ferramentas de acordo com a necessidade da pessoa: tarot, búzios, runas, leitura de aura ou canalização intuitiva. Não se trata de adivinhar o futuro — trata-se de compreender o presente com profundidade, identificar padrões que se repetem e receber orientação para tomar decisões alinhadas com a tua essência.",
    details: [
      "Duração: 60 a 90 minutos",
      "Modalidade: presencial ou online",
      "Inclui guia escrito com as principais mensagens",
      "Disponível em português e inglês",
    ],
    price: "A partir de 50 €",
    badge: null,
  },
  {
    id: "banhos-rituais",
    num: "07",
    name: "Banhos Rituais & Ervas",
    tagline: "Purificação, atracção e equilíbrio",
    fullDesc:
      "Os banhos rituais são uma das práticas mais antigas e acessíveis da espiritualidade popular. No Mundo Mágico preparamos banhos personalizados de acordo com o teu objectivo: banhos de descarga, de atracção, de proteção e de fortalecimento espiritual. Cada preparado vem com instruções detalhadas, oração/afirmação recomendada e indicação do melhor momento para realizar.",
    details: [
      "Preparado artesanal com ervas naturais",
      "Instruções completas e afirmação incluídas",
      "Séries de 3, 7 ou 9 banhos disponíveis",
      "Envio para todo o país",
    ],
    price: "A partir de 12 €",
    badge: null,
  },
];

const FAQS = [
  {
    q: "Os rituais são seguros?",
    a: "Sim. Todos os trabalhos realizados no Mundo Mágico seguem princípios éticos e de magia branca — nunca feitos para causar dano. Cada trabalho é precedido de uma consulta para garantir que o objectivo é saudável e respeitoso.",
  },
  {
    q: "Quanto tempo demora um ritual a fazer efeito?",
    a: "Depende do tipo de trabalho e do alinhamento energético da pessoa. Em média, os primeiros sinais surgem entre 7 e 21 dias. Realizamos acompanhamento pós-ritual para monitorizar os resultados.",
  },
  {
    q: "É possível fazer consultas online?",
    a: "Sim. As leituras de tarot e consultas espirituais estão disponíveis por videochamada (Zoom, WhatsApp ou Google Meet). A eficácia é idêntica — a energia não tem fronteiras.",
  },
  {
    q: "Fazes envios para fora de Portugal?",
    a: "Sim. Enviamos kits de rituais, banhos, velas e amuletos para qualquer país. Prazo e custo de envio variam conforme o destino.",
  },
  {
    q: "Como faço para marcar um serviço?",
    a: "Podes contactar-nos por WhatsApp, Instagram ou através do formulário de contacto no nosso site. A consulta inicial é gratuita e sem compromisso.",
  },
];

export default function ServicosPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Mundo Mágico",
            description:
              "Loja esotérica em Aveiro, Portugal especializada em artefactos rituais, leitura de tarot, rituais de amor, proteção e prosperidade.",
            url: "https://www.lojamundomagico.pt",
            telephone: "+351912672435",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Rua da Prata sn, Santa Joana",
              addressLocality: "Aveiro",
              postalCode: "3810-314",
              addressCountry: "PT",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Serviços Espirituais",
              itemListElement: SERVICES.map((s) => ({
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: s.name },
              })),
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": FAQS.map((faq) => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a,
              },
            })),
          }),
        }}
      />
      {/* BreadcrumbList — Serviços */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Início",
                "item": "https://www.lojamundomagico.pt"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Serviços",
                "item": "https://www.lojamundomagico.pt/servicos"
              }
            ]
          }),
        }}
      />

      {/* ── PAGE HERO ────────────────────────────────────────────────── */}
      <header className="pt-32 pb-24 px-8 md:px-16 bg-[#0E0B0A] border-b border-[rgba(232,222,210,0.08)]">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="text-xs font-sans tracking-wider text-[#7E7065] flex items-center gap-2 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#EDE4D8] transition-colors">Início</Link>
            <span>/</span>
            <span className="text-[#8C6A3B] font-medium">Serviços</span>
          </nav>

          <ScrollReveal direction="up" delay={100}>
            <span className="eyebrow">O que fazemos</span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={250}>
            <h1 className="text-display text-[clamp(2.5rem,6vw,5.5rem)] text-[#E8DED2] leading-[1.04] max-w-3xl mb-8">
              Serviços<br />
              <em className="text-[#8C6A3B]">Espirituais</em>
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={400}>
            <p className="text-body text-[#B9AA9A] max-w-[55ch] text-base leading-relaxed">
              Do tarot à limpeza energética, dos rituais de amor à prosperidade — cada serviço
              é realizado com ética, respeito e décadas de conhecimento ancestral. Atendimento
              presencial na nossa loja física em Aveiro e online para todo o país.
            </p>
          </ScrollReveal>
        </div>
      </header>

      <main>
        {/* ── SERVICES ─────────────────────────────────────────────── */}
        <section className="bg-[#0E0B0A]" aria-label="Serviços espirituais">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            {SERVICES.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 60} direction="up">
                <article
                  id={service.id}
                  className="group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 py-16 border-t border-[rgba(232,222,210,0.08)] hover:border-[rgba(140,106,59,0.22)] transition-colors duration-500"
                  aria-labelledby={`svc-${service.id}`}
                >
                  {/* Number col */}
                  <div className="md:col-span-2 flex flex-col gap-4">
                    <span className="text-label text-[#7E7065]">{service.num}</span>
                    {service.badge && (
                      <span className="inline-block bg-[#8C6A3B] px-3 py-1 text-[9px] font-sans font-medium tracking-[0.2em] uppercase text-[#0E0B0A] w-fit">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Name col */}
                  <div className="md:col-span-4">
                    <h2
                      id={`svc-${service.id}`}
                      className="text-heading text-[#E8DED2] text-2xl md:text-[1.75rem] mb-2 group-hover:text-[#8C6A3B] transition-colors duration-400"
                    >
                      {service.name}
                    </h2>
                    <span className="eyebrow-accent">{service.tagline}</span>
                    <p className="font-serif italic text-[#8C6A3B] text-xl mt-4">{service.price}</p>
                    <div className="mt-8">
                      <Link href="/contactos" className="btn-bronze" style={{ fontSize: "0.6rem" }}>
                        Marcar Consulta
                      </Link>
                    </div>
                  </div>

                  {/* Description col */}
                  <div className="md:col-span-6 space-y-6">
                    <p className="text-body text-base leading-relaxed">{service.fullDesc}</p>
                    <ul className="space-y-2.5" aria-label={`Detalhes: ${service.name}`}>
                      {service.details.map((d) => (
                        <li key={d} className="flex items-start gap-3 text-body text-sm text-[#7E7065]">
                          <span className="block w-1 h-1 rounded-full bg-[#8C6A3B] mt-2 shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <section
          className="py-24 md:py-32 bg-[#161210] border-t border-[rgba(232,222,210,0.08)]"
          aria-label="Perguntas frequentes"
        >
          <div className="max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <ScrollReveal>
                <span className="eyebrow">Dúvidas</span>
                <h2 className="text-heading text-[#E8DED2] text-3xl md:text-4xl">
                  Perguntas<br />frequentes
                </h2>
              </ScrollReveal>
            </div>
            <div className="md:col-span-8">
              {FAQS.map((faq, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className="py-8 border-t border-[rgba(232,222,210,0.08)]">
                    <h3 className="font-serif italic text-[#E8DED2] text-lg mb-3">{faq.q}</h3>
                    <p className="text-body text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────── */}
        <section className="py-24 md:py-32 bg-[#0E0B0A] border-t border-[rgba(232,222,210,0.08)]">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            <ScrollReveal direction="up">
              <div className="max-w-2xl">
                <span className="eyebrow">Próximo passo</span>
                <h2 className="text-heading text-[#E8DED2] text-3xl md:text-4xl mb-6">
                  Pronto para começar<br />a tua jornada?
                </h2>
                <p className="text-body text-base leading-relaxed mb-10 max-w-[50ch]">
                  Consulta inicial gratuita, sem compromisso. Fala connosco por WhatsApp
                  ou preenche o formulário de contacto.
                </p>
                <div className="flex flex-wrap items-center gap-5">
                  <Link href="/contactos" className="btn-bronze">Contactar Agora</Link>
                  <Link
                    href="/artefactos"
                    className="relative inline-flex items-center gap-4 px-8 py-3.5 border border-[#8C6A3B]/45 hover:border-[#8C6A3B] text-white hover:text-white font-sans text-[0.72rem] font-medium tracking-[0.25em] uppercase transition-all duration-500 overflow-hidden group rounded-sm bg-transparent"
                  >
                    <span className="relative z-10 flex items-center gap-2.5">
                      <span className="font-serif italic text-[#8C6A3B] group-hover:text-white transition-colors duration-300 text-sm">✦</span>
                      Ver Artefactos
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-[#8C6A3B]/0 via-[#8C6A3B]/10 to-[#8C6A3B]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#8C6A3B] group-hover:w-full transition-all duration-500" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </>
  );
}
