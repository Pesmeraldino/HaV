"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Icon from "@mdi/react";
import {
  mdiMenu,
  mdiClose,
  mdiChevronDown,
  mdiGavel,
  mdiAccountGroup,
  mdiNewspaper,
  mdiCamera,
  mdiEmail,
  mdiInstagram,
} from "@mdi/js";

interface DropdownItem {
  label: string;
  href: string;
}

const areasDeAtuacao: DropdownItem[] = [
  { label: "Direito Empresarial", href: "/areas#direito-empresarial" },
  { label: "Direito Bancário", href: "/areas#direito-bancario" },
  { label: "Direito Imobiliário", href: "/areas#direito-imobiliario" },
  { label: "Direito Civil", href: "/areas#direito-civil" },
  { label: "Direito de Família", href: "/areas#direito-de-familia" },
  { label: "Direito Previdenciário", href: "/areas#direito-previdenciario" },
  { label: "Direito Digital", href: "/areas#direito-digital" },
  {
    label: "Revisão/Análise Contratual",
    href: "/areas#revisao-analise-contratual",
  },
  { label: "Conciliação", href: "/areas#conciliacao" },
  { label: "LGPD", href: "/areas#lgpd" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Padrão visível

  const isHomePage = pathname === "/";

  useEffect(() => {
    // Se não estiver na página principal, navbar sempre visível
    if (!isHomePage) {
      setIsVisible(true);
      return;
    }

    // Apenas na página principal: esconde/mostra baseado no scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Mostra a navbar após scrollar 100px (após o carousel)
      setIsVisible(scrollPosition > 100);
    };

    // Inicialmente escondida na homepage
    setIsVisible(false);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-200 shadow-elegant transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <div className="flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14">
              <img
                src="/assets/logo.png"
                alt="HA&V Advocacia"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-primary-900 font-serif uppercase">
                ADVOCACIA
              </span>
              <span className="text-xs text-neutral-600 -mt-1">
                E CONSULTORIA JURÍDICA
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Áreas de Atuação - Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-1 text-neutral-700 hover:text-primary-700 font-medium transition-colors py-2"
              >
                <Icon path={mdiGavel} size={0.8} />
                <span>Áreas de Atuação</span>
                <Icon
                  path={mdiChevronDown}
                  size={0.6}
                  className={`transform transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-2 w-64 bg-white shadow-elegant-lg border border-neutral-200 ${
                  isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                } transition-all duration-200 transform ${
                  isDropdownOpen ? "translateY-0" : "-translateY-2"
                } max-h-80 overflow-y-auto z-50`}
              >
                <div className="p-2">
                  {areasDeAtuacao.map((area, index) => (
                    <a
                      key={index}
                      href={area.href}
                      className="block px-4 py-3 text-neutral-700 hover:text-primary-700 hover:bg-primary-50 transition-colors"
                    >
                      {area.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Outros links do menu */}
            <a
              href="/equipe"
              className="flex items-center space-x-1 text-neutral-700 hover:text-primary-700 font-medium transition-colors"
            >
              <Icon path={mdiAccountGroup} size={0.8} />
              <span>Equipe</span>
            </a>

            <a
              href="/midias"
              className="flex items-center space-x-1 text-neutral-700 hover:text-primary-700 font-medium transition-colors"
            >
              <Icon path={mdiCamera} size={0.8} />
              <span>Mídias</span>
            </a>

            <a
              href="/contato"
              className="flex items-center space-x-2 bg-gradient-accent text-primary-900 px-6 py-2 font-semibold hover:shadow-lg transition-all hover:scale-105"
            >
              <Icon path={mdiEmail} size={0.8} />
              <span>Contato</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-neutral-700 hover:text-primary-700 transition-colors"
          >
            <Icon path={isMenuOpen ? mdiClose : mdiMenu} size={1.2} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <div className="py-4 space-y-2 border-t border-neutral-200">
            {/* Mobile Áreas de Atuação */}
            <div>
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-between w-full px-4 py-3 text-neutral-700 hover:text-primary-700 font-medium"
              >
                <div className="flex items-center space-x-2">
                  <Icon path={mdiGavel} size={0.8} />
                  <span>Áreas de Atuação</span>
                </div>
                <Icon
                  path={mdiChevronDown}
                  size={0.6}
                  className={`transform transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div className="pl-8 space-y-1 max-h-60 overflow-y-auto">
                  {areasDeAtuacao.map((area, index) => (
                    <a
                      key={index}
                      href={area.href}
                      className="block px-4 py-2 text-neutral-600 hover:text-primary-700 transition-colors"
                    >
                      {area.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="/equipe"
              className="flex items-center space-x-2 px-4 py-3 text-neutral-700 hover:text-primary-700 font-medium"
            >
              <Icon path={mdiAccountGroup} size={0.8} />
              <span>Equipe</span>
            </a>

            <a
              href="/midias"
              className="flex items-center space-x-2 px-4 py-3 text-neutral-700 hover:text-primary-700 font-medium"
            >
              <Icon path={mdiCamera} size={0.8} />
              <span>Mídias</span>
            </a>

            <a
              href="/contato"
              className="flex items-center space-x-2 mx-4 mt-4 bg-gradient-accent text-primary-900 px-6 py-3 font-semibold justify-center"
            >
              <Icon path={mdiEmail} size={0.8} />
              <span>Contato</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
