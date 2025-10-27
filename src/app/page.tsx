import HeroCarousel from "../components/ui/HeroCarousel";
import Icon from "@mdi/react";
import {
  mdiGavel,
  mdiAccountGroup,
  mdiTrophy,
  mdiCertificate,
  mdiHandshake,
  mdiScaleBalance,
  mdiArrowRight,
  mdiStar,
  mdiFormatQuoteOpen,
} from "@mdi/js";

const areasDeAtuacao = [
  // {
  //   id: 1,
  //   title: "",
  //   description: "",
  //   icon: mdiGavel,
  // },
];

const equipeDestaque = [
  {
    id: 1,
    nome: "Dra. Ingrid Chineppe Hofstatter",
    imagem: "bg-gradient-to-br from-primary-800 to-primary-600",
  },
  {
    id: 2,
    nome: "Dra. Carla Dione Ashton",
    imagem: "bg-gradient-to-br from-accent-600 to-accent-800",
  },
  {
    id: 3,
    nome: "Dra. Beatriz Venancio",
    imagem: "/assets/card_beatriz.jpg",
  },
];

const missaoValoresVisao = [
  {
    icon: mdiScaleBalance,
    title: "Missão",
    description:
      "Prestar serviços com eficiência,  qualidade e soluções inovadoras, com atendimento personalizado e consultoria jurídica de excelência em busca da satisfação dos clientes.",
  },
  {
    icon: mdiTrophy,
    title: "Valores",
    description: "Excelência, Integridade, Ética, Respeito, Comprometimento",
  },
  {
    icon: mdiCertificate,
    title: "Visão",
    description:
      "Ser referência em consultoria jurídica, com compromisso na construção de um mundo melhor, visando à preservação da democracia e dos direitos do cidadão.",
  },
];

const depoimentos = [
  // {
  //   id: 1,
  //   cliente: "",
  //   empresa: "",
  //   depoimento: "",
  //   rating: 5,
  // },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Carousel - Tela cheia sem navbar */}
      <HeroCarousel />

      {/* Nossa Equipe */}
      <section className="py-20 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-900 mb-4 font-serif uppercase">
              Nossa <span className="text-accent-500">Equipe</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {equipeDestaque.map((membro) => (
              <div key={membro.id} className="relative group cursor-pointer">
                <div
                  className={`aspect-[3/4] flex items-end p-8 relative overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:scale-105 ${
                    membro.imagem.startsWith("/") ? "" : membro.imagem
                  }`}
                  style={
                    membro.imagem.startsWith("/")
                      ? {
                          backgroundImage: `url(${membro.imagem})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }
                      : undefined
                  }
                >
                  {/* Overlay para melhor legibilidade do nome */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                  {/* Nome do advogado */}
                  <h3 className="text-2xl font-bold text-white relative z-10 group-hover:scale-105 transition-transform leading-tight">
                    {membro.nome}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Missão, Valores e Visão */}
      <section className="py-20 bg-primary-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-serif uppercase">
              Nossos Princípios
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {missaoValoresVisao.map((item, index) => (
              <div
                key={index}
                className="bg-primary-800 p-8 shadow-elegant hover:shadow-elegant-lg transition-all hover:-translate-y-1 border border-primary-700"
              >
                <div className="w-20 h-20 bg-accent-500 flex items-center justify-center mb-6 mx-auto">
                  <Icon
                    path={item.icon}
                    size={2}
                    className="text-primary-900"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center uppercase">
                  {item.title}
                </h3>
                <p className="text-neutral-200 leading-relaxed text-center">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-primary-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif uppercase">
            Precisa entender melhor uma Questão Jurídica?
          </h2>
          <p className="text-xl text-neutral-200 mb-8">Agende uma consulta.</p>
          <div className="flex justify-center">
            <a
              href="/contato"
              className="bg-accent-500 text-primary-900 px-12 py-4 font-semibold text-lg hover:bg-accent-400 transition-all hover:scale-105"
            >
              Entre em Contato
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
