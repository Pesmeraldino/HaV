"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Icon from "@mdi/react";
import {
  mdiEmail,
  mdiPhone,
  mdiMapMarker,
  mdiClock,
  mdiSend,
  mdiCheckCircle,
  mdiAccount,
  mdiChevronDown,
} from "@mdi/js";
import { advogadas, dadosEscritorio, getAdvogadaById } from "@/data/advogadas";
import { areas } from "@/data/areas";

export default function ContatoPage() {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    advogada: "", // Nova campo para seleção da advogada
    assunto: "",
    mensagem: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Estados para controlar os dropdowns customizados
  const [isAdvogadaDropdownOpen, setIsAdvogadaDropdownOpen] = useState(false);
  const [isAreaDropdownOpen, setIsAreaDropdownOpen] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Funções para manipular seleções dos dropdowns customizados
  const handleAdvogadaSelect = (advogadaId: string) => {
    setFormData((prev) => ({
      ...prev,
      advogada: advogadaId,
    }));
    setIsAdvogadaDropdownOpen(false);
  };

  const handleAreaSelect = (areaTitle: string) => {
    setFormData((prev) => ({
      ...prev,
      assunto: areaTitle,
    }));
    setIsAreaDropdownOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Encontrar a advogada selecionada
      const advogadaSelecionada = advogadas.find(
        (adv) => adv.id === formData.advogada
      );

      if (!advogadaSelecionada) {
        throw new Error("Por favor, selecione uma advogada");
      }

      // 1. Enviar email para a advogada selecionada
      await emailjs.send(
        "service_7r6u66q",
        "template_iy4k2mn",
        {
          to_email: advogadaSelecionada.email,
          to_name: advogadaSelecionada.nome,
          from_name: formData.nome,
          from_email: formData.email,
          phone: formData.telefone,
          subject: formData.assunto,
          message: formData.mensagem,
          send_date: new Date().toLocaleDateString("pt-BR"),
        },
        "AtdZLHHxC48_lGkrg"
      );

      // 2. Enviar confirmação para o cliente
      await emailjs.send(
        "service_7r6u66q",
        "template_zt26gij",
        {
          to_email: formData.email,
          to_name: formData.nome,
          from_name: formData.nome,
          from_email: formData.email,
          phone: formData.telefone,
          title: `Confirmação - ${formData.assunto}`,
          subject: formData.assunto,
          message: formData.mensagem,
          send_date: new Date().toLocaleDateString("pt-BR"),
          advogada_nome: advogadaSelecionada.nome,
        },
        "AtdZLHHxC48_lGkrg"
      );

      setSubmitStatus("success");
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        advogada: "",
        assunto: "",
        mensagem: "",
      });

      // Reset form
      if (form.current) {
        form.current.reset();
      }
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 bg-primary-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 font-serif">
            Entre em <span className="text-accent-400">Contato</span>
          </h1>
          <p className="text-xl text-neutral-200 max-w-3xl mx-auto">
            Estamos prontos para ajudá-lo com suas questões jurídicas. Agende
            uma consulta.
          </p>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulário de Contato */}
            <div>
              <h2 className="text-3xl font-bold text-primary-800 mb-8 font-serif">
                Envie sua Mensagem
              </h2>

              {submitStatus === "success" ? (
                <div className="bg-green-50 border border-green-200 p-8 text-center">
                  <Icon
                    path={mdiCheckCircle}
                    size={3}
                    className="text-green-600 mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold text-green-800 mb-2">
                    Mensagem Enviada com Sucesso!
                  </h3>
                  <p className="text-green-700 mb-4">
                    Você receberá uma confirmação por email e nossa equipe
                    entrará em contato em breve.
                  </p>
                  <button
                    onClick={() => setSubmitStatus("idle")}
                    className="bg-primary-600 text-white px-6 py-2 font-semibold hover:bg-primary-700 transition-colors"
                  >
                    Enviar Nova Mensagem
                  </button>
                </div>
              ) : (
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="nome"
                        className="block text-sm font-semibold text-primary-800 mb-2"
                      >
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-primary-800 mb-2"
                      >
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  {/* Seleção da Advogada */}
                  <div>
                    <label
                      htmlFor="advogada"
                      className="block text-sm font-semibold text-primary-800 mb-2"
                    >
                      Selecione a Advogada *
                    </label>
                    <div
                      className="relative group"
                      onMouseEnter={() => setIsAdvogadaDropdownOpen(true)}
                      onMouseLeave={() => setIsAdvogadaDropdownOpen(false)}
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setIsAdvogadaDropdownOpen(!isAdvogadaDropdownOpen)
                        }
                        className="w-full px-4 py-3 border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors bg-white text-left flex items-center justify-between hover:text-primary-700"
                      >
                        <span
                          className={
                            formData.advogada
                              ? "text-neutral-700"
                              : "text-neutral-500"
                          }
                        >
                          {formData.advogada
                            ? `${
                                advogadas.find(
                                  (a) => a.id === formData.advogada
                                )?.nomeCompleto
                              }`
                            : "Selecione uma advogada..."}
                        </span>
                        <Icon
                          path={mdiChevronDown}
                          size={0.6}
                          className={`transform transition-transform ${
                            isAdvogadaDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <div
                        className={`absolute top-full left-0 w-full bg-white shadow-elegant-lg border border-neutral-200 mt-2 ${
                          isAdvogadaDropdownOpen
                            ? "opacity-100 visible"
                            : "opacity-0 invisible"
                        } transition-all duration-200 transform ${
                          isAdvogadaDropdownOpen
                            ? "translateY-0"
                            : "-translateY-2"
                        } max-h-80 overflow-y-auto z-50`}
                      >
                        <div className="p-2">
                          <div
                            onClick={() => handleAdvogadaSelect("")}
                            className="block px-4 py-3 text-neutral-500 hover:text-primary-700 hover:bg-primary-50 transition-colors cursor-pointer"
                          >
                            Selecione uma advogada...
                          </div>
                          {advogadas.map((advogada) => (
                            <div
                              key={advogada.id}
                              onClick={() => handleAdvogadaSelect(advogada.id)}
                              className="block px-4 py-3 text-neutral-700 hover:text-primary-700 hover:bg-primary-50 transition-colors cursor-pointer"
                            >
                              <div className="font-medium">
                                {advogada.nomeCompleto}
                              </div>
                              <div className="text-sm text-neutral-600">
                                {advogada.cargo}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Campo hidden para o form */}
                    <input
                      type="hidden"
                      name="advogada"
                      value={formData.advogada}
                    />

                    {/* Mostrar descrição da advogada selecionada */}
                    {formData.advogada && (
                      <div className="mt-3 p-4 bg-primary-50 border border-primary-200">
                        {(() => {
                          const advSelecionada = advogadas.find(
                            (adv) => adv.id === formData.advogada
                          );
                          return advSelecionada ? (
                            <div className="flex items-start gap-3">
                              <Icon
                                path={mdiAccount}
                                size={1}
                                className="text-primary-600 mt-1"
                              />
                              <div>
                                <p className="font-semibold text-primary-800">
                                  {advSelecionada.nome}
                                </p>
                                <p className="text-sm text-primary-600">
                                  {advSelecionada.oab}
                                </p>
                                <p className="text-xs text-primary-500 mt-1">
                                  📧 {advSelecionada.email}
                                </p>
                              </div>
                            </div>
                          ) : null;
                        })()}
                      </div>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="telefone"
                        className="block text-sm font-semibold text-primary-800 mb-2"
                      >
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="assunto"
                        className="block text-sm font-semibold text-primary-800 mb-2"
                      >
                        Área de Interesse *
                      </label>
                      <div
                        className="relative group"
                        onMouseEnter={() => setIsAreaDropdownOpen(true)}
                        onMouseLeave={() => setIsAreaDropdownOpen(false)}
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setIsAreaDropdownOpen(!isAreaDropdownOpen)
                          }
                          className="w-full px-4 py-3 border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors bg-white text-left flex items-center justify-between hover:text-primary-700"
                        >
                          <span
                            className={
                              formData.assunto
                                ? "text-neutral-700"
                                : "text-neutral-500"
                            }
                          >
                            {formData.assunto || "Selecione uma área"}
                          </span>
                          <Icon
                            path={mdiChevronDown}
                            size={0.6}
                            className={`transform transition-transform ${
                              isAreaDropdownOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <div
                          className={`absolute top-full left-0 w-full bg-white shadow-elegant-lg border border-neutral-200 mt-2 ${
                            isAreaDropdownOpen
                              ? "opacity-100 visible"
                              : "opacity-0 invisible"
                          } transition-all duration-200 transform ${
                            isAreaDropdownOpen
                              ? "translateY-0"
                              : "-translateY-2"
                          } max-h-80 overflow-y-auto z-50`}
                        >
                          <div className="p-2">
                            <div
                              onClick={() => handleAreaSelect("")}
                              className="block px-4 py-3 text-neutral-500 hover:text-primary-700 hover:bg-primary-50 transition-colors cursor-pointer"
                            >
                              Selecione uma área
                            </div>
                            {areas.map((area) => (
                              <div
                                key={area.id}
                                onClick={() => handleAreaSelect(area.title)}
                                className="block px-4 py-3 text-neutral-700 hover:text-primary-700 hover:bg-primary-50 transition-colors cursor-pointer"
                              >
                                {area.title}
                              </div>
                            ))}
                            <div
                              onClick={() => handleAreaSelect("Outro")}
                              className="block px-4 py-3 text-neutral-700 hover:text-primary-700 hover:bg-primary-50 transition-colors cursor-pointer"
                            >
                              Outro
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Campo hidden para o form */}
                      <input
                        type="hidden"
                        name="assunto"
                        value={formData.assunto}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="mensagem"
                      className="block text-sm font-semibold text-primary-800 mb-2"
                    >
                      Mensagem *
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none"
                      placeholder="Descreva brevemente sua situação ou dúvida jurídica..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center gap-2 px-8 py-4 font-semibold text-lg transition-all ${
                      isSubmitting
                        ? "bg-neutral-400 text-neutral-600 cursor-not-allowed"
                        : "bg-primary-900 text-white hover:bg-primary-1000 hover:shadow-lg"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Icon path={mdiSend} size={0.8} />
                        Enviar Mensagem
                      </>
                    )}
                  </button>

                  <p className="text-sm text-neutral-600 text-center">
                    * Campos obrigatórios. Suas informações são confidenciais e
                    protegidas.
                  </p>

                  {/* Status de erro */}
                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-50 border border-red-200 text-red-800">
                      <div className="flex items-center gap-2">
                        <Icon path={mdiCheckCircle} size={1} />
                        <span className="font-medium">
                          Erro ao enviar mensagem!
                        </span>
                      </div>
                      <p className="text-sm mt-1">
                        Verifique sua conexão e tente novamente, ou entre em
                        contato diretamente pelo email ou telefone.
                      </p>
                    </div>
                  )}
                </form>
              )}
            </div>

            {/* Informações de Contato */}
            <div>
              <h2 className="text-3xl font-bold text-primary-800 mb-8 font-serif">
                Informações de Contato
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Icon path={mdiPhone} size={1} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 mb-1">
                      Telefones
                    </h3>
                    <div className="text-neutral-600">
                      {dadosEscritorio.telefones.map((telefone, index) => (
                        <p key={index}>{telefone}</p>
                      ))}
                      <p className="text-sm mt-2">
                        <span className="font-medium">WhatsApp:</span>{" "}
                        <a
                          href={dadosEscritorio.redesSociais.whatsapp}
                          className="text-accent-600 hover:text-accent-700"
                        >
                          Clique aqui para conversar
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Icon path={mdiEmail} size={1} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 mb-1">
                      E-mail
                    </h3>
                    <p className="text-neutral-600">{dadosEscritorio.email}</p>
                    <div className="mt-3 text-sm text-neutral-500">
                      <p>
                        <strong>Advogadas:</strong>
                      </p>
                      {advogadas
                        .filter((adv) => adv.id !== "equipe")
                        .map((adv) => (
                          <p key={adv.id}>
                            • {adv.nome}: {adv.email}
                          </p>
                        ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Icon path={mdiClock} size={1} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 mb-1">
                      Horário de Atendimento
                    </h3>
                    <p className="text-neutral-600">
                      {dadosEscritorio.horarioFuncionamento}
                      <br />
                      <span className="text-accent-600 font-medium">
                        Atendimento de urgência 24h
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informações Adicionais */}
      <section className="py-20 bg-primary-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                <Icon path={mdiCheckCircle} size={1.5} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Consulta Estratégica
              </h3>
              <p className="text-neutral-200">
                Avaliação do caso para determinar as melhores soluções
                jurídicas.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                <Icon path={mdiClock} size={1.5} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Resposta Rápida
              </h3>
              <p className="text-neutral-200">Retorno em até 5 dias úteis.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                <Icon path={mdiPhone} size={1.5} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Atendimento 24h por telefone
              </h3>
              <p className="text-neutral-200">Disponível para urgências.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
