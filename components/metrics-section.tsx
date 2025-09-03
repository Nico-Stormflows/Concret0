"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Metric {
  title: string
  subtitle: string
  description: string
  benefits: string[]
}

interface Metrics {
  metrics: Metric
  cashflow: Metric
  automation: Metric
}

interface ChartData {
  month: string
  sold: number
  reserved: number
}

export function MetricsSection() {
  const [activeTab, setActiveTab] = useState("metrics")

  const metrics: Metrics = {
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
  const chartData: ChartData[] = [
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

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#1F1F1F] mb-2">
                {currentMetric.subtitle}
              </h3>
              <p className="text-[#1F1F1F] leading-relaxed text-lg">
                {currentMetric.description}
              </p>
              <ul className="space-y-3">
                {currentMetric.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#C1DEE8] mt-0.5 flex-shrink-0" />
                    <span className="text-[#1F1F1F]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Left content - Chart */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-2xl shadow-lg border border-[#C1DEE8] p-8">
              <h4 className="text-xl font-bold text-[#1F1F1F] mb-6 text-center">
                Ventas vs Reservas
              </h4>
              
              <div className="space-y-4">
                {chartData.map((data, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm text-[#1F1F1F]">
                      <span>{data.month}</span>
                      <div className="flex space-x-4">
                        <span className="text-[#C1DEE8]">Vendidas: {data.sold}</span>
                        <span className="text-[#FBD9B9]">Reservadas: {data.reserved}</span>
                      </div>
                    </div>
                    <div className="flex space-x-1 h-4">
                      <div 
                        className="bg-[#C1DEE8] rounded-l-sm"
                        style={{ width: `${(data.sold / 15) * 100}%` }}
                      ></div>
                      <div 
                        className="bg-[#FBD9B9] rounded-r-sm"
                        style={{ width: `${(data.reserved / 15) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
