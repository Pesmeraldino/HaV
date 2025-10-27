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
      <section className="py-20 bg-primary-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 font-serif uppercase">
            Centro de <span className="text-accent-400">Mídias</span>
          </h1>
          <p className="text-xl text-neutral-200 max-w-3xl mx-auto">
            Acesse nosso conteúdo em diferentes plataformas: Instagram, galerias
            de fotos e vídeos
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
                className="inline align-middle mr-4 text-purple-600"
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
                  className="inline align-middle mr-3 text-primary-600"
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

          <div>
            <a
              href="https://instagram.com/havadvogadas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 font-semibold hover:shadow-lg transition-all hover:scale-105"
            >
              <Icon path={mdiInstagram} size={0.8} />
              Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
