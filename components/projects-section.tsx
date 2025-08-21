"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const projects = [
    {
      id: 1,
      title: "Dashboard de Ventas",
      description: "Visualiza métricas y gráficas personalizadas para tomar decisiones inteligentes.",
      image: "/01 carrousel.jpg",
      isDashboard: true
    },
    {
      id: 2,
      title: "Gestión de Proyectos",
      description: "Control total de todos tus proyectos inmobiliarios en una sola plataforma.",
      image: "/gestion-proyectos.png",
      useImage: true
    },
    {
      id: 3,
      title: "Reservas Online",
      description: "Permite a los clientes reservar unidades en línea de forma instantánea.",
      image: "/tablet-opciones-correct.png"
    },
    {
      id: 4,
      title: "Filtros Avanzados",
      description: "Filtra unidades por precio, orientación y otras características clave.",
      image: "/filter-menu.png"
    },
    {
      id: 5,
      title: "Reportes Detallados",
      description: "Accede a reportes detallados de ventas y transacciones en tiempo real.",
      image: "/05 carrousel.jpg"
    }
  ]

  // Create infinite loop with more duplicates
  const infiniteProjects = [...projects, ...projects, ...projects, ...projects, ...projects]

  // Chart data for Dashboard - larger bars without text
  const dashboardData = [
    { sold: 8, reserved: 5 },
    { sold: 12, reserved: 7 },
    { sold: 15, reserved: 9 },
    { sold: 10, reserved: 6 },
    { sold: 18, reserved: 11 },
    { sold: 22, reserved: 14 },
  ]

  // Units data for software interface
  const unitsData = [
    { unit: "A-101", ambientes: "2", precio: "$180.000", m2: "65m²", status: "Disponible" },
    { unit: "A-102", ambientes: "3", precio: "$220.000", m2: "78m²", status: "Reservada" },
    { unit: "A-201", ambientes: "2", precio: "$190.000", m2: "68m²", status: "Disponible" },
    { unit: "A-202", ambientes: "3", precio: "$235.000", m2: "82m²", status: "Vendida" },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev + 1
      // When reaching the end of original set, jump to middle set seamlessly
      if (newIndex >= projects.length) {
        return newIndex
      }
      return newIndex
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev - 1
      // When going backwards from first set, jump to middle set seamlessly
      if (newIndex < 0) {
        return projects.length * 2 + newIndex
      }
      return newIndex
    })
  }

  return (
    <section className="py-20 bg-[#FEFEFF]">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <div>
            <p className="text-[#1F1F1F] mb-2">Una misma plataforma</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1F1F1F]">
              Nuestras funcionalidades
            </h2>
          </div>
          
          {/* Navigation arrows */}
          <div className="flex gap-3">
            <Button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-[#1F1F1F] text-white hover:bg-black transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-[#1F1F1F] text-white hover:bg-black transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Projects carousel */}
        <div className="relative overflow-hidden">
          <div className="flex gap-8 transition-transform duration-500 ease-in-out"
               style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
            {infiniteProjects.map((project, index) => (
              <div key={`${project.id}-${index}`} className="flex-shrink-0 w-full md:w-1/3">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#C1DEE8] h-80">
                  {/* Project image */}
                  <div className="relative h-48 bg-gradient-to-br from-[#C1DEE8] to-[#FBD9B9]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {project.isDashboard ? (
                        // Dashboard chart content - large bars without text with black/gray colors
                        <div className="w-full h-full p-4 flex items-end justify-center">
                          <div className="flex items-end space-x-3 h-32">
                            {dashboardData.map((data, i) => (
                              <div key={i} className="flex flex-col space-y-2">
                                <div 
                                  className="w-6 bg-[#1F1F1F] rounded-t shadow-lg"
                                  style={{ height: `${(data.sold / 22) * 100}px` }}
                                ></div>
                                <div 
                                  className="w-6 bg-[#BEBEBE] rounded-t shadow-lg"
                                  style={{ height: `${(data.reserved / 22) * 100}px` }}
                                ></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : project.isBlueprint ? (
                        // Software interface for Gestión de Proyectos
                        <div className="w-full h-full p-3 bg-white">
                          <div className="flex h-full">
                            {/* Left side - 3D Building */}
                            <div className="w-1/2 pr-2">
                              <div className="text-[8px] text-[#1F1F1F] font-bold mb-1">EDIFICIO 3D</div>
                              <div className="relative h-32 bg-gradient-to-b from-[#C1DEE8] to-[#FBD9B9] rounded">
                                {/* Building structure */}
                                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-24 bg-[#1F1F1F]/20 border border-[#1F1F1F]">
                                  {/* Floors */}
                                  <div className="absolute top-1/4 left-0 right-0 h-0.5 bg-[#1F1F1F]"></div>
                                  <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#1F1F1F]"></div>
                                  <div className="absolute top-3/4 left-0 right-0 h-0.5 bg-[#1F1F1F]"></div>
                                  
                                  {/* Windows */}
                                  <div className="absolute top-2 left-2 w-2 h-2 bg-[#C1DEE8]"></div>
                                  <div className="absolute top-2 right-2 w-2 h-2 bg-[#C1DEE8]"></div>
                                  <div className="absolute top-8 left-2 w-2 h-2 bg-[#C1DEE8]"></div>
                                  <div className="absolute top-8 right-2 w-2 h-2 bg-[#C1DEE8]"></div>
                                  <div className="absolute top-14 left-2 w-2 h-2 bg-[#C1DEE8]"></div>
                                  <div className="absolute top-14 right-2 w-2 h-2 bg-[#C1DEE8]"></div>
                                </div>
                                
                                {/* Ground */}
                                <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#1F1F1F]/30"></div>
                              </div>
                            </div>
                            
                            {/* Right side - Units List */}
                            <div className="w-1/2 pl-2">
                              <div className="text-[8px] text-[#1F1F1F] font-bold mb-1">UNIDADES</div>
                              <div className="space-y-1">
                                {unitsData.map((unit, i) => (
                                  <div key={i} className="text-[6px] border border-[#BEBEBE] rounded p-1">
                                    <div className="flex justify-between items-center">
                                      <span className="font-bold text-[#1F1F1F]">{unit.unit}</span>
                                      <span className={`text-[5px] px-1 rounded ${
                                        unit.status === 'Disponible' ? 'bg-green-200 text-green-800' :
                                        unit.status === 'Reservada' ? 'bg-yellow-200 text-yellow-800' :
                                        'bg-red-200 text-red-800'
                                      }`}>
                                        {unit.status}
                                      </span>
                                    </div>
                                    <div className="flex justify-between text-[5px] text-[#1F1F1F] mt-1">
                                      <span>{unit.ambientes} amb</span>
                                      <span>{unit.m2}</span>
                                      <span className="font-bold">{unit.precio}</span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        // Show image for specific projects, C0 for others
                        project.id === 2 || project.id === 3 || project.id === 4 ? (
                          <div className="w-full h-full rounded-lg overflow-hidden">
                            <Image
                              src={project.image}
                              alt={project.title}
                              width={400}
                              height={300}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ) : (
                          <div className="w-32 h-32 bg-white rounded-lg shadow-lg flex items-center justify-center">
                            <div className="text-[#1F1F1F] text-4xl font-bold">C0</div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                  
                  {/* Project info */}
                  <div className="p-6 h-32 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-[#1F1F1F] mb-2">
                      {project.title}
                    </h3>
                    <p className="text-[#1F1F1F] text-sm">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
