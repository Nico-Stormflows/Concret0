"use client"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { RealtorSection } from "@/components/realtor-section"
import { DeveloperSection } from "@/components/developer-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import React, { useEffect, useRef } from "react"
import { Check, X, Info, MessageCircle } from "lucide-react"
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip"
import WhatsAppIcon from "@/public/whatsapp.svg"
import Image from "next/image"

// MATRIZ REAL SEGÚN LA WEB OFICIAL
const PLANES = [
  {
    nombre: "Estandar",
    destacado: false,
    color: "border-black",
    features: [
      { label: "Módulos básicos", ok: true, info: true },
      { label: "Filtros avanzados", ok: true, info: true },
      { label: "Generar reserva online", ok: false },
      { label: "Dashboard de ventas", ok: false },
      { label: "Proyección de ventas", ok: false },
      { label: "Informacion de Ventas", ok: false },
      { label: "Bimonetario", ok: false },
      { label: "Perfiles", ok: false },
      { label: "Encriptado de datos", ok: false },
      { label: "Restricción de dirección IP", ok: false },
      { label: "Multi proyecto", ok: false },
      { label: "Biblioteca de documentos", ok: false },
      { label: "Actividades", ok: false },
      { label: "Notificación a los clientes", ok: false },
    ],
  },
  {
    nombre: "Profesional",
    destacado: false,
    color: "border-black",
    features: [
      { label: "Módulos básicos", ok: true },
      { label: "Filtros avanzados", ok: true },
      { label: "Generar reserva online", ok: true, info: true },
      { label: "Dashboard de ventas", ok: true, info: true },
      { label: "Proyección de ventas", ok: true, info: true },
      { label: "Informacion de Ventas", ok: true, info: true },
      { label: "Bimonetario", ok: true, info: true },
      { label: "Perfiles", ok: true, info: true },
      { label: "Encriptado de datos", ok: false, info: true },
      { label: "Restricción de dirección IP", ok: false, info: true },
      { label: "Multi proyecto", ok: true },
      { label: "Biblioteca de documentos", ok: true },
      { label: "Actividades", ok: true },
      { label: "Notificación a los clientes", ok: true },
    ],
  },
  {
    nombre: "Empresa",
    destacado: true,
    color: "border-[#53BF9D]",
    features: [
      { label: "Módulos básicos", ok: true },
      { label: "Filtros avanzados", ok: true },
      { label: "Generar reserva online", ok: true },
      { label: "Dashboard de ventas", ok: true },
      { label: "Proyección de ventas", ok: true },
      { label: "Informacion de Ventas", ok: true },
      { label: "Bimonetario", ok: true },
      { label: "Perfiles", ok: true },
      { label: "Encriptado de datos", ok: true, info: true },
      { label: "Restricción de dirección IP", ok: true, info: true },
      { label: "Multi proyecto", ok: true },
      { label: "Biblioteca de documentos", ok: true },
      { label: "Actividades", ok: true },
      { label: "Notificación a los clientes", ok: true },
    ],
  },
]

const TOOLTIPS = {
  "Módulos básicos": "Incluye las funciones esenciales para la gestión inmobiliaria.",
  "Filtros avanzados": "Filtra unidades por precio, orientación y otras características clave.",
  "Generar reserva online": "Permite a los clientes reservar unidades en línea de forma instantánea.",
  "Dashboard de ventas": "Visualiza métricas y gráficas personalizadas para tomar decisiones inteligentes.",
  "Proyección de ventas": "Proyecta ventas futuras y analiza tendencias.",
  "Informacion de Ventas": "Accede a reportes detallados de ventas y transacciones.",
  "Bimonetario": "Gestiona operaciones en diferentes monedas.",
  "Perfiles": "Crea y administra diferentes perfiles de usuario.",
  "Encriptado de datos": "Protege la información sensible con cifrado avanzado.",
  "Restricción de dirección IP": "Limita el acceso a la plataforma desde ciertas direcciones IP.",
}

// Componente de fondo animado glassmorphism
function AnimatedGlassBackground() {
  // Usar un pseudo-elemento ::before para el degradado con blur y overlay de ruido
  return (
    <>
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          // El degradado se aplica en ::before vía CSS-in-JS
        }}
      >
        <style>{`
          .bg-dithered-gradient::before {
            content: '';
            position: absolute;
            inset: 0;
            z-index: 0;
            pointer-events: none;
            background: radial-gradient(circle at 30% 40%, #53BF9D33 0%, #53BF9D22 20%, #53BF9D11 35%, #1a1a2e 60%, #1a1a2e 100%);
            filter: blur(1.2px);
            opacity: 0.95;
          }
          .bg-dithered-gradient::after {
            content: '';
            position: absolute;
            inset: 0;
            z-index: 1;
            pointer-events: none;
            background-image: url('/noise.png');
            opacity: 0.10;
            mix-blend-mode: overlay;
          }
        `}</style>
        <div className="bg-dithered-gradient w-full h-full absolute inset-0" />
      </div>
    </>
  )
}

// Tarjeta glass reutilizable
function GlassCard({ children, className = "", style = {} }: any) {
  return (
    <div
      className={`glass shadow-glass p-8 rounded-glass ${className}`}
      style={style}
    >
      {children}
    </div>
  )
}

function PlanCard({ nombre, features, destacado, color }: any) {
  return (
    <GlassCard className="flex flex-col" style={{ borderWidth: '4px', borderColor: destacado ? '#53BF9D' : 'rgba(255,255,255,0.08)', maxWidth: '24rem', margin: '0 auto' }}>
      <h3 className="text-2xl font-bold text-center" style={{ color: '#f4f6f8', letterSpacing: '0.1em', marginBottom: '1rem' }}>{nombre.toUpperCase()}</h3>
      <hr className="border-glass-border mb-6" />
      <ul className="flex-1 space-y-2">
        {features.map((f: any, i: number) => (
          <li key={i} className={`flex items-center gap-2 text-lg`} style={{ color: f.ok ? '#f4f6f8' : '#B0B0B0' }}>
            {f.info ? (
              <TooltipProvider delayDuration={0} skipDelayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="cursor-pointer" style={{ color: '#53BF9D' }}><Info size={18} /></span>
                  </TooltipTrigger>
                  <TooltipContent className="border border-[#53BF9D]" style={{ backgroundColor: '#1A1A2E', color: '#f4f6f8' }}>
                    {TOOLTIPS[f.label as keyof typeof TOOLTIPS]}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ) : null}
            <span className={f.ok ? "font-semibold" : ""} style={{ color: f.ok ? '#f4f6f8' : '#B0B0B0' }}>{f.label}</span>
            {f.ok ? (
              <Check className="ml-auto" size={22} style={{ color: '#53BF9D' }} />
            ) : (
              <X className="ml-auto" size={22} style={{ color: '#FF3B3B' }} />
            )}
          </li>
        ))}
      </ul>
    </GlassCard>
  )
}

// Carrousel simple para la sección "Una plataforma integral"
function CarouselSection() {
  const images = [
    ...Array(8).fill(0).map((_, i) => `/0${i+1} carrousel.jpg`)
  ];
  const [current, setCurrent] = React.useState(0);
  const goTo = (idx: number) => setCurrent((idx + images.length) % images.length);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <section className="py-20 md:py-24 relative overflow-hidden text-text-main z-10">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="glass w-full h-full" style={{background: 'var(--glass-gradient)'}} />
      </div>
      <div className="container mx-auto px-6 flex flex-col items-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-text-main text-center mb-4">Una plataforma integral</h2>
        <p className="mt-4 text-xl text-text-muted max-w-3xl mx-auto text-center mb-8 md:whitespace-nowrap">
          Un único sitio para llevar el control de todos los proyectos, de punta a punta del proceso
        </p>
        <div className="glass p-6 rounded-2xl shadow-glass border-2 border-glass-border relative max-w-3xl w-full">
          <div className="glass rounded-xl w-full aspect-video overflow-hidden relative">
            {images.map((src, idx) => (
              <Image
                key={src}
                src={src}
                alt={`Carrousel ${idx+1}`}
                fill
                className={`object-cover transition-opacity duration-700 ${idx === current ? 'opacity-100' : 'opacity-0'}`}
                sizes="(max-width: 768px) 100vw, 768px"
                priority={idx === 0}
              />
            ))}
            {/* Flechas */}
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-bg-panel/80 hover:bg-accent/80 text-text-main rounded-full p-2 shadow-glass border border-glass-border z-10"
              onClick={() => goTo(current - 1)}
              aria-label="Anterior"
              type="button"
            >
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-bg-panel/80 hover:bg-accent/80 text-text-main rounded-full p-2 shadow-glass border border-glass-border z-10"
              onClick={() => goTo(current + 1)}
              aria-label="Siguiente"
              type="button"
            >
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-3 h-3 rounded-full ${idx === current ? 'bg-accent' : 'bg-text-muted/40'}`}
                  onClick={() => setCurrent(idx)}
                  aria-label={`Ir a imagen ${idx+1}`}
                  type="button"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <AnimatedGlassBackground />
      <Header />
      <main>
        <HeroSection />
        <RealtorSection />
        <DeveloperSection />
        <CarouselSection />
        {/* Comparativa de Planes */}
        <section className="py-20 md:py-24 bg-bg-main text-text-main relative z-10">
          <div className="container mx-auto px-6 flex flex-col h-full">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-text-main">
                Planes a tu medida
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-10 mb-16">
              {PLANES.map((plan, idx) => (
                <PlanCard key={plan.nombre} {...plan} />
              ))}
            </div>
            <div className="flex justify-center mt-auto mb-4">
              <a href="#contacto" className="flex items-center justify-center bg-accent text-black font-bold py-4 px-8 rounded-full text-xl shadow-lg hover:bg-accent-alt transition-colors">
                Contactarnos
              </a>
            </div>
          </div>
        </section>
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}
