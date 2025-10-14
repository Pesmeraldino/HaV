// Estrutura para posts do Instagram
export interface InstagramPost {
  id: string;
  postId: string; // ID do post do Instagram (ex: "DN_Cf_wjXno")
  title: string;
  description: string;
  categoria?: 'juridico' | 'institucional' | 'educativo' | 'novidades';
  dataPublicacao?: string;
}

// Posts do Instagram do escritório HA&V
export const instagramPosts: InstagramPost[] = [
  {
    id: "1",
    postId: "DN_Cf_wjXno",
    title: "Direitos do Consumidor",
    description: "Conteúdo jurídico especializado sobre proteção do consumidor",
    categoria: "juridico",
    dataPublicacao: "2024-10-10",
  },
  {
    id: "2",
    postId: "DBRpCdoRJKd",
    title: "Dicas Jurídicas Empresariais",
    description: "Orientações legais importantes para empresários",
    categoria: "educativo",
    dataPublicacao: "2024-10-08",
  },
  {
    id: "3",
    postId: "DPC8R4VjRYt",
    title: "Novidades na Legislação",
    description: "Atualizações legais importantes para 2024",
    categoria: "novidades",
    dataPublicacao: "2024-10-05",
  },
  {
    id: "4",
    postId: "DNmQAfzMCkP",
    title: "LGPD na Prática",
    description: "Esclarecimentos jurídicos essenciais sobre proteção de dados",
    categoria: "juridico",
    dataPublicacao: "2024-10-03",
  },
  {
    id: "5",
    postId: "DC4KSDmRMak",
    title: "Consultoria Bancária",
    description: "Orientações sobre direitos bancários e financeiros",
    categoria: "educativo",
    dataPublicacao: "2024-10-01",
  },
  {
    id: "6",
    postId: "C38sL4vrv1u",
    title: "Direitos Trabalhistas",
    description: "Informações sobre direitos fundamentais do trabalhador",
    categoria: "juridico",
    dataPublicacao: "2024-09-28",
  },
  {
    id: "7",
    postId: "C0fsrLPM-tg",
    title: "HA&V Advocacia",
    description: "Apresentação dos serviços e expertise do escritório",
    categoria: "institucional",
    dataPublicacao: "2024-09-25",
  },
  {
    id: "8",
    postId: "CkQpradrGrJ",
    title: "Mudanças no Código Civil",
    description: "Atualizações normativas importantes para 2024",
    categoria: "novidades",
    dataPublicacao: "2024-09-22",
  },
];

// Interface para outros tipos de mídia (futuro)
export interface VideoContent {
  id: string;
  titulo: string;
  descricao: string;
  url: string;
  thumbnail: string;
  duracao: string;
  categoria: 'educativo' | 'institucional' | 'depoimentos';
}

export interface GaleriaFoto {
  id: string;
  titulo: string;
  descricao: string;
  fotos: string[];
  categoria: 'escritorio' | 'eventos' | 'equipe';
}

// Funções utilitárias
export const getPostsByCategoria = (categoria: InstagramPost['categoria']): InstagramPost[] => {
  return instagramPosts.filter(post => post.categoria === categoria);
};

export const getPostById = (id: string): InstagramPost | undefined => {
  return instagramPosts.find(post => post.id === id);
};

export const getPostsRecentes = (limite: number = 6): InstagramPost[] => {
  return instagramPosts
    .sort((a, b) => new Date(b.dataPublicacao || '').getTime() - new Date(a.dataPublicacao || '').getTime())
    .slice(0, limite);
};

export const getAllPosts = (): InstagramPost[] => {
  return instagramPosts;
};

// Para o slideshow infinito
export const getDuplicatedPosts = (): InstagramPost[] => {
  return [...instagramPosts, ...instagramPosts];
};