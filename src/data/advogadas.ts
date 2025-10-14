// Dados centralizados das advogadas
// Este arquivo é a fonte única de verdade para informações das advogadas

export interface Advogada {
  id: string;
  nome: string;
  nomeCompleto: string;
  email: string;
  telefone?: string;
  cargo: string;
  especialidades: string[];
  especialidadePrincipal: string;
  descricao: string;
  descricaoDetalhada: string;
  foto?: string;
  oab?: string;
  linkedin?: string;
  instagram?: string;
  experiencia: string;
  formacao: string[];
  conquistas: string[];
  isActive: boolean;
}

export const advogadas: Advogada[] = [
  {
    id: "ingrid",
    nome: "Dra. Ingrid",
    nomeCompleto: "Dra. Ingrid Hofstatter",
    email: "hofs.adv@gmail.com",
    telefone: "(11) 99999-9999",
    cargo: "Sócia Fundadora",
    especialidades: [
      "Direito Empresarial",
      "Direito Bancário",
      "Contratos Comerciais",
      "Recuperação Judicial",
    ],
    especialidadePrincipal: "Direito Empresarial e Bancário",
    descricao:
      "Sócia Fundadora - Especialista em contratos empresariais e direito bancário",
    descricaoDetalhada:
      "Com mais de 15 anos de experiência, especializa-se em soluções jurídicas para empresas de pequeno, médio e grande porte. Expertise em contratos comerciais, direito bancário e recuperação judicial.",
    experiencia: "15+ anos",
    oab: "OAB/SP 123.456",
    linkedin: "https://linkedin.com/in/ingrid-hofstatter",
    formacao: [
      "Graduação em Direito - USP",
      "Pós-graduação em Direito Empresarial - FGV",
      "MBA em Gestão Empresarial - INSPER",
    ],
    conquistas: [
      "Fundadora do escritório HA&V Advogadas",
      "Mais de 500 contratos empresariais elaborados",
      "Palestrante em eventos de direito empresarial",
    ],
    isActive: true,
  },
  {
    id: "carla",
    nome: "Dra. Carla",
    nomeCompleto: "Dra. Carla Ashton",
    email: "ashton.advocacia@gmail.com",
    telefone: "(11) 88888-8888",
    cargo: "Sócia",
    especialidades: [
      "Direito de Família",
      "Direito Civil",
      "Sucessões",
      "Divórcios",
      "Guarda de Menores",
    ],
    especialidadePrincipal: "Direito de Família e Civil",
    descricao:
      "Sócia - Especialista em direito de família, sucessões e direito civil",
    descricaoDetalhada:
      "Reconhecida pela sensibilidade e competência técnica em casos familiares. Atua com foco na resolução consensual de conflitos, priorizando o bem-estar de todos os envolvidos, especialmente crianças.",
    experiencia: "12+ anos",
    oab: "OAB/SP 234.567",
    linkedin: "https://linkedin.com/in/carla-ashton",
    formacao: [
      "Graduação em Direito - PUC-SP",
      "Especialização em Direito de Família - Mackenzie",
      "Curso de Mediação Familiar - CONIMA",
    ],
    conquistas: [
      "Especialista em mediação familiar",
      "Mais de 300 casos de família resolvidos",
      "Certificação em Constelação Familiar",
    ],
    isActive: true,
  },
  {
    id: "beatriz",
    nome: "Dra. Beatriz",
    nomeCompleto: "Dra. Beatriz Venancio",
    email: "beatrizvenancio.adv@gmail.com",
    telefone: "(11) 77777-7777",
    cargo: "Advogada Associada",
    especialidades: [
      "Direito Digital",
      "LGPD",
      "Marco Civil da Internet",
      "Propriedade Intelectual",
      "Direito do Consumidor Digital",
    ],
    especialidadePrincipal: "Direito Digital e LGPD",
    descricao:
      "Advogada Associada - Especialista em direito digital, LGPD e tecnologia",
    descricaoDetalhada:
      "Pioneira na área de direito digital no escritório. Atua na adequação de empresas à LGPD, proteção de dados pessoais, contratos de tecnologia e crimes digitais. Sempre atualizada com as últimas tendências jurídicas do meio digital.",
    experiencia: "8+ anos",
    oab: "OAB/SP 345.678",
    linkedin: "https://linkedin.com/in/beatriz-venancio",
    instagram: "https://instagram.com/drabeatrizvenancio",
    formacao: [
      "Graduação em Direito - UNIFESP",
      "Pós-graduação em Direito Digital - ITS Rio",
      "Certificação em LGPD - EXIN",
    ],
    conquistas: [
      "Pioneira em LGPD no escritório",
      "Mais de 100 empresas adequadas à LGPD",
      "Palestrante em eventos de tecnologia",
    ],
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
  return advogadas.filter((adv) =>
    adv.especialidades.some((esp) =>
      esp.toLowerCase().includes(especialidade.toLowerCase())
    )
  );
};

export const getAllEmails = (): string[] => {
  return advogadas.map((adv) => adv.email);
};

// Dados do escritório
export interface DadosEscritorio {
  nome: string;
  nomeCompleto: string;
  endereco: {
    rua: string;
    numero: string;
    complemento?: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
  };
  telefones: string[];
  emails: {
    principal: string;
    comercial: string;
    suporte: string;
  };
  horarioFuncionamento: {
    semana: string;
    sabado: string;
    domingo?: string;
  };
  redesSociais: {
    instagram?: string;
    linkedin?: string;
    youtube?: string;
    whatsapp?: string;
  };
}

export const dadosEscritorio: DadosEscritorio = {
  nome: "HA&V Advogadas",
  nomeCompleto: "Hofstatter, Ashton & Venancio - Advogadas Associadas",
  endereco: {
    rua: "Rua das Palmeiras",
    numero: "123",
    complemento: "Sala 45",
    bairro: "Jardins",
    cidade: "São Paulo",
    estado: "SP",
    cep: "01234-567",
  },
  telefones: ["(11) 99999-9999", "(11) 88888-8888", "(11) 77777-7777"],
  emails: {
    principal: "hav.advocacia@gmail.com",
    comercial: "hav.advocacia@gmail.com",
    suporte: "hav.advocacia@gmail.com",
  },
  horarioFuncionamento: {
    semana: "Segunda a Sexta: 8h às 18h",
    sabado: "Sábado: 8h às 12h",
    domingo: "Fechado",
  },
  redesSociais: {
    instagram: "https://instagram.com/havadvogadas",
    linkedin: "https://linkedin.com/company/havadvogadas",
    youtube: "https://youtube.com/@havadvogadas",
    whatsapp: "https://wa.me/5511999999999",
  },
};
