import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { RealtorSection } from "@/components/realtor-section"
import { DeveloperSection } from "@/components/developer-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import React from "react"
import { Check, X, Info, MessageCircle } from "lucide-react"
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip"
import WhatsAppIcon from "@/public/whatsapp.svg"

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

function PlanCard({ nombre, features, destacado, color }: any) {
  return (
    <div className={`flex flex-col`} style={{ backgroundColor: '#1A1A2E', borderRadius: '1.5rem', borderWidth: '4px', borderColor: destacado ? '#53BF9D' : '#3A3A5A', boxShadow: '0 10px 20px rgba(0,0,0,0.15)', padding: '2rem', width: '100%', maxWidth: '24rem', margin: '0 auto' }}> 
      <h3 className="text-2xl font-bold text-center" style={{ color: '#f4f6f8', letterSpacing: '0.1em', marginBottom: '1rem' }}>{nombre.toUpperCase()}</h3>
      <hr className="border-border-subtle mb-6" />
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
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        {/* Comparativa de Planes */}
        <section className="py-20 md:py-24 bg-secondary-bg text-light-text">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-10">
              {PLANES.map((plan, idx) => (
                <PlanCard key={plan.nombre} {...plan} />
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <a href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-[#53BF9D] text-black font-bold py-4 px-8 rounded-full text-xl shadow-lg hover:bg-[#3cae7d] transition-colors">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-7 h-7" />
                Contactarnos
              </a>
            </div>
          </div>
        </section>
        <RealtorSection />
        <DeveloperSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}
