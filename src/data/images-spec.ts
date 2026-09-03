/**
 * Catálogo de imagens esperado pelo site.
 *
 * Para cada imagem:
 *  - `path`: URL pública esperada (path em /public/uploads/...)
 *  - `largura` × `altura`: dimensões mínimas recomendadas em px
 *  - `aspect`: proporção usada no componente
 *  - `pesoMax`: peso máximo recomendado em KB (após compressão)
 *  - `formato`: preferências (JPG, PNG, WebP)
 *  - `categoria`: agrupamento lógico (Hero, Propostas, Atuação, ...)
 *  - `descricao`: texto a ser usado no `alt` da imagem (acessibilidade)
 *  - `usadaEm`: componentes que consomem essa imagem
 *  - `opcional`: se false, é obrigatória para o site "funcionar"
 */

export interface ImageSpec {
  id: string;
  path: string;
  largura: number;
  altura: number;
  pesoMax: number;
  formato: "JPG" | "PNG" | "WebP" | "SVG" | "MP4";
  categoria: "Identidade" | "Hero" | "Sobre" | "Eixos" | "Atuação" | "Galeria" | "Materiais" | "Redes" | "Compromisso" | "Logo" | "Outros";
  descricao: string;
  usadaEm: string[];
  /** Quando true, não bloqueia a publicação do site. */
  opcional?: boolean;
}

export const imageSpecs: ImageSpec[] = [
  /* ────────────── IDENTIDADE / LOGO ────────────── */
  {
    id: "logo-principal",
    path: "/uploads/logo-cilmara.svg",
    largura: 200,
    altura: 60,
    pesoMax: 10,
    formato: "SVG",
    categoria: "Logo",
    descricao: "Logo oficial da campanha Cilmara Bonfim — versão primária (SVG vetorial)",
    usadaEm: ["Header", "Footer", "Open Graph (compartilhamento)"],
    opcional: false,
  },
  {
    id: "logo-favicon",
    path: "/favicon.ico",
    largura: 32,
    altura: 32,
    pesoMax: 8,
    formato: "SVG",
    categoria: "Logo",
    descricao: "Favicon do site (ícone na aba do navegador)",
    usadaEm: ["Aba do navegador"],
  },
  {
    id: "og-image",
    path: "/og-image.jpg",
    largura: 1200,
    altura: 630,
    pesoMax: 200,
    formato: "JPG",
    categoria: "Logo",
    descricao:
      "Imagem de compartilhamento Open Graph (Facebook, LinkedIn, WhatsApp) — deve conter foto + número 70700 + nome",
    usadaEm: ["Open Graph, Twitter Card"],
    opcional: false,
  },

  /* ────────────── HERO ────────────── */
  {
    id: "hero-foto-principal",
    path: "/uploads/hero-foto-principal.jpg",
    largura: 800,
    altura: 1000,
    pesoMax: 250,
    formato: "JPG",
    categoria: "Hero",
    descricao:
      "Foto principal do Hero — retrato institucional, fundo limpo, idealmente com a candidata sinalizando em Libras",
    usadaEm: ["Hero (lado direito)"],
    opcional: false,
  },

  /* ────────────── SOBRE ────────────── */
  {
    id: "foto-apresentacao",
    path: "/uploads/foto-apresentacao.jpg",
    largura: 1200,
    altura: 800,
    pesoMax: 280,
    formato: "JPG",
    categoria: "Sobre",
    descricao: "Foto usada no bloco 'Conheça Cilmara Bonfim' (apresentação rápida)",
    usadaEm: ["CandidateIntro"],
    opcional: false,
  },
  {
    id: "foto-quemsou",
    path: "/uploads/foto-quemsou.jpg",
    largura: 1200,
    altura: 800,
    pesoMax: 280,
    formato: "JPG",
    categoria: "Sobre",
    descricao: "Foto principal do bloco 'Quem é Cilmara Bonfim' (biografia)",
    usadaEm: ["AboutSection"],
    opcional: false,
  },
  {
    id: "foto-acao",
    path: "/uploads/foto-acao.jpg",
    largura: 1200,
    altura: 800,
    pesoMax: 280,
    formato: "JPG",
    categoria: "Sobre",
    descricao:
      "Foto secundária — registra ação pública (COMPED, comunidade, evento) para acompanhar biografia",
    usadaEm: ["AboutSection (reservada)"],
    opcional: true,
  },

  /* ────────────── COMPROMISSO ────────────── */
  {
    id: "compromisso-foto",
    path: "/uploads/compromisso-foto.jpg",
    largura: 1000,
    altura: 1000,
    pesoMax: 260,
    formato: "JPG",
    categoria: "Compromisso",
    descricao:
      "Foto em ação comunitária/institucional exibida lado a lado com o card 'Compromisso de mandato'",
    usadaEm: ["CommitmentBlock"],
    opcional: false,
  },

  /* ────────────── ATUAÇÃO (COMPED) ────────────── */
  {
    id: "comp-ed-1",
    path: "/uploads/atuacao-1.jpg",
    largura: 1200,
    altura: 800,
    pesoMax: 280,
    formato: "JPG",
    categoria: "Atuação",
    descricao: "Ação 1 — Entrega técnica de 28 cadeiras de rodas adaptáveis no CER II",
    usadaEm: ["Achievements (card)"],
  },
  {
    id: "comp-ed-2",
    path: "/uploads/atuacao-2.jpg",
    largura: 1200,
    altura: 800,
    pesoMax: 280,
    formato: "JPG",
    categoria: "Atuação",
    descricao: "Ação 2 — Semana Municipal de Conscientização sobre o Autismo (Abril Azul)",
    usadaEm: ["Achievements (card)"],
  },
  {
    id: "comp-ed-3",
    path: "/uploads/atuacao-3.jpg",
    largura: 1200,
    altura: 800,
    pesoMax: 280,
    formato: "JPG",
    categoria: "Atuação",
    descricao: "Ação 3 — Trilha Inclusiva Quarubarana na Floresta Nacional de Carajás",
    usadaEm: ["Achievements (card)"],
  },
  {
    id: "comp-ed-4",
    path: "/uploads/atuacao-4.jpg",
    largura: 1200,
    altura: 800,
    pesoMax: 280,
    formato: "JPG",
    categoria: "Atuação",
    descricao: "Ação 4 — Retiro de Cuidado e Empoderamento no Sorri Parauapebas",
    usadaEm: ["Achievements (reservada)"],
    opcional: true,
  },
  {
    id: "comp-ed-5",
    path: "/uploads/atuacao-5.jpg",
    largura: 1200,
    altura: 800,
    pesoMax: 280,
    formato: "JPG",
    categoria: "Atuação",
    descricao: "Ação 5 — Mutirões 'Semas em Ação' — Ciptea e passe livre",
    usadaEm: ["Achievements (reservada)"],
    opcional: true,
  },
  {
    id: "comp-ed-6",
    path: "/uploads/atuacao-6.jpg",
    largura: 1200,
    altura: 800,
    pesoMax: 280,
    formato: "JPG",
    categoria: "Atuação",
    descricao: "Ação 6 — Atendimento contínuo na COMPED",
    usadaEm: ["Achievements (reservada)"],
    opcional: true,
  },

  /* ────────────── EIXOS ────────────── */
  {
    id: "eixo-1",
    path: "/uploads/eixo-1-inclusao.jpg",
    largura: 800,
    altura: 600,
    pesoMax: 200,
    formato: "JPG",
    categoria: "Eixos",
    descricao: "Imagem representativa do Eixo 1 — Inclusão e Acessibilidade como Direito",
    usadaEm: ["Eixo 1 (card visual)"],
    opcional: true,
  },
  {
    id: "eixo-2",
    path: "/uploads/eixo-2-tea.jpg",
    largura: 800,
    altura: 600,
    pesoMax: 200,
    formato: "JPG",
    categoria: "Eixos",
    descricao: "Imagem representativa do Eixo 2 — TEA, mães atípicas e saúde mental",
    usadaEm: ["Eixo 2 (card visual)"],
    opcional: true,
  },
  {
    id: "eixo-3",
    path: "/uploads/eixo-3-autonomia.jpg",
    largura: 800,
    altura: 600,
    pesoMax: 200,
    formato: "JPG",
    categoria: "Eixos",
    descricao: "Imagem representativa do Eixo 3 — Autonomia e cuidado de mulheres e idosos",
    usadaEm: ["Eixo 3 (card visual)"],
    opcional: true,
  },
  {
    id: "eixo-4",
    path: "/uploads/eixo-4-mineracao.jpg",
    largura: 800,
    altura: 600,
    pesoMax: 200,
    formato: "JPG",
    categoria: "Eixos",
    descricao: "Imagem representativa do Eixo 4 — Mineração responsável e retorno social",
    usadaEm: ["Eixo 4 (card visual)"],
    opcional: true,
  },

  /* ────────────── GALERIA ────────────── */
  {
    id: "galeria-01",
    path: "/uploads/galeria-01.jpg",
    largura: 1080,
    altura: 1080,
    pesoMax: 240,
    formato: "JPG",
    categoria: "Galeria",
    descricao: "Foto 01 — Evento público / caminhada",
    usadaEm: ["Gallery (Fotos)"],
  },
  {
    id: "galeria-02",
    path: "/uploads/galeria-02.jpg",
    largura: 1080,
    altura: 1080,
    pesoMax: 240,
    formato: "JPG",
    categoria: "Galeria",
    descricao: "Foto 02 — Reunião comunitária",
    usadaEm: ["Gallery (Fotos)"],
  },
  {
    id: "galeria-03",
    path: "/uploads/galeria-03.jpg",
    largura: 1080,
    altura: 1080,
    pesoMax: 240,
    formato: "JPG",
    categoria: "Galeria",
    descricao: "Foto 03 — Ação da COMPED",
    usadaEm: ["Gallery (Fotos)"],
  },
  {
    id: "galeria-04",
    path: "/uploads/galeria-04.jpg",
    largura: 1080,
    altura: 1080,
    pesoMax: 240,
    formato: "JPG",
    categoria: "Galeria",
    descricao: "Foto 04 — Evento com lideranças",
    usadaEm: ["Gallery (Fotos)"],
  },
  {
    id: "galeria-05",
    path: "/uploads/galeria-05.jpg",
    largura: 1080,
    altura: 1080,
    pesoMax: 240,
    formato: "JPG",
    categoria: "Galeria",
    descricao: "Foto 05 — Mães atípicas / cuidado",
    usadaEm: ["Gallery (Fotos)"],
  },
  {
    id: "galeria-06",
    path: "/uploads/galeria-06.jpg",
    largura: 1080,
    altura: 1080,
    pesoMax: 240,
    formato: "JPG",
    categoria: "Galeria",
    descricao: "Foto 06 — Encontro / roda de conversa",
    usadaEm: ["Gallery (Fotos)"],
  },
  {
    id: "galeria-07",
    path: "/uploads/galeria-07.jpg",
    largura: 1080,
    altura: 1080,
    pesoMax: 240,
    formato: "JPG",
    categoria: "Galeria",
    descricao: "Capa de vídeo 01 (thumbnail)",
    usadaEm: ["Gallery (Vídeos)"],
  },
  {
    id: "galeria-08",
    path: "/uploads/galeria-08.jpg",
    largura: 1080,
    altura: 1080,
    pesoMax: 240,
    formato: "JPG",
    categoria: "Galeria",
    descricao: "Capa de vídeo 02 (thumbnail)",
    usadaEm: ["Gallery (Vídeos)"],
  },

  /* ────────────── MATERIAIS PARA DIVULGAÇÃO ────────────── */
  {
    id: "mat-foto-oficial",
    path: "/uploads/mat-foto-oficial.jpg",
    largura: 1200,
    altura: 800,
    pesoMax: 280,
    formato: "JPG",
    categoria: "Materiais",
    descricao: "Foto oficial para impressão (folder, praguinha, redes)",
    usadaEm: ["DownloadCenter"],
  },
  {
    id: "mat-logo-vertical",
    path: "/uploads/mat-logo-vertical.png",
    largura: 600,
    altura: 1200,
    pesoMax: 200,
    formato: "PNG",
    categoria: "Materiais",
    descricao: "Logo vertical (fundo colorido) para stories e posts",
    usadaEm: ["DownloadCenter"],
  },
  {
    id: "mat-card-stories",
    path: "/uploads/mat-card-stories.jpg",
    largura: 1080,
    altura: 1920,
    pesoMax: 350,
    formato: "JPG",
    categoria: "Materiais",
    descricao: "Card vertical 9:16 para Instagram Stories e TikTok",
    usadaEm: ["DownloadCenter"],
  },
  {
    id: "mat-folder",
    path: "/uploads/mat-folder.pdf",
    largura: 0,
    altura: 0,
    pesoMax: 2500,
    formato: "PNG",
    categoria: "Materiais",
    descricao:
      "Folder PDF institucional (A4 retrato ou paisagem, 2 a 4 páginas)",
    usadaEm: ["DownloadCenter"],
  },
  {
    id: "mat-wallpaper",
    path: "/uploads/mat-wallpaper.jpg",
    largura: 1920,
    altura: 1080,
    pesoMax: 400,
    formato: "JPG",
    categoria: "Materiais",
    descricao: "Wallpaper 16:9 para celular ou desktop",
    usadaEm: ["DownloadCenter"],
  },
  {
    id: "mat-banner",
    path: "/uploads/mat-banner.jpg",
    largura: 1920,
    altura: 800,
    pesoMax: 400,
    formato: "JPG",
    categoria: "Materiais",
    descricao: "Banner horizontal 12:5 para topo de redes sociais",
    usadaEm: ["DownloadCenter"],
  },
  {
    id: "mat-pack-completo",
    path: "/uploads/mat-pack-completo.zip",
    largura: 0,
    altura: 0,
    pesoMax: 10000,
    formato: "PNG",
    categoria: "Materiais",
    descricao: "Pacote ZIP com todos os materiais em alta resolução",
    usadaEm: ["DownloadCenter"],
    opcional: true,
  },
];

/** Onde salvar fisicamente as imagens para o site servi-las. */
export const SAVE_PATH_HINT =
  "Salve os arquivos dentro da pasta `public/uploads/` do projeto. Exemplo: `public/uploads/hero-foto-principal.jpg`.";
