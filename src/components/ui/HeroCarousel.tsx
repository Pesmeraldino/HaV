"use client";

import { useState, useEffect } from "react";
import Icon from "@mdi/react";
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
}

// Slides inspiradores para direito civil, empresarial e bancário
const heroSlides: Slide[] = [
  {
    id: 1,
    title: "Consultoria Jurídica Online",
    subtitle: "para todo Brasil",
    description:
      "Conecte-se à HAV e tenha acesso à consultoria de qualidade em qualquer lugar do Brasil.",
  },
  {
    id: 2,
    title: "Direito Civil",
    subtitle: "Protegendo seus bens e direitos fundamentais",
    description:
      "Conecte-se à HAV e tire suas dúvidas sobre casamento, união estável, divórcio, patrimônio, contratos, posse, propriedade e sucessões, além de oferecer os serviços de confecção de pareceres e elaboração de contratos.",
  },
  {
    id: 3,
    title: "Direito Empresarial",
    subtitle: "Prevenção jurídica para a segurança do seu negócio",
    description:
      "Contratos empresariais, consultoria e estruturação societária com excelência. Advocacia empresarial atuando na recuperação de empresas e direitos do terceiro setor, especialmente Associações sem fins lucrativos.",
  },
  {
    id: 4,
    title: "Direito Bancário",
    subtitle: "Soluções jurídicas únicas para o seu negócio",
    description:
      "Análise e defesa em execuções bancárias, renegociação de dívidas e proteção contra práticas abusivas, com atendimento a consumidores e representação de bancos.",
  },
  {
    id: 5,
    title: "Atuação Ética",
    subtitle: "Nosso compromisso diário ",
    description: "Defesa jurídica aplicada com transparência e presteza.",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Fundo fixo com imagem */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/SAM_0753_alt.jpg')",
          filter: "grayscale(70%) brightness(0.6) contrast(1.1)",
        }}
      >
        {/* Overlay adicional para melhor legibilidade */}
        <div className="absolute inset-0 bg-black bg-opacity-35"></div>
      </div>

      {/* Conteúdo dos slides - apenas texto se move */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            index === currentSlide
              ? "translate-x-0"
              : index < currentSlide
              ? "-translate-x-full"
              : "translate-x-full"
          }`}
        >
          {/* Conteúdo do slide */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-5xl px-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight font-serif uppercase">
                {slide.title}
              </h1>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-light mb-6 text-white uppercase">
                {slide.subtitle}
              </h2>

              <p className="text-base md:text-lg lg:text-xl mb-10 text-white max-w-3xl mx-auto leading-relaxed">
                {slide.description}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Botões de navegação */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-accent-500 p-3 transition-all"
      >
        <Icon path={mdiChevronLeft} size={1.5} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-accent-500 p-3 transition-all"
      >
        <Icon path={mdiChevronRight} size={1.5} />
      </button>

      {/* Título da empresa absoluto centralizado */}
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 text-accent-500 font-bold text-xl z-20 text-center uppercase">
        Hofstatter, Ashton & Venancio Advocacia
      </div>

      {/* Botão Contate-nos absoluto centralizado */}
      <a
        href="/contato"
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-accent-500 hover:bg-accent-400 text-primary-900 px-8 py-4 font-semibold text-lg transition-all shadow-lg z-20"
      >
        Contate-nos
      </a>
    </div>
  );
}
