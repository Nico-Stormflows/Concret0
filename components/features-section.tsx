"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function FeaturesSection() {
  const [activeTab, setActiveTab] = useState("presentation")

  const features = {
    presentation: {
      title: "Presentación",
      subtitle: "Presentá proyectos como nunca antes",
      description: "Mostrá los edificios y unidades con renders de alta calidad y recorridos 3D. Tus clientes podrán visualizar las unidades y sus detalles para tomar decisiones más rápido.",
      benefits: [
        "Disponibilidad de unidades en tiempo real.",
        "Navegación por los emprendimientos, galerías de fotos y planos actualizados",
        "Interfaz profesional para usar frente a tus clientes."
      ],
      image: "/saldias-1168-cam06.jpg",
      property: {
        name: "Torre Bellini Esmeralda",
        address: "Av. del Libertador 8600, CABA",
        unit: "Unidad 12-B",
        rooms: "3 Ambientes",
        price: "USD 250.000"
      }
    },
    reservations: {
      title: "Reservas en Vivo",
      subtitle: "Reservá en vivo y sin errores",
      description: "Reservá una unidad en el momento, información 100% actualizada en tiempo real para evitar malentendidos.",
      benefits: [
        "Confirmación instantánea de la reserva.",
        "Evita ventas duplicadas y problemas.",
        "Proceso simple y guiado."
      ],
      image: "/saldias-1168-cam06.jpg",
      property: {
        name: "Torre Bellini Esmeralda",
        address: "Av. del Libertador 8600, CABA",
        unit: "Unidad 12-B",
        rooms: "3 Ambientes",
        price: "USD 250.000"
      }
    },
    management: {
      title: "Gestión Centralizada",
      subtitle: "Toda tu cartera en un solo lugar",
      description: "Manejá tus clientes, propiedades y seguimientos desde un único panel. Dejá de usar planillas de cálculo y centralizá tu gestión para ser más eficiente.",
      benefits: [
        "Fichas detalladas de cada propiedad.",
        "Historial de cambios de precios y estados.",
        "Acceso rápido a la información que necesitás."
      ],
      image: "/saldias-1168-cam06.jpg",
      property: {
        name: "Torre Bellini Esmeralda",
        address: "Av. del Libertador 8600, CABA",
        unit: "Unidad 12-B",
        rooms: "3 Ambientes",
        price: "USD 250.000"
      }
    }
  }

  const currentFeature = features[activeTab as keyof typeof features]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F1F1F]">
            Herramientas para <span className="text-[#C1DEE8]">potenciar las ventas</span>
          </h2>
          <p className="mt-4 text-xl text-[#1F1F1F] max-w-3xl mx-auto">
            Te damos todo lo que necesitás para que te luzcas con tus clientes y vendas más rápido.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left content - Tabs and content */}
          <div className="lg:w-1/2">
            <div className="flex flex-col sm:flex-row border-b border-[#BEBEBE] mb-8">
              {Object.keys(features).map((key) => (
                <Button
                  key={key}
                  onClick={() => setActiveTab(key)}
                                          className={`tab-button ${
                          activeTab === key 
                            ? "border-[#1F1F1F] text-[#1F1F1F] bg-white" 
                            : "tab-button-inactive"
                        }`}
                >
                  {features[key as keyof typeof features].title}
                </Button>
              ))}
            </div>

            <div className="min-h-[300px]">
              <h3 className="text-3xl font-bold text-[#1F1F1F] mb-4">
                {currentFeature.subtitle}
              </h3>
              <p className="text-xl text-[#1F1F1F] mb-6">
                {currentFeature.description}
              </p>
              <ul className="text-lg text-[#1F1F1F] space-y-3">
                {currentFeature.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-[#C1DEE8] mr-3 text-xl mt-1 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right content - Property card */}
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <div className="bg-white rounded-2xl shadow-lg border border-[#C1DEE8] p-6">
              <div className="bg-gradient-to-br from-[#C1DEE8]/20 to-[#FBD9B9]/20 rounded-xl p-6">
                <h4 className="font-bold text-2xl text-[#1F1F1F] mb-2">
                  {currentFeature.property.name}
                </h4>
                <p className="text-[#1F1F1F] text-lg mb-4">
                  {currentFeature.property.address}
                </p>
                
                <div className="w-full h-56 rounded-lg overflow-hidden mb-6">
                  <Image
                    src={currentFeature.image}
                    alt={currentFeature.property.name}
                    width={400}
                    height={224}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <h5 className="font-semibold text-xl text-[#1F1F1F] mb-2">
                    {currentFeature.property.unit}
                  </h5>
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-[#C1DEE8] font-medium">{currentFeature.property.rooms}</p>
                    <p className="font-bold text-[#1F1F1F] text-xl">
                      {currentFeature.property.price}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between bg-[#C1DEE8]/20 text-[#1F1F1F] px-4 py-3 rounded-lg border border-[#C1DEE8]">
                    <span className="font-bold text-lg">Disponible</span>
                    <Button className="bg-[#1F1F1F] text-white hover:bg-black font-semibold px-6 py-2 rounded-lg">
                      Reservar ahora
                    </Button>
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
