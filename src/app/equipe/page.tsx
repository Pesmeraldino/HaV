import Icon from "@mdi/react";
import {
  mdiAccountTie,
  mdiEmail,
  mdiLinkedin,
  mdiGavel,
  mdiCertificate,
  mdiTrophy,
  mdiPin,
} from "@mdi/js";
import { advogadas } from "@/data/advogadas";

export default function EquipePage() {
  const renderDescription = (text: string) => {
    return text.split("\n\n").map((line, index) => {
      if (line.trim().startsWith("•")) {
        const content = line.trim().substring(1).trim();
        return (
          <div key={index} className="flex items-start gap-3 mb-3">
            <Icon
              path={mdiPin}
              size={0.8}
              className="text-accent-500 mt-1 flex-shrink-0"
            />
            <span>{content}</span>
          </div>
        );
      }
      return (
        <p key={index} className="mb-4">
          {line}
        </p>
      );
    });
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 bg-primary-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 font-serif uppercase">
            Nossa <span className="text-accent-400">Equipe</span>
          </h1>
          <p className="text-xl text-neutral-200 max-w-3xl mx-auto">
            Profissionais dedicadas, unidas pela paixão pela advocacia e pelo
            compromisso com a excelência no atendimento aos clientes.
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
                        <div className="space-y-3 text-sm text-neutral-200 text-left">
                          <div className="flex justify-between">
                            <span>{membro.oab || "Em processo"}</span>
                            <span>{membro.cargo || "Em processo"}</span>
                          </div>
                          <div className="flex flex-col gap-1">
                            {Array.isArray(membro.formacao) ? (
                              membro.formacao.map((f, i) => (
                                <span key={i} className="text-xs leading-tight">
                                  {f}
                                </span>
                              ))
                            ) : (
                              <span className="text-xs leading-tight">
                                {membro.formacao}
                              </span>
                            )}
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
                        {membro.subtitulo && (
                          <p className="text-accent-500 font-semibold text-lg text-left">
                            {membro.subtitulo}
                          </p>
                        )}
                      </div>
                      {membro.descricaoDetalhada && (
                        <div className="text-neutral-700 leading-relaxed text-lg text-left">
                          {renderDescription(membro.descricaoDetalhada)}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">
            Converse Diretamente com Nossa Equipe
          </h2>
          <p className="text-xl text-white mb-8">
            Agende uma consulta personalizada.
          </p>
          <a
            href="/contato"
            className="bg-accent-400 text-primary-900 px-8 py-4 font-semibold text-lg hover:bg-accent-500 transition-all hover:scale-105"
          >
            Entre em Contato
          </a>
        </div>
      </section>
    </div>
  );
}
