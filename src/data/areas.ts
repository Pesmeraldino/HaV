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
      "Consultoria jurídica completa para empresas de todos os portes, incluindo constituição, reestruturação, contratos e compliance.",
    icon: mdiCertificate,
    servicos: [
      "Constituição de empresas",
      "Reestruturação societária",
      "Contratos empresariais",
      "Compliance corporativo",
    ],
    destaque: true,
  },
  {
    id: 2,
    title: "Direito Bancário",
    description:
      "Defesa especializada em questões bancárias, renegociação de dívidas e proteção contra práticas abusivas.",
    icon: mdiShieldCheck,
    servicos: [
      "Renegociação de dívidas",
      "Revisão de contratos bancários",
      "Defesa contra práticas abusivas",
      "Ações contra instituições financeiras",
    ],
    destaque: true,
  },
  {
    id: 3,
    title: "Direito Imobiliário",
    description:
      "Assessoria jurídica completa em transações imobiliárias, regularização e questões patrimoniais.",
    icon: mdiHome,
    servicos: [
      "Compra e venda de imóveis",
      "Regularização de propriedades",
      "Contratos de locação",
      "Questões condominiais",
    ],
    destaque: false,
  },
  {
    id: 4,
    title: "Direito Civil",
    description:
      "Soluções jurídicas em questões civis, responsabilidade civil e direitos fundamentais.",
    icon: mdiGavel,
    servicos: [
      "Responsabilidade civil",
      "Contratos civis",
      "Direitos do consumidor",
      "Indenizações",
    ],
    destaque: false,
  },
  {
    id: 5,
    title: "Direito de Família",
    description:
      "Assessoria especializada em questões familiares com sensibilidade e profissionalismo.",
    icon: mdiHandshake,
    servicos: [
      "Divórcios consensuais e litigiosos",
      "Guarda de menores",
      "Pensão alimentícia",
      "Partilha de bens",
    ],
    destaque: false,
  },
  {
    id: 6,
    title: "Direito Previdenciário",
    description:
      "Assessoria em benefícios previdenciários e questões trabalhistas relacionadas.",
    icon: mdiScaleBalance,
    servicos: [
      "Aposentadorias",
      "Pensões por morte",
      "Auxílios previdenciários",
      "Revisões de benefícios",
    ],
    destaque: false,
  },
  {
    id: 7,
    title: "Direito Digital",
    description:
      "Expertise em questões jurídicas do ambiente digital e tecnológico.",
    icon: mdiCheckCircle,
    servicos: [
      "Proteção de dados pessoais",
      "Crimes digitais",
      "Contratos de tecnologia",
      "Propriedade intelectual digital",
    ],
    destaque: false,
  },
  {
    id: 8,
    title: "Revisão/Análise Contratual",
    description:
      "Análise minuciosa de contratos para identificar riscos e oportunidades de melhoria.",
    icon: mdiArrowRight,
    servicos: [
      "Revisão de contratos existentes",
      "Análise de cláusulas",
      "Identificação de riscos",
      "Sugestões de melhorias",
    ],
    destaque: false,
  },
  {
    id: 9,
    title: "Conciliação",
    description: "Mediação e conciliação para resolução amigável de conflitos.",
    icon: mdiHandshake,
    servicos: [
      "Mediação de conflitos",
      "Acordos extrajudiciais",
      "Conciliação empresarial",
      "Negociação assistida",
    ],
    destaque: false,
  },
  {
    id: 10,
    title: "LGPD",
    description:
      "Consultoria especializada em adequação à Lei Geral de Proteção de Dados.",
    icon: mdiShieldCheck,
    servicos: [
      "Adequação à LGPD",
      "Políticas de privacidade",
      "Mapeamento de dados",
      "Treinamento de equipes",
    ],
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