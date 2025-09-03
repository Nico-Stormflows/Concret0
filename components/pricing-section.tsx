"use client"

import { Check, X, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface Feature {
  label: string
  ok: boolean
  info?: boolean
}

interface Plan {
  nombre: string
  destacado: boolean
  features: Feature[]
}

interface PlanCardProps {
  nombre: string
  features: Feature[]
  destacado: boolean
}

const PLANES: Plan[] = [
  {
    nombre: "Estandar",
    destacado: false,
    features: [
      { label: "Módulos básicos", ok: true, info: true },
      { label: "Filtros avanzados", ok: true, info: true },
      { label: "Generar reserva online", ok: false },
      { label: "Dashboard de ventas", ok: false },
      { label: "Proyección de ventas", ok: false },
      { label: "Información de Ventas", ok: false },
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
    features: [
      { label: "Módulos básicos", ok: true },
      { label: "Filtros avanzados", ok: true },
      { label: "Generar reserva online", ok: true, info: true },
      { label: "Dashboard de ventas", ok: true, info: true },
      { label: "Proyección de ventas", ok: true, info: true },
      { label: "Información de Ventas", ok: true, info: true },
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
    features: [
      { label: "Módulos básicos", ok: true },
      { label: "Filtros avanzados", ok: true },
      { label: "Generar reserva online", ok: true },
      { label: "Dashboard de ventas", ok: true },
      { label: "Proyección de ventas", ok: true },
      { label: "Información de Ventas", ok: true },
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

const TOOLTIPS: Record<string, string> = {
  "Módulos básicos": "Incluye las funciones esenciales para la gestión inmobiliaria.",
  "Filtros avanzados": "Filtra unidades por precio, orientación y otras características clave.",
  "Generar reserva online": "Permite a los clientes reservar unidades en línea de forma instantánea.",
  "Dashboard de ventas": "Visualiza métricas y gráficas personalizadas para tomar decisiones inteligentes.",
  "Proyección de ventas": "Proyecta ventas futuras y analiza tendencias.",
  "Información de Ventas": "Accede a reportes detallados de ventas y transacciones.",
  "Bimonetario": "Gestiona operaciones en diferentes monedas.",
  "Perfiles": "Crea y administra diferentes perfiles de usuario.",
  "Encriptado de datos": "Protege la información sensible con cifrado avanzado.",
  "Restricción de dirección IP": "Limita el acceso a la plataforma desde ciertas direcciones IP.",
}

function PlanCard({ nombre, features, destacado }: PlanCardProps) {
  return (
    <div className={`bg-white rounded-2xl shadow-lg border-2 p-8 ${
      destacado 
        ? "border-[#C1DEE8] relative" 
        : "border-[#BEBEBE]"
    }`}>
      {destacado && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-[#C1DEE8] text-[#1F1F1F] px-4 py-1 rounded-full text-sm font-semibold">
            Más Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-[#1F1F1F] mb-2">{nombre}</h3>
        
      </div>

      <div className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {feature.ok ? (
                <Check className="w-5 h-5 text-green-600" />
              ) : (
                <X className="w-5 h-5 text-red-600" />
              )}
              <span className={`text-sm ${feature.ok ? 'text-[#1F1F1F]' : 'text-[#6B7280]'}`}>
                {feature.label}
              </span>
            </div>
            
            {feature.info && (
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="bg-[#C1DEE8] text-[#1F1F1F] w-5 h-5 rounded-full flex items-center justify-center cursor-help">
                      <Info className="w-3 h-3" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-white text-[#1F1F1F] border border-[#BEBEBE] shadow-md">
                    <p className="max-w-xs">{TOOLTIPS[feature.label]}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
        ))}
      </div>


    </div>
  )
}

export function PricingSection() {
  return (
    <section id="planes" className="py-20 bg-[#FEFEFF]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F1F1F] mb-4">
            Planes a tu medida
          </h2>
          <p className="text-xl text-[#1F1F1F] max-w-2xl mx-auto">
            Elegí el plan que mejor se adapte a tus necesidades y comienza a potenciar tus ventas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {PLANES.map((plan, index) => (
            <PlanCard
              key={index}
              nombre={plan.nombre}
              features={plan.features}
              destacado={plan.destacado}
            />
          ))}
        </div>

        {/* Botón único centrado */}
        <div className="text-center">
          <Button asChild className="bg-[#1F1F1F] text-white hover:bg-black hover:shadow-lg font-semibold px-6 py-2 rounded-lg transition-all duration-200">
            <a href="#contacto">Obtener Demo</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
