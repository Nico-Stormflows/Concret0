import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores personalizados basados en tu paleta original
        "primary-bg": "#1A1A2E",
        "secondary-bg": "#16213E",
        "light-text": "#E0E0E0",
        "muted-text": "#B0B0B0",
        "heading-highlight": "#53BF9D",
        "button-gradient-start": "#0F3460",
        "button-gradient-end": "#16213E",
        "card-bg-light": "#FFFFFF",
        "card-bg-dark": "#2A2A4A",
        "border-subtle": "#3A3A5A",
        "tab-active-border": "#53BF9D",
        "tab-active-bg": "#2A2A4A",
        "tab-inactive-text": "#B0B0B0",
        "form-input-border": "#4A4A6A",
        "form-input-text": "#E0E0E0",
        "form-placeholder": "#B0B0B0",
        // Colores adicionales encontrados en el HTML original que no estaban en :root
        "primary-dark": "#1A1A2E", // Asumiendo que es el mismo que primary-bg
        "secondary-dark": "#16213E", // Asumiendo que es el mismo que secondary-bg
        "success-light": "#D4EDDA",
        "accent-main": "#53BF9D",
      },
      fontFamily: {
        heading: ["var(--font-bodoni-moda)"],
        sans: ["var(--font-ibm-plex-sans)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
