/**
 * Dados institucionais do site — Cilmara Bonfim
 *
 * Este arquivo concentra TODO o conteúdo editável do site em um único
 * ponto. Cada bloco abaixo está marcado com placeholders claros
 * (ex.: "[Inserir texto aqui]") para que o conteúdo definitivo seja
 * preenchido sem alterar a estrutura dos componentes.
 *
 * Convenções:
 * - Texto definitivo: substituir o placeholder pelo conteúdo real.
 * - Imagens: substituir a URL de placeholder por uma imagem hospedada
 *   (pasta `public/uploads/` ou CDN).
 * - Datas: usar ISO 8601 (AAAA-MM-DD) quando possível.
 */

import type { LucideIcon } from "lucide-react";
import {
  Accessibility,
  Brain,
  GraduationCap,
  HeartHandshake,
  Shield,
  Briefcase,
  Stethoscope,
  HandHeart,
  Building2,
  type LucideIcon as LucideIconType,
} from "lucide-react";

/* ──────────────────────────────────────────────────────────────
   1. IDENTIDADE DA CANDIDATA
   ────────────────────────────────────────────────────────────── */

export const candidata = {
  nome: "Cilmara",
  sobrenome: "Bonfim",
  nomeCompleto: "Cilmara Teixeira Bonfim Leal",
  nomeUrna: "Cilmara Bonfim",
  numero: "70700",
  partido: "AVANTE",
  cargo: "Deputada Estadual",
  estado: "Pará",
  uf: "PA",
  cidadeBase: "Parauapebas",
  slogan: "Lutando por Mais Inclusão",
  statusTSE: "Aguardando Julgamento (em 31/08/2026)",
  cnpjCampanha: "68.462.229/0001-81",
};

/* ──────────────────────────────────────────────────────────────
   2. SLIDES DO HERO (banner principal preparado para 3 slides)
   ────────────────────────────────────────────────────────────── */

export interface HeroSlide {
  id: string;
  titulo: string;
  subtitulo: string;
  texto: string;
  botao?: { label: string; href: string };
  imagem: string;          // imagem principal (ou poster de vídeo)
  videoUrl?: string;       // opcional: se preenchido, vira background em vídeo
  alt: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: "slide-1",
    titulo: "Mulher surda, mãe e liderança comunitária de Parauapebas.",
    subtitulo: "Cilmara Bonfim · 70700 · Deputada Estadual",
    texto: "Levo a vivência da inclusão para a Assembleia, conectando quem enfrenta as barreiras a políticas públicas reais para todo o Pará.",
    botao: { label: "Quero Apoiar", href: "#apoiador" },
    imagem: "/uploads/hero-1.jpg",
    alt: "Cilmara Bonfim em Libras, retrato institucional",
  },
  {
    id: "slide-2",
    titulo: "Inclusão começa onde a pessoa é ouvida.",
    subtitulo: "Propostas para o Pará inteiro",
    texto: "Quatro eixos temáticos e propostas concretas: Libras 24h, Ciptea estadual, Centros TEA no interior e proteção de mães atípicas.",
    botao: { label: "Conhecer as Propostas", href: "#propostas" },
    imagem: "/uploads/hero-2.jpg",
    alt: "Cilmara Bonfim em reunião comunitária em Parauapebas",
  },
  {
    id: "slide-3",
    titulo: "Da vivência à Assembleia do Pará.",
    subtitulo: "Vote 70700 — AVANTE",
    texto: "Mulher surda, mãe atípica, agente administrativa e ex-coordenadora da COMPED. Uma candidatura construída com a comunidade.",
    botao: { label: "Como Votar", href: "#como-votar" },
    imagem: "/uploads/hero-3.jpg",
    alt: "Cilmara Bonfim com apoiadores durante caminhada",
  },
];

/* ──────────────────────────────────────────────────────────────
   3. APRESENTAÇÃO RÁPIDA ("Conheça Cilmara Bonfim")
   ────────────────────────────────────────────────────────────── */

export const apresentacaoRapida = {
  titulo: "Conheça Cilmara Bonfim",
  texto:
    "Mulher surda, mãe e liderança comunitária de Parauapebas. Coordenadora da COMPED (2025–2026). Candidata a Deputada Estadual pelo Pará — AVANTE 70700.",
  fotoUrl: "/uploads/foto-apresentacao.jpg",
  fotoAlt: "Retrato institucional de Cilmara Bonfim comunicando-se em Libras",
  cards: [
    { id: "card-1", rotulo: "Cargo", valor: "Deputada Estadual" },
    { id: "card-2", rotulo: "Número", valor: "70700" },
    { id: "card-3", rotulo: "Partido", valor: "AVANTE" },
    { id: "card-4", rotulo: "Estado", valor: "Pará (PA)" },
  ],
  botao: { label: "Ver apresentação completa", href: "#sobre" },
};

/* ──────────────────────────────────────────────────────────────
   4. QUEM É CILMARA BONFIM
   ────────────────────────────────────────────────────────────── */

export const quemSou = {
  titulo: "Quem é Cilmara Bonfim",
  subtitulo: "Mulher surda, mãe e liderança de Parauapebas.",
  biografia: [
    "Cilmara Bonfim une vivência, escuta e experiência na gestão pública para defender inclusão, acessibilidade e cuidado com as famílias no Pará.",
  ],
  fotoPrincipal: "/uploads/foto-quemsou.jpg",
  fotoAlt: "Retrato institucional de Cilmara Bonfim",
  fotoAcao: "/uploads/foto-acao.jpg",
  fotoAcaoAlt: "Cilmara Bonfim durante ação pública da COMPED em Parauapebas",
  destaques: [
    "Mulher surda e usuária de Libras.",
    "Mãe atípica e liderança comunitária.",
    "Experiência na COMPED de Parauapebas.",
  ],
  dadosPessoais: [
    { rotulo: "Cidade-base", valor: "Parauapebas (PA)" },
    { rotulo: "Partido", valor: "AVANTE" },
    { rotulo: "Número", valor: "70700" },
  ],
};

/* ──────────────────────────────────────────────────────────────
   3.1. POR QUE SE CANDIDATA (tensão central + citação)
   ────────────────────────────────────────────────────────────── */

export const porQue = {
  titulo: "Por que Cilmara se candidata",
  citacao:
    "Minha história me ensinou que inclusão não pode ser promessa distante. Ela precisa estar na escola, na saúde, no trabalho, no transporte, na comunicação e no respeito. Foi por isso que escolhi transformar vivência em luta coletiva.",
  citacaoFonte: "Cilmara Bonfim",
  paragrafo:
    "No Pará, milhares de pessoas com deficiência, surdos, pessoas no espectro autista e suas famílias enfrentam diariamente a barreira da invisibilidade e da falta de acessibilidade em hospitais, escolas, delegacias e no transporte público. O atendimento especializado está excessivamente concentrado na Região Metropolitana de Belém, obrigando famílias do interior a percorrer centenas de quilômetros para conseguir consultas básicas ou laudos. A inclusão ainda é tratada por muitos governantes como assistencialismo sazonal, e não como política pública contínua garantida por lei e com orçamento carimbado.",
  publicos: [
    "Pessoas surdas, pessoas com deficiência (sensorial, física, múltipla e intelectual).",
    "Pessoas com TEA (crianças, adolescentes e adultos neurodivergentes).",
    "Mães atípicas, avós e cuidadoras responsáveis pelo suporte continuado.",
    "Famílias de baixa renda dependentes da rede estadual do SUS e do transporte público.",
    "Lideranças comunitárias dos municípios do interior paraense.",
  ],
  territorios: [
    "Município-base: Parauapebas (centro de votação e vivência cotidiana).",
    "Território de Carajás / Sudeste: Canaã dos Carajás, Curionópolis, Marabá, Eldorado dos Carajás, Paragominas.",
    "Diálogo estadual: Santarém, Altamira, Marajó e Região Metropolitana de Belém.",
  ],
  paraQuemFalo:
    "Falo primeiro com quem conhece as barreiras na pele: pessoas surdas, pessoas com deficiência, autistas, mães atípicas e quem dedica a vida ao cuidado. Mas falo também com quem acredita que um Pará mais acessível na saúde, na escola, no transporte e no trabalho é um estado melhor, mais justo e humano para todas as famílias.",
};

/* ──────────────────────────────────────────────────────────────
   3.2. O QUE FAZ UMA DEPUTADA ESTADUAL (educação cívica)
   ────────────────────────────────────────────────────────────── */

export const funcoesCargo = [
  {
    id: "f-1",
    titulo: "Legislação na ALEPA",
    descricao:
      "Propor, debater, emendar e votar projetos de lei estaduais que instituam políticas públicas permanentes para inclusão, acessibilidade, suporte ao TEA, proteção à mulher e direitos dos idosos em todo o território paraense.",
  },
  {
    id: "f-2",
    titulo: "Fiscalização do Governo do Estado",
    descricao:
      "Monitorar a execução orçamentária e a qualidade dos serviços públicos estaduais. Exigir relatórios de secretarias (SESPA, SEDUC, SEJUDH, DETRAN), verificar condições dos Hospitais Regionais e fiscalizar contratos de transporte intermunicipal.",
  },
  {
    id: "f-3",
    titulo: "Emendas e Orçamento",
    descricao:
      "Participar da votação do PPA, da LDO e da LOA, alocando emendas parlamentares diretas para o fortalecimento de centros de reabilitação, instituições de acolhimento e programas de assistência social no interior.",
  },
  {
    id: "f-4",
    titulo: "Comissões e Audiências Públicas",
    descricao:
      "Integrar comissões parlamentares estratégicas (Direitos Humanos, Saúde, Educação) para convocar gestores estaduais, debater gargalos com a sociedade civil e dar voz às entidades representativas.",
  },
  {
    id: "f-5",
    titulo: "Articulação regional",
    descricao:
      "Ser a ponte política e institucional entre os municípios do interior — em especial do sul e sudeste paraense — e os órgãos da administração direta e indireta do Governo do Pará.",
  },
];

/* ──────────────────────────────────────────────────────────────
   5. LINHA DO TEMPO
   ────────────────────────────────────────────────────────────── */

export interface TimelineItem {
  id: string;
  data: string;             // AAAA-MM-DD ou apenas AAAA-MM ou AAAA
  dataExibicao: string;     // texto pronto para exibir
  titulo: string;
  descricao: string;
  categoria?: string;
  icone?: LucideIconType;
  fotoUrl?: string;
  fotoAlt?: string;
}

export const timeline: TimelineItem[] = [
  {
    id: "tl-1982",
    data: "1982-10-06",
    dataExibicao: "1982",
    titulo: "Nascimento em Tucuruí (PA)",
    descricao: "Cilmara nasce em Tucuruí, no interior do Pará, e ainda na infância muda-se para Parauapebas, onde crescerá e construirá seus laços familiares e comunitários.",
    categoria: "Origem",
  },
  {
    id: "tl-2020",
    data: "2020-11-15",
    dataExibicao: "2020",
    titulo: "Primeira disputa eleitoral — vereadora em Parauapebas (MDB 15100)",
    descricao: "Disputa uma cadeira na Câmara Municipal pelo MDB (15100), obtendo 769 votos e alcançando a suplência. A comunidade mostrava que buscava uma voz própria para a inclusão.",
    categoria: "Eleição",
  },
  {
    id: "tl-2022",
    data: "2022-10-02",
    dataExibicao: "2022",
    titulo: "Primeira disputa estadual — Deputada Estadual (Republicanos 10800)",
    descricao: "Disputa a Assembleia Legislativa do Pará pelo Republicanos (10800), conquistando 4.665 votos em todo o estado e ficando na 134ª posição geral (suplente). Acessibilidade como pauta de escala estadual.",
    categoria: "Eleição",
  },
  {
    id: "tl-2024",
    data: "2024-10-06",
    dataExibicao: "2024",
    titulo: "Consolidação municipal — vereadora em Parauapebas (AVANTE 70700)",
    descricao: "Nova candidatura à Câmara Municipal de Parauapebas pelo AVANTE (70700), alcançando 1.570 votos (crescimento de 104% sobre 2020). Em 19/11/2024 é anunciada pelo prefeito eleito Aurélio Goiano.",
    categoria: "Eleição",
  },
  {
    id: "tl-2025",
    data: "2025-01-02",
    dataExibicao: "Jan 2025",
    titulo: "Posse na COMPED — Coordenadoria Municipal da Pessoa com Deficiência",
    descricao: "Nomeada oficialmente coordenadora da COMPED (Portaria DC492/25), ligada à SEMAS de Parauapebas. Conduziu entregas de cadeiras de rodas, mutirões de Ciptea, ações do Abril Azul e eventos de lazer inclusivo.",
    categoria: "Gestão pública",
  },
  {
    id: "tl-2026",
    data: "2026-01-01",
    dataExibicao: "2026",
    titulo: "Candidatura a Deputada Estadual — AVANTE 70700",
    descricao: "Registro de candidatura apresentado ao TSE pelo AVANTE (nº 70700), com classificação 'Aguardando Julgamento' em 31/08/2026. Vivência, gestão e representatividade unidas para a ALEPA.",
    categoria: "Mandatário",
  },
];

/* ──────────────────────────────────────────────────────────────
   6. BANDEIRAS E CAUSAS
   ────────────────────────────────────────────────────────────── */

export interface Bandeira {
  id: string;
  titulo: string;
  descricao: string;
  icone: LucideIconType;
  cor: "blue" | "orange";
}

export const bandeiras: Bandeira[] = [
  { id: "b-01", titulo: "Comunidade Surda e Libras",   descricao: "Libras como língua oficial e direito fundamental. Atendimento bilíngue na saúde e na segurança, valorizando identidade e cultura surda.", icone: Accessibility, cor: "blue" },
  { id: "b-02", titulo: "Cidadania e Direitos PcD",   descricao: "Pessoas com deficiência precisam de calçadas acessíveis, transporte adaptado, reabilitação física e portas abertas no mercado formal de trabalho.", icone: Shield, cor: "orange" },
  { id: "b-03", titulo: "Neurodiversidade e TEA",     descricao: "Pessoas autistas demandam diagnóstico precoce, terapias multidisciplinares contínuas e acolhimento escolar sem discriminação.", icone: Brain, cor: "blue" },
  { id: "b-04", titulo: "Mães Atípicas e Cuidadoras", descricao: "Reconhecimento do trabalho de cuidado não remunerado e da sobrecarga psicológica, com apoio à saúde mental e oportunidades de renda.", icone: HeartHandshake, cor: "orange" },
  { id: "b-05", titulo: "Justiça Regional e Desenvolvimento Humano", descricao: "Cidades mineradoras de Carajás e do interior do Pará devem ter serviços públicos de excelência que reflitam a riqueza gerada na região.", icone: Building2, cor: "blue" },
  { id: "b-06", titulo: "Acessibilidade nos Serviços", descricao: "Atendimento em Libras 24h, mediadores escolares, transporte intermunicipal adaptado e Ciptea com validade estadual.", icone: Stethoscope, cor: "orange" },
];

/* ──────────────────────────────────────────────────────────────
   7. EIXOS TEMÁTICOS E PROPOSTAS
   ────────────────────────────────────────────────────────────── */

export interface Proposta {
  id: string;
  numero?: number;
  titulo: string;
  descricao: string;
}

export interface Eixo {
  id: string;
  titulo: string;
  descricao: string;
  icone: LucideIconType;
  cor: "blue" | "orange";
  propostas: Proposta[];
  /** Destaques do eixo para cards de "Propostas-Estrela" na home */
  propostasEstrela?: { num: number; titulo: string }[];
}

export const eixos: Eixo[] = [
  {
    id: "eixo-01",
    titulo: "Inclusão e Acessibilidade como Direito",
    descricao: "Libras, identificação e transporte acessível nos serviços públicos.",
    icone: Accessibility,
    cor: "blue",
    propostas: [
      { id: "e1-p1", numero: 1, titulo: "Central de Libras 24h por Videochamada no SUS e Segurança", descricao: "Indicação legislativa com minuta de projeto de lei e emendas para contratação de plataforma pública de videointerpretação simultânea em Libras, 24 horas por dia, nos Hospitais Regionais, SAMU e Delegacias da Polícia Civil do Pará." },
      { id: "e1-p2", numero: 2, titulo: "Intérpretes de Libras nos órgãos estaduais de grande fluxo", descricao: "Lotação de intérpretes profissionais de Libras nas secretarias estaduais, hospitais regionais, DETRAN, SEFA e escolas da rede estadual." },
      { id: "e1-p3", numero: 3, titulo: "CIPTEA Estadual Padronizada com validação digital", descricao: "Projeto de lei estadual que padroniza a Carteira de Identificação da Pessoa com TEA no Pará, com QR Code no app do Estado, integração com prontuários da SESPA e fiscalização do atendimento prioritário." },
      { id: "e1-p4", numero: 4, titulo: "Escola Estadual Bilíngue para Surdos em Belém e polos no interior", descricao: "Implantação de escola bilíngue (Libras/Português) na capital e em polos regionais, com profissionais fluentes em Libras e currículo acessível." },
      { id: "e1-p5", numero: 5, titulo: "Acessibilidade obrigatória em concessões de transporte intermunicipal", descricao: "Inclusão de cláusulas de acessibilidade (veículos adaptados, piso tátil, atendimento em Libras) nos contratos de concessão do transporte rodoviário e hidroviário estadual." },
    ],
    propostasEstrela: [
      { num: 8, titulo: "Central Estadual de Libras 24 Horas no SUS e Segurança Pública" },
      { num: 5, titulo: "CIPTEA com Validade Estadual, Validação Digital e Prioridade Real" },
    ],
  },
  {
    id: "eixo-02",
    titulo: "TEA, Mães Atípicas e Saúde Mental",
    descricao: "Cuidado especializado no interior e suporte para quem cuida.",
    icone: Brain,
    cor: "orange",
    propostas: [
      { id: "e2-p1", numero: 6, titulo: "Descentralização dos Centros TEA Pará", descricao: "Centros de Referência em Autismo nos polos de Marabá (Sudeste/Carajás), Santarém (Oeste) e Paragominas (Nordeste), com equipe completa pelo SUS (neuropediatria, terapia ocupacional, fonoaudiologia e psicologia)." },
      { id: "e2-p2", numero: 7, titulo: "Política estadual de Mediadores Escolares Inclusivos", descricao: "Criação de carreira estadual de mediadores escolares para acompanhar alunos com deficiência na rede pública de ensino, com formação específica e piso salarial." },
      { id: "e2-p3", numero: 8, titulo: "Simplificação e validade indeterminada de laudos para condições permanentes", descricao: "Lei estadual que dispensa a revalidação periódica de laudos para deficiências permanentes e simplifica o acesso a direitos continuados." },
      { id: "e2-p4", numero: 9, titulo: "Residências Inclusivas e programas de emprego apoiado", descricao: "Financiamento de residências inclusivas e oficinas de trabalho para adultos com deficiência intelectual, integradas à rede SUAS." },
    ],
    propostasEstrela: [
      { num: 6, titulo: "Centros Regionais TEA Pará: cuidado especializado no interior" },
    ],
  },
  {
    id: "eixo-03",
    titulo: "Autonomia e Cuidado de Mulheres e Idosos",
    descricao: "Proteção, autonomia e respeito em todas as regiões do estado.",
    icone: HandHeart,
    cor: "blue",
    propostas: [
      { id: "e3-p1", numero: 10, titulo: "Expansão de Salas Lilás e DEAMs 24h integradas às delegacias regionais", descricao: "Ampliação da rede de atendimento à mulher vítima de violência para o interior, com atendimento 24 horas, equipe multidisciplinar e intérprete de Libras." },
      { id: "e3-p2", numero: 11, titulo: "Auxílio Recomeço Pará", descricao: "Programa estadual de aluguel social temporário + qualificação profissional para mulheres em situação de violência." },
      { id: "e3-p3", numero: 12, titulo: "Distribuição contínua de absorventes e higiene menstrual nas escolas estaduais", descricao: "Programa estadual de dignidade menstrual com distribuição gratuita de absorventes e itens de higiene em todas as escolas da rede." },
      { id: "e3-p4", numero: 13, titulo: "Caravana da Longevidade e linha de cuidado geriátrico fluvial para o Marajó", descricao: "Programa itinerante de saúde do idoso, com equipes fluviais para atendimento nas ilhas do Marajó e caravanas terrestres no interior." },
      { id: "e3-p5", numero: 14, titulo: "Canal estadual de proteção contra golpes e violência financeira ao idoso", descricao: "Disque-denúncia e orientação jurídica gratuita para idosos vítimas de golpes e violência financeira, integrado à Defensoria Pública." },
    ],
  },
  {
    id: "eixo-04",
    titulo: "Mineração Responsável e Retorno Social",
    descricao: "Mais retorno social, saúde e oportunidade para as regiões produtoras.",
    icone: Briefcase,
    cor: "orange",
    propostas: [
      { id: "e4-p1", numero: 15, titulo: "Vinculação da cota estadual da CFEM para fundos de reabilitação e saúde", descricao: "Propor no PPA/LOA que parte da cota-parte estadual da CFEM seja vinculada a fundos de reabilitação, saúde e educação nas cidades produtoras." },
      { id: "e4-p2", numero: 16, titulo: "Contrapartidas sociais com metas de contratação de PcD", descricao: "Estabelecer, por lei, metas de contratação e formação remunerada de trabalhadores PcD nas empresas mineradoras e na cadeia produtiva." },
      { id: "e4-p3", numero: 17, titulo: "Fiscalização rigorosa de barragens e rejeitos", descricao: "Apoio à criação de auditoria estadual independente sobre segurança de barragens, rejeitos e impactos nas comunidades vizinhas." },
      { id: "e4-p4", numero: 18, titulo: "Selo Empresa Inclusiva do Pará", descricao: "Instituição de selo público estadual para empresas que contratam PcD acima do piso legal, com critérios transparentes e critérios técnicos auditáveis." },
    ],
  },
];

/* ──────────────────────────────────────────────────────────────
   7.1. MÉTODO DE MANDATO
   ────────────────────────────────────────────────────────────── */

export const metodoMandato = {
  titulo: "Como Cilmara trabalha",
  subtitulo: "Princípios operacionais do futuro gabinete na ALEPA.",
  principios: [
    {
      id: "pm-1",
      titulo: "Gabinete 100% Bilíngue e Acessível",
      descricao: "Atendimento direto em Libras e português. Intérpretes de Libras capacitados e ponto de apoio descentralizado em Parauapebas e na sede da ALEPA em Belém.",
    },
    {
      id: "pm-2",
      titulo: "Presença permanente nos territórios",
      descricao: "Roteiro quadrimestral de audiências públicas e escutas populares nas cidades polo do interior, com visitas a hospitais, escolas especiais e associações de bairro.",
    },
    {
      id: "pm-3",
      titulo: "Conselho Popular da Inclusão",
      descricao: "Comitê consultivo voluntário formado por mães atípicas, PcD, lideranças comunitárias e especialistas para avaliar previamente todo projeto de lei antes da protocolização.",
    },
    {
      id: "pm-4",
      titulo: "Prestação de contas aberta",
      descricao: "Boletins periódicos em linguagem simples, vídeo com Libras e legendas, prestando contas de cada emenda, projeto votado e vistoria em órgãos estaduais.",
    },
  ],
};

/* ──────────────────────────────────────────────────────────────
   7.2. DIAGNÓSTICO — DORES QUE MOTIVAM A CANDIDATURA
   ────────────────────────────────────────────────────────────── */

export const diagnostico = [
  {
    id: "dor-1",
    numero: "01",
    titulo: "Barreira de comunicação nos serviços estaduais de emergência",
    problema:
      "Pessoas surdas em pronto-socorro ou delegacia estadual não conseguem relatar sintomas ou agressões porque servidores não dominam Libras e inexiste intérprete por chamada de vídeo.",
    onde: "Hospitais regionais, UPAs, DETRAN e delegacias em todas as regiões do Pará.",
    competenciaEstadual:
      "SIM — a ALEPA pode legislar sobre atendimento acessível, criar a Central Estadual de Libras 24h e destinar emendas para plataformas de videointerpretação.",
  },
  {
    id: "dor-2",
    numero: "02",
    titulo: "Desassistência especializada em TEA e saúde mental no interior",
    problema:
      "Falta de neuropediatras, psicólogos infantis e fonoaudiólogos credenciados no SUS fora de Belém obriga mães e crianças a viagens de 12 a 20 horas de ônibus, com descompensação e abandono do tratamento.",
    onde: "Carajás, Baixo Amazonas, Tapajós, Xingu e Arquipélago do Marajó.",
    competenciaEstadual:
      "SIM (compartilhada com o SUS) — a ALEPA fiscaliza a SESPA, aprova o orçamento da média/alta complexidade e pode condicionar recursos aos Centros Regionais TEA.",
  },
  {
    id: "dor-3",
    numero: "03",
    titulo: "Sobrecarga extrema e exclusão social das mães atípicas",
    problema:
      "Mais de 80% das mães de crianças com deficiência grave abrem mão de empregos formais para cumprir rotinas exaustivas de terapias, vivendo sem renda própria, sem suporte psicológico e sob risco constante de isolamento.",
    onde: "Periferias urbanas, comunidades ribeirinhas e rurais de todo o Pará.",
    competenciaEstadual:
      "SIM — o Parlamento Estadual pode criar programas como Auxílio Recomeço Pará e instituir a política estadual de suporte à saúde mental de cuidadoras.",
  },
];

/* ──────────────────────────────────────────────────────────────
   8. ATUAÇÃO / "O QUE JÁ FEZ"
   ────────────────────────────────────────────────────────────── */

export interface Acao {
  id: string;
  categoria: string;
  titulo: string;
  descricao: string;
  data: string;
  local: string;
  imagem: string;
  imagemAlt: string;
  destaque?: string;
  parceiros?: string;
  depoimento?: string;
}

export const atuacao: Acao[] = [
  {
    id: "ac-comped-1",
    categoria: "Mobilidade · Saúde",
    titulo: "Entrega técnica de 28 cadeiras de rodas adaptáveis no CER II",
    descricao:
      "Equipamentos adaptados entregues a pessoas atendidas pela rede municipal.",
    data: "Março de 2025",
    local: "Parauapebas (PA) · CER II",
    imagem: "/uploads/atuacao-1.jpg",
    imagemAlt: "Entrega de cadeiras de rodas adaptáveis no CER II de Parauapebas",
    parceiros: "COMPED · SEMAS · Secretaria Municipal de Saúde · Rede PcD",
    depoimento: "Maria Aparecida Vieira (mãe de usuário): 'alívio de receber uma cadeira adequada ao posicionamento físico do filho'.",
    destaque: "28 cadeiras de rodas",
  },
  {
    id: "ac-comped-2",
    categoria: "TEA · Educação",
    titulo: "Coordenação da Semana Municipal de Conscientização sobre o Autismo",
    descricao:
      "Ações de informação e diálogo sobre autismo em Parauapebas.",
    data: "Abril de 2025",
    local: "Parauapebas (PA)",
    imagem: "/uploads/atuacao-2.jpg",
    imagemAlt: "Palestra da Semana de Conscientização sobre o Autismo em Parauapebas",
    depoimento: "Cleubiane Guimarães (professora e mãe atípica): 'a sociedade necessita saber das nossas reais dores (...) hoje, nesta gestão, eu posso estar a ver a mudança de facto'.",
    destaque: "Abril Azul · Parauapebas",
  },
  {
    id: "ac-comped-3",
    categoria: "Inclusão · Lazer",
    titulo: "Trilha Inclusiva Quarubarana na Floresta Nacional de Carajás",
    descricao:
      "Percurso acessível para pessoas com mobilidade reduzida e famílias.",
    data: "Maio de 2025",
    local: "Flona de Carajás (PA)",
    imagem: "/uploads/atuacao-3.jpg",
    imagemAlt: "Trilha Inclusiva Quarubarana na Floresta Nacional de Carajás",
    parceiros: "COMPED · SEMMA · Instituto Chico Mendes · Amap",
    depoimento: "Cilmara: 'as mães estão a levar os seus filhos para conhecer e passear. A gente fica muito contente com isso. Esta é a nossa luta pela inclusão'.",
    destaque: "2.400 m de trilha adaptada",
  },
  {
    id: "ac-comped-4",
    categoria: "Cuidado · Mulheres PcD",
    titulo: "Retiro de Cuidado e Empoderamento no Sorri Parauapebas",
    descricao:
      "Encontro temático em celebração ao Mês da Mulher voltado a mulheres PcD e mães atípicas, unindo apoio psicológico, roda de escuta e ações de estética e autocuidado.",
    data: "09 de março de 2026",
    local: "Sorri Parauapebas",
    imagem: "/uploads/atuacao-4.jpg",
    imagemAlt: "Encontro do Mês da Mulher no Sorri Parauapebas",
    depoimento: "Marlene Matos Moreira: saiu do encontro 'renovada, com o coração limpo'.",
    destaque: "Mês da Mulher",
  },
  {
    id: "ac-comped-5",
    categoria: "Cidadania · Documentação",
    titulo: "Mutirões Semas em Ação — Ciptea e passe livre",
    descricao:
      "Emissão centralizada de Carteiras do Autista (Ciptea) e passes livres municipais no Partage Shopping, eliminando filas e garantindo direitos imediatos.",
    data: "2025–2026",
    local: "Partage Shopping · Parauapebas",
    imagem: "/uploads/atuacao-5.jpg",
    imagemAlt: "Mutirão de emissão da Ciptea no Partage Shopping",
    destaque: "Ciptea + Passe Livre",
  },
  {
    id: "ac-comped-6",
    categoria: "Atendimento · PcD",
    titulo: "Atendimento contínuo na COMPED — Portaria DC492/25",
    descricao:
      "Atendimento direto a pessoas com deficiência, surdos, autistas e famílias em Parauapebas, com foco em orientação de direitos, Ciptea, passe livre e articulação com a rede SUAS.",
    data: "Janeiro de 2025 — atual",
    local: "COMPED · Parauapebas (PA)",
    imagem: "/uploads/atuacao-6.jpg",
    imagemAlt: "Atendimento na COMPED de Parauapebas",
    destaque: "Coordenadoria ativa",
  },
];

/* Indicadores numéricos da seção "O que já fez" (placeholders) */
export const statsAtuacao = [
  { id: "st-1", rotulo: "Votos em 2022 (Pará)",          valor: "4.665" },
  { id: "st-2", rotulo: "Votos em 2024 (Parauapebas)",   valor: "1.570" },
  { id: "st-3", rotulo: "Cadeiras entregues (CER II)",    valor: "28" },
  { id: "st-4", rotulo: "Metros de trilha inclusiva",     valor: "2.400" },
];

/* ──────────────────────────────────────────────────────────────
   9. AGENDA
   ────────────────────────────────────────────────────────────── */

export interface Evento {
  id: string;
  dataISO: string;          // AAAA-MM-DD
  dataExibicao: string;     // ex.: "12 SET 2026"
  horario: string;          // ex.: "19h00"
  cidade: string;
  local: string;
  titulo: string;
  descricao: string;
  tipo: "futuro" | "anterior";
  botaoLabel?: string;
  botaoHref?: string;
}

export const eventosFuturos: Evento[] = [
  {
    id: "ev-1",
    dataISO: "[AAAA-MM-DD]",
    dataExibicao: "[Inserir data]",
    horario: "[Inserir horário]",
    cidade: "[Inserir cidade]",
    local: "[Inserir local]",
    titulo: "[Inserir nome do evento]",
    descricao: "[Inserir descrição do evento]",
    tipo: "futuro",
  },
  {
    id: "ev-2",
    dataISO: "[AAAA-MM-DD]",
    dataExibicao: "[Inserir data]",
    horario: "[Inserir horário]",
    cidade: "[Inserir cidade]",
    local: "[Inserir local]",
    titulo: "[Inserir nome do evento]",
    descricao: "[Inserir descrição do evento]",
    tipo: "futuro",
  },
  {
    id: "ev-3",
    dataISO: "[AAAA-MM-DD]",
    dataExibicao: "[Inserir data]",
    horario: "[Inserir horário]",
    cidade: "[Inserir cidade]",
    local: "[Inserir local]",
    titulo: "[Inserir nome do evento]",
    descricao: "[Inserir descrição do evento]",
    tipo: "futuro",
  },
];

export const eventosAnteriores: Evento[] = [
  {
    id: "ev-4",
    dataISO: "[AAAA-MM-DD]",
    dataExibicao: "[Inserir data]",
    horario: "[Inserir horário]",
    cidade: "[Inserir cidade]",
    local: "[Inserir local]",
    titulo: "[Inserir nome do evento]",
    descricao: "[Inserir descrição do evento]",
    tipo: "anterior",
  },
  {
    id: "ev-5",
    dataISO: "[AAAA-MM-DD]",
    dataExibicao: "[Inserir data]",
    horario: "[Inserir horário]",
    cidade: "[Inserir cidade]",
    local: "[Inserir local]",
    titulo: "[Inserir nome do evento]",
    descricao: "[Inserir descrição do evento]",
    tipo: "anterior",
  },
];

/* ──────────────────────────────────────────────────────────────
   10. GALERIA (FOTOS + VÍDEOS)
   ────────────────────────────────────────────────────────────── */

export interface GaleriaItem {
  id: string;
  tipo: "foto" | "video";
  url: string;            // URL do arquivo (imagem grande ou vídeo)
  thumb: string;          // thumbnail
  alt: string;
  titulo: string;
  categoria?: string;
  cidade?: string;
  dataISO?: string;
  videoUrl?: string;      // quando tipo=video, URL do vídeo
}

export const galeria: GaleriaItem[] = [
  { id: "g-01", tipo: "foto",  url: "/uploads/galeria-01.jpg", thumb: "/uploads/galeria-01.jpg", alt: "[Inserir legenda da foto 1]", titulo: "[Inserir título]", categoria: "[Inserir categoria]", cidade: "[Inserir cidade]" },
  { id: "g-02", tipo: "foto",  url: "/uploads/galeria-02.jpg", thumb: "/uploads/galeria-02.jpg", alt: "[Inserir legenda da foto 2]", titulo: "[Inserir título]", categoria: "[Inserir categoria]", cidade: "[Inserir cidade]" },
  { id: "g-03", tipo: "foto",  url: "/uploads/galeria-03.jpg", thumb: "/uploads/galeria-03.jpg", alt: "[Inserir legenda da foto 3]", titulo: "[Inserir título]", categoria: "[Inserir categoria]", cidade: "[Inserir cidade]" },
  { id: "g-04", tipo: "foto",  url: "/uploads/galeria-04.jpg", thumb: "/uploads/galeria-04.jpg", alt: "[Inserir legenda da foto 4]", titulo: "[Inserir título]", categoria: "[Inserir categoria]", cidade: "[Inserir cidade]" },
  { id: "g-05", tipo: "foto",  url: "/uploads/galeria-05.jpg", thumb: "/uploads/galeria-05.jpg", alt: "[Inserir legenda da foto 5]", titulo: "[Inserir título]", categoria: "[Inserir categoria]", cidade: "[Inserir cidade]" },
  { id: "g-06", tipo: "foto",  url: "/uploads/galeria-06.jpg", thumb: "/uploads/galeria-06.jpg", alt: "[Inserir legenda da foto 6]", titulo: "[Inserir título]", categoria: "[Inserir categoria]", cidade: "[Inserir cidade]" },
  { id: "g-07", tipo: "video", url: "/uploads/galeria-07.jpg", thumb: "/uploads/galeria-07.jpg", alt: "[Inserir legenda do vídeo 1]", titulo: "[Inserir título]", categoria: "[Inserir categoria]", videoUrl: "[Inserir URL do vídeo]" },
  { id: "g-08", tipo: "video", url: "/uploads/galeria-08.jpg", thumb: "/uploads/galeria-08.jpg", alt: "[Inserir legenda do vídeo 2]", titulo: "[Inserir título]", categoria: "[Inserir categoria]", videoUrl: "[Inserir URL do vídeo]" },
];

/* ──────────────────────────────────────────────────────────────
   11. REDES SOCIAIS E CANAIS OFICIAIS
   ────────────────────────────────────────────────────────────── */

export interface CanalSocial {
  id: string;
  nome: "Instagram" | "Facebook" | "YouTube" | "TikTok" | "WhatsApp" | string;
  url: string;
  handle: string;
}

export const redesSociais: CanalSocial[] = [
  { id: "r-ig",  nome: "Instagram", url: "[Inserir URL]", handle: "[Inserir @]" },
  { id: "r-fb",  nome: "Facebook",  url: "[Inserir URL]", handle: "[Inserir @]" },
  { id: "r-yt",  nome: "YouTube",   url: "[Inserir URL]", handle: "[Inserir canal]" },
  { id: "r-tt",  nome: "TikTok",    url: "[Inserir URL]", handle: "[Inserir @]" },
  { id: "r-wpp", nome: "WhatsApp",  url: "[Inserir URL]", handle: "[Inserir número]" },
];

export const canaisDiretos = {
  whatsapp: "[Inserir número de WhatsApp oficial]",
  telefone: "[Inserir telefone]",
  email: "imprensa@cilmarabonfim.com.br",
  emailAlternativo: "[Inserir e-mail alternativo de contato]",
  endereco: "[Inserir endereço do comitê, se houver]",
  imprensa: "imprensa@cilmarabonfim.com.br",
};

/* ──────────────────────────────────────────────────────────────
   12. MATERIAIS PARA DIVULGAÇÃO
   ────────────────────────────────────────────────────────────── */

export type CategoriaMaterial = "Fotos" | "Logos" | "Cards" | "Vídeos" | "Wallpapers" | "Materiais informativos" | "Outros";

export interface Material {
  id: string;
  titulo: string;
  categoria: CategoriaMaterial;
  formato: "JPG" | "PNG" | "PDF" | "MP4" | "ZIP";
  tamanho?: string;
  thumbUrl: string;
  downloadUrl: string;
}

export const materiais: Material[] = [
  { id: "m-1", titulo: "[Inserir título]", categoria: "Fotos",                  formato: "JPG", thumbUrl: "/uploads/mat-1.jpg",  downloadUrl: "/uploads/mat-1.jpg" },
  { id: "m-2", titulo: "[Inserir título]", categoria: "Logos",                  formato: "PNG", thumbUrl: "/uploads/mat-2.png",  downloadUrl: "/uploads/mat-2.zip" },
  { id: "m-3", titulo: "[Inserir título]", categoria: "Cards",                  formato: "JPG", thumbUrl: "/uploads/mat-3.jpg",  downloadUrl: "/uploads/mat-3.jpg" },
  { id: "m-4", titulo: "[Inserir título]", categoria: "Vídeos",                 formato: "MP4", thumbUrl: "/uploads/mat-4.jpg",  downloadUrl: "/uploads/mat-4.mp4" },
  { id: "m-5", titulo: "[Inserir título]", categoria: "Wallpapers",             formato: "JPG", thumbUrl: "/uploads/mat-5.jpg",  downloadUrl: "/uploads/mat-5.jpg" },
  { id: "m-6", titulo: "[Inserir título]", categoria: "Materiais informativos", formato: "PDF", thumbUrl: "/uploads/mat-6.jpg",  downloadUrl: "/uploads/mat-6.pdf" },
  { id: "m-7", titulo: "[Inserir título]", categoria: "Outros",                 formato: "ZIP", thumbUrl: "/uploads/mat-7.jpg",  downloadUrl: "/uploads/mat-7.zip" },
];

/* ──────────────────────────────────────────────────────────────
   13. FAQ
   ────────────────────────────────────────────────────────────── */

export interface FaqItem {
  id: string;
  pergunta: string;
  resposta: string;
}

export const faqItems: FaqItem[] = [
  {
    id: "f-1",
    pergunta: "Quem é Cilmara Bonfim e qual é a sua trajetória?",
    resposta:
      "Cilmara Bonfim é mulher surda, mãe de família atípica, servidora pública municipal como agente administrativa e liderança comunitária de Parauapebas (PA). Foi coordenadora da COMPED (Coordenadoria Municipal da Pessoa com Deficiência) em 2025, onde esteve à frente de ações práticas em favor de autistas, pessoas com deficiência física e mães atípicas. É candidata a Deputada Estadual pelo AVANTE com o número 70700.",
  },
  {
    id: "f-2",
    pergunta: "A candidata é surda? Como ela se comunica e como será o trabalho na Assembleia?",
    resposta:
      "Sim, Cilmara é surda e sua língua natural é a Língua Brasileira de Sinais (Libras). Na Assembleia Legislativa do Pará, ela atuará com assessoria técnica e intérpretes de Libras habilitados para tradução simultânea nos debates, comissões, reuniões e audiências públicas, demonstrando na prática que a barreira comunicacional não impede o exercício pleno e qualificado do mandato.",
  },
  {
    id: "f-3",
    pergunta: "O que faz uma deputada estadual e o que ela NÃO pode fazer?",
    resposta:
      "A deputada estadual cria leis para todo o Estado do Pará, fiscaliza os órgãos e serviços do governo estadual (saúde nos hospitais regionais e segurança pública) e destina emendas ao Orçamento. A deputada NÃO tem poder para fazer obras diretas de rua, pavimentação, conserto de calçadas ou gerir postos de saúde de bairros, que são responsabilidades dos prefeitos e vereadores.",
  },
  {
    id: "f-4",
    pergunta: "Quais são as bandeiras e prioridades de Cilmara Bonfim?",
    resposta:
      "Garantia de atendimento em Libras em serviços públicos essenciais (Central 24h), descentralização do atendimento ao autismo (Centros TEA no interior), padronização e validação digital da CIPTEA estadual, suporte concreto e proteção à saúde mental das mães atípicas, melhoria da acessibilidade no transporte intermunicipal e destinação de contrapartidas da mineração para o desenvolvimento social.",
  },
  {
    id: "f-5",
    pergunta: "Qual é o número de voto de Cilmara e qual é o partido?",
    resposta:
      "O número de urna é 70700, pelo partido AVANTE (70), disputando o cargo de Deputada Estadual no Pará.",
  },
  {
    id: "f-6",
    pergunta: "Como está a situação da candidatura no TSE?",
    resposta:
      "O pedido de registro de candidatura foi apresentado à Justiça Eleitoral e tramita sob a classificação formal de 'Aguardando Julgamento' (conforme dados oficiais do TSE em 31/08/2026), cumprindo todos os ritos legais previstos no calendário das eleições de 2026.",
  },
  {
    id: "f-7",
    pergunta: "O que a campanha de Cilmara NÃO promete?",
    resposta:
      "Não prometemos empregos em troca de votos, não prometemos soluções mágicas sem previsão orçamentária, não prometemos obras municipais privativas do Executivo e não fazemos promessas assistencialistas. Assumimos apenas compromissos legislativos reais, técnicos e fiscalizatórios.",
  },
  {
    id: "f-8",
    pergunta: "Como posso ajudar a eleger Cilmara Bonfim sem ter vínculos políticos?",
    resposta:
      "Você pode se cadastrar no formulário de voluntariado, compartilhar os vídeos acessíveis nas suas redes sociais, encaminhar as mensagens oficiais nos seus grupos de família e condomínio, e conversar com amigos, professores e profissionais da saúde sobre a importância histórica de eleger uma mulher surda para a Assembleia do Pará.",
  },
];

/* ──────────────────────────────────────────────────────────────
   14. NAVEGAÇÃO PRINCIPAL
   ────────────────────────────────────────────────────────────── */

export const navPrincipal = [
  { label: "Início",     href: "#inicio" },
  { label: "Cilmara",    href: "#quem-sou" },
  { label: "Propostas",  href: "#propostas" },
  { label: "Atuação",    href: "#atuacao" },
  { label: "Como votar", href: "#como-votar" },
];

/* ──────────────────────────────────────────────────────────────
   15. MÍDIA LATERAL (banners/itens da coluna lateral)
   ────────────────────────────────────────────────────────────── */

export interface MediaSidebarItem {
  id: string;
  tipo: "banner" | "imagem" | "video" | "chamada" | "agenda" | "campanha";
  titulo: string;
  descricao?: string;
  url?: string;        // link de destino
  thumb: string;       // preview
  alt: string;
}

export const mediaSidebar: MediaSidebarItem[] = [
  { id: "ms-1", tipo: "chamada",  titulo: "[Inserir chamada]",                  descricao: "[Inserir descrição]", url: "[Inserir link]", thumb: "/uploads/sidebar-1.jpg", alt: "[Inserir alt]" },
  { id: "ms-2", tipo: "banner",   titulo: "[Inserir banner da campanha]",       url: "[Inserir link]",                       thumb: "/uploads/sidebar-2.jpg", alt: "[Inserir alt]" },
  { id: "ms-3", tipo: "agenda",   titulo: "[Inserir destaque de agenda]",       descricao: "[Inserir data e local]", url: "#agenda", thumb: "/uploads/sidebar-3.jpg", alt: "[Inserir alt]" },
  { id: "ms-4", tipo: "campanha", titulo: "[Inserir campanha de informação]",   descricao: "[Inserir texto]",        url: "[Inserir link]", thumb: "/uploads/sidebar-4.jpg", alt: "[Inserir alt]" },
];

/* ──────────────────────────────────────────────────────────────
   16. COMO VOTAR
   ────────────────────────────────────────────────────────────── */

export const comoVotar = {
  titulo: "Como votar no dia da eleição",
  cargo: "Deputado Estadual (primeiro voto para cargo parlamentar estadual)",
  partido: "AVANTE",
  passos: [
    "Na tela de Deputado Estadual, digite 70700.",
    "Confira CILMARA BONFIM e AVANTE.",
    "Pressione CONFIRMA.",
  ],
  pedido: "70700 — Cilmara Bonfim para Deputada Estadual.",
  whatsappTexto:
    "Amigos e amigas, no dia da eleição eu apoio uma causa justa e verdadeira: vote 70700 — Cilmara Bonfim (AVANTE) para Deputada Estadual do Pará! Uma mulher surda, mãe e líder comunitária que vai lutar de verdade por autistas, pessoas com deficiência, mães atípicas e saúde no nosso estado. Conheça as propostas no site oficial e confirme 70700!",
};

/* ──────────────────────────────────────────────────────────────
   17. WHATSAPP OFICIAL — MENSAGEM AUTOMÁTICA
   ────────────────────────────────────────────────────────────── */

export const whatsappBoasVindas = `Olá! Seja muito bem-vindo(a) ao canal oficial da campanha de Cilmara Bonfim — Deputada Estadual (AVANTE 70700).

Nosso espaço foi feito para construir um Pará de direitos, acessibilidade e dignidade para pessoas com deficiência, autistas, mães atípicas e todas as famílias paraenses.

Como podemos te ajudar hoje?
1️⃣ Quero receber as novidades e propostas no meu celular.
2️⃣ Quero ser voluntário(a) e ajudar na campanha.
3️⃣ Preciso de atendimento em Libras.
4️⃣ Quero enviar uma pauta sobre a realidade do meu município.

Digite o número correspondente para continuar!`;

/* ──────────────────────────────────────────────────────────────
   18. LGPD E DISCLAIMER
   ────────────────────────────────────────────────────────────── */

export const lgpdTexto =
  "Concordo em compartilhar meus dados para receber materiais e informações sobre a campanha eleitoral de Cilmara Bonfim, nos termos da Lei nº 13.709/2018 (LGPD). Seus dados não serão comercializados nem repassados a terceiros.";

export const disclaimerLegal =
  "Propaganda eleitoral gratuita na internet, veiculada em conformidade com o art. 57-B da Lei nº 9.504/1997 e as resoluções vigentes do Tribunal Superior Eleitoral (TSE). É proibida a reprodução deste conteúdo para fins comerciais ou sua adulteração com informações inverídicas.";

export const politicaPrivacidade =
  "Os dados pessoais eventualmente informados em nossos formulários destinam-se exclusivamente ao envio de informativos de campanha e articulação comunitária legítima, sendo tratados com sigilo e segurança, sem repasse comercial a terceiros, nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018). Para solicitar a exclusão de seus dados da nossa base, envie solicitação para o canal de contato indicado.";

/* ──────────────────────────────────────────────────────────────
   19. METADATA / SEO
   ────────────────────────────────────────────────────────────── */

export const seo = {
  title: "Cilmara Bonfim — Deputada Estadual 70700 — Pará · AVANTE",
  description:
    "Cilmara Bonfim, candidata a Deputada Estadual pelo Pará — AVANTE 70700. Mulher surda, mãe atípica e liderança comunitária de Parauapebas. Conheça propostas, trajetória e bandeiras pela inclusão, TEA, mães atípicas e direitos PcD.",
  ogImage: "/og-image.jpg",
  url: "https://[inserir-dominio].com.br",
  keywords: [
    "Cilmara Bonfim",
    "Deputada Estadual",
    "Pará",
    "70700",
    "AVANTE",
    "inclusão",
    "acessibilidade",
    "Libras",
    "TEA",
    "mães atípicas",
  ],
};
