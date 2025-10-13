"use client";

import { useState, useEffect } from "react";
import Icon from "@mdi/react";
import {
  mdiChevronLeft,
  mdiChevronRight,
  mdiMapMarker,
  mdiCalendar,
} from "@mdi/js";

interface Event {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  location: string;
  category: string;
}

// Dados de exemplo para os eventos em destaque
const featuredEvents: Event[] = [
  {
    id: 1,
    title: "Festival de Verão 2025",
    description:
      "O maior festival de música eletrônica da cidade com os melhores DJs nacionais e internacionais",
    image: "bg-gradient-to-br from-primary via-secondary to-accent",
    date: "15 de Dezembro",
    location: "Centro de Eventos",
    category: "Festa",
  },
  {
    id: 2,
    title: "Noite dos Bares",
    description:
      "Tour pelos melhores bares da cidade com drinks especiais e música ao vivo",
    image: "bg-gradient-to-br from-accent via-gold to-cream",
    date: "20 de Dezembro",
    location: "Centro Histórico",
    category: "Bares",
  },
  {
    id: 3,
    title: "Gaming Convention",
    description:
      "O maior evento geek da região com campeonatos, cosplay e lançamentos exclusivos",
    image: "bg-gradient-to-br from-secondary via-primary to-gold",
    date: "28 de Dezembro",
    location: "Centro de Convenções",
    category: "Geek",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredEvents.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredEvents.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + featuredEvents.length) % featuredEvents.length
    );
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {featuredEvents.map((event, index) => (
        <div
          key={event.id}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentSlide
              ? "translate-x-0"
              : index < currentSlide
              ? "-translate-x-full"
              : "translate-x-full"
          }`}
        >
          <div className={`h-full w-full ${event.image} relative`}>
            {/* Overlay escuro para melhor legibilidade */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            {/* Conteúdo do slide */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-6">
                <div className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-medium mb-4">
                  {event.category}
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  {event.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
                  {event.description}
                </p>

                <div className="flex items-center justify-center gap-6 mb-8 text-lg">
                  <div className="flex items-center gap-2">
                    <Icon path={mdiCalendar} size={1} />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon path={mdiMapMarker} size={1} />
                    <span>{event.location}</span>
                  </div>
                </div>

                <button className="bg-gradient-accent text-primary px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg">
                  Comprar Ingresso
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Botões de navegação */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all"
      >
        <Icon path={mdiChevronLeft} size={1.5} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all"
      >
        <Icon path={mdiChevronRight} size={1.5} />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {featuredEvents.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 right-8 text-white text-sm opacity-70 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span>Role para baixo</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
