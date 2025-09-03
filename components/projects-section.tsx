"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface Project {
  id: number
  title: string
  description: string
  image: string
  isDashboard?: boolean
  useImage?: boolean
}

interface DashboardData {
  sold: number
  reserved: number
}

interface UnitData {
  unit: string
  ambientes: string
  precio: string
  m2: string
  status: string
}

export function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const projects: Project[] = [
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
      image: "/tablet-opciones-correct.png",
      useImage: true
    },
    {
      id: 4,
      title: "Filtros Avanzados",
      description: "Filtra unidades por precio, orientación y otras características clave.",
      image: "/filter-menu.png",
      useImage: true
    },
    {
      id: 5,
      title: "Reportes Detallados",
      description: "Accede a reportes detallados de ventas y transacciones en tiempo real.",
      image: "/Reportes.png",
      useImage: true
    }
  ]

  // Create infinite loop with more duplicates
  const infiniteProjects = [...projects, ...projects, ...projects, ...projects, ...projects]

  // Chart data for Dashboard - larger bars without text
  const dashboardData: DashboardData[] = [
    { sold: 8, reserved: 5 },
    { sold: 12, reserved: 7 },
    { sold: 15, reserved: 9 },
    { sold: 10, reserved: 6 },
    { sold: 18, reserved: 11 },
    { sold: 22, reserved: 14 },
  ]

  // Units data for software interface
  const unitsData: UnitData[] = [
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
          <div className="flex space-x-2">
            <Button
              onClick={prevSlide}
              variant="ghost"
              size="sm"
              className="w-10 h-10 p-0 rounded-full bg-black text-white hover:bg-black"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              onClick={nextSlide}
              variant="ghost"
              size="sm"
              className="w-10 h-10 p-0 rounded-full bg-black text-white hover:bg-black"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {infiniteProjects.map((project, index) => (
              <div key={`${project.id}-${index}`} className="w-full flex-shrink-0 px-2">
                <div className="bg-white rounded-2xl shadow-lg border border-[#C1DEE8] p-6 h-80">
                  <div className="h-48 bg-gradient-to-br from-[#C1DEE8] to-[#FBD9B9] rounded-xl mb-4 flex items-center justify-center">
                    {project.isDashboard ? (
                      <div className="w-full h-full p-4">
                        <div className="text-center mb-2 text-sm font-semibold text-[#1F1F1F]">
                          Gráfico de Ventas
                        </div>
                        <div className="flex items-end justify-center space-x-2 h-32">
                          {dashboardData.map((data, i) => (
                            <div key={i} className="flex flex-col items-center space-y-1">
                              <div className="w-4 bg-black rounded-t-sm" style={{ height: `${data.sold * 2}px` }}></div>
                              <div className="w-4 bg-gray-600 rounded-t-sm" style={{ height: `${data.reserved * 2}px` }}></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : project.id === 2 ? (
                      <div className="w-full h-full p-4">
                        <div className="flex items-center justify-between h-full">
                          <div className="w-1/2 h-full flex items-center justify-center">
                            <div className="w-16 h-16 bg-[#1F1F1F] rounded-lg flex items-center justify-center">
                              <div className="w-8 h-8 bg-[#C1DEE8] rounded"></div>
                            </div>
                          </div>
                          <div className="w-1/2 h-full">
                            <div className="space-y-2">
                              {unitsData.map((unit, i) => (
                                <div key={i} className="text-xs bg-white p-2 rounded border">
                                  <div className="font-semibold">{unit.unit}</div>
                                  <div className="text-gray-600">{unit.ambientes} amb • {unit.m2}</div>
                                  <div className="font-semibold text-[#1F1F1F]">{unit.precio}</div>
                                  <div className={`text-xs ${unit.status === 'Disponible' ? 'text-green-600' : unit.status === 'Reservada' ? 'text-orange-600' : 'text-red-600'}`}>
                                    {unit.status}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : project.useImage ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    ) : (
                      <div className="text-6xl font-bold text-[#1F1F1F]">C0</div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-[#1F1F1F] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#1F1F1F] text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
