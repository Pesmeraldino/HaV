/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cores primárias do escritório HA&V
        primary: {
          50: "#f0f2ff",
          100: "#e0e5ff",
          200: "#c2ccff",
          300: "#a3b2ff",
          400: "#8599ff",
          500: "#667fff",
          600: "#4766cc",
          700: "#284c99",
          800: "#0a3366",
          900: "#020c45", // Azul principal atualizado
          950: "#010630",
        },
        accent: {
          50: "#fffbeb",
          100: "#fff7d6",
          200: "#ffeeac",
          300: "#ffe683",
          400: "#ffdd59",
          500: "#c4a62e", // Amarelo principal atualizado
          600: "#cca819",
          700: "#997e13",
          800: "#66540c",
          900: "#332a06",
          950: "#1a1503",
        },
        // Cores neutras profissionais
        neutral: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
      },
      fontFamily: {
        sans: ["Cormorant Garamond", "serif"], // Fonte secundária (padrão para textos)
        serif: ["Cormorant SC", "serif"], // Fonte principal (títulos e destaques)
        "cormorant-sc": ["Cormorant SC", "serif"],
        "cormorant-garamond": ["Cormorant Garamond", "serif"],
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(135deg, var(--tw-colors-primary-600) 0%, var(--tw-colors-primary-800) 100%)",
        "gradient-accent":
          "linear-gradient(135deg, var(--tw-colors-accent-400) 0%, var(--tw-colors-accent-600) 100%)",
        "gradient-hero":
          "linear-gradient(135deg, var(--tw-colors-primary-900) 0%, var(--tw-colors-primary-700) 50%, var(--tw-colors-accent-600) 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "bounce-slow": "bounce 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      boxShadow: {
        elegant: "0 10px 40px -15px rgba(0, 0, 0, 0.2)",
        "elegant-lg": "0 20px 60px -15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
