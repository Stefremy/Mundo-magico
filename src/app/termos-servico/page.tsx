import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Serviço | Mundo Mágico",
  description:
    "Termos e condições de utilização dos serviços da Mundo Mágico, loja esotérica em Aveiro, Portugal.",
  alternates: {
    canonical: "/termos-servico",
  },
};

const sections = [
  {
    title: "1. Identificação e Aceitação dos Termos",
    content: `Estes Termos de Serviço regulam a relação entre a Mundo Mágico (doravante "Mundo Mágico", "nós" ou "nosso"), com sede em Rua da Prata sn, Santa Joana, 3810-314 Aveiro, Portugal, e o utilizador (doravante "cliente", "você" ou "utilizador") dos nossos serviços e website.

Ao aceder ao nosso website, utilizar os nossos serviços ou adquirir os nossos produtos, confirma que leu, compreendeu e aceita estes Termos na sua totalidade. Se não concordar com algum dos termos, pedimos que não utilize os nossos serviços.

Para qualquer dúvida: borboleta_mariana18@hotmail.com | +351 912 672 435`,
  },
  {
    title: "2. Descrição dos Serviços",
    content: `A Mundo Mágico oferece os seguintes serviços e produtos:

Serviços Espirituais:
• Rituais de amor, proteção, prosperidade e limpeza energética
• Consultas esotéricas e de orientação espiritual
• Limpezas energéticas pessoais e de espaços
• Trabalhos de magia e rituais personalizados

Produtos:
• Artefactos rituais (velas, óleos, sabonetes, kits)
• Baralhos de Tarot e instrumentos divinatórios
• Acessórios e instrumentos de ritual

Os serviços são prestados de forma presencial na loja em Aveiro e/ou remotamente, conforme acordado com o cliente.`,
  },
  {
    title: "3. Natureza dos Serviços Esotéricos — Aviso Importante",
    content: `Os serviços esotéricos e rituais prestados pela Mundo Mágico têm natureza espiritual e simbólica. São oferecidos no contexto de tradições ancestrais e práticas esotéricas.

É fundamental compreender que:

• Os resultados dos rituais e trabalhos espirituais não podem ser garantidos. A eficácia depende de múltiplos fatores, incluindo a energia do cliente e as circunstâncias da sua situação.
• Os nossos serviços não substituem aconselhamento médico, psicológico, jurídico ou financeiro profissional. Em situações que requeiram ajuda profissional nessas áreas, recomendamos vivamente que recorra a especialistas qualificados.
• Não prometemos resultados específicos nem garantimos outcomes definidos.
• A Mundo Mágico atua com integridade, ética e respeito pelas leis universais.

O cliente aceita estes serviços com plena consciência e responsabilidade pela sua própria jornada espiritual.`,
  },
  {
    title: "4. Encomendas, Pagamentos e Preços",
    content: `Encomendas:
• As encomendas de produtos são realizadas presencialmente na loja ou através dos nossos canais de contacto.
• A confirmação de encomenda é enviada após receção do pagamento.

Pagamentos:
• Aceitamos pagamento em numerário, transferência bancária e outros métodos acordados.
• O pagamento deve ser efetuado antes da prestação do serviço ou envio do produto, salvo acordo prévio em contrário.

Preços:
• Os preços são indicados em euros (€) e incluem IVA à taxa legal aplicável.
• A Mundo Mágico reserva-se o direito de alterar os preços a qualquer momento. Será aplicado o preço em vigor no momento da encomenda.`,
  },
  {
    title: "5. Política de Cancelamento e Reembolsos",
    content: `Produtos físicos:
• Pode cancelar a encomenda de um produto antes do envio, sem qualquer encargo.
• Após receção, aceita-se troca ou reembolso no prazo de 14 dias, desde que o produto esteja em perfeitas condições e na embalagem original, conforme previsto na lei do consumidor portuguesa.
• Produtos personalizados ou consagrados não são reembolsáveis, salvo defeito.

Serviços espirituais:
• Os cancelamentos de consultas devem ser comunicados com pelo menos 24 horas de antecedência.
• Dado a natureza imaterial e pessoal dos rituais, os serviços iniciados não são reembolsáveis.
• Em caso de situações excecionais, analisamos cada caso individualmente com boa fé.

Direito de arrependimento:
• O cliente beneficia dos direitos previstos no Decreto-Lei n.º 24/2014, de 14 de fevereiro (regime dos contratos celebrados à distância e fora do estabelecimento comercial).`,
  },
  {
    title: "6. Envios e Entregas",
    content: `• A Mundo Mágico efetua envios para Portugal Continental, Ilhas e para o estrangeiro, mediante acordo prévio.
• Os prazos de entrega são indicativos e podem variar conforme o transportador e o destino.
• O risco de perda ou dano dos bens transmite-se para o cliente no momento da entrega.
• Em caso de produto danificado na entrega, o cliente deve contactar-nos no prazo de 48 horas.`,
  },
  {
    title: "7. Responsabilidade e Limitações",
    content: `A Mundo Mágico não será responsável por:

• Danos indiretos, acidentais ou consequentes resultantes da utilização dos nossos serviços
• Interpretações incorretas ou usos inadequados dos nossos produtos rituais
• Resultados de rituais que dependam de fatores externos ou da energia do próprio cliente
• Falhas ou indisponibilidade temporária do website por razões técnicas fora do nosso controlo

A nossa responsabilidade total, em caso de litígio, limita-se ao valor do serviço ou produto adquirido.`,
  },
  {
    title: "8. Propriedade Intelectual",
    content: `Todo o conteúdo do website da Mundo Mágico — incluindo textos, imagens, fotografias, logótipos, design, vídeos e outros materiais — é propriedade exclusiva da Mundo Mágico ou foi licenciado para utilização.

É expressamente proibido reproduzir, distribuir, modificar ou utilizar qualquer conteúdo do nosso website sem autorização prévia e escrita da Mundo Mágico.`,
  },
  {
    title: "9. Privacidade e Proteção de Dados",
    content: `O tratamento dos seus dados pessoais é realizado em conformidade com o RGPD e a legislação portuguesa aplicável. Para mais informações, consulte a nossa Política de Privacidade.

Ao utilizar os nossos serviços, consente que tratemos os seus dados para as finalidades descritas na referida política.`,
  },
  {
    title: "10. Legislação Aplicável e Resolução de Litígios",
    content: `Estes Termos de Serviço são regidos pela lei portuguesa. Em caso de litígio, as partes comprometem-se a procurar uma solução amigável.

Para resolução alternativa de litígios de consumo, o cliente pode recorrer às entidades previstas na lei:
• Centro de Arbitragem de Conflitos de Consumo de Lisboa — www.centroarbitragemlisboa.pt
• Portal do Consumidor — www.consumidor.pt
• Plataforma europeia de resolução de litígios em linha — ec.europa.eu/consumers/odr

Sem prejuízo do acima exposto, o foro competente é o Tribunal da Comarca de Aveiro.`,
  },
  {
    title: "11. Alterações aos Termos",
    content: `A Mundo Mágico reserva-se o direito de atualizar estes Termos de Serviço a qualquer momento. As alterações entram em vigor imediatamente após publicação no website. Recomendamos que consulte esta página regularmente.

Última atualização: Maio de 2026.`,
  },
];

export default function TermosServicoPage() {
  return (
    <>
      {/* WebPage & BreadcrumbList Schema — Terms */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://mundo-magico-theta.vercel.app/termos-servico/#webpage",
            "url": "https://mundo-magico-theta.vercel.app/termos-servico",
            "name": "Termos de Serviço | Mundo Mágico",
            "description": "Termos e condições de utilização dos serviços da Mundo Mágico, loja esotérica em Aveiro, Portugal.",
            "isPartOf": {
              "@id": "https://mundo-magico-theta.vercel.app/#website"
            },
            "breadcrumb": {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Início",
                  "item": "https://mundo-magico-theta.vercel.app"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Termos de Serviço",
                  "item": "https://mundo-magico-theta.vercel.app/termos-servico"
                }
              ]
            }
          })
        }}
      />
      {/* PAGE HERO */}
      <header className="pt-32 pb-24 px-8 md:px-16 bg-[#0E0B0A] border-b border-[rgba(232,222,210,0.08)]">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="text-xs font-sans tracking-wider text-[#7E7065] flex items-center gap-2 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#EDE4D8] transition-colors">Início</Link>
            <span>/</span>
            <span className="text-[#8C6A3B] font-medium">Termos de Serviço</span>
          </nav>

          <ScrollReveal direction="up" delay={100}>
            <span className="eyebrow">Documentação Legal</span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={250}>
            <h1 className="text-display text-[clamp(2.2rem,5vw,4.5rem)] text-[#E8DED2] leading-[1.04] max-w-3xl mb-8">
              Termos de<br />
              <em className="text-[#8C6A3B]">Serviço</em>
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={400}>
            <p className="text-body text-[#B9AA9A] max-w-[55ch] text-base leading-relaxed">
              Termos e condições que regem a utilização dos serviços e produtos da Mundo Mágico.
              Última atualização: Maio de 2026.
            </p>
          </ScrollReveal>
        </div>
      </header>

      <main className="bg-[#0E0B0A]">
        <section className="py-24 px-8 md:px-16">
          <div className="max-w-4xl mx-auto space-y-16">

            {/* Important notice callout */}
            <ScrollReveal direction="up">
              <div className="border border-[rgba(140,106,59,0.4)] bg-[rgba(140,106,59,0.05)] p-8">
                <p className="text-label text-[#8C6A3B] tracking-widest uppercase text-xs mb-3">Nota Importante</p>
                <p className="font-serif italic text-[#E8DED2] text-lg leading-relaxed">
                  &ldquo;Os serviços esotéricos têm natureza espiritual e simbólica. Não substituem aconselhamento médico, psicológico, jurídico ou financeiro profissional. Actuamos sempre com ética, respeito e intenção pura.&rdquo;
                </p>
              </div>
            </ScrollReveal>

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
                <Link href="/politica-privacidade" className="text-label text-[#8C6A3B] hover:text-[#E8DED2] transition-colors duration-300 uppercase tracking-widest text-xs">
                  Política de Privacidade →
                </Link>
                <Link href="/politica-cookies" className="text-label text-[#8C6A3B] hover:text-[#E8DED2] transition-colors duration-300 uppercase tracking-widest text-xs">
                  Política de Cookies →
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
