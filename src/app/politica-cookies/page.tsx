import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Cookies | Mundo Mágico",
  description:
    "Política de cookies da Mundo Mágico. Saiba que cookies utilizamos, para que servem e como os pode gerir.",
  alternates: {
    canonical: "/politica-cookies",
  },
};

const cookieTypes = [
  {
    name: "Cookies Estritamente Necessários",
    purpose: "Essenciais para o funcionamento básico do website. Não podem ser desativados.",
    examples: "Sessão, preferências de consentimento de cookies",
    retention: "Sessão / 12 meses",
    canDisable: false,
  },
  {
    name: "Cookies de Desempenho e Análise",
    purpose: "Permitem-nos compreender como os visitantes interagem com o website, melhorando a experiência.",
    examples: "Google Analytics, dados de navegação anónimos",
    retention: "13 meses",
    canDisable: true,
  },
  {
    name: "Cookies de Funcionalidade",
    purpose: "Recordam as suas preferências e personalizam a experiência de navegação.",
    examples: "Preferências de idioma, configurações de visualização",
    retention: "12 meses",
    canDisable: true,
  },
  {
    name: "Cookies de Marketing",
    purpose: "Utilizados para apresentar conteúdos relevantes e anúncios personalizados.",
    examples: "Pixel do Facebook, remarketing",
    retention: "90 dias",
    canDisable: true,
  },
];

const sections = [
  {
    title: "1. O que são Cookies?",
    content: `Os cookies são pequenos ficheiros de texto que um website coloca no seu dispositivo (computador, tablet ou telemóvel) quando o visita. Permitem ao website recordar as suas ações e preferências durante um período de tempo, de modo a não ter de as reintroduzir sempre que regressar ao site.

Os cookies não são vírus nem programas maliciosos. Não recolhem informações pessoais armazenadas no seu dispositivo, não transmitem vírus e não podem ser usados para o identificar individualmente, salvo quando o decide.`,
  },
  {
    title: "2. Como Utilizamos os Cookies",
    content: `A Mundo Mágico utiliza cookies e tecnologias semelhantes (como web beacons e pixels) para:

• Garantir o correto funcionamento do website
• Recordar as suas preferências de navegação
• Analisar o tráfego e comportamento dos utilizadores para melhorar continuamente o website
• Possibilitar funcionalidades de partilha em redes sociais
• Apresentar conteúdos relevantes e personalizados

Nunca utilizamos cookies para recolher informações que nos permitam identificá-lo sem o seu conhecimento ou consentimento.`,
  },
  {
    title: "3. Tipos de Cookies que Utilizamos",
    content: `Consulte a tabela detalhada abaixo para informação sobre cada categoria de cookies que utilizamos no nosso website.`,
  },
  {
    title: "4. Cookies de Terceiros",
    content: `Alguns cookies são colocados por serviços de terceiros que aparecem nas nossas páginas. Não controlamos a colocação destes cookies por parte dos terceiros. Para mais informações, consulte as políticas de privacidade dos respetivos serviços:

• Google Analytics: analytics.google.com/analytics/web/provision
• Meta (Facebook) Pixel: www.facebook.com/privacy/explanation
• Plataformas de redes sociais (partilha de conteúdo)

Recomendamos que consulte as políticas de privacidade destes terceiros para entender como utilizam os dados recolhidos.`,
  },
  {
    title: "5. Gestão e Controlo de Cookies",
    content: `Tem várias opções para controlar e gerir os cookies:

Através do banner de cookies: Quando visita o nosso website pela primeira vez, é-lhe apresentado um banner de cookies onde pode aceitar ou recusar as diferentes categorias de cookies.

Através do seu browser: A maioria dos browsers permite-lhe controlar os cookies através das definições. Pode configurar o seu browser para:
• Bloquear todos os cookies
• Receber alertas quando cookies são colocados
• Eliminar cookies quando fechar o browser

Tenha em atenção que desativar certos cookies pode afetar a funcionalidade do website.

Browsers mais comuns e como gerir cookies:
• Chrome: Definições → Privacidade e Segurança → Cookies
• Firefox: Opções → Privacidade e Segurança
• Safari: Preferências → Privacidade
• Edge: Definições → Privacidade, Pesquisa e Serviços`,
  },
  {
    title: "6. Retirada do Consentimento",
    content: `Pode retirar o seu consentimento para o uso de cookies em qualquer momento, clicando em "Gerir Preferências de Cookies" no rodapé do nosso website, ou eliminando os cookies do seu browser.

A retirada do consentimento não afeta a licitude do tratamento efetuado com base no consentimento previamente dado.`,
  },
  {
    title: "7. Atualizações desta Política",
    content: `Esta Política de Cookies pode ser atualizada periodicamente para refletir alterações na nossa utilização de cookies ou na legislação aplicável. Recomendamos que a consulte regularmente.

Última atualização: Maio de 2026.`,
  },
];

export default function PoliticaCookiesPage() {
  return (
    <>
      {/* PAGE HERO */}
      <header className="pt-32 pb-24 px-8 md:px-16 bg-[#0E0B0A] border-b border-[rgba(232,222,210,0.08)]">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="text-xs font-sans tracking-wider text-[#7E7065] flex items-center gap-2 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#EDE4D8] transition-colors">Início</Link>
            <span>/</span>
            <span className="text-[#8C6A3B] font-medium">Política de Cookies</span>
          </nav>

          <ScrollReveal direction="up" delay={100}>
            <span className="eyebrow">Documentação Legal</span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={250}>
            <h1 className="text-display text-[clamp(2.2rem,5vw,4.5rem)] text-[#E8DED2] leading-[1.04] max-w-3xl mb-8">
              Política de<br />
              <em className="text-[#8C6A3B]">Cookies</em>
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={400}>
            <p className="text-body text-[#B9AA9A] max-w-[55ch] text-base leading-relaxed">
              Informação transparente sobre os cookies e tecnologias semelhantes utilizados no nosso website.
              Última atualização: Maio de 2026.
            </p>
          </ScrollReveal>
        </div>
      </header>

      <main className="bg-[#0E0B0A]">
        <section className="py-24 px-8 md:px-16">
          <div className="max-w-4xl mx-auto space-y-16">

            {sections.slice(0, 3).map((section, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 40}>
                <div className="border-l-2 border-[rgba(140,106,59,0.3)] pl-8">
                  <h2 className="font-serif italic text-[#E8DED2] text-xl md:text-2xl mb-5 leading-snug">
                    {section.title}
                  </h2>
                  <div className="text-body text-[#B9AA9A] text-base leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              </ScrollReveal>
            ))}

            {/* Cookie types table */}
            <ScrollReveal direction="up">
              <div className="space-y-4">
                {cookieTypes.map((cookie, i) => (
                  <div
                    key={i}
                    className="border border-[rgba(232,222,210,0.08)] p-6 hover:border-[rgba(140,106,59,0.3)] transition-colors duration-300"
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="font-serif italic text-[#E8DED2] text-lg">{cookie.name}</h3>
                      <span
                        className={`shrink-0 text-[0.6rem] font-sans font-medium tracking-[0.15em] uppercase px-3 py-1 border ${
                          cookie.canDisable
                            ? "border-[rgba(140,106,59,0.4)] text-[#8C6A3B]"
                            : "border-[rgba(232,222,210,0.15)] text-[#7E7065]"
                        }`}
                      >
                        {cookie.canDisable ? "Opcional" : "Necessário"}
                      </span>
                    </div>
                    <p className="text-body text-[#B9AA9A] text-sm leading-relaxed mb-3">{cookie.purpose}</p>
                    <div className="flex flex-wrap gap-x-8 gap-y-1 text-xs text-[#7E7065] font-sans">
                      <span><span className="text-[#4A4240] uppercase tracking-wider mr-2">Exemplos:</span>{cookie.examples}</span>
                      <span><span className="text-[#4A4240] uppercase tracking-wider mr-2">Retenção:</span>{cookie.retention}</span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {sections.slice(3).map((section, i) => (
              <ScrollReveal key={i + 3} direction="up" delay={i * 40}>
                <div className="border-l-2 border-[rgba(140,106,59,0.3)] pl-8">
                  <h2 className="font-serif italic text-[#E8DED2] text-xl md:text-2xl mb-5 leading-snug">
                    {section.title}
                  </h2>
                  <div className="text-body text-[#B9AA9A] text-base leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              </ScrollReveal>
            ))}

            {/* Legal nav links */}
            <ScrollReveal direction="up">
              <div className="mt-16 pt-10 border-t border-[rgba(232,222,210,0.08)] flex flex-wrap gap-8">
                <Link href="/politica-privacidade" className="text-label text-[#8C6A3B] hover:text-[#E8DED2] transition-colors duration-300 uppercase tracking-widest text-xs">
                  Política de Privacidade →
                </Link>
                <Link href="/termos-servico" className="text-label text-[#8C6A3B] hover:text-[#E8DED2] transition-colors duration-300 uppercase tracking-widest text-xs">
                  Termos de Serviço →
                </Link>
              </div>
            </ScrollReveal>

          </div>
        </section>
      </main>
    </>
  );
}
