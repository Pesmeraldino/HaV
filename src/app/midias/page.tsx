"use client";

import { useState, useEffect } from "react";
import Icon from "@mdi/react";
import {
  mdiInstagram,
  mdiHeart,
  mdiComment,
  mdiShare,
  mdiPlay,
  mdiCalendar,
  mdiAccountCircle,
  mdiOpenInNew,
  mdiCamera,
  mdiVideo,
  mdiImageMultiple,
  mdiYoutube,
} from "@mdi/js";
import { instagramPosts, getDuplicatedPosts } from "@/data/midias";

export default function MidiasPage() {
  // Duplicar posts para criar loop infinito
  const duplicatedPosts = getDuplicatedPosts();

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 bg-primary-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 font-serif uppercase">
            Centro de <span className="text-accent-400">Mídias</span>
          </h1>
          <p className="text-xl text-neutral-200 max-w-3xl mx-auto">
            Acesse nosso conteúdo em diferentes plataformas: Instagram, galerias
            de fotos, vídeos educativos e atualizações sobre direitos e
            legislação.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="https://instagram.com/havadvogadas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 font-semibold hover:shadow-lg transition-all hover:scale-105"
            >
              <Icon path={mdiInstagram} size={0.8} />
              Instagram
            </a>
            <a
              href="https://youtube.com/@havadvogadas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 font-semibold hover:shadow-lg transition-all hover:scale-105"
            >
              <Icon path={mdiYoutube} size={0.8} />
              YouTube
            </a>
          </div>
        </div>
      </section>

      {/* Feed do Instagram */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-800 mb-4 font-serif uppercase">
              <Icon
                path={mdiInstagram}
                size={1.2}
                className="inline mr-3 text-purple-600"
              />
              Posts do Instagram
            </h2>
          </div>

          {/* Carrossel contínuo de embeds do Instagram */}
          <div className="relative overflow-hidden py-8">
            <div
              className="flex gap-6 px-4"
              style={{
                animation: `scroll ${
                  instagramPosts.length * 10
                }s linear infinite`,
                width: `${duplicatedPosts.length * 420 + 32}px`,
              }}
            >
              {duplicatedPosts.map((post, index) => (
                <div
                  key={`${post.id}-${index}`}
                  className="bg-white shadow-lg overflow-hidden flex-shrink-0"
                  style={{ width: "400px" }}
                >
                  <iframe
                    src={`https://www.instagram.com/p/${post.postId}/embed`}
                    width="100%"
                    height="650"
                    frameBorder="0"
                    scrolling="no"
                    className="w-full"
                    title={post.title || `Instagram Post ${post.id}`}
                  ></iframe>
                </div>
              ))}
            </div>
          </div>

          <style jsx>{`
            @keyframes scroll {
              0% {
                transform: translateX(16px);
              }
              100% {
                transform: translateX(-${instagramPosts.length * 420 + 16}px);
              }
            }
          `}</style>
        </div>
      </section>

      {/* Galeria e Vídeos */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Galeria de Fotos */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary-800 font-serif uppercase mb-4">
                <Icon
                  path={mdiImageMultiple}
                  size={1.2}
                  className="inline mr-3 text-primary-600"
                />
                Galeria de Fotos
              </h2>
              <p className="text-lg text-neutral-600">
                Momentos importantes do nosso escritório e eventos jurídicos
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {/* Placeholder para fotos */}
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-primary-100 to-accent-100 aspect-square flex items-center justify-center hover:shadow-lg transition-all cursor-pointer group"
                >
                  <div className="text-center">
                    <Icon
                      path={mdiCamera}
                      size={2}
                      className="text-primary-400 group-hover:text-primary-600 transition-colors mb-2"
                    />
                    <p className="text-primary-600 text-sm font-medium">
                      Foto {i}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Seção de Vídeos */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary-800 font-serif uppercase mb-4">
                <Icon
                  path={mdiVideo}
                  size={1.2}
                  className="inline mr-3 text-red-600"
                />
                Vídeos Educativos
              </h2>
              <p className="text-lg text-neutral-600">
                Conteúdo educativo sobre direitos e legislação
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Placeholder para vídeos */}
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-white shadow-lg hover:shadow-xl transition-all overflow-hidden group cursor-pointer"
                >
                  <div className="relative aspect-video bg-gradient-to-br from-red-100 to-primary-100 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                    <Icon
                      path={mdiPlay}
                      size={3}
                      className="text-red-600 relative z-10 group-hover:scale-110 transition-transform"
                    />
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 text-sm">
                      5:42
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-primary-800 mb-2 group-hover:text-primary-600 transition-colors">
                      Direitos do Consumidor - Parte {i}
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                      Entenda seus direitos como consumidor e saiba quando
                      buscar ajuda jurídica especializada.
                    </p>
                    <div className="flex items-center justify-between text-xs text-neutral-500">
                      <span>2 dias atrás</span>
                      <span>1.2k visualizações</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Embed do YouTube */}
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold text-primary-800 mb-6">
                Canal no YouTube
              </h3>
              <div className="max-w-4xl mx-auto">
                <div className="relative aspect-video bg-neutral-800 overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Redes Sociais */}
      <section className="py-20 bg-primary-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif uppercase">
            Siga-nos nas Redes Sociais
          </h2>
          <p className="text-xl text-neutral-300 mb-8">
            Mantenha-se atualizado com nosso conteúdo jurídico em todas as
            plataformas
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 p-6 text-center hover:bg-white/20 transition-colors">
              <Icon
                path={mdiInstagram}
                size={3}
                className="text-purple-400 mx-auto mb-4"
              />
              <h3 className="text-accent-400 font-bold mb-2">Instagram</h3>
              <p className="text-neutral-300 text-sm mb-4">
                Posts diários com dicas jurídicas e atualizações
              </p>
              <a
                href="https://instagram.com/havadvogadas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 font-semibold"
              >
                @havadvogadas
              </a>
            </div>

            <div className="bg-white/10 p-6 text-center hover:bg-white/20 transition-colors">
              <Icon
                path={mdiYoutube}
                size={3}
                className="text-red-400 mx-auto mb-4"
              />
              <h3 className="text-accent-400 font-bold mb-2">YouTube</h3>
              <p className="text-neutral-300 text-sm mb-4">
                Vídeos educativos e webinars sobre direitos
              </p>
              <a
                href="https://youtube.com/@havadvogadas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-300 font-semibold"
              >
                HA&V Advogadas
              </a>
            </div>

            <div className="bg-white/10 p-6 text-center hover:bg-white/20 transition-colors">
              <Icon
                path={mdiCamera}
                size={3}
                className="text-accent-400 mx-auto mb-4"
              />
              <h3 className="text-accent-400 font-bold mb-2">Galeria</h3>
              <p className="text-neutral-300 text-sm mb-4">
                Fotos de eventos e momentos importantes
              </p>
              <span className="text-accent-400 font-semibold">
                Disponível no site
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
