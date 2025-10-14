import Icon from "@mdi/react";
import { mdiCheckCircle, mdiArrowRight } from "@mdi/js";
import { areas } from "@/data/areas";

export default function AreasPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 bg-primary-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 font-serif uppercase">
            Nossas <span className="text-accent-400">Especialidades</span>
          </h1>
          <p className="text-xl text-neutral-200 max-w-3xl mx-auto">
            Oferecemos expertise jurídica completa nas principais áreas do
            direito, com soluções estratégicas e personalizadas para cada
            cliente.
          </p>
        </div>
      </section>

      {/* Áreas Detalhadas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-12">
            {areas.map((area, index) => (
              <div
                key={area.id}
                id={area.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace(/\//g, "-")}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary-700 flex items-center justify-center flex-shrink-0">
                      <Icon path={area.icon} size={1} className="text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-primary-800 font-serif uppercase">
                      {area.title}
                    </h2>
                  </div>

                  <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                    {area.description}
                  </p>

                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-primary-800 mb-4">
                      Nossos Serviços:
                    </h3>
                    <ul className="space-y-2">
                      {area.servicos.map((servico, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <Icon
                            path={mdiCheckCircle}
                            size={0.8}
                            className="text-accent-500 flex-shrink-0"
                          />
                          <span className="text-neutral-700">{servico}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="/contato"
                    className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 font-semibold hover:bg-primary-700 hover:shadow-lg transition-all hover:scale-105"
                  >
                    Solicitar Consultoria
                    <Icon path={mdiArrowRight} size={0.8} />
                  </a>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="bg-primary-50 p-8">
                    <div className="bg-white p-6 shadow-lg border border-primary-100">
                      <h4 className="text-xl font-bold text-primary-800 mb-4">
                        Por que escolher nossa expertise em {area.title}?
                      </h4>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-neutral-600">
                            Equipe especializada com vasta experiência na área
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-neutral-600">
                            Abordagem estratégica e personalizada para cada caso
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-neutral-600">
                            Histórico comprovado de resultados positivos
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-neutral-600">
                            Atendimento ágil e comunicação transparente
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">
            Precisa de Assessoria Jurídica Especializada?
          </h2>
          <p className="text-xl text-neutral-300 mb-8">
            Nossa equipe está pronta para oferecer as melhores soluções para
            suas questões jurídicas
          </p>
          <div className="flex justify-center">
            <a
              href="/contato"
              className="bg-accent-400 text-primary-900 px-8 py-4 font-semibold text-lg hover:bg-accent-500 transition-all hover:scale-105"
            >
              Entre em Contato
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
