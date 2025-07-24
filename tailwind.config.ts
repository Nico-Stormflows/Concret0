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
        // Paleta principal dark glass modern
        'bg-main': '#1a1a2e', // fondo principal
        'bg-alt': '#16213e', // secciones alternas, cards, glass
        'bg-panel': '#2a2a4a', // paneles, overlays, glass
        'text-main': '#f4f6f8', // texto principal
        'text-muted': '#b0b0b0', // texto secundario
        'accent': '#53BF9D', // acento principal, botones, links activos
        'accent-alt': '#53a2bf', // acento alternativo, hover
        'accent-cyan': '#00CFFF', // detalles, iconos
        'accent-warn': '#ffb347', // naranja suave, alertas
        // Glassmorphism
        'glass-bg': 'rgba(26,26,46,0.7)',
        'glass-border': 'rgba(255,255,255,0.08)',
        'glass-shadow': '0 8px 32px 0 rgba(31,38,135,0.37)',
      },
      fontFamily: {
        heading: ['IBM Plex Sans', 'sans-serif'],
        sans: ['IBM Plex Sans', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31,38,135,0.37)',
        'glass-md': '0 4px 16px 0 rgba(31,38,135,0.25)',
      },
      backgroundImage: {
        'btn-gradient': 'linear-gradient(90deg, #53BF9D 0%, #53a2bf 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(26,26,46,0.7) 60%, rgba(83,191,157,0.08) 100%)',
      },
      borderRadius: {
        glass: '1rem',
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
