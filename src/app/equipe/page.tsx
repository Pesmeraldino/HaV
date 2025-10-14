import Icon from "@mdi/react";
import {
  mdiAccountTie,
  mdiEmail,
  mdiLinkedin,
  mdiGavel,
  mdiCertificate,
  mdiTrophy,
} from "@mdi/js";
import { advogadas } from "@/data/advogadas";

export default function EquipePage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 bg-primary-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 font-serif uppercase">
            Nossa <span className="text-accent-400">Equipe</span>
          </h1>
          <p className="text-xl text-neutral-200 max-w-3xl mx-auto">
            Profissionais experientes e dedicados, unidos pela paixão pela
            advocacia e pelo compromisso com a excelência no atendimento aos
            nossos clientes.
          </p>
        </div>
      </section>

      {/* Equipe Completa */}
      <section className="py-20 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          {advogadas.length === 0 ? (
            <div className="text-center py-20">
              <Icon
                path={mdiAccountTie}
                size={4}
                className="text-neutral-300 mx-auto mb-6"
              />
              <h3 className="text-2xl font-bold text-neutral-600 mb-4">
                Equipe em breve
              </h3>
              <p className="text-neutral-500">
                As informações da nossa equipe serão adicionadas em breve.
              </p>
            </div>
          ) : (
            <div className="grid gap-12">
              {advogadas.map((membro, index: number) => (
                <div
                  key={membro.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <div
                    className={`grid lg:grid-cols-3 gap-8 items-start p-8 ${
                      index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                    }`}
                  >
                    {/* Foto/Avatar */}
                    <div
                      className={`${index % 2 === 1 ? "lg:col-start-3" : ""}`}
                    >
                      <div className="bg-primary-900 rounded-xl p-6 h-fit">
                        <div className="w-32 h-32 bg-white rounded-full mx-auto mb-6 flex items-center justify-center">
                          <Icon
                            path={mdiAccountTie}
                            size={3}
                            className="text-primary-600"
                          />
                        </div>
                        <div className="text-center mb-6">
                          <h3 className="text-xl font-bold text-white mb-2 uppercase">
                            {membro.nomeCompleto}
                          </h3>
                          <p className="text-accent-200 font-semibold mb-4">
                            {membro.cargo}
                          </p>
                        </div>
                        <div className="space-y-3 text-sm text-neutral-200 text-left">
                          <div className="flex justify-between">
                            <span className="font-semibold">OAB:</span>
                            <span>{membro.oab || "Em processo"}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-semibold">Experiência:</span>
                            <span>{membro.experiencia}</span>
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="font-semibold">Formação:</span>
                            <span className="text-xs leading-tight">
                              {Array.isArray(membro.formacao) ? membro.formacao[0] : membro.formacao}
                            </span>
                          </div>
                        </div>
                        <div className="flex justify-center gap-3 mt-6">
                          <a
                            href={`mailto:${membro.email}`}
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                          >
                            <Icon
                              path={mdiEmail}
                              size={0.8}
                              className="text-white"
                            />
                          </a>
                          <a
                            href="#"
                            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                          >
                            <Icon
                              path={mdiLinkedin}
                              size={0.8}
                              className="text-white"
                            />
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Informações */}
                    <div
                      className={`lg:col-span-2 ${
                        index % 2 === 1 ? "lg:col-start-1" : ""
                      }`}
                    >
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-primary-800 mb-2 font-serif uppercase text-left">
                          {membro.nomeCompleto}
                        </h3>
                        <p className="text-accent-600 font-semibold text-lg mb-4 text-left">
                          {membro.cargo}
                        </p>
                        <p className="text-neutral-700 leading-relaxed text-lg text-left">
                          {membro.descricaoDetalhada}
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Especialidades */}
                        <div>
                          <h4 className="font-bold text-primary-800 mb-3 flex items-center gap-2 text-left">
                            <Icon path={mdiGavel} size={0.8} />
                            Especialidades
                          </h4>
                          <ul className="space-y-2">
                            {membro.especialidades?.map(
                              (esp: string, i: number) => (
                                <li
                                  key={i}
                                  className="text-neutral-600 flex items-center gap-2 text-left"
                                >
                                  <div className="w-1.5 h-1.5 bg-accent-500 rounded-full"></div>
                                  {esp}
                                </li>
                              )
                            )}
                          </ul>
                        </div>

                        {/* Conquistas */}
                        <div>
                          <h4 className="font-bold text-primary-800 mb-3 flex items-center gap-2 text-left">
                            <Icon path={mdiTrophy} size={0.8} />
                            Conquistas e Reconhecimentos
                          </h4>
                          <ul className="space-y-2">
                            {membro.conquistas?.map(
                              (conquista: string, i: number) => (
                                <li
                                  key={i}
                                  className="text-neutral-600 flex items-start gap-2 text-left"
                                >
                                  <Icon
                                    path={mdiCertificate}
                                    size={0.6}
                                    className="text-accent-500 mt-1 flex-shrink-0"
                                  />
                                  <span className="text-sm">{conquista}</span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Estatísticas da Equipe */}
      <section className="py-20 bg-primary-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 font-serif">
              Nossa Equipe em Números
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent-400 mb-2">-</div>
              <div className="text-white">Advogados Especialistas</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-400 mb-2">-</div>
              <div className="text-white">Anos de Experiência Combinada</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-400 mb-2">-</div>
              <div className="text-white">Especializações</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-400 mb-2">-</div>
              <div className="text-white">Taxa de Sucesso</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-primary-800 mb-6 font-serif">
            Converse Diretamente com Nossa Equipe
          </h2>
          <p className="text-xl text-neutral-600 mb-8">
            Escolha o especialista ideal para seu caso e agende uma consulta
            personalizada
          </p>
          <a
            href="/contato"
            className="inline-flex items-center gap-2 bg-gradient-accent text-primary-900 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-elegant-lg transition-all hover:scale-105"
          >
            <Icon path={mdiEmail} size={0.8} />
            Agendar Consulta
          </a>
        </div>
      </section>
    </div>
  );
}
