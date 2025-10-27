import {
  mdiGavel,
  mdiCertificate,
  mdiHandshake,
  mdiScaleBalance,
  mdiShieldCheck,
  mdiHome,
  mdiArrowRight,
  mdiCheckCircle,
} from "@mdi/js";

export interface Area {
  id: number;
  title: string;
  description: string;
  icon: string;
  servicos: string[];
  destaque: boolean;
}

export const areas: Area[] = [
  {
    id: 1,
    title: "Direito Empresarial",
    description:
      "Consultoria jurídica completa para empresas de todos os portes, abrangendo a elaboração e revisão de contratos empresariais, estruturação societária, definição de direitos e deveres dos sócios, bem como a representação em ações de cobrança, execuções fiscais e judiciais. Advocacia empresarial atuando na recuperação de empresas e direito do terceiro setor, especialmente associações sem fins lucrativos (hospital Imarui, ABMCJ, ACMP, Associação Sabará, ONG Mais União, Igreja Conectados em Cristo, dentre inúmeras outras).",
    icon: mdiCertificate,
    servicos: [
      "Elaboração e revisão de Contratos",
      "Estruturação societária",
      "Atuação em ações judiciais",
    ],
    destaque: true,
  },
  {
    id: 2,
    title: "Direito Bancário",
    description:
      "Soluções jurídicas únicas para o seu negócio em questões bancárias, renegociação de dívidas ou proteção contra práticas abusivas, com atendimento a consumidores e representação de bancos, incluindo Fiat e Itaucard/Credicard.",
    icon: mdiShieldCheck,
    servicos: [
      "Revisão de contratos bancários",
      "Defesa contra práticas abusivas",
      "Renegociação de dívidas",
    ],
    destaque: true,
  },
  {
    id: 3,
    title: "Direito Imobiliário",
    description:
      "Assessoria jurídica completa em transações imobiliárias: análise de risco na compra de imóveis ou veículos, regularização documental e suporte em questões patrimoniais ligadas à posse ou à propriedade. Atendendo empresas como Locast Guindastes, Transportadora Supersul, Emacobras Imóveis LTDA, Guaiúba Guinchos LTDA e Construtorres Ltda.",
    icon: mdiHome,
    servicos: [
      "Análise de risco na compra e venda de imóveis ou veículos",
      "Regularização de posse/propriedades",
      "Análise/confecção de contratos",
    ],
    destaque: false,
  },
  {
    id: 4,
    title: "Direito Civil",
    description:
      "Soluções jurídicas em questões civis, direitos fundamentais, dúvidas sobre casamento, união estável, divórcios consensuais e litigiosos, guarda de menores, pensão alimentícia, patrimônio, contratos, posse, propriedade, sucessões e partilhas de bens. Pareceres e elaboração de contratos.",
    icon: mdiGavel,
    servicos: [
      "Contratos em Direito de Família",
      "Inventário e partilha de bens",
      "Indenizações civis",
    ],
    destaque: false,
  },
  {
    id: 5,
    title: "Direito Previdenciário",
    description:
      "Assessoria em benefícios previdenciários e questões relacionadas à pensões e auxílios.",
    icon: mdiScaleBalance,
    servicos: ["Revisões de benefícios"],
    destaque: false,
  },
  {
    id: 6,
    title: "Direito Digital",
    description:
      "Expertise em questões jurídicas do ambiente digital e tecnológico.",
    icon: mdiCheckCircle,
    servicos: [
      "Proteção de dados pessoais",
      "Proteção aos direitos do usuário na internet",
      "LGPD",
    ],
    destaque: false,
  },
  {
    id: 7,
    title: "Conciliação",
    description: "Conciliação para resolução amigável de conflitos.",
    icon: mdiHandshake,
    servicos: ["Mediação de conflitos", "Acordos extrajudiciais"],
    destaque: false,
  },
];

// Funções utilitárias
export const getAreaById = (id: number): Area | undefined => {
  return areas.find((area) => area.id === id);
};

export const getAreasDestaque = (): Area[] => {
  return areas.filter((area) => area.destaque);
};

export const getAreasByTitle = (searchTerm: string): Area[] => {
  return areas.filter((area) =>
    area.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const getAllAreas = (): Area[] => {
  return areas;
};
