import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade | Mundo Mágico",
  description:
    "Política de privacidade da Mundo Mágico. Saiba como tratamos os seus dados pessoais em conformidade com o RGPD.",
  alternates: {
    canonical: "/politica-privacidade",
  },
};

const sections = [
  {
    title: "1. Identidade e Contacto do Responsável pelo Tratamento",
    content: `A Mundo Mágico, loja esotérica com sede em Rua da Prata sn, Santa Joana, 3810-314 Aveiro, Portugal (doravante "Mundo Mágico", "nós" ou "nosso"), é a responsável pelo tratamento dos dados pessoais recolhidos através deste website e dos serviços prestados.

Para questões relacionadas com privacidade, pode contactar-nos através de:
• Email: borboleta_mariana18@hotmail.com
• Telefone: +351 912 672 435`,
  },
  {
    title: "2. Dados Pessoais que Recolhemos",
    content: `Recolhemos os seguintes tipos de dados pessoais:

Dados que nos fornece diretamente:
• Nome e apelido
• Endereço de email
• Número de telefone
• Conteúdo das mensagens e pedidos de contacto

Dados recolhidos automaticamente:
• Endereço IP
• Tipo de browser e sistema operativo
• Páginas visitadas e tempo de visita
• Cookies e tecnologias semelhantes (consulte a nossa Política de Cookies)`,
  },
  {
    title: "3. Finalidades e Base Legal do Tratamento",
    content: `Tratamos os seus dados para as seguintes finalidades:

• Resposta a pedidos de contacto e consultas — base legal: execução de diligências pré-contratuais (Art. 6.º, n.º 1, al. b) do RGPD)
• Prestação de serviços esotéricos e rituais — base legal: execução de contrato (Art. 6.º, n.º 1, al. b) do RGPD)
• Análise e melhoria do website — base legal: interesse legítimo (Art. 6.º, n.º 1, al. f) do RGPD)
• Envio de comunicações de marketing, com o seu consentimento — base legal: consentimento (Art. 6.º, n.º 1, al. a) do RGPD)
• Cumprimento de obrigações legais — base legal: obrigação legal (Art. 6.º, n.º 1, al. c) do RGPD)`,
  },
  {
    title: "4. Conservação dos Dados",
    content: `Conservamos os seus dados pessoais apenas pelo tempo necessário para as finalidades para as quais foram recolhidos:

• Dados de contacto e mensagens: 3 anos após o último contacto
• Dados de faturação e transações: 10 anos (obrigação legal fiscal)
• Dados de analytics: 13 meses (cookies de sessão e análise)
• Dados de marketing: até revogação do consentimento

Findo o prazo de conservação, os dados são eliminados ou anonimizados de forma segura.`,
  },
  {
    title: "5. Partilha de Dados com Terceiros",
    content: `Não vendemos nem cedemos os seus dados pessoais a terceiros para fins comerciais. Podemos partilhar os seus dados nas seguintes situações:

• Prestadores de serviços que nos auxiliam na operação do website (ex. alojamento, analytics) — sujeitos a acordos de confidencialidade e processamento de dados
• Autoridades públicas, quando legalmente exigido
• Em caso de fusão, aquisição ou venda de ativos da empresa, com as devidas garantias

Todos os terceiros com quem partilhamos dados estão sujeitos a medidas de proteção adequadas conforme o RGPD.`,
  },
  {
    title: "6. Transferências Internacionais de Dados",
    content: `Caso os seus dados sejam transferidos para países fora do Espaço Económico Europeu (EEE), garantimos que essa transferência é realizada com base em mecanismos legais adequados, como Cláusulas Contratuais-Tipo aprovadas pela Comissão Europeia, ou para países com decisão de adequação.`,
  },
  {
    title: "7. Os Seus Direitos",
    content: `Ao abrigo do RGPD, tem os seguintes direitos:

• Direito de acesso — saber que dados tratamos sobre si
• Direito de retificação — corrigir dados inexatos ou incompletos
• Direito ao apagamento ("direito a ser esquecido") — solicitar a eliminação dos seus dados
• Direito à limitação do tratamento — restringir o uso dos seus dados em determinadas circunstâncias
• Direito à portabilidade — receber os seus dados num formato estruturado e legível
• Direito de oposição — opor-se ao tratamento baseado em interesse legítimo ou para marketing direto
• Direito de retirar o consentimento — a qualquer momento, sem afetar o tratamento anterior

Para exercer os seus direitos, contacte-nos em borboleta_mariana18@hotmail.com. Responderemos no prazo de 30 dias.

Tem ainda o direito de apresentar reclamação à autoridade de controlo competente: Comissão Nacional de Proteção de Dados (CNPD) — www.cnpd.pt.`,
  },
  {
    title: "8. Segurança dos Dados",
    content: `Implementamos medidas técnicas e organizacionais adequadas para proteger os seus dados pessoais contra acesso não autorizado, perda acidental, destruição ou alteração. Estas medidas incluem encriptação SSL, acesso restrito aos dados e revisões periódicas das nossas práticas de segurança.`,
  },
  {
    title: "9. Cookies",
    content: `Utilizamos cookies e tecnologias semelhantes no nosso website. Para informação detalhada sobre os cookies que utilizamos e como os gerir, consulte a nossa Política de Cookies.`,
  },
  {
    title: "10. Alterações a Esta Política",
    content: `Podemos atualizar esta Política de Privacidade periodicamente para refletir alterações nas nossas práticas ou na legislação aplicável. Quando o fizermos, atualizaremos a data de "última atualização" no topo desta página e, quando as alterações forem significativas, notificamo-lo de forma adequada.`,
  },
];

export default function PoliticaPrivacidadePage() {
  return (
    <>
      {/* PAGE HERO */}
      <header className="pt-32 pb-24 px-8 md:px-16 bg-[#0E0B0A] border-b border-[rgba(232,222,210,0.08)]">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="text-xs font-sans tracking-wider text-[#7E7065] flex items-center gap-2 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#EDE4D8] transition-colors">Início</Link>
            <span>/</span>
            <span className="text-[#8C6A3B] font-medium">Política de Privacidade</span>
          </nav>

          <ScrollReveal direction="up" delay={100}>
            <span className="eyebrow">Documentação Legal</span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={250}>
            <h1 className="text-display text-[clamp(2.2rem,5vw,4.5rem)] text-[#E8DED2] leading-[1.04] max-w-3xl mb-8">
              Política de<br />
              <em className="text-[#8C6A3B]">Privacidade</em>
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={400}>
            <p className="text-body text-[#B9AA9A] max-w-[55ch] text-base leading-relaxed">
              Em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD) — UE 2016/679.
              Última atualização: Maio de 2026.
            </p>
          </ScrollReveal>
        </div>
      </header>

      <main className="bg-[#0E0B0A]">
        <section className="py-24 px-8 md:px-16">
          <div className="max-w-4xl mx-auto space-y-16">
            {sections.map((section, i) => (
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

            {/* Legal nav links */}
            <ScrollReveal direction="up">
              <div className="mt-16 pt-10 border-t border-[rgba(232,222,210,0.08)] flex flex-wrap gap-8">
                <Link href="/politica-cookies" className="text-label text-[#8C6A3B] hover:text-[#E8DED2] transition-colors duration-300 uppercase tracking-widest text-xs">
                  Política de Cookies →
                </Link>
                <Link href="/termos-servico" className="text-label text-[#8C6A3B] hover:text-[#E8DED2] transition-colors duration-300 uppercase tracking-widest text-xs">
                  Termos de Serviço →
                </Link>
                <Link href="/contactos" className="text-label text-[#8C6A3B] hover:text-[#E8DED2] transition-colors duration-300 uppercase tracking-widest text-xs">
                  Contactar-nos →
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </>
  );
}
