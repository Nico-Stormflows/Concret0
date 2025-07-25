"use client"

import { useState } from "react"
import Image from "next/image"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function RealtorSection() {
  const [activeTab, setActiveTab] = useState("realtor-1")

  return (
    <section id="section-inmobiliaria" className="py-12 md:py-16 bg-bg-main text-text-main relative scroll-mt-20">
      {/* Si hay fondo decorativo, debe ir aquí con -z-10 */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-text-main">
            Herramientas para <span className="text-accent">potenciar las ventas</span>
          </h2>
          <p className="mt-4 text-xl text-text-muted max-w-3xl mx-auto md:whitespace-nowrap">
            Te damos todo lo que necesitás para que te luzcas con tus clientes y vendas más rápido.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2">
            <div className="flex flex-col sm:flex-row border-b border-glass-border mb-8">
              <Button
                variant="ghost"
                onClick={() => setActiveTab("realtor-1")}
                className={`text-lg font-semibold py-4 px-6 border-b-2 w-full text-left rounded-none ${activeTab === "realtor-1" ? "tab-active" : "tab-inactive"}`}
              >
                Presentación
              </Button>
              <Button
                variant="ghost"
                onClick={() => setActiveTab("realtor-2")}
                className={`text-lg font-semibold py-4 px-6 border-b-2 w-full text-left rounded-none ${activeTab === "realtor-2" ? "tab-active" : "tab-inactive"}`}
              >
                Reservas en Vivo
              </Button>
              <Button
                variant="ghost"
                onClick={() => setActiveTab("realtor-3")}
                className={`text-lg font-semibold py-4 px-6 border-b-2 w-full text-left rounded-none ${activeTab === "realtor-3" ? "tab-active" : "tab-inactive"}`}
              >
                Gestión Centralizada
              </Button>
            </div>
            <div id="realtor-tab-content" className="min-h-[260px]">
              {activeTab === "realtor-1" && (
                <div id="realtor-1" className="realtor-content">
                  <h3 className="text-3xl font-bold text-text-main mb-4">Presentá proyectos como nunca antes</h3>
                  <p className="text-xl text-text-muted mb-4">
                    Mostrá los edificios y unidades con renders de alta calidad y recorridos 3D. Tus clientes podrán visualizar las unidades y sus detalles para tomar decisiones más rápido.
                  </p>
                  <ul className="text-lg text-text-muted space-y-2">
                    <li className="flex items-center">
                      <Check className="text-accent mr-3 text-2xl" />
                      Disponibilidad de unidades en tiempo real.
                    </li>
                    <li className="flex items-center">
                      <Check className="text-accent mr-3 text-2xl" />
                      Navegación por los emprendimientos, galerías de fotos y planos actualizados
                    </li>
                    <li className="flex items-center">
                      <Check className="text-accent mr-3 text-2xl" />
                      Interfaz profesional para usar frente a tus clientes.
                    </li>
                  </ul>
                </div>
              )}
              {activeTab === "realtor-2" && (
                <div id="realtor-2" className="realtor-content">
                  <h3 className="text-3xl font-bold text-text-main mb-4">Reservá en vivo y sin errores</h3>
                  <p className="text-xl text-text-muted mb-4">
                    Reservá una unidad en el momento, información 100% actualizada en tiempo real para evitar malentendidos.
                  </p>
                  <ul className="text-lg text-text-muted space-y-2">
                    <li className="flex items-center">
                      <Check className="text-accent mr-3 text-2xl" />
                      Confirmación instantánea de la reserva.
                    </li>
                    <li className="flex items-center">
                      <Check className="text-accent mr-3 text-2xl" />
                      Evita ventas duplicadas y problemas.
                    </li>
                    <li className="flex items-center">
                      <Check className="text-accent mr-3 text-2xl" />
                      Proceso simple y guiado.
                    </li>
                  </ul>
                </div>
              )}
              {activeTab === "realtor-3" && (
                <div id="realtor-3" className="realtor-content">
                  <h3 className="text-3xl font-bold text-text-main mb-4">Toda tu cartera en un solo lugar</h3>
                  <p className="text-xl text-text-muted mb-4">
                    Manejá tus clientes, propiedades y seguimientos desde un único panel. Dejá de usar planillas de cálculo y centralizá tu gestión para ser más eficiente.
                  </p>
                  <ul className="text-lg text-text-muted space-y-2">
                    <li className="flex items-center">
                      <Check className="text-accent mr-3 text-2xl" />
                      Fichas detalladas de cada propiedad.
                    </li>
                    <li className="flex items-center">
                      <Check className="text-accent mr-3 text-2xl" />
                      Historial de cambios de precios y estados.
                    </li>
                    <li className="flex items-center">
                      <Check className="text-accent mr-3 text-2xl" />
                      Acceso rápido a la información que necesitás.
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <div className="glass p-6 rounded-2xl shadow-glass border border-glass-border">
              <div className="glass rounded-xl p-6">
                <h4 className="font-bold text-2xl text-text-main">Torre Bellini Esmeralda</h4>
                <p className="text-text-muted text-lg">Av. del Libertador 8600, CABA</p>
                <div className="mt-4 w-full h-56 rounded-lg overflow-hidden">
                  <Image
                    src="/saldias-1168-cam06.jpg"
                    alt="Saldias 1168"
                    width={384}
                    height={224}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-6">
                  <h5 className="font-semibold text-xl text-text-main">Unidad 12-B</h5>
                  <div className="flex justify-between items-center mt-2 text-lg">
                    <p className="text-accent-alt">3 Ambientes</p>
                    <p className="font-bold text-accent">USD 250.000</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between bg-glass-bg text-accent px-4 py-3 rounded-lg shadow-glass border border-glass-border">
                    <span className="font-bold text-lg">Disponible</span>
                    <Button className="btn-primary font-semibold px-6 py-2 rounded-lg shadow-glass">Reservar ahora</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
