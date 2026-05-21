/* ─────────────────────────────────────────────────────────────────────────────
   Mundo Mágico — Master Product Data
   Source of truth for the catalog and individual product detail pages.
   ───────────────────────────────────────────────────────────────────────────── */

export interface Product {
  id: number;
  slug: string;
  name: string;
  shortDesc: string;
  price: string;
  priceNum: string; // numeric string for JSON-LD schema
  img: string;
  category: string;
  badge?: string | null;
  metaDescription: string;
  whatItIs: string;
  fullDescription: string;
  forWhat: string[];
  howToUse: string;
  properties: string[];
  ingredients?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    slug: "vela-vira-pensamento",
    name: "Vela Ritual Vira Pensamento",
    shortDesc: "Influência e Clareza Mental",
    price: "12,50 €",
    priceNum: "12.50",
    img: "/images/vela-vira-pensamento.jpeg",
    category: "Velas",
    badge: "Novo",
    metaDescription:
      "Vela Ritual Vira Pensamento — artefacto consagrado para redirecionar pensamentos e aproximar emocionalmente quem se fechou. Compre na loja esotérica Mundo Mágico em Aveiro.",
    whatItIs:
      "A Vela Vira Pensamento é uma vela ritual de cera natural infundida com ervas de ação mental como melissa, hortelã e lavanda, consagrada para influenciar e redirecionar o estado de espírito de uma pessoa específica.",
    fullDescription:
      "A arte de 'virar o pensamento' é uma das práticas mais antigas da magia popular ibérica e afro-brasileira. Fundamenta-se no princípio de que toda a energia mental pode ser reorientada através de intenção firme, palavras rituais e os elementos certos. Esta vela atua como uma âncora da sua intenção no plano físico, libertando fragrâncias e vibrações específicas que influenciam o campo energético ao redor do alvo.\n\nConsagrada pela nossa praticante Maria Manuela Gonçalves no espaço ritual do Mundo Mágico em Aveiro, esta vela chega até si carregada com mais de 16 anos de experiência espiritual. A sua formulação combina ervas tradicionais da farmacopeia esotérica portuguesa com óleos essenciais de ação comprovada na tradição ancestral.\n\nUse esta vela quando sentir que uma situação está bloqueada pela teimosia ou fechamento mental de alguém, quando deseja reconectar com uma pessoa afastada emocionalmente, ou quando necessita de clareza numa tomada de decisão importante.",
    forWhat: [
      "Redirecionar pensamentos negativos ou obsessivos de outra pessoa em relação a si",
      "Aproximar emocionalmente alguém que se fechou ou afastou sem razão clara",
      "Promover clareza mental em situações de confusão, dúvida ou indecisão",
      "Facilitar a comunicação com pessoas difíceis, teimosas ou resistentes",
      "Abrir a mente de alguém a uma nova perspetiva, proposta ou reconciliação",
    ],
    howToUse:
      "Acenda num local calmo, preferencialmente numa terça ou sábado à noite. Escreva o nome da pessoa num papel e coloque-o debaixo da vela. Concentre-se na intenção com clareza e serenidade, sem raiva ou desespero. Pode queimar até ao fim ou em sessões de 15 minutos durante 7 dias consecutivos.",
    properties: ["Influência", "Clareza Mental", "Comunicação", "Reconexão", "Abertura Emocional"],
  },
  {
    id: 2,
    slug: "velao-magico-volteio",
    name: "Velão Mágico Volteio",
    shortDesc: "Retorno de Energias Negativas",
    price: "15,00 €",
    priceNum: "15.00",
    img: "/images/velao-magico-volteio.jpeg",
    category: "Velões",
    badge: null,
    metaDescription:
      "Velão Mágico Volteio — potente artefacto esotérico para devolver feitiços, mau-olhado e energias negativas ao remetente. Trabalho de espelho e reversão. Mundo Mágico Aveiro.",
    whatItIs:
      "O Velão Volteio é uma grande vela ritual concebida para executar um trabalho de 'espelho' — devolver ao remetente qualquer energia negativa, inveja ou feitiço que lhe tenha sido intencionalmente enviado.",
    fullDescription:
      "O 'volteio' é um dos trabalhos mais respeitados da tradição esotérica luso-brasileira. Baseia-se no princípio universal de que a energia negativa enviada intencionalmente pertence ao seu criador e, quando refletida, retorna com a força que ganhou na viagem. Ao contrário de um trabalho de vingança, o volteio não cria nova negatividade — apenas devolve o que não é seu, tornando-o eticamente aceite em todas as tradições de magia branca.\n\nEste velão artesanal é formulado com ervas protetoras de ação espelho (como arruda, espinheiro alvar e alecrim), ceras naturais e lacres de selagem ritual. A sua robustez física e o tempo de queima prolongado garantem que a intenção seja sustentada durante todo o trabalho. Foi consagrado segundo os ritos tradicionais da nossa praticante experiente.\n\nIdeal para quem sente que algo de exterior está a bloquear a sua vida, a azarar as suas relações, a sabotar o seu trabalho ou a perturbar a paz do seu lar sem motivo aparente.",
    forWhat: [
      "Devolver energias negativas enviadas por invejosos ou inimigos declarados",
      "Proteção contra trabalhos de magia negativa ou feitiçaria direcionada",
      "Neutralizar mau-olhado de origem intencional e consciente",
      "Criar um escudo espiritual de espelho permanente ao redor da aura",
      "Libertar-se de influências ocultas que bloqueiam todas as áreas da vida",
    ],
    howToUse:
      "Acenda numa sexta-feira ou sábado à meia-noite. Pronuncie firmemente: 'O que é meu, é meu. O que não é meu, retorna ao seu dono com triplicada força.' Deixe queimar em sessões de 30 minutos. Após o término completo, enterre os restos num vaso de planta na entrada da casa ou num cruzamento de estradas.",
    properties: ["Proteção", "Reversão", "Espelho", "Justiça Espiritual", "Neutralização"],
  },
  {
    id: 3,
    slug: "velas-ritual-brancas",
    name: "Velas de Ritual Brancas",
    shortDesc: "Puras para Oração e Paz",
    price: "8,00 €",
    priceNum: "8.00",
    img: "/images/velas-ritual-brancas.jpeg",
    category: "Velas",
    badge: null,
    metaDescription:
      "Velas de Ritual Brancas — puras e versáteis para oração, meditação, paz espiritual e qualquer intenção positiva. Essenciais em toda a prática esotérica. Mundo Mágico Aveiro.",
    whatItIs:
      "As Velas Brancas de Ritual são velas simples e puras, sem infusão de ervas específicas, consagradas com a intenção de paz, clareza e conexão com o Divino.",
    fullDescription:
      "A vela branca é o artefacto mais universal da espiritualidade humana — presente em catedrais góticas, terreiros de Candomblé, altares budistas e cerimónias Wicca. A cor branca contém todas as cores do espectro luminoso e representa a pureza absoluta, a paz e a conexão direta com o plano espiritual superior.\n\nEstas velas são ideais para quem está a começar uma prática espiritual, para rituais de meditação, orações, trabalhos com entidades de luz, homenagens a antepassados ou simplesmente para criar um ambiente de serenidade profunda em casa. A sua versatilidade torna-as perfeitas para qualquer intenção positiva.\n\nComo a vela branca não carrega uma programação específica de fábrica, pode ser usada com qualquer afirmação, oração ou intenção que o praticante desejar. Basta imprimir a sua intenção no momento de acender.",
    forWhat: [
      "Meditação e criação de ambiente de serenidade e paz espiritual",
      "Orações a entidades de luz, santos, antepassados ou ao Divino",
      "Rituais de purificação e limpeza energética do espaço doméstico",
      "Trabalhos de paz familiar e harmonia entre pessoas",
      "Uso devocional em altares, mesas espirituais ou oratórios",
      "Base versátil para qualquer ritual de intenção positiva",
    ],
    howToUse:
      "Acenda em qualquer dia e hora, sem restrições de fase lunar. Antes de o fazer, segure a vela entre as mãos por um momento e imprima nela a sua intenção específica. Pronuncie uma oração, afirmação ou pedido em voz alta ou mentalmente. Deixe queimar ao seu ritmo.",
    properties: ["Paz", "Pureza", "Oração", "Versatilidade", "Luz Divina", "Meditação"],
  },
  {
    id: 4,
    slug: "velao-3-pavios-corta-trabalhos",
    name: "Velão 3 Pavios — Corta Trabalhos",
    shortDesc: "Quebra de Bruxaria Pesada",
    price: "18,00 €",
    priceNum: "18.00",
    img: "/images/velao-3-pavios-corta-trabalhos.jpeg",
    category: "Velões",
    badge: null,
    metaDescription:
      "Velão 3 Pavios Corta Trabalhos — poderoso artefacto de 3 mechas para quebrar feitiçaria pesada, amarrações e trabalhos de magia negativa. Loja esotérica Mundo Mágico Aveiro.",
    whatItIs:
      "O Velão Corta Trabalhos de 3 Pavios é uma grande vela ritual com três mechas simultâneas, concebida especificamente para quebrar, cortar e dissipar trabalhos de magia pesada, amarrações alheias e feitiçaria intencional.",
    fullDescription:
      "Na tradição esotérica, três é o número da manifestação e da força triplicada — o que torna este velão de três pavios num dos artefactos mais potentes para trabalhos de corte e quebra. Os três pavios queimam em simultâneo, multiplicando a intensidade da intenção e atuando nos três planos da existência: físico, emocional e espiritual.\n\nFormulado com ervas de corte e quebra (como pimenta, enxofre purificado e guiné), este velão é especialmente indicado para situações em que a pessoa sente que há algo sobrenatural a bloquear a sua vida de forma consistente — azar persistente que não tem explicação lógica, relações que se desfazem sem motivo, dinheiro que nunca fica, saúde que oscila sem causa médica encontrada.\n\nÉ um trabalho de libertação, não de ataque. A sua força reside em criar uma rutura energética limpa nas cadeias invisíveis que prendem a pessoa.",
    forWhat: [
      "Quebrar feitiçaria e bruxaria pesada enviada por terceiros",
      "Cortar amarrações amorosas ou financeiras feitas contra a sua vontade",
      "Dissipar energias negativas acumuladas de longa data",
      "Libertar-se de bloqueios persistentes em amor, dinheiro ou saúde",
      "Recuperar a autonomia espiritual e o livre arbítrio após interferência exterior",
    ],
    howToUse:
      "Acenda numa segunda-feira ou sábado, preferencialmente em lua minguante. Coloque o velão sobre uma bacia com água e sal para absorver o que for libertado. Não o deixe sem vigilância. Após terminar, descarte os restos num local afastado da sua casa — nunca no interior.",
    properties: ["Corte", "Quebra", "Libertação", "Proteção", "Força Triplicada", "Desbloqueio"],
    ingredients: "Cera natural, arruda, guiné, enxofre purificado, pimenta negra, ervas de corte",
  },
  {
    id: 5,
    slug: "vela-ritual-sol",
    name: "Vela Ritual do Sol",
    shortDesc: "Atração de Dinheiro e Sucesso",
    price: "9,90 €",
    priceNum: "9.90",
    img: "/images/vela-ritual-sol.jpeg",
    category: "Velas",
    badge: null,
    metaDescription:
      "Vela Ritual do Sol — artefacto esotérico para atrair prosperidade, sucesso profissional e abertura de caminhos. Energia solar para vitória e abundância. Mundo Mágico Aveiro.",
    whatItIs:
      "A Vela Ritual do Sol é uma vela consagrada à energia solar — a força mais expansiva e vitoriosa do cosmos — para atrair prosperidade, sucesso e abertura de novos caminhos.",
    fullDescription:
      "O Sol é a estrela da vitória, da abundância e do reconhecimento. Em todas as tradições espirituais — da astrologia à Cabala, do Candomblé ao Hermetismo — a energia solar representa o poder da manifestação, a confiança em si mesmo e a capacidade de brilhar de forma autêntica no mundo.\n\nEsta vela ritual é trabalhada com canela, cravo e óleos essenciais de bergamota e laranja — ingredientes de atração solar reconhecidos em toda a farmacopeia esotérica. A sua cor dourada ou amarela é a expressão visual da frequência solar que ela carrega.\n\nIdeal para momentos em que sente que está a perder visibilidade, que o reconhecimento não chega, que o dinheiro escasseia ou que o sucesso parece estar sempre um passo à frente. A energia solar abre portas, atrai olhares favoráveis e amplia a sua presença no mundo.",
    forWhat: [
      "Atrair prosperidade financeira e oportunidades de negócio",
      "Aumentar o reconhecimento profissional e a visibilidade pessoal",
      "Abertura de novos caminhos em situações de estagnação",
      "Fortalecer a autoconfiança e a força de vontade",
      "Rituais de sucesso em entrevistas, concursos ou negociações importantes",
    ],
    howToUse:
      "Acenda ao domingo (dia do Sol) ou durante o nascer do sol. Coloque debaixo da vela um papel com a sua intenção específica de sucesso escrita. Visualize intensamente o resultado desejado enquanto a vela queima. Repita durante 7 domingos consecutivos para resultados mais duradouros.",
    properties: ["Prosperidade", "Sucesso", "Vitória", "Reconhecimento", "Abundância", "Abertura de Caminhos"],
    ingredients: "Cera natural, canela, cravo, bergamota, óleos essenciais solares",
  },
  {
    id: 6,
    slug: "vela-ritual-dualidade",
    name: "Vela Ritual Dualidade",
    shortDesc: "Equilíbrio e Justiça",
    price: "10,50 €",
    priceNum: "10.50",
    img: "/images/vela-ritual-dualidade.jpeg",
    category: "Velas",
    badge: null,
    metaDescription:
      "Vela Ritual Dualidade — bicolor para trabalhos de equilíbrio entre forças opostas, obtenção de justiça e harmonização de conflitos. Loja esotérica Mundo Mágico Aveiro.",
    whatItIs:
      "A Vela de Dualidade é uma vela ritual bicolor (geralmente preta e branca) que trabalha o equilíbrio entre forças opostas e a obtenção de justiça em situações de conflito ou desequilíbrio.",
    fullDescription:
      "A dualidade é um dos princípios fundamentais do universo — luz e sombra, masculino e feminino, dar e receber. Quando este equilíbrio é perturbado, as situações ficam distorcidas: relações injustas, conflitos sem resolução, julgamentos parciais. A Vela de Dualidade atua como instrumento de reequilíbrio, restaurando a harmonia natural onde ela foi quebrada.\n\nA sua composição bicolor — metade branca, metade preta — representa a integração das polaridades. Não existe o bem sem o mal, a luz sem a sombra. Este artefacto trabalha precisamente nessa fronteira, pedindo ao universo que restaure a ordem justa e equilibrada nas situações perturbadas.\n\nÉ um artefacto de grande utilidade em situações legais, familiares ou amorosas em que a pessoa sente que está a ser injustiçada ou que a balança pende demasiadamente para um lado.",
    forWhat: [
      "Obter justiça em processos legais, laborais ou administrativos",
      "Reequilibrar relações amorosas ou familiares desequilibradas",
      "Harmonizar conflitos onde existe uma parte claramente injustiçada",
      "Trabalhos de revelação da verdade em situações obscuras",
      "Integrar e aceitar os aspetos sombra da própria personalidade",
    ],
    howToUse:
      "Acenda numa quarta ou sábado, ao anoitecer. Coloque a vela entre dois papéis — num escreva o que deseja terminar, no outro o que deseja atrair. Deixe queimar lentamente enquanto medita sobre o equilíbrio que pede. A fumaça que sobe leva a sua intenção ao plano espiritual.",
    properties: ["Equilíbrio", "Justiça", "Dualidade", "Harmonização", "Verdade", "Resolução"],
  },
  {
    id: 7,
    slug: "vela-11-mechas-caveira-vermelha",
    name: "Ritual 11 Mechas Caveira Vermelha",
    shortDesc: "Ritual de Amor e Paixão",
    price: "18,90 €",
    priceNum: "18.90",
    img: "/images/vela-11-mechas-caveira-vermelha.jpeg",
    category: "Velas",
    badge: null,
    metaDescription:
      "Vela 11 Mechas Caveira Vermelha — poderoso artefacto de amor e paixão com 11 mechas simultâneas. Para atração intensa e rituais amorosos. Mundo Mágico Aveiro.",
    whatItIs:
      "A Vela Caveira Vermelha de 11 Mechas é um dos artefactos de amor mais potentes da tradição esotérica — uma vela figurativa em forma de caveira vermelha com 11 pavios que queimam em simultâneo, amplificando exponencialmente a força do ritual de paixão.",
    fullDescription:
      "A caveira na tradição esotérica não representa morte — representa o domínio do amor sobre todos os obstáculos, incluindo a razão e a resistência. É o símbolo de Pomba-Gira, da Bela Dama e das entidades femininas de amor intenso que trabalham além das convenções.\n\nO número 11 é um número mestre na numerologia, associado à intuição, à iluminação e à manifestação acelerada. Onze mechas queimando em simultâneo multiplicam a intensidade da intenção amorosa de forma exponencial, tornando este artefacto numa das ferramentas mais respeitadas para rituais de atração passional.\n\nA cor vermelha é a frequência do amor físico, da paixão, do desejo e da energia vital. Combinada com a forma da caveira e as 11 mechas, cria um campo energético de atração poderoso e difícil de resistir.",
    forWhat: [
      "Atração de um amor intenso e apaixonado específico",
      "Reacender a paixão numa relação que esfriou",
      "Trabalhos de sedução e fascínio pessoal",
      "Aproximação física e emocional de alguém desejado",
      "Rituais de amor urgente com necessidade de resultado rápido",
    ],
    howToUse:
      "Acenda numa sexta-feira à meia-noite com a luz apagada. Coloque uma foto da pessoa desejada ou escreva o nome num papel e coloque-o junto da vela. Pronuncie a sua intenção três vezes com calma e certeza. Não deixe sem vigilância. Repita durante 3 sextas-feiras consecutivas.",
    properties: ["Paixão Intensa", "Atração Amorosa", "Sedução", "Desejo", "Manifestação Rápida"],
  },
  {
    id: 8,
    slug: "vela-figurativa-casal-branco",
    name: "Vela Figurativa Casal Branco",
    shortDesc: "Paz e União Conjugal",
    price: "10,00 €",
    priceNum: "10.00",
    img: "/images/vela-figurativa-casal-branco.jpeg",
    category: "Velas",
    badge: null,
    metaDescription:
      "Vela Figurativa Casal Branco — para paz, reconciliação e harmonia conjugal. Artefacto simbólico de união entre duas pessoas. Loja esotérica Mundo Mágico em Aveiro.",
    whatItIs:
      "A Vela Figurativa Casal Branco é uma vela moldada na forma de dois corpos humanos em branco, criando uma ligação simbólica poderosa entre duas pessoas para promover paz, reconciliação e harmonia conjugal.",
    fullDescription:
      "A magia simpática — o princípio de que 'o semelhante atrai o semelhante' — é uma das bases mais antigas da prática esotérica humana. Uma vela em forma de casal não é apenas um objeto; é um espelho ritual da relação que se deseja criar ou curar. A forma física da vela serve como foco e âncora da intenção no plano material.\n\nA cor branca nesta vela representa a paz, a pureza das intenções e a harmonia. É especialmente indicada para casais que atravessam momentos de tensão, distanciamento emocional ou desentendimentos frequentes, e que desejam restaurar a tranquilidade e o entendimento mútuo sem forçar nenhuma das partes.\n\nÉ também um excelente artefacto para reconciliações após separações temporárias, reaproximações após discussões graves ou para fortalecer o amor em relações em crise.",
    forWhat: [
      "Promover paz e harmonia num relacionamento tenso ou conflituoso",
      "Reconciliar um casal após separação ou desentendimento grave",
      "Fortalecer o vínculo afetivo e a cumplicidade entre dois parceiros",
      "Trabalhos de união para relacionamentos saudáveis e duradouros",
      "Paz conjugal e entendimento mútuo no dia a dia",
    ],
    howToUse:
      "Acenda numa segunda-feira ou sexta-feira. Escreva os nomes dos dois parceiros numa fita branca e enrole-a na base da vela antes de acender. Visualize a cena de paz e união que deseja. Deixe queimar em tranquilidade, sem pressa nem ansiedade.",
    properties: ["Paz", "União", "Reconciliação", "Harmonia", "Cumplicidade", "Amor Tranquilo"],
  },
  {
    id: 9,
    slug: "vela-tesoura-ritual",
    name: "Vela Tesoura de Ritual",
    shortDesc: "Corte de Laços e Energias",
    price: "11,00 €",
    priceNum: "11.00",
    img: "/images/vela-tesoura-ritual.jpeg",
    category: "Velas",
    badge: null,
    metaDescription:
      "Vela Tesoura de Ritual — artefacto em forma de tesoura para cortar laços energéticos negativos, libertar de dependências emocionais e encerrar relações tóxicas. Mundo Mágico.",
    whatItIs:
      "A Vela Tesoura de Ritual é uma vela moldada em forma de tesoura, instrumento de corte simbólico utilizado para libertar a pessoa de laços energéticos negativos, dependências emocionais e influências que a prejudicam.",
    fullDescription:
      "A tesoura é um dos símbolos mágicos mais poderosos de libertação. Em toda a tradição esotérica — desde as benzedeiras portuguesas às praticantes de Umbanda — a tesoura representa o corte limpo, definitivo e libertador. Não é um instrumento de violência, mas de libertação cirúrgica.\n\nExistem laços energéticos que se formam entre as pessoas através de relações intensas — amor, ódio, dívidas emocionais, traumas partilhados. Estes cordões invisíveis continuam a drenar energia mesmo após a relação ter terminado no plano físico. A Vela Tesoura trabalha especificamente no corte desses cordões.\n\nIdeal para quem ainda sente uma presença psíquica de um ex-parceiro, para quem não consegue avançar na vida por sentir que algo o prende ao passado, ou para quem deseja libertar-se da influência energética de pessoas tóxicas do seu círculo.",
    forWhat: [
      "Cortar laços energéticos com ex-parceiros ou pessoas do passado",
      "Libertar-se de dependências emocionais que impedem o avanço pessoal",
      "Encerrar definitivamente relações tóxicas ou prejudiciais",
      "Cortar a influência psíquica ou energética de uma pessoa específica",
      "Libertar-se de padrões repetitivos que surgem das mesmas origens",
    ],
    howToUse:
      "Acenda num sábado durante a lua minguante. Visualize o cordão que vos liga e imagine a tesoura a cortá-lo completamente enquanto a vela queima. Após terminar, tome um banho com sal grosso e ervas de limpeza para completar o corte no seu campo áurico.",
    properties: ["Libertação", "Corte de Laços", "Fim", "Autonomia", "Desapego", "Desbloqueio Emocional"],
  },
  {
    id: 10,
    slug: "vela-figurativa-casa-branca",
    name: "Vela Figurativa Casa Branca",
    shortDesc: "Limpeza e Proteção do Lar",
    price: "10,00 €",
    priceNum: "10.00",
    img: "/images/vela-figurativa-casa-branca.jpeg",
    category: "Velas",
    badge: null,
    metaDescription:
      "Vela Figurativa Casa Branca — para limpeza energética e proteção espiritual do lar. Ideal para benzer uma casa nova ou limpar energias residuais. Mundo Mágico Aveiro.",
    whatItIs:
      "A Vela Figurativa Casa Branca é uma vela moldada em forma de habitação, usada em rituais de proteção, limpeza energética e bênção do espaço doméstico.",
    fullDescription:
      "O lar é o templo da família — o espaço onde dormimos, amamos, discutimos e crescemos. Como todo o espaço físico, uma casa acumula as energias de tudo o que nela acontece: alegrias, discussões, choros, medos e celebrações. Com o tempo, energias densas podem estacionar e afetar o humor e a vitalidade dos seus habitantes.\n\nA Vela Casa Branca representa simbolicamente o espaço que deseja proteger. Ao queimá-la com intenção específica, está a realizar um pedido espiritual pela purificação e proteção daquele espaço físico exato. A forma figurativa amplifica a especificidade da intenção.\n\nÉ especialmente recomendada para quem se muda para uma casa nova e deseja limpar a energia dos anteriores inquilinos, para lares com muitos conflitos ou discussões frequentes, e para casas onde houve períodos de tristeza, doença ou negatividade.",
    forWhat: [
      "Limpeza energética profunda de uma casa ou apartamento",
      "Proteção espiritual do espaço doméstico contra influências externas",
      "Bênção de casa nova antes da mudança",
      "Harmonização de lares com conflitos frequentes ou energias densas",
      "Afastamento de energias residuais de ocupantes anteriores",
    ],
    howToUse:
      "Acenda numa segunda-feira ou quinta-feira ao anoitecer. Coloque a vela no centro da casa. Enquanto queima, acenda também um defumador de arruda e alecrim e passe por todos os cômodos. Pronuncie uma bênção de proteção para cada divisão da casa.",
    properties: ["Proteção do Lar", "Limpeza Energética", "Harmonia Doméstica", "Bênção", "Paz Familiar"],
  },
  {
    id: 11,
    slug: "vela-figurativa-casal-mel",
    name: "Vela Figurativa Casal Mel",
    shortDesc: "Doçura e Encantamento no Amor",
    price: "10,50 €",
    priceNum: "10.50",
    img: "/images/vela-figurativa-casal-mel.jpeg",
    category: "Velas",
    badge: null,
    metaDescription:
      "Vela Figurativa Casal Mel — artefacto de mel e doçura para transformar relações difíceis em harmoniosas. Suaviza temperamentos e adoça corações. Mundo Mágico Aveiro.",
    whatItIs:
      "A Vela Figurativa Casal Mel é uma vela em forma de casal impregnada com mel e ervas doçurantes, usada para suavizar relacionamentos tensos e trazer doçura, ternura e compreensão ao amor.",
    fullDescription:
      "O mel é o grande doçurante espiritual da tradição esotérica afro-brasileira e portuguesa — mais poderoso do que qualquer açúcar porque carrega o trabalho das abelhas, símbolo de comunidade, amor coletivo e harmonia natural. Quando o mel é incorporado num trabalho ritual, ele 'adoça' as interações, transformando amargura em ternura.\n\nEsta vela é formulada com mel puro, canela, açúcar mascavado e ervas florais suavizantes. A sua energia é delicada mas persistente — como um doce que fica na memória muito depois de o provar. Atua lentamente, mas os seus resultados são profundos e duradouros.\n\nIdeal para casais com muitas discussões, para situações em que um parceiro está frio, distante ou amargo, e para quem deseja que o companheiro(a) olhe com mais ternura, paciência e afeto.",
    forWhat: [
      "Suavizar um parceiro frio, distante ou com temperamento difícil",
      "Transformar relações amargas ou conflituosas em harmoniosas",
      "Adoçar a relação com sogros, família do companheiro ou colegas difíceis",
      "Restaurar a ternura e a cumplicidade perdidas num relacionamento",
      "Trabalhos de encantamento suave e duradouro numa relação amorosa",
    ],
    howToUse:
      "Acenda numa sexta-feira ao pôr do sol. Unte a base da vela com mel puro antes de acender. Pronuncie o nome da pessoa três vezes e descreva a qualidade emocional que deseja cultivar nela. Deixe a doçura fluir naturalmente, sem forçar nem apressar o processo.",
    properties: ["Doçura", "Suavidade", "Encantamento", "Harmonia Amorosa", "Ternura", "Mel Espiritual"],
    ingredients: "Cera natural, mel puro, canela, flores de laranjeira, ervas doçurantes",
  },
  {
    id: 12,
    slug: "kit-ritual-impotencia-maxima",
    name: "Kit Ritual Impotência Máxima",
    shortDesc: "Inibição de Força Masculina",
    price: "22,00 €",
    priceNum: "22.00",
    img: "/images/kit-ritual-impotencia-maxima.jpeg",
    category: "Kits Rituais",
    badge: null,
    metaDescription:
      "Kit Ritual Impotência Máxima — conjunto completo para rituais de inibição e bloqueio de energia masculina. Inclui todos os elementos necessários. Mundo Mágico Aveiro.",
    whatItIs:
      "O Kit Ritual Impotência Máxima é um conjunto completo de elementos rituais para trabalhos de inibição, bloqueio ou controlo da energia vital masculina de uma pessoa específica.",
    fullDescription:
      "Este kit destina-se a situações específicas em que se deseja inibir a força, a potência ou a capacidade de ação de um homem em particular — seja por razões de proteção (um agressor), de domínio numa relação ou de trabalho de separação de um terceiro.\n\nO kit inclui todos os componentes necessários para realizar o ritual completo, acompanhados de instruções detalhadas. É um trabalho que requer responsabilidade ética — no Mundo Mágico, só realizamos e fornecemos estes kits para situações de proteção ou equilíbrio de poder, nunca para causar dano gratuito a terceiros.\n\nPara dúvidas sobre a adequação deste kit à sua situação específica, recomendamos uma consulta prévia gratuita com a nossa praticante antes da aquisição.",
    forWhat: [
      "Inibir a agressividade ou virilidade de um ex-parceiro perseguidor",
      "Trabalhos de separação de um rival amoroso masculino",
      "Domínio e controlo de força masculina numa relação desequilibrada",
      "Proteção contra homens que utilizam o poder físico de forma abusiva",
    ],
    howToUse:
      "Siga as instruções detalhadas incluídas no kit. Recomendamos vivamente uma consulta prévia gratuita com a nossa praticante para personalizar o ritual à sua situação específica e garantir que o trabalho é eticamente adequado.",
    properties: ["Inibição", "Bloqueio", "Domínio", "Proteção", "Controlo Energético"],
  },
  {
    id: 13,
    slug: "sabao-ritual-desata-nos",
    name: "Sabão Ritual Desata Nós",
    shortDesc: "Resolução de Problemas Difíceis",
    price: "7,50 €",
    priceNum: "7.50",
    img: "/images/sabao-ritual-desata-nos.jpeg",
    category: "Sabonetes",
    badge: null,
    metaDescription:
      "Sabão Ritual Desata Nós — formulado com ervas de desbloqueio para resolver situações aparentemente impossíveis. Limpa energias e desata nós espirituais. Mundo Mágico Aveiro.",
    whatItIs:
      "O Sabão Ritual Desata Nós é um sabão artesanal formulado com ervas de resolução de bloqueios — como eucalipto, cravo e erva-cidreira — para desfazer espiritualmente situações complexas e aparentemente sem saída.",
    fullDescription:
      "'Desatar nós' é uma metáfora espiritual profundamente enraizada na tradição esotérica mediterrânica e afro-brasileira. Representa a libertação de situações empatadas, de problemas que parecem impossíveis de resolver, de processos que não avançam. O nó é a energia estagnada que precisa de ser dissolvida.\n\nEste sabão combina a ação purificadora da água com a força das ervas rituais, criando um agente de limpeza que atua simultaneamente no plano físico (a sujidade do corpo) e no plano energético (os bloqueios da aura e do campo de vida). Cada lavagem é um ato ritual de dissolução de obstáculos.\n\nÉ especialmente indicado para situações legais empatadas, relações em ponto morto, processos burocráticos bloqueados, problemas de saúde que não cedem, ou qualquer situação em que sente que algo invisível impede a resolução natural.",
    forWhat: [
      "Resolver processos legais, judiciais ou burocráticos bloqueados",
      "Destravar situações amorosas ou familiares empatadas há muito tempo",
      "Dissolver bloqueios energéticos em todas as áreas da vida",
      "Desfazer nós espirituais criados por feitiçaria ou inveja",
      "Facilitar conversas e negociações difíceis que não progridem",
    ],
    howToUse:
      "Use na ducha ou banho de 3 a 7 dias consecutivos, preferencialmente durante a lua nova ou crescente. Enquanto se lava, visualize os problemas a dissolverem-se tal como a espuma. Pronuncie: 'O que estava preso, liberta-se. O que estava fechado, abre-se. O que estava atado, desata-se.'",
    properties: ["Desbloqueio", "Resolução", "Libertação", "Clareza", "Fluidez", "Dissolução de Obstáculos"],
    ingredients: "Base de sabão natural, eucalipto, cravo, erva-cidreira, ervas de desbloqueio, óleos essenciais",
  },
  {
    id: 14,
    slug: "sabonete-protecao-espiritual",
    name: "Sabonete Proteção Espiritual",
    shortDesc: "Escudo Energético Diário",
    price: "6,90 €",
    priceNum: "6.90",
    img: "/images/sabonete-protecao-espiritual.jpeg",
    category: "Sabonetes",
    badge: null,
    metaDescription:
      "Sabonete Proteção Espiritual — uso diário para criar escudo energético e proteger a aura. Com arruda, alecrim e sal grosso. Loja esotérica Mundo Mágico Aveiro.",
    whatItIs:
      "O Sabonete de Proteção Espiritual é um sabão artesanal de uso diário formulado com arruda, alecrim e sal grosso — combinação consagrada pela tradição portuguesa para criar um escudo energético ao redor da aura.",
    fullDescription:
      "A proteção espiritual não é um evento único — é uma prática diária. Assim como tomamos banho todos os dias para limpar o corpo, a aura também necessita de ser limpa e protegida regularmente, especialmente se trabalhamos em ambientes de muita gente, se convivemos com pessoas negativas ou se nos sentimos vulneráveis energeticamente.\n\nEste sabonete reúne os três pilares da proteção popular portuguesa: a arruda (protetora por excelência contra o mau-olhado), o alecrim (purificador e fortalecedor da aura) e o sal grosso (o maior dissolvente de energias densas). Juntos, criam uma barreira energética que acompanha o utilizador ao longo do dia.\n\nO seu uso regular — especialmente em dias de maior exposição social, após contacto com pessoas difíceis ou em momentos de vulnerabilidade — cria uma camada protetora cumulativa que fortalece progressivamente o campo energético pessoal.",
    forWhat: [
      "Proteção diária da aura contra o mau-olhado e energias densas",
      "Escudo energético após contacto com ambientes ou pessoas negativas",
      "Limpeza áurica regular para praticantes espirituais e sensitivos",
      "Proteção em dias de maior exposição social ou vulnerabilidade",
      "Manutenção preventiva do campo energético pessoal",
    ],
    howToUse:
      "Use diariamente no banho, da cabeça aos pés. Deixe a espuma actuar por 1-2 minutos antes de enxaguar. Para proteção reforçada, use de manhã antes de sair de casa. Para limpeza após exposição a energias difíceis, use logo ao regressar.",
    properties: ["Proteção Diária", "Limpeza Áurica", "Escudo Energético", "Purificação", "Fortalecimento Áurico"],
    ingredients: "Sabão base natural, arruda, alecrim, sal grosso, óleos essenciais protetores",
  },
  {
    id: 15,
    slug: "kit-ritual-es-so-para-mim",
    name: "Kit Ritual És Só Para Mim",
    shortDesc: "Foco Absoluto no Amor",
    price: "24,90 €",
    priceNum: "24.90",
    img: "/images/kit-ritual-es-so-para-mim.jpeg",
    category: "Kits Rituais",
    badge: null,
    metaDescription:
      "Kit Ritual És Só Para Mim — conjunto completo para ritual de fidelidade e atenção exclusiva num relacionamento amoroso. Inclui vela, óleo e instruções. Mundo Mágico Aveiro.",
    whatItIs:
      "O Kit Ritual 'És Só Para Mim' é um conjunto completo de elementos rituais para trabalhos de fidelidade, atenção exclusiva e foco total de um parceiro numa relação amorosa.",
    fullDescription:
      "'És Só Para Mim' é um trabalho de lealdade e presença — não de controlo, mas de foco amoroso. Destina-se a situações em que um parceiro parece distraído, desinteressado, com a atenção dividida entre a relação e outras pessoas ou situações externas que ameaçam a estabilidade do casal.\n\nO kit inclui todos os componentes necessários para o ritual completo: vela específica do trabalho, óleo de atração e fixação, ervas selecionadas e instruções passo a passo detalhadas. É um trabalho que atua sobre a lealdade emocional e a atenção, não sobre a liberdade da pessoa.\n\nNo Mundo Mágico, todos os trabalhos de amor são realizados segundo os princípios da magia branca — não interferimos no livre-arbítrio, mas harmonizamos e direcionamos energias naturais de forma ética. Para situações de infidelidade ativa, recomendamos uma consulta prévia.",
    forWhat: [
      "Manter a atenção e o foco amoroso de um parceiro na relação",
      "Trabalhos de fidelidade e lealdade emocional",
      "Afastar influências externas que distraem o parceiro da relação",
      "Fortalecer o compromisso e a dedicação num relacionamento",
      "Recriar a exclusividade emocional perdida num casal",
    ],
    howToUse:
      "Siga as instruções detalhadas incluídas no kit. O ritual é realizado durante 7 noites consecutivas a partir de uma sexta-feira. Para melhores resultados, combine com uma consulta de tarot para confirmar a adequação do trabalho à sua situação específica.",
    properties: ["Fidelidade", "Atenção Exclusiva", "Lealdade", "Foco Amoroso", "Compromisso", "Amarração Suave"],
  },
  {
    id: 16,
    slug: "vela-ritual-ze-pelintra",
    name: "Vela Ritual Zé Pelintra",
    shortDesc: "Abertura de Caminhos e Proteção",
    price: "12,00 €",
    priceNum: "12.00",
    img: "/images/vela-ritual-ze-pelintra.jpeg",
    category: "Velas",
    badge: null,
    metaDescription:
      "Vela Ritual Zé Pelintra — consagrada ao Exu Zé Pelintra da tradição Umbanda para abertura de caminhos, virada de sorte e proteção. Loja esotérica Mundo Mágico Aveiro.",
    whatItIs:
      "A Vela Ritual Zé Pelintra é uma vela consagrada ao espírito Zé Pelintra, entidade da tradição Umbanda associada à abertura de caminhos, virada de sorte e proteção de quem é injustiçado.",
    fullDescription:
      "Zé Pelintra é um dos espíritos mais queridos e carismáticos da Umbanda — um Exu de Lei que personifica a malícia boa, a sabedoria das ruas e a capacidade de virar o jogo quando tudo parece perdido. Não é um espírito de escuridão, mas de luz que trabalha nos lugares difíceis, nas esquinas, nos cruzamentos da vida onde as decisões são mais duras.\n\nOs seus devotos recorrem a ele em situações de injustiça, quando a vida parece estar contra si, quando as portas fecham sem razão aparente, quando necessitam de uma virada rápida de sorte ou de proteção em ambientes hostis. Zé Pelintra é o advogado espiritual dos humildes.\n\nEsta vela está consagrada com os elementos tradicionais do Exu Pelintra: pimenta, cachaça, cigarro e as cores vermelho e preto. Acendê-la é fazer um pedido respeitoso e confiante ao espírito que conhece todos os caminhos.",
    forWhat: [
      "Abertura urgente de caminhos bloqueados em todas as áreas da vida",
      "Proteção em ambientes hostis, perigosos ou de grande competição",
      "Pedidos de justiça em situações de injustiça flagrante",
      "Virada rápida de sorte em momentos de crise ou azar acumulado",
      "Proteção de pessoas que trabalham em ambientes de risco ou marginalidade",
    ],
    howToUse:
      "Acenda numa segunda ou sexta-feira, preferencialmente à meia-noite. Coloque junto da vela uma dose de cachaça e uma pimenta. Faça o seu pedido com humildade, clareza e respeito. Não prometa o que não pode cumprir. Após o término, descarte os restos num cruzamento com gratidão.",
    properties: ["Abertura de Caminhos", "Virada de Sorte", "Proteção", "Justiça", "Rapidez", "Força de Exu"],
  },
  {
    id: 17,
    slug: "velao-7-mechas-branco",
    name: "Velão 7 Mechas Branco",
    shortDesc: "Limpeza Profunda e Desbloqueio",
    price: "16,00 €",
    priceNum: "16.00",
    img: "/images/velao-7-mechas-branco.jpeg",
    category: "Velões",
    badge: null,
    metaDescription:
      "Velão 7 Mechas Branco — 7 pavios simultâneos para limpeza energética profunda e desbloqueio amplo de todas as áreas da vida. Loja esotérica Mundo Mágico Aveiro.",
    whatItIs:
      "O Velão de 7 Mechas Branco é uma grande vela ritual com 7 pavios que queimam em simultâneo, consagrada para limpeza energética profunda e desbloqueio abrangente de todas as áreas da vida.",
    fullDescription:
      "O número 7 é sagrado em praticamente todas as tradições espirituais do mundo — representa a completude, os 7 Orixás, os 7 chakras, os 7 dias da semana, as 7 notas musicais. Quando 7 mechas queimam em simultâneo, a força ritual atua de forma simultânea e abrangente em todos os planos.\n\nA cor branca amplifica a intenção de pureza e limpeza total. Este velão é o equivalente espiritual de um reset completo — limpa tudo o que ficou acumulado, dissipa todas as energias densas, abre espaço para um novo começo em todas as dimensões da vida ao mesmo tempo.\n\nÉ especialmente indicado para quem passa por um período difícil generalizado, com problemas em múltiplas áreas da vida simultaneamente, para quem inicia uma nova fase (mudança, emprego, relação) e deseja começar com energia limpa, ou para praticantes que fazem limpeza espiritual periódica.",
    forWhat: [
      "Limpeza energética profunda e abrangente de todas as áreas da vida",
      "Desbloqueio amplo quando múltiplas áreas estão em crise simultaneamente",
      "Início de nova fase de vida com campo energético limpo",
      "Manutenção espiritual periódica para praticantes regulares",
      "Limpeza após períodos de grande negatividade, tristeza ou trauma",
    ],
    howToUse:
      "Acenda ao domingo ou segunda-feira, durante a lua nova ou crescente. Abra as janelas da casa para que as energias libertas possam sair. Deixe queimar em sessões de 30 minutos por dia durante 7 dias consecutivos, se possível ao mesmo horário.",
    properties: ["Limpeza Profunda", "Desbloqueio Total", "Purificação", "Novo Começo", "Completude", "Reset Energético"],
  },
  {
    id: 18,
    slug: "velao-7-mechas-multicor",
    name: "Velão 7 Mechas Multicor",
    shortDesc: "Limpeza e Reequilíbrio Total",
    price: "16,50 €",
    priceNum: "16.50",
    img: "/images/velao-7-mechas-multicor.jpeg",
    category: "Velões",
    badge: null,
    metaDescription:
      "Velão 7 Mechas Multicor — sete mechas em cores distintas para reequilíbrio total de todas as áreas da vida: amor, saúde, prosperidade e proteção. Mundo Mágico Aveiro.",
    whatItIs:
      "O Velão de 7 Mechas Multicor é um velão ritual com 7 mechas em diferentes cores, cada uma atuando numa área específica da vida em simultâneo, para reequilíbrio total e abrangente.",
    fullDescription:
      "Cada cor no espectro energético corresponde a uma frequência e a uma área da vida. Ao combinar 7 mechas de cores distintas num único velão, este artefacto realiza um trabalho global e simultâneo em todas as dimensões da existência: amor, saúde, prosperidade, proteção, espiritualidade, comunicação e paz.\n\nA cromoterapia espiritual — o uso de cores para harmonizar energias — é uma das práticas mais antigas e universais do ser humano. Das câmaras cromáticas egípcias aos altares coloridos das tradições africanas, a cor é reconhecida como veículo poderoso de intenção e cura.\n\nEste velão multicor é o artefacto de eleição para momentos de grande desorganização energética, quando diferentes áreas da vida parecem simultaneamente desalinhadas e o praticante não sabe por onde começar.",
    forWhat: [
      "Reequilíbrio simultâneo de múltiplas áreas da vida desequilibradas",
      "Harmonização geral para quem sente que 'nada está a funcionar'",
      "Tratamento energético completo em sessão única e abrangente",
      "Integração de todos os centros de energia do campo áurico pessoal",
      "Preparação energética para grandes mudanças ou transições de vida",
    ],
    howToUse:
      "Acenda num domingo ao amanhecer. Antes de o acender, segure-o entre as mãos e identifique mentalmente cada área da sua vida que necessita de atenção. Entregue cada intenção a cada mecha. Deixe queimar sem interrupção se possível.",
    properties: ["Reequilíbrio", "Harmonização Total", "Cromoterapia", "Integração", "Equilíbrio Global"],
  },
  {
    id: 19,
    slug: "velao-7-mechas-preto",
    name: "Velão 7 Mechas Preto",
    shortDesc: "Quebra Radical de Feitiços",
    price: "16,00 €",
    priceNum: "16.00",
    img: "/images/velao-7-mechas-preto.jpeg",
    category: "Velões",
    badge: null,
    metaDescription:
      "Velão 7 Mechas Preto — máxima potência para banir feitiços pesados, dissipar energias obscuras e fechar caminhos de negatividade intensa. Mundo Mágico Aveiro.",
    whatItIs:
      "O Velão de 7 Mechas Preto é o artefacto de maior potência de banimento e quebra radical de feitiçaria — 7 pavios em cera preta para dissipar energias obscuras e encerrar definitivamente influências negativas intensas.",
    fullDescription:
      "Ao contrário do que a cultura popular pode sugerir, o preto na tradição esotérica séria não é a cor do mal — é a cor da absorção, do encerramento e da transformação. Assim como um buraco negro absorve e transforma tudo o que toca, o preto absorve e dissolve energias negativas de forma definitiva.\n\nEste velão é reservado para as situações mais sérias: feitiçaria pesada e continuada, ataques espirituais repetidos, macumbas de raiz forte ou situações em que os trabalhos habituais não produzem o efeito esperado. É o último recurso antes de recorrer a um ritual presencial.\n\nOs 7 pavios garantem que a ação seja abrangente e simultânea em todos os planos. A sua força é considerável — por isso recomendamos consulta prévia para confirmar a necessidade e adequação deste trabalho.",
    forWhat: [
      "Quebra radical de feitiçaria pesada e persistente",
      "Banimento de entidades ou energias obscuras de espaços ou pessoas",
      "Neutralização de ataques espirituais graves e repetidos",
      "Encerramento definitivo de ciclos de negatividade profunda",
      "Corte de macumbas e trabalhos de raiz que resistem a trabalhos mais suaves",
    ],
    howToUse:
      "Use com discernimento e respeito. Acenda numa sábado à meia-noite durante a lua minguante. Não use em conjunto com outras velas. Após terminar, descarte os restos longe da sua casa, num cruzamento ou campo aberto. Tome um banho de sal grosso imediatamente após.",
    properties: ["Banimento", "Quebra Radical", "Absorção", "Fecho de Ciclos", "Máxima Proteção", "Neutralização Pesada"],
  },
  {
    id: 20,
    slug: "vela-aromatica-lotus-calendula",
    name: "Vela Aromática Flor de Lótus e Calêndula",
    shortDesc: "Equilíbrio, Paz e Proteção Espiritual",
    price: "14,50 €",
    priceNum: "14.50",
    img: "/images/vela-decorativa-flores.png",
    category: "Velas",
    badge: null,
    metaDescription:
      "Vela Aromática Flor de Lótus e Calêndula — equilíbrio espiritual, proteção e renovação. Aroma sublime para meditação e espaços de paz. Loja Mundo Mágico Aveiro.",
    whatItIs:
      "A Vela Aromática de Flor de Lótus e Calêndula é uma vela decorativa e ritual com essências naturais de lótus e calêndula, consagrada para harmonização espiritual, proteção suave e criação de ambientes de paz.",
    fullDescription:
      "A flor de lótus é o símbolo universal da iluminação espiritual, do renascimento e da pureza que emerge da lama — da dificuldade surge a beleza. Na tradição Hindu e Budista, o lótus representa a alma humana a florescer apesar das adversidades. A calêndula é a flor do Sol, protetora e alegre, associada à energia solar positiva e à proteção suave do ambiente.\n\nJuntas, estas duas plantas criam uma fragrância que eleva a vibração do espaço onde a vela é acesa, facilitando a meditação profunda, a conexão espiritual e a sensação de paz interior. O aroma age diretamente no sistema límbico, o centro emocional do cérebro, promovendo serenidade genuína.\n\nIdeal para espaços de meditação, quartos, escritórios de trabalho espiritual, e como presente especial para alguém que atravessa um momento de dificuldade e necessita de serenidade e proteção suave.",
    forWhat: [
      "Criar ambiente de paz e serenidade para meditação e oração",
      "Elevação da vibração energética de um espaço físico",
      "Proteção suave e contínua através do aroma durante horas",
      "Apoio em momentos de stress, ansiedade ou dificuldade emocional",
      "Presente espiritual com significado profundo para pessoas queridas",
    ],
    howToUse:
      "Acenda em qualquer momento em que deseje elevar a vibração do espaço. Não necessita de ritual específico — a sua presença e aroma são suficientes. Para meditação, acenda 5 minutos antes de começar a prática e deixe o aroma criar o ambiente adequado.",
    properties: ["Paz", "Serenidade", "Iluminação", "Proteção Suave", "Elevação Vibratória", "Renascimento"],
    ingredients: "Cera de coco, essência natural de flor de lótus, óleo de calêndula, corante natural",
  },
  {
    id: 21,
    slug: "baralho-tarot-destiny",
    name: "Baralho de Tarot Destiny",
    shortDesc: "Baralho Ricamente Ilustrado Detalhe Ouro",
    price: "28,00 €",
    priceNum: "28.00",
    img: "/images/tarot-destiny.png",
    category: "Tarot",
    badge: null,
    metaDescription:
      "Baralho de Tarot Destiny — 78 arcanos ricamente ilustrados com detalhes a ouro. Para leituras intuitivas, aprendizagem e consultas espirituais profundas. Mundo Mágico Aveiro.",
    whatItIs:
      "O Baralho de Tarot Destiny é um conjunto de 78 cartas ricamente ilustradas com detalhes a ouro, seguindo a estrutura tradicional dos arcanos maiores e menores, para leituras intuitivas e consultas espirituais.",
    fullDescription:
      "O Tarot é um dos sistemas de autoconhecimento e orientação espiritual mais ricos e complexos do mundo ocidental. Os seus 78 arcanos — 22 maiores e 56 menores — formam um mapa completo da psique humana e dos ciclos da vida. Uma leitura atenta revela padrões, possibilidades e perspetivas que a mente consciente frequentemente não vê.\n\nO Baralho Destiny destaca-se pela sua ilustração rica e detalhada, com acabamentos a ouro que o tornam um objeto de beleza e de poder simultaneamente. As imagens são claras e intuitivas, tornando-o adequado tanto para principiantes que desejam aprender o tarot como para leitores experientes que procuram um instrumento de alta qualidade.\n\nCada baralho que vendemos no Mundo Mágico é previamente consagrado pela nossa praticante com uma oração de abertura e de conexão com a sabedoria do tarot, tornando-o um instrumento que já chega até si ativo e preparado para uso.",
    forWhat: [
      "Leituras de tarot para orientação em amor, carreira e vida pessoal",
      "Aprendizagem e estudo dos arcanos maiores e menores",
      "Meditação com as imagens dos arcanos para autoconhecimento profundo",
      "Consultas espirituais pessoais e profissionais de qualidade",
      "Coleção e uso devocional por admiradores da arte do tarot",
    ],
    howToUse:
      "Antes do primeiro uso, coloque o baralho sob a lua cheia durante uma noite para consagração lunar. Guarde-o envolto em seda escura ou numa caixa de madeira. Antes de cada leitura, embaralhe com intenção clara e focada na questão que deseja explorar.",
    properties: ["Sabedoria", "Autoconhecimento", "Clarividência", "Orientação", "Tradição Esotérica", "Alta Qualidade"],
  },
  {
    id: 22,
    slug: "velao-uniao-dominio",
    name: "Velão Ritualístico União e Domínio",
    shortDesc: "Ervas e Resinas para Relações Firmes",
    price: "19,50 €",
    priceNum: "19.50",
    img: "/images/velao-uniao-dominio.png",
    category: "Velões",
    badge: null,
    metaDescription:
      "Velão Ritualístico União e Domínio — infundido com ervas e resinas de união e domínio para relações amorosas e profissionais sólidas. Loja esotérica Mundo Mágico Aveiro.",
    whatItIs:
      "O Velão Ritualístico de União e Domínio é um velão de grande porte infundido com ervas e resinas de dupla ação — ervas de união (canela, cravinho, rosa) e ervas de domínio (patchouli, mirra) — para relações onde se deseja tanto a ligação como a influência.",
    fullDescription:
      "A combinação de união e domínio num único velão representa um dos trabalhos mais sofisticados da tradição esotérica luso-brasileira. A união cria o laço afetivo e o domínio mantém esse laço sob o controlo de quem faz o trabalho. São dois movimentos complementares: primeiro atrair, depois manter.\n\nAs ervas de união promovem atração, cumplicidade, afeto e desejo de proximidade. As ervas de domínio promovem submissão suave, obediência emocional e preferência pela pessoa que faz o trabalho. Juntas, criam um campo energético de ligação e influência.\n\nEste velão é indicado tanto para situações amorosas (manter um parceiro fiel e focado na relação) como para situações profissionais (exercer influência sobre um superior hierárquico, cliente ou sócio).",
    forWhat: [
      "Criar e fortalecer uma ligação amorosa com domínio suave sobre o parceiro",
      "Exercer influência positiva sobre superiores ou parceiros profissionais",
      "Manter um parceiro focado, fiel e emocionalmente dependente da relação",
      "Trabalhos de amarração com elementos de domínio para situações complexas",
      "Fortalecer a autoridade e presença numa relação desequilibrada",
    ],
    howToUse:
      "Acenda numa sexta-feira à meia-noite. Coloque uma foto da pessoa alvo junto ao velão. Unte a base com óleo de domínio antes de acender. Pronuncie a sua intenção específica — de união e de guia — clara e determinadamente. Repita durante 3 semanas às sextas-feiras.",
    properties: ["União", "Domínio", "Influência", "Lealdade", "Controlo Afetivo", "Poder de Atração"],
    ingredients: "Cera natural, canela, cravinho, rosa vermelha, patchouli, mirra, resinas rituais",
  },
  {
    id: 23,
    slug: "vela-7-mechas-corda-amarrar",
    name: "Vela 7 Mechas Corda de Amarrar",
    shortDesc: "Desbloqueio e Libertação de Amarras",
    price: "17,00 €",
    priceNum: "17.00",
    img: "/images/vela-7-mechas-corda.png",
    category: "Velões",
    badge: null,
    metaDescription:
      "Vela 7 Mechas Corda de Amarrar — 7 mechas com elemento corda para rituais de amarração positiva ou libertação de amarras negativas. Loja Mundo Mágico Aveiro.",
    whatItIs:
      "A Vela de 7 Mechas com Corda é um velão ritual com 7 mechas e elemento de corda simbólico, usada tanto para criar laços de amarração positiva como para libertar a pessoa de amarrações que a prendem contra a sua vontade.",
    fullDescription:
      "A corda é um dos símbolos mágicos mais antigos e universais da humanidade — ela une, ela amarra, ela delimita. Na tradição esotérica, a corda representa o laço de intenção que conecta duas realidades. Uma corda bem atada une; uma corda mal atada aprisiona.\n\nEsta vela de 7 mechas com elemento de corda pode ser usada em dois sentidos complementares: para criar uma amarração voluntária e positiva entre duas pessoas (criar o laço) ou para libertar a pessoa de uma amarração externa que a prende contra a sua vontade (cortar o laço). A intenção do praticante determina a direção do trabalho.\n\nO número 7 de mechas garante que o trabalho actue de forma abrangente em todos os planos onde a amarração existe ou deve existir.",
    forWhat: [
      "Criar uma amarração amorosa positiva com uma pessoa específica",
      "Libertar-se de amarrações que impedem o avanço ou a liberdade pessoal",
      "Fortalecer laços familiares ou de amizade que estão a enfraquecer",
      "Trabalhos de fixação — fazer uma pessoa ficar presa ao pensamento de si",
      "Rituais de reconexão com alguém que se afastou",
    ],
    howToUse:
      "Defina com clareza se a sua intenção é criar um laço ou libertar-se de um. Acenda numa sexta-feira para trabalhos de amor ou num sábado para trabalhos de libertação. Segure a intenção mental com firmeza durante toda a sessão de queima.",
    properties: ["Amarração", "Libertação", "Laços", "Fixação", "Conexão", "Desapego"],
  },
  {
    id: 24,
    slug: "vela-figurativa-casal-uniao-almas",
    name: "Vela Figurativa Casal — União de Almas",
    shortDesc: "Aproximação, Paixão e União Eterna",
    price: "12,90 €",
    priceNum: "12.90",
    img: "/images/vela-figurativa-casal.png",
    category: "Velas",
    badge: null,
    metaDescription:
      "Vela Figurativa Casal União de Almas — para aproximação amorosa intensa, paixão profunda e união eterna entre dois corações. Loja esotérica Mundo Mágico Aveiro.",
    whatItIs:
      "A Vela Figurativa Casal 'União de Almas' é uma vela moldada com dois corpos entrelaçados, representando a fusão de almas — usada para rituais de paixão profunda, aproximação intensa e união duradoura entre dois amantes.",
    fullDescription:
      "A União de Almas é o nível mais profundo do amor — vai além da atração física e da compatibilidade emocional. É aquele reconhecimento ancestral de que aquela pessoa já esteve consigo noutras vidas, que as almas se conhecem num nível que transcende este plano. Esta vela foi criada para trabalhos de amor que aspiram a esse nível de profundidade.\n\nA sua forma figurativa com os corpos entrelaçados cria uma imagem simbólica poderosa de dois seres que não sabem onde um começa e o outro acaba. Esta imagem ativa profundamente o princípio da magia simpática — o semelhante atrai e cria o semelhante.\n\nÉ a escolha certa para trabalhos de amor intenso, para quem deseja que a ligação com alguém vá além do superficial e toque a alma, ou para rituais de reconciliação depois de uma separação dolorosa.",
    forWhat: [
      "Criar ou aprofundar uma ligação a nível de alma com alguém amado",
      "Intensificar a paixão e o desejo numa relação estabelecida",
      "Rituais de reunificação após separação dolorosa de dois amantes",
      "Trabalhos de amor que aspira a uma união duradoura e profunda",
      "Conectar-se espiritualmente com alguém com quem existe uma atração especial",
    ],
    howToUse:
      "Acenda numa sexta-feira ou noite de lua cheia. Segure a vela entre as mãos e visualize a cena de união que deseja — não como desejo, mas como certeza. A intenção certa para este trabalho é de gratidão antecipada, não de súplica. Deixe queimar completamente.",
    properties: ["União de Almas", "Paixão Profunda", "Amor Eterno", "Reconexão", "Aproximação", "Intensidade Emocional"],
  },
  {
    id: 25,
    slug: "vela-figurativa-caixao-banimento",
    name: "Vela Figurativa Caixão de Banimento",
    shortDesc: "Quebra de Feitiço e Fim de Negatividade",
    price: "9,50 €",
    priceNum: "9.50",
    img: "/images/vela-figurativa-caixao.png",
    category: "Velas",
    badge: null,
    metaDescription:
      "Vela Figurativa Caixão de Banimento — para encerrar definitivamente situações negativas, banir energias indesejadas e fechar capítulos dolorosos. Mundo Mágico Aveiro.",
    whatItIs:
      "A Vela Figurativa Caixão de Banimento é uma vela moldada em forma de caixão, usada para encerrar definitivamente situações, energias ou influências indesejadas, enterrando o passado de forma ritualizada.",
    fullDescription:
      "O caixão é o símbolo definitivo do encerramento — o recipiente que contém o que deve terminar e que é enterrado para nunca mais regressar. Na tradição esotérica, trabalhos de banimento são igualmente legítimos e necessários como os de atração: às vezes o que mais precisamos é de encerrar.\n\nEsta vela é usada para 'enterrar' situações, memórias, influências ou energias que persistem na vida da pessoa muito depois de deverem ter terminado. Uma ex-relação que continua a assombrar, um trauma que não sai da memória, uma influência de alguém que continua a interferir mesmo à distância.\n\nÉ também uma ferramenta poderosa para encerrar hábitos negativos, vícios, padrões de comportamento ou crenças limitantes que a pessoa reconhece mas não consegue eliminar.",
    forWhat: [
      "Encerrar definitivamente uma relação ou situação do passado",
      "Banir a influência energética de uma pessoa específica",
      "Eliminar ritualmente hábitos negativos ou padrões autossabotadores",
      "Fechar um ciclo doloroso e libertar-se emocionalmente do passado",
      "Banir a memória obsessiva de algo ou alguém que não deve permanecer",
    ],
    howToUse:
      "Acenda num sábado durante a lua minguante ou lua nova. Escreva num papel o que deseja banir — nome, situação ou hábito — e coloque-o debaixo da vela. Após terminar completamente, enterre os restos com o papel num local fora da sua casa. Não olhe para trás.",
    properties: ["Banimento", "Encerramento", "Fim de Ciclo", "Libertação do Passado", "Expulsão", "Fecho Definitivo"],
  },
  {
    id: 26,
    slug: "conjunto-velas-finas-ritual",
    name: "Conjunto de Velas Finas de Ritual",
    shortDesc: "Cromoterapia e Rituais Rápidos de Intenção",
    price: "8,50 €",
    priceNum: "8.50",
    img: "/images/velas-finas-ritual.png",
    category: "Velas",
    badge: null,
    metaDescription:
      "Conjunto de Velas Finas de Ritual — set de velas coloridas para cromoterapia espiritual e rituais rápidos de intenção. Cada cor para uma área específica. Mundo Mágico Aveiro.",
    whatItIs:
      "O Conjunto de Velas Finas de Ritual é um set de velas delgadas e coloridas para práticas de cromoterapia espiritual e rituais rápidos de intenção, com cada cor correspondendo a uma área específica da vida.",
    fullDescription:
      "As velas finas coloridas são a ferramenta de eleição para rituais rápidos e precisos — o seu tempo de queima reduzido torna-as perfeitas para intenções específicas sem grandes cerimónias. Cada cor carrega uma frequência vibracional distinta, correspondendo a uma área da vida.\n\nAs correspondências cromáticas neste conjunto seguem a tradição: vermelho (amor, paixão, energia vital), laranja (criatividade, alegria, vitalidade), amarelo (prosperidade, inteligência, sucesso), verde (saúde, cura, natureza), azul (comunicação, paz, verdade), índigo (intuição, terceiro olho, clarividência), violeta (espiritualidade, proteção, transformação), branco (pureza, paz, intenção universal), preto (proteção, banimento, fecho) e rosa (amor suave, amizade, compaixão).\n\nIdeal para principiantes que começam a praticar magia ritual, para rituais do altar diário, e para praticantes experientes que necessitam de um instrumento de intenção específica e rápida.",
    forWhat: [
      "Rituais rápidos de intenção específica em qualquer área da vida",
      "Cromoterapia espiritual para harmonizar chakras e centros de energia",
      "Uso diário no altar para manter intenções ativas",
      "Aprendizagem das correspondências cromáticas na prática esotérica",
      "Rituais de curta duração que não requerem velas grandes",
    ],
    howToUse:
      "Escolha a cor correspondente à sua intenção do dia. Segure a vela e imprima nela uma intenção clara e específica. Acenda e deixe queimar até ao fim — o tempo de queima reduzido é adequado para a maioria das intenções. Use um portavelas adequado.",
    properties: ["Cromoterapia", "Intenção Rápida", "Versatilidade", "Altar Diário", "Rituais Precisos"],
  },
  {
    id: 27,
    slug: "oleo-ritual-pega-nao-larga",
    name: "Óleo de Ritual Pega e Não Larga",
    shortDesc: "Atração Amorosa Persistente e Conexão",
    price: "15,00 €",
    priceNum: "15.00",
    img: "/images/oleo-pega-nao-larga.png",
    category: "Óleos de Ritual",
    badge: null,
    metaDescription:
      "Óleo Ritual Pega e Não Larga — para criar atração amorosa intensa e persistente. Unta velas, fotos e objetos para conexão irresistível. Loja Mundo Mágico Aveiro.",
    whatItIs:
      "O Óleo de Ritual Pega e Não Larga é um óleo ritual concentrado formulado com rosa, sândalo e almíscar para criar uma atração amorosa intensa e persistente, tornando a pessoa irresistível para o alvo da intenção.",
    fullDescription:
      "Os óleos rituais são um dos meios mais antigos e eficazes de transmitir intenção — a sua textura viscosa 'agarra' às superfícies e às energias, criando uma presença que perdura muito após a aplicação. 'Pega e Não Larga' é, literalmente, uma fórmula de fixação e apego amoroso.\n\nFormulado com ingredientes de reconhecida ação magnética na tradição esotérica — a rosa para a vibração do amor, o sândalo para a atração sensorial e a fixação emocional, o almíscar animal para a atração física instintiva — este óleo actua em múltiplos níveis da atração.\n\nA sua aplicação pode ser múltipla: untar velas antes de as acender para amplificar rituais de amor, aplicar em fotografias da pessoa desejada, untar objetos pessoais que vão ser dados à pessoa, ou aplicar nos pontos de pulso do utilizador para aumentar o seu magnetismo pessoal.",
    forWhat: [
      "Amplificar rituais de amor ao untar velas com o óleo",
      "Criar uma conexão emocional persistente com uma pessoa específica",
      "Aumentar o magnetismo pessoal e a capacidade de atração",
      "Untar objetos, cartas ou presentes para a pessoa desejada",
      "Rituais de amarração suave e contínua",
    ],
    howToUse:
      "Aplique em velas antes dos rituais (do centro para fora para atrair). Aplique nos pontos de pulso, pescoço e nuca para aumentar o magnetismo pessoal. Para trabalhos com foto, aplique em pequena quantidade nas costas da fotografia. Conservar em local fresco e escuro.",
    properties: ["Atração", "Fixação", "Magnetismo", "Apego Amoroso", "Irresistibilidade", "Persistência"],
    ingredients: "Óleo base, essência de rosa, sândalo, almíscar, ervas de atração, resinas fixadoras",
  },
  {
    id: 28,
    slug: "oleo-ritual-limpeza-purificacao",
    name: "Óleo de Ritual Limpeza e Purificação",
    shortDesc: "Purificação da Aura e Escudo Espiritual",
    price: "15,00 €",
    priceNum: "15.00",
    img: "/images/oleo-limpeza-purificacao.png",
    category: "Óleos de Ritual",
    badge: null,
    metaDescription:
      "Óleo Ritual Limpeza e Purificação — com arruda, eucalipto e limão para purificar a aura e criar escudo espiritual protetor. Loja esotérica Mundo Mágico Aveiro.",
    whatItIs:
      "O Óleo de Ritual Limpeza e Purificação é um óleo ritual formulado com arruda, eucalipto, limão e alecrim para purificar o campo áurico e criar um escudo espiritual protetor.",
    fullDescription:
      "A purificação é o primeiro passo de qualquer trabalho espiritual sério. Antes de atrair, proteger ou transformar, é necessário limpar — remover as camadas de energia densa que se acumulam na aura através do stress quotidiano, das interações negativas e do ambiente energético que nos rodeia.\n\nEste óleo reúne os quatro grandes purificadores da tradição esotérica portuguesa: a arruda (a rainha das ervas protetoras no folclore ibérico), o eucalipto (para clareza e abertura respiratória-espiritual), o limão (para dissolução de energias densas com a sua acidez vibracional) e o alecrim (para fortalecimento e proteção após a limpeza).\n\nÉ um óleo de uso muito versátil: purificação pessoal, limpeza de espaços, preparação de velas para rituais, e proteção em ambientes de alta exposição energética.",
    forWhat: [
      "Purificação do campo áurico antes de rituais espirituais",
      "Limpeza e proteção de espaços físicos (casa, trabalho, altar)",
      "Preparação de velas brancas e de proteção para amplificar o efeito",
      "Proteção diária para pessoas sensitivas e praticantes espirituais",
      "Remoção de energias densas acumuladas após períodos difíceis",
    ],
    howToUse:
      "Para uso pessoal, aplique nos pulsos, nuca e solar do plexo antes de rituais ou saídas importantes. Para espaços, dilua em água e borrife os ambientes. Para velas, unte do centro para as extremidades antes de acender. Agite bem antes de usar.",
    properties: ["Purificação", "Limpeza Áurica", "Proteção", "Clareza", "Escudo Espiritual", "Renovação"],
    ingredients: "Óleo base, arruda, eucalipto, limão, alecrim, álcool, óleos essenciais purificadores",
  },
  {
    id: 29,
    slug: "oleo-ritual-quebra-macumba",
    name: "Óleo de Ritual Quebra Macumba",
    shortDesc: "Destruição Imediata de Magia e Mau-olhado",
    price: "15,00 €",
    priceNum: "15.00",
    img: "/images/oleo-quebra-macumba.png",
    category: "Óleos de Ritual",
    badge: null,
    metaDescription:
      "Óleo Ritual Quebra Macumba — fórmula potente para neutralizar feitiçaria, desfazer trabalhos de magia negativa e eliminar o mau-olhado intenso. Mundo Mágico Aveiro.",
    whatItIs:
      "O Óleo Quebra Macumba é uma fórmula ritual concentrada com ingredientes de forte poder disruptivo, especialmente composta para neutralizar e desfazer trabalhos de magia negativa, feitiçaria e mau-olhado intenso.",
    fullDescription:
      "'Macumba' é um termo popular português para feitiçaria ou magia negativa direcionada. Quando uma pessoa está sob influência de um trabalho deste tipo, manifesta sintomas que se acumulam de forma irracional: azar em série em todas as áreas, mal-estar físico sem causa médica, sonhos perturbadores, sensação de perseguição, relacionamentos que se destroem inexplicavelmente.\n\nEste óleo é formulado com ingredientes de reconhecida ação de quebra e corte: o enxofre purificado (dissolvente de magia na tradição esotérica), a guiné (erva de corte e libertação), o cravo (quebra de laços mágicos), e outros componentes mantidos em sigilo de formulação. A sua composição é agressiva no plano energético — não no físico.\n\nDeve ser usado com respeito e clareza de intenção. É uma ferramenta de libertação, não de ataque.",
    forWhat: [
      "Neutralizar e desfazer feitiçaria ou macumba direcionada",
      "Quebrar trabalhos de magia negativa de origem conhecida ou desconhecida",
      "Eliminar mau-olhado intenso que não cede a limpezas convencionais",
      "Proteção extrema para praticantes expostos a magia de baixa vibração",
      "Preparação de velas de quebra para amplificar trabalhos de proteção",
    ],
    howToUse:
      "Aplique com cuidado — este óleo é potente. Para uso pessoal, aplique apenas nos pés e tornozelos, nunca no rosto. Para velas de quebra, unte completamente antes de acender. Para espaços, dilua em grande quantidade de água antes de usar. Lave as mãos após manuseamento.",
    properties: ["Quebra de Feitiço", "Neutralização", "Corte Mágico", "Proteção Extrema", "Disrupção Energética"],
    ingredients: "Óleo base, enxofre purificado, guiné, cravo, ervas de corte, resinas de banimento",
  },
  {
    id: 30,
    slug: "oleo-ritual-rutura-separacao",
    name: "Óleo de Ritual Rutura e Separação",
    shortDesc: "Corte de Laços Nocivos e Rivalidades",
    price: "15,00 €",
    priceNum: "15.00",
    img: "/images/oleo-rutura-separacao.png",
    category: "Óleos de Ritual",
    badge: null,
    metaDescription:
      "Óleo Ritual Rutura e Separação — para cortar laços nocivos, afastar rivais e encerrar relações prejudiciais. Ação ética de libertação. Loja Mundo Mágico Aveiro.",
    whatItIs:
      "O Óleo de Ritual Rutura e Separação é uma fórmula para cortar laços nocivos e criar distância entre duas pessoas ou entre uma pessoa e uma situação prejudicial, atuando com ética e respeito pelo livre-arbítrio.",
    fullDescription:
      "A separação pode ser um ato de amor e de libertação — tanto para a pessoa que a pede como para aquela a quem se dirige. Quando uma relação ou situação é claramente prejudicial para todos os envolvidos, criar a condição energética para o afastamento é um serviço ao bem de todos.\n\nEste óleo atua criando repulsão energética entre as partes envolvidas — não através de malefício ou maldição, mas através do alinhamento energético com a separação natural. Funciona em situações amorosas (afastar um rival, terminar uma relação tóxica), profissionais (separar sócios incompatíveis) e familiares (afastar influências externas nocivas de um casal).\n\nNo Mundo Mágico, o óleo de separação é sempre formulado e vendido com um compromisso ético: não é usado para separar casais felizes, mas para libertar pessoas de situações que as prejudicam.",
    forWhat: [
      "Afastar um rival amoroso que ameaça a estabilidade do casal",
      "Criar distância energética entre si e uma pessoa tóxica",
      "Encerrar uma relação que ambas as partes já reconhecem como terminada",
      "Separar influências nocivas externas de um casal ou família",
      "Afastar ex-parceiros que não aceitam o fim da relação",
    ],
    howToUse:
      "Use com intenção clara e ética. Aplique em velas de separação ou corte. Para trabalhos com fotos, aplique nas costas das fotografias das duas pessoas que deseja separar. Acenda durante a lua minguante para potenciar o efeito de diminuição e afastamento.",
    properties: ["Separação", "Corte de Laços", "Afastamento", "Libertação", "Distância Energética", "Rutura Natural"],
    ingredients: "Óleo base, pimenta, patchouli, resinas de separação, ervas de afastamento, enxofre",
  },
  {
    id: 31,
    slug: "oleo-ritual-amansar",
    name: "Óleo de Ritual Amansar",
    shortDesc: "Paz Familiar e Harmonia de Temperamentos",
    price: "15,00 €",
    priceNum: "15.00",
    img: "/images/oleo-amansar.png",
    category: "Óleos de Ritual",
    badge: null,
    metaDescription:
      "Óleo Ritual Amansar — para suavizar temperamentos difíceis, promover paz familiar e harmonizar relações tensas. Fórmula suave e eficaz. Loja Mundo Mágico Aveiro.",
    whatItIs:
      "O Óleo de Ritual Amansar é uma fórmula suavizante para reduzir a agressividade, o temperamento difícil e a hostilidade de pessoas específicas, promovendo paz, harmonia e docilidade nas relações.",
    fullDescription:
      "'Amansar' significa tornar manso — domesticar a parte selvagem e agressiva de uma personalidade sem violentar a sua natureza fundamental. É um trabalho de suavização, não de controlo absoluto. A sua ação é gradual mas consistente.\n\nEste óleo é formulado com ingredientes que historicamente na tradição esotérica são associados à suavização de temperamentos: mel (doçura), camomila (calma), lavanda (relaxamento), e ervas pacificadoras da tradição portuguesa. Juntos criam uma vibração de serenidade que se transmite ao campo energético da pessoa alvo.\n\nÉ especialmente indicado para situações de conflito familiar (um familiar agressivo que perturba a paz do lar), laboral (um chefe ou colega difícil), conjugal (um parceiro com temperamento explosivo) ou qualquer relação onde exista tensão persistente causada pelo temperamento de alguém.",
    forWhat: [
      "Suavizar o temperamento de um familiar agressivo ou difícil",
      "Pacificar um chefe, colega ou supervisor com postura hostil",
      "Reduzir a conflituosidade de um parceiro com temperamento explosivo",
      "Criar um ambiente de paz duradoura em situações de tensão crónica",
      "Preparar o terreno energético para conversas difíceis ou negociações",
    ],
    howToUse:
      "Aplique em velas de cor rosa ou azul clara para trabalhos de paz. Para uso discreto, aplique uma gota em objetos que a pessoa use diariamente ou em locais que frequente. Para espaços, dilua em água e borrife o ambiente antes da chegada da pessoa.",
    properties: ["Suavização", "Paz", "Harmonia", "Docilidade", "Calma", "Pacificação"],
    ingredients: "Óleo base, mel, camomila, lavanda, ervas pacificadoras, essências florais",
  },
  {
    id: 32,
    slug: "oleo-ritual-afasta-desaparece",
    name: "Óleo de Ritual Afasta e Desaparece",
    shortDesc: "Afastamento de Pessoas Indesejadas",
    price: "15,00 €",
    priceNum: "15.00",
    img: "/images/oleo-afasta-desaparece.png",
    category: "Óleos de Ritual",
    badge: null,
    metaDescription:
      "Óleo Ritual Afasta e Desaparece — para afastar definitivamente pessoas indesejadas, ex-parceiros que perseguem ou influências nocivas. Ação ética. Mundo Mágico Aveiro.",
    whatItIs:
      "O Óleo de Ritual Afasta e Desaparece é uma fórmula de afastamento definitivo para criar distância física e energética entre o utilizador e uma pessoa indesejada — ex-parceiros, perseguidores ou influências nocivas.",
    fullDescription:
      "Há pessoas que, mesmo depois de a relação ter terminado no plano físico, continuam a interferir energeticamente na vida do outro: através de pensamentos obsessivos, presença constante, assédio ou simples incapacidade de aceitar o fim. O óleo 'Afasta e Desaparece' cria a condição energética para que este afastamento ocorra de forma natural e definitiva.\n\nO seu nome diz tudo — a sua intenção é dupla: primeiro afastar (criar distância), depois fazer desaparecer (tornar a presença da pessoa invisível na vida do utilizador, como se nunca tivesse existido). Não é um trabalho de maldição — a pessoa não é prejudicada. Simplesmente encontra razões naturais para se afastar.\n\nUse com serenidade e certeza — a pressa ou a raiva na intenção enfraquecem este tipo de trabalho. A clareza e a firmeza são os seus maiores aliados.",
    forWhat: [
      "Afastar definitivamente ex-parceiros que não aceitam o fim",
      "Criar distância física de pessoas que causam dano ou perturbação",
      "Tornar-se invisível para quem deseja que saia da sua vida",
      "Afastar rivais amorosos de forma suave mas definitiva",
      "Eliminar influências nocivas que interferem na paz pessoal",
    ],
    howToUse:
      "Acenda em conjunto com uma vela de cor preta ou roxa num sábado durante a lua minguante. Visualize a pessoa a afastar-se progressivamente, cada vez mais distante, até desaparecer completamente do seu horizonte. Não projete raiva — projete indiferença serena.",
    properties: ["Afastamento", "Expulsão", "Distância", "Invisibilidade", "Libertação Definitiva", "Fim de Perturbação"],
    ingredients: "Óleo base, pimenta, patchouli, alho, ervas de repulsão, resinas de banimento",
  },
  {
    id: 33,
    slug: "oleo-ritual-xango",
    name: "Óleo de Ritual Xangô",
    shortDesc: "Justiça Celestial, Poder e Vitória",
    price: "15,00 €",
    priceNum: "15.00",
    img: "/images/oleo-xango.png",
    category: "Óleos de Ritual",
    badge: null,
    metaDescription:
      "Óleo Ritual Xangô — consagrado ao Orixá da Justiça para processos legais, força de vontade e vitória sobre injustiças. Fórmula sagrada. Loja Mundo Mágico Aveiro.",
    whatItIs:
      "O Óleo de Ritual Xangô é uma fórmula sagrada consagrada ao Orixá Xangô — senhor da justiça, do trovão e da força — para situações que requerem poder, vitória e obtenção de justiça.",
    fullDescription:
      "Xangô é o terceiro Rei de Oyó na tradição Yorubá e um dos Orixás mais poderosos e venerados — o senhor do trovão, do relâmpago e da pedreira. Na sua dimensão espiritual, Xangô representa a justiça absoluta: não a justiça dos homens (que é imperfeita), mas a Justiça Divina que equilibra todos os atos e integridade de todos os seres.\n\nEste óleo é formulado com os ingredientes tradicional e ritualmente associados a Xangô: azeite-de-dendê (o azeite sagrado dos Orixás), pimenta-da-costa (a pimenta de Xangô), semente de obi e outras resinas e ervas de poder. A sua vibração é forte, masculina e determinada.\n\nInvoque Xangô quando a injustiça parece invencível, quando o poder está desigualmente distribuído, quando necessita de força interior para enfrentar situações intimidantes ou quando processos legais precisam de um auxílio espiritual de força.\n\nXangô não é um Orixá de paciência — a sua energia é urgente, determinada e justa. Use com respeito e intenção limpa.",
    forWhat: [
      "Apoio espiritual em processos legais, judiciais ou burocráticos",
      "Obtenção de justiça em situações de injustiça flagrante",
      "Fortalecimento interior para enfrentar situações de poder intimidante",
      "Vitória em competições, disputas ou contextos de confronto",
      "Proteção contra abusos de poder e injustiças institucionais",
    ],
    howToUse:
      "Acenda uma vela vermelha ou marrom e aplique o óleo nela em espiral ascendente. Faça o seu pedido a Xangô com respeito, clareza e firmeza — ele aprecia quem é direto e honesto. Evite usar com intenções desonestas — Xangô é justo para todos.",
    properties: ["Justiça", "Poder", "Vitória", "Força", "Trovão", "Determinação", "Xangô"],
    ingredients: "Dendê, pimenta-da-costa, semente de obi, pedra de São Paulo, resinas de poder, ervas de Xangô",
  },
  {
    id: 34,
    slug: "oleo-ritual-maias",
    name: "Óleo de Ritual Maias",
    shortDesc: "Bloqueio de Inveja e Intrigas do Quotidiano",
    price: "15,00 €",
    priceNum: "15.00",
    img: "/images/oleo-maias.png",
    category: "Óleos de Ritual",
    badge: null,
    metaDescription:
      "Óleo Ritual Maias — baseado na tradição portuguesa das festas de Maio para bloquear inveja quotidiana, olhares pesados e intrigas. Proteção suave e contínua. Mundo Mágico Aveiro.",
    whatItIs:
      "O Óleo de Ritual Maias é uma fórmula protetora baseada na tradição portuguesa das 'Maias' — festas de Maio onde se enfeitam as casas com flores e ervas protetoras — para bloquear a inveja quotidiana e os olhares pesados.",
    fullDescription:
      "As 'Maias' são uma das tradições populares mais antigas de Portugal — no mês de Maio, as casas são ornamentadas com ramos de flores amarelas e ervas protetoras (especialmente o espinheiro alvar e a flor de maias) para afastar o mau olhado, as intrigas e a inveja dos vizinhos e conhecidos.\n\nEste óleo captura a essência desta tradição secular, formulado com as ervas e flores da tradição maia portuguesa. A sua proteção é suave e contínua — não é um trabalho de combate agressivo como o volteio, mas de criação de um escudo suave que simplesmente reflete de forma gentil olhares invejosos antes que causem dano.\n\nÉ a proteção certa para a inveja do quotidiano — não a feitiçaria pesada, mas os olhares de cobiça dos colegas, os comentários maliciosos dos conhecidos, a inveja passiva dos que desejam o que você tem. Estes olhares acumulam-se e podem causar dano real ao longo do tempo.",
    forWhat: [
      "Proteção contra mau-olhado quotidiano de conhecidos e colegas",
      "Bloqueio de inveja passiva e cobiça de pessoas próximas",
      "Proteção de conquistas novas (emprego, relação, casa) contra o mau-olhado",
      "Criação de escudo suave mas eficaz para o uso diário",
      "Proteção de crianças e pessoas sensitivas expostas a muitos olhares",
    ],
    howToUse:
      "Para uso pessoal, aplique uma gota atrás das orelhas e no pescoço antes de sair. Para proteção de espaços, aplique em quatro cantos da porta de entrada. Para artefactos novos (carro, objetos de valor), aplique uma gota antes de os exibir ao público.",
    properties: ["Proteção contra Inveja", "Mau-Olhado", "Escudo Suave", "Tradição Portuguesa", "Proteção Quotidiana"],
    ingredients: "Óleo base, flor de maias, espinheiro alvar, ervas protetoras de Maio, essência de flor",
  },
  {
    id: 35,
    slug: "oleo-ritual-dominio",
    name: "Óleo de Ritual Domínio",
    shortDesc: "Liderança, Poder e Domínio de Obstáculos",
    price: "15,00 €",
    priceNum: "15.00",
    img: "/images/oleo-dominio.png",
    category: "Óleos de Ritual",
    badge: null,
    metaDescription:
      "Óleo Ritual Domínio — para afirmar autoridade, liderança e presença energética em situações de poder. Fórmula de domínio e força de vontade. Mundo Mágico Aveiro.",
    whatItIs:
      "O Óleo de Ritual Domínio é uma fórmula de autoridade e liderança para situações onde se necessita de afirmar poder, exercer influência e guiar o rumo de situações complexas com a sua presença energética.",
    fullDescription:
      "O domínio não é a dominação pelo medo — é a liderança natural que emana de quem está completamente centrado no seu poder interior. Na tradição esotérica, existem formulações específicas para ampliar esta qualidade de presença — a capacidade de entrar numa sala e fazer sentir a sua autoridade sem precisar de a reivindicar verbalmente.\n\nEste óleo é formulado com patchouli (o óleo de domínio e fixação por excelência), mirra (para a autoridade espiritual), raiz de galangal (para poder e influência) e outros ingredientes de força que amplificam a presença energética do utilizador. A sua fragrância é intensa, terrosa e imponente.\n\nUse quando precisar de afirmar-se em negociações difíceis, antes de reuniões com superiores hierárquicos, em situações de competição onde a presença conta, ou simplesmente para recuperar o seu centro de poder interior quando se sentir inseguro.",
    forWhat: [
      "Afirmar autoridade em situações de liderança ou negociação",
      "Exercer influência positiva sobre superiores, clientes ou parceiros",
      "Ampliar a presença energética em ambientes competitivos",
      "Recuperar o poder interior em momentos de insegurança ou dúvida",
      "Dominar obstáculos que parecem insuperáveis com determinação e força",
    ],
    howToUse:
      "Aplique nos pontos de poder: pulsos, nuca, plexo solar e solas dos pés. Para amplificar o efeito, unte uma vela vermelha ou dourada antes de um ritual de afirmação de poder. A sua fragrância terrosa cria uma âncora corporal de autoridade.",
    properties: ["Domínio", "Liderança", "Autoridade", "Poder Interior", "Presença", "Influência", "Força de Vontade"],
    ingredients: "Óleo base, patchouli, mirra, galangal, cedro, resinas de poder, ervas de autoridade",
  },
  {
    id: 36,
    slug: "kit-ritual-alta-magia-suprema",
    name: "Kit de Ritual de Alta Magia Suprema",
    shortDesc: "Kit Completo com Velas e Óleos de Poder",
    price: "35,00 €",
    priceNum: "35.00",
    img: "/images/kit-ritual-alta-magia.png",
    category: "Kits Rituais",
    badge: null,
    metaDescription:
      "Kit Ritual Alta Magia Suprema — conjunto completo de velas, óleos e artefactos de poder para rituais de grande envergadura. Arsenal espiritual completo. Mundo Mágico Aveiro.",
    whatItIs:
      "O Kit de Ritual de Alta Magia Suprema é um conjunto abrangente de artefactos rituais de elevada potência — velas, óleos, ervas e instruções — para trabalhos espirituais de grande envergadura realizados por praticantes experientes.",
    fullDescription:
      "A 'Alta Magia' é um termo do esoterismo ocidental que designa práticas rituais de maior complexidade, geralmente envolvendo múltiplos elementos, correspondências simbólicas elaboradas e uma intenção de grande impacto. Diferencia-se da magia popular não pela superioridade, mas pela sofisticação e amplitude do trabalho.\n\nEste kit foi concebido para situações em que um único artefacto não é suficiente — quando a situação requer múltiplas abordagens simultâneas, quando os trabalhos mais simples já foram tentados sem resultado, ou quando a profundidade e seriedade do trabalho merece um arsenal completo.\n\nO conteúdo do kit é cuidadosamente selecionado e varia consoante o objetivo específico — amoroso, financeiro, de proteção ou espiritual. Cada kit inclui instruções detalhadas e pode ser acompanhado por uma consulta gratuita com a nossa praticante para personalização total.",
    forWhat: [
      "Situações complexas que requerem múltiplos artefactos em simultâneo",
      "Trabalhos espirituais de grande envergadura e impacto",
      "Quando rituais simples não produziram o resultado esperado",
      "Praticantes experientes que desejam um arsenal completo",
      "Rituais de mudança de vida em múltiplas áreas simultaneamente",
    ],
    howToUse:
      "Consulte previamente a nossa praticante para garantir que o kit está adequado à sua situação. Siga rigorosamente as instruções incluídas. Recomendamos realizar o ritual numa única sessão de 2-3 horas, num espaço preparado e sem interrupções. A preparação mental é tão importante quanto o kit físico.",
    properties: ["Alta Magia", "Poder Supremo", "Ritual Completo", "Arsenal Espiritual", "Impacto Máximo", "Abrangência"],
  },
  {
    id: 37,
    slug: "dagida-feminina-boneca-ritual",
    name: "Dagida Feminina — Boneca de Pano de Ritual",
    shortDesc: "Boneca Consagrada para Rituais de Intenção",
    price: "12,50 €",
    priceNum: "12.50",
    img: "/images/boneca-pano-dagida.png",
    category: "Acessórios",
    badge: null,
    metaDescription:
      "Dagida Feminina — boneca de pano ritual consagrada para magia simpática de amor, cura emocional e proteção pessoal. Artesanal e consagrada. Mundo Mágico Aveiro.",
    whatItIs:
      "A Dagida Feminina é uma boneca de pano artesanal ritualmente consagrada, usada na tradição da magia simpática como foco material para rituais de amor, proteção pessoal e cura emocional.",
    fullDescription:
      "As bonecas rituais estão entre os mais antigos artefactos mágicos da humanidade — encontradas em escavações de todas as civilizações, do Egito Antigo à Europa Medieval. O princípio é sempre o mesmo: a boneca representa uma pessoa ou o próprio utilizador, e o que é feito com ela no plano ritual tem correspondência no plano real.\n\nA Dagida Feminina é especificamente consagrada para representar energia feminina — pode ser usada para representar a própria praticante (como foco de amor-próprio e cura interior) ou uma pessoa feminina específica que é alvo de um ritual de amor, proteção ou cura.\n\nArtesanal e única, cada Dagida é confeccionada com tecidos naturais e enchida com ervas selecionadas de acordo com a sua finalidade. A consagração realizada pela nossa praticante ativa-a ritualmente antes da entrega. Não é um brinquedo — é um instrumento espiritual sério para pessoas sérias.",
    forWhat: [
      "Rituais de amor-próprio e cura emocional centrados na própria praticante",
      "Foco material para rituais de amor direcionados a uma pessoa feminina",
      "Proteção pessoal através de rituais de escudo energético",
      "Rituais de cura emocional e libertação de traumas",
      "Magia simpática para alteração de comportamentos ou estados emocionais",
    ],
    howToUse:
      "Segure a Dagida entre as mãos e imprima nela a sua intenção específica — seja ela um pedido de cura, amor ou proteção. Trate-a com respeito como se fosse a pessoa que representa. Guarde-a num local especial do seu altar, enrolada em tecido natural de cor adequada à intenção.",
    properties: ["Magia Simpática", "Amor-Próprio", "Cura Emocional", "Proteção Pessoal", "Artesanal", "Consagrada"],
    ingredients: "Tecido natural, ervas selecionadas, cristais pequenos, linha de consagração",
  },
];

export const CATEGORIES = [
  "Todos",
  "Velas",
  "Velões",
  "Óleos de Ritual",
  "Kits Rituais",
  "Sabonetes",
  "Tarot",
  "Acessórios",
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, limit);
}
