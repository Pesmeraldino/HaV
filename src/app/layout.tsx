import type { Metadata } from "next";
import { Cormorant_SC, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";

const cormorantSC = Cormorant_SC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant-sc",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant-garamond",
});

export const metadata: Metadata = {
  title: "HA&V - Hofstatter Ashton & Venancio Advocacia Estratégica",
  description:
    "Escritório de advocacia especializado em soluções jurídicas estratégicas. Hofstatter Ashton & Venancio - Excelência em advocacia empresarial e consultoria jurídica.",
  keywords:
    "advocacia, advogados, consultoria jurídica, direito empresarial, HA&V, Hofstatter Ashton Venancio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorantSC.variable} ${cormorantGaramond.variable}`}
    >
      <body
        className={`${cormorantGaramond.className} antialiased bg-neutral-50`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <footer className="bg-neutral-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6 items-start">
              <div>
                <h3 className="text-lg font-bold mb-2 text-accent-400">
                  HAV Advocacia
                </h3>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  Hofstatter Ashton & Venancio Advocacia
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-sm">Contato</h4>
                <div className="space-y-1 text-neutral-300 text-sm">
                  <p>📧 hav.advocacia@gmail.com</p>
                  <p>📍 Florianópolis / SC</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-sm">Telefones</h4>
                <div className="space-y-1 text-neutral-300 text-sm">
                  <p>📱 Dra. Beatriz: (48)</p>
                  <p>📱 Dra. Carla: (48)</p>
                  <p>📱 Dra. Ingrid: (48)</p>
                </div>
              </div>
            </div>
            <div className="border-t border-neutral-700 mt-6 pt-4 text-center text-neutral-400 text-xs">
              <p>&copy; 2025 HAV Advocacia. Todos os direitos reservados.</p>
              <p>
                Desenvolvido por{" "}
                <a
                  href="https://www.linkedin.com/in/pedro-esmeraldino-922b82214/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-400 hover:text-accent-300 transition-colors underline"
                >
                  Pedro Esmeraldino
                </a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
