"use client"

import { Check, X, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const PLANES = [
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

const TOOLTIPS = {
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

function PlanCard({ nombre, features, destacado }: any) {
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
      
      <h3 className="text-2xl font-bold text-center text-[#1F1F1F] mb-6">
        {nombre}
      </h3>
      
      <hr className="border-[#BEBEBE] mb-6" />
      
      <ul className="space-y-3">
        {features.map((f: any, i: number) => (
          <li key={i} className="flex items-center gap-3">
                         {f.info ? (
               <TooltipProvider delayDuration={0}>
                 <Tooltip>
                   <TooltipTrigger asChild>
                     <Info className="text-[#C1DEE8] cursor-pointer" size={16} />
                   </TooltipTrigger>
                   <TooltipContent className="bg-[#1F1F1F] text-white border-[#C1DEE8]">
                     {TOOLTIPS[f.label as keyof typeof TOOLTIPS]}
                   </TooltipContent>
                 </Tooltip>
               </TooltipProvider>
             ) : (
               <div className="w-4" />
             )}
            
            <span className={`flex-1 ${f.ok ? "text-[#1F1F1F]" : "text-[#BEBEBE]"}`}>
              {f.label}
            </span>
            
            {f.ok ? (
              <Check className="text-[#C1DEE8]" size={20} />
            ) : (
              <X className="text-[#FF3B3B]" size={20} />
            )}
          </li>
        ))}
      </ul>
      
             <div className="mt-8">
         <Button className="w-full bg-white border-[#BEBEBE] text-[#1F1F1F] hover:bg-white hover:shadow-lg font-semibold px-6 py-2 rounded-lg transition-all duration-200">
           Solicitar Demo
         </Button>
       </div>
    </div>
  )
}

export function PricingSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F1F1F]">
            Planes a tu medida
          </h2>
          <p className="mt-4 text-xl text-[#1F1F1F] max-w-3xl mx-auto">
            Elegí el plan que mejor se adapte a las necesidades de tu empresa
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {PLANES.map((plan) => (
            <PlanCard key={plan.nombre} {...plan} />
          ))}
        </div>
        
        
      </div>
    </section>
  )
}
