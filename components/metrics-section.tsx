"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MetricsSection() {
  const [activeTab, setActiveTab] = useState("metrics")

  const metrics = {
    metrics: {
      title: "Métricas Claras",
      subtitle: "Tus métricas de venta, al instante",
      description: "Visualizá el rendimiento de tus proyectos con gráficos simples y fáciles de entender. Identificá tendencias y supervisá el trabajo de tu equipo de ventas sin esfuerzo.",
      benefits: [
        "Paneles de control intuitivos, sin datos confusos.",
        "Reportes de ventas y estado de unidades.",
        "Seguimiento del embudo de ventas por proyecto."
      ]
    },
    cashflow: {
      title: "Cashflow Controlado",
      subtitle: "Controlá tu flujo de caja",
      description: "Tené una visión clara de los ingresos y egresos de cada proyecto. Proyectá tu rentabilidad y tomá decisiones financieras con información precisa y actualizada.",
      benefits: [
        "Visualización simple del estado financiero.",
        "Generación de reportes financieros.",
        "Anticipate a problemas de liquidez."
      ]
    },
    automation: {
      title: "Gestión Automatizada",
      subtitle: "Automatizá la gestión de cuotas",
      description: "Ahorrá tiempo y reducí errores. Configurá el envío automático de cuotas mensuales a tus clientes por email. Simple, rápido y profesional.",
      benefits: [
        "Programación de envíos masivos.",
        "Historial de pagos y seguimiento de deudas.",
        "Mejorá la experiencia de tus compradores."
      ]
    }
  }

  const currentMetric = metrics[activeTab as keyof typeof metrics]

  // Mock chart data
  const chartData = [
    { month: "Enero", sold: 5, reserved: 3 },
    { month: "Febrero", sold: 8, reserved: 4 },
    { month: "Marzo", sold: 12, reserved: 5 },
    { month: "Abril", sold: 7, reserved: 2 },
    { month: "Mayo", sold: 10, reserved: 6 },
    { month: "Junio", sold: 15, reserved: 5 },
  ]

  return (
    <section className="py-20 bg-[#FEFEFF]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F1F1F]">
            Control y visibilidad para tu Desarrollo
          </h2>
          <p className="mt-4 text-xl text-[#1F1F1F] max-w-3xl mx-auto">
            Tomá las mejores decisiones con información clara y en tiempo real. Supervisá tus ventas y tu flujo de caja desde un único lugar.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
          {/* Right content - Tabs and content */}
          <div className="lg:w-1/2">
            <div className="flex flex-col sm:flex-row border-b border-[#BEBEBE] mb-8">
              {Object.keys(metrics).map((key) => (
                <Button
                  key={key}
                  onClick={() => setActiveTab(key)}
                                          className={`tab-button ${
                          activeTab === key 
                            ? "border-[#1F1F1F] text-[#1F1F1F] bg-white" 
                            : "tab-button-inactive"
                        }`}
                >
                  {metrics[key as keyof typeof metrics].title}
                </Button>
              ))}
            </div>

            <div className="min-h-[300px]">
              <h3 className="text-3xl font-bold text-[#1F1F1F] mb-4">
                {currentMetric.subtitle}
              </h3>
              <p className="text-xl text-[#1F1F1F] mb-6">
                {currentMetric.description}
              </p>
              <ul className="text-lg text-[#1F1F1F] space-y-3">
                {currentMetric.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-[#C1DEE8] mr-3 text-xl mt-1 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Left content - Chart */}
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <div className="bg-white rounded-2xl shadow-lg border border-[#C1DEE8] p-6">
              <h4 className="font-bold text-2xl text-[#1F1F1F] text-center mb-6">
                Estado de Unidades - Proyecto "Altos de Palermo"
              </h4>
              
              {/* Placeholder for chart */}
              <div className="bg-gradient-to-br from-[#C1DEE8]/20 to-[#FBD9B9]/20 rounded-xl p-6 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#C1DEE8] rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-[#1F1F1F] text-2xl font-bold">📊</div>
                  </div>
                  <h5 className="text-lg font-semibold text-[#1F1F1F] mb-2">
                    Gráfico de Ventas
                  </h5>
                  <p className="text-[#1F1F1F] text-sm">
                    Visualización de unidades vendidas vs reservadas
                  </p>
                  
                  {/* Mock chart bars */}
                  <div className="flex items-end justify-center space-x-2 mt-6 h-32">
                    {chartData.map((data, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div className="flex flex-col space-y-1">
                          <div 
                            className="w-8 bg-[#C1DEE8] rounded-t"
                            style={{ height: `${(data.sold / 15) * 80}px` }}
                          ></div>
                          <div 
                            className="w-8 bg-[#FBD9B9] rounded-t"
                            style={{ height: `${(data.reserved / 15) * 80}px` }}
                          ></div>
                        </div>
                        <span className="text-xs text-[#1F1F1F] mt-2">{data.month}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Legend */}
                  <div className="flex justify-center space-x-4 mt-4 text-sm">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-[#C1DEE8] rounded mr-2"></div>
                      <span className="text-[#1F1F1F]">Vendidas</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-[#FBD9B9] rounded mr-2"></div>
                      <span className="text-[#1F1F1F]">Reservadas</span>
                    </div>
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
