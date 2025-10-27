// Dados centralizados das advogadas
// Este arquivo é a fonte única de verdade para informações das advogadas

export interface Advogada {
  id: string;
  nome: string;
  nomeCompleto: string;
  email?: string;
  cargo: string;
  oab?: string;
  formacao: string[];
  descricaoDetalhada?: string;
  subtitulo?: string;
  isActive: boolean;
}

export const advogadas: Advogada[] = [
  {
    id: "ingrid",
    nome: "Dra. Ingrid",
    nomeCompleto: "Dra. Ingrid Chineppe Hofstatter",
    email: "hofs.adv@gmail.com",
    cargo: "Advogada",
    oab: "OAB/SC: 13043-B",
    formacao: [
      "Ciências Jurídicas e Sociais – PUC/RS 1995",
      "Pós-Graduanda em Direito Eleitoral pela Faculdade Republicana.",
    ],
    descricaoDetalhada:
      "• Presidente Estadual da Associação Brasileira das Mulheres de Carreira Jurídica – SC (2019-2025)\n\n• Líder Estadual do Projeto Justiceiras com 15.000 voluntárias\n\n• Líder do Comitê de Combate à Violência Contra a Mulher\n\n• Ex-Presidente e atual Primeira Secretária do Conselho da Mulher de Florianópolis\n\n• Membro da Comissão de Combate à Violência da OAB/SC\n\n• Membro da Comissão de Direito da Vítima da OAB/SC\n\n• Embaixadora da Paz pela Federação da Paz Universal",
    subtitulo: "Destaque HAV em posições de liderança e ativismo:",
    isActive: true,
  },
  {
    id: "carla",
    nome: "Dra. Carla",
    nomeCompleto: "Dra. Carla Dione Ashton",
    email: "ashton.advocacia@gmail.com",
    cargo: "Advogada",
    oab: "OAB/SC: 6661-4",
    formacao: [],
    descricaoDetalhada:
      "Fiel a princípios que norteiam a sua atuação, principalmente com ética, seriedade, lealdade, competência técnica, sigilo profissional, trabalho em equipe e permanente interlocução com o cliente.\n\nOferece suporte, explicando de forma didática e clara quais são os pontos sensíveis do seu caso. Expondo quais são as estratégias a serem adotadas e quais medidas serão tomadas, o que é essencial.",
    subtitulo: "Conheça mais sobre Carla Ashton:",
    isActive: true,
  },
  {
    id: "beatriz",
    nome: "Dra. Beatriz",
    nomeCompleto: "Dra. Beatriz Venancio",
    email: "beatrizvenancio.adv@gmail.com",
    cargo: "Advogada",
    oab: "OAB/SC 76818",
    formacao: [
      "Direito - UFSC 2025",
      "Cursando Pós-Graduação em Direito Processual Civil - Damásio Educacional",
    ],
    descricaoDetalhada:
      "Advogada comunicativa, organizada e determinada. É responsável e pontual e tem interesse em se manter sempre atualizada através da participação em palestras e cursos.\nEm seus trabalhos, adquiriu experiência na gestão de prazos jurídicos e planilhas, confecção de ofícios, modelos, pareceres jurídicos, análise de processos demolitórios e administrativos através da hermenêutica jurídica, além de possuir conhecimento em processo civil, recursos cíveis e na confecção de peças jurídicas em geral.\nFoi Secretária do Centro Acadêmico XI de Fevereiro (CAXIF UFSC) gestão ''Presença'' 2021-22 e gestão ''Ainda Mais Presença'' 2022-23, sendo Organizadora do XVI e XVII Congresso Direito UFSC e da XXVI Semana Jurídica UFSC.",
    subtitulo: "Conheça mais sobre Carla Ashton:",
    isActive: true,
  },
];

// Funções utilitárias para consumir os dados
export const getAdvogadaById = (id: string): Advogada | undefined => {
  return advogadas.find((adv) => adv.id === id);
};

export const getAdvogadasAtivas = (): Advogada[] => {
  return advogadas.filter((adv) => adv.isActive);
};

export const getAdvogadasPorEspecialidade = (
  especialidade: string
): Advogada[] => {
  return [];
};

export const getAllEmails = (): string[] => {
  return advogadas
    .map((adv) => adv.email)
    .filter((email): email is string => email !== undefined);
};

// Dados do escritório
export interface DadosEscritorio {
  nome: string;
  nomeCompleto: string;
  telefones: string[];
  email: string;
  horarioFuncionamento: string;
  redesSociais: {
    instagram?: string;
    linkedin?: string;
    youtube?: string;
    whatsapp?: string;
  };
}

export const dadosEscritorio: DadosEscritorio = {
  nome: "HA&V Advogadas",
  nomeCompleto: "Hofstatter, Ashton & Venancio - Advocacia",
  telefones: ["(48) 99175-5694 (Beatriz)", "(48) 99671-9606 (Carla)"],
  email: "hav.advocacia@gmail.com",
  horarioFuncionamento: "Segunda a Sexta: 8h às 19h",
  redesSociais: {
    instagram: "https://instagram.com/havadvogadas",
    linkedin: "https://linkedin.com/company/havadvogadas",
    youtube: "https://youtube.com/@havadvogadas",
    whatsapp: "https://wa.me/5511999999999",
  },
};
