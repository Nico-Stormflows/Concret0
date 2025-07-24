"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"
const ChartContainer = dynamic(() => import("@/components/ui/chart").then(m => m.ChartContainer), { ssr: false })
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
  { month: "Enero", sold: 5, reserved: 3 },
  { month: "Febrero", sold: 8, reserved: 4 },
  { month: "Marzo", sold: 12, reserved: 5 },
  { month: "Abril", sold: 7, reserved: 2 },
  { month: "Mayo", sold: 10, reserved: 6 },
  { month: "Junio", sold: 15, reserved: 5 },
]

export function DeveloperSection() {
  const [activeTab, setActiveTab] = useState("dev-1")

  return (
    <section id="section-desarrolladora" className="py-20 md:py-24 bg-bg-alt text-text-main relative scroll-mt-20">
      {/* Si hay fondo decorativo, debe ir aquí con -z-10 */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-main">
            Control y visibilidad para tu Desarrollo
          </h2>
          <p className="mt-4 text-xl text-text-muted max-w-3xl mx-auto">
            Tomá las mejores decisiones con información clara y en tiempo real. Supervisá tus ventas y tu flujo de caja desde un único lugar.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20 min-h-[600px]">
          <div className="lg:w-1/2">
            <div className="flex flex-col sm:flex-row border-b border-glass-border mb-8">
              <Button
                variant="ghost"
                onClick={() => setActiveTab("dev-1")}
                className={`text-lg font-semibold py-4 px-6 border-b-2 w-full text-left rounded-none ${activeTab === "dev-1" ? "tab-active" : "tab-inactive"}`}
              >
                Métricas Claras
              </Button>
              <Button
                variant="ghost"
                onClick={() => setActiveTab("dev-2")}
                className={`text-lg font-semibold py-4 px-6 border-b-2 w-full text-left rounded-none ${activeTab === "dev-2" ? "tab-active" : "tab-inactive"}`}
              >
                Cashflow Controlado
              </Button>
              <Button
                variant="ghost"
                onClick={() => setActiveTab("dev-3")}
                className={`text-lg font-semibold py-4 px-6 border-b-2 w-full text-left rounded-none ${activeTab === "dev-3" ? "tab-active" : "tab-inactive"}`}
              >
                Gestión Automatizada
              </Button>
            </div>
            <div id="developer-tab-content" className="min-h-[260px]">
              {activeTab === "dev-1" && (
                <div id="dev-1" className="dev-content">
                  <h3 className="text-3xl font-bold text-text-main mb-4">Tus métricas de venta, al instante</h3>
                  <p className="text-xl text-text-muted mb-4">
                    Visualizá el rendimiento de tus proyectos con gráficos simples y fáciles de entender. Identificá tendencias y supervisá el trabajo de tu equipo de ventas sin esfuerzo.
                  </p>
                  <ul className="text-lg text-text-muted space-y-2">
                    <li className="flex items-center">
                      <Check className="text-accent mr-3 text-2xl" />
                      Paneles de control intuitivos, sin datos confusos.
                    </li>
                    <li className="flex items-center">
                      <Check className="text-accent mr-3 text-2xl" />
                      Reportes de ventas y estado de unidades.
                    </li>
                    <li className="flex items-center">
                      <Check className="text-accent mr-3 text-2xl" />
                      Seguimiento del embudo de ventas por proyecto.
                    </li>
                  </ul>
                </div>
              )}
              {activeTab === "dev-2" && (
                <div id="dev-2" className="dev-content">
                  <h3 className="text-3xl font-bold text-text-main mb-4">Controlá tu flujo de caja (cashflow)</h3>
                  <p className="text-xl text-text-muted mb-4">
                    Tené una visión clara de los ingresos y egresos de cada proyecto. Proyectá tu rentabilidad y tomá decisiones financieras con información precisa y actualizada.
                  </p>
                  <ul className="text-lg text-text-muted space-y-2">
                    <li className="flex items-center">
                      <Check className="text-accent mr-3 text-2xl" />
                      Visualización simple del estado financiero.
                    </li>
                    <li className="flex items-center">
                      <Check className="text-accent mr-3 text-2xl" />
                      Generación de reportes financieros.
                    </li>
                    <li className="flex items-center">
                      <Check className="text-accent mr-3 text-2xl" />
                      Anticipate a problemas de liquidez.
                    </li>
                  </ul>
                </div>
              )}
              {activeTab === "dev-3" && (
                <div id="dev-3" className="dev-content">
                  <h3 className="text-3xl font-bold text-text-main mb-4">Automatizá la gestión de cuotas</h3>
                  <p className="text-xl text-text-muted mb-4">
                    Ahorrá tiempo y reducí errores. Configurá el envío automático de cuotas mensuales a tus clientes por email. Simple, rápido y profesional.
                  </p>
                  <ul className="text-lg text-text-muted space-y-2">
                    <li className="flex items-center">
                      <Check className="text-accent mr-3 text-2xl" />
                      Programación de envíos masivos.
                    </li>
                    <li className="flex items-center">
                      <Check className="text-accent mr-3 text-2xl" />
                      Historial de pagos y seguimiento de deudas.
                    </li>
                    <li className="flex items-center">
                      <Check className="text-accent mr-3 text-2xl" />
                      Mejorá la experiencia de tus compradores.
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <div className="glass p-6 rounded-2xl shadow-glass border border-glass-border">
              <h4 className="font-bold text-2xl text-text-main text-center mb-4">
                Estado de Unidades - Proyecto "Altos de Palermo"
              </h4>
              {/* GRÁFICO 100% NATIVO RECHARTS */}
              <div className="chart-container h-[350px] max-w-[700px] mx-auto md:h-[400px] mt-10 glass rounded-2xl p-6 relative">
                {/* Leyenda arriba a la izquierda (eliminada) */}
                <div style={{ width: 600, height: 320, margin: '40px 30px 30px 40px' }}>
                  <BarChart width={600} height={320} data={chartData} margin={{ top: 40, right: 30, left: 40, bottom: 30 }} barCategoryGap={30} barGap={8}>
                    <CartesianGrid stroke="#AAB2C8" strokeOpacity={0.7} vertical={true} horizontal={true} />
                    <XAxis dataKey="month" tick={{ fill: '#53BF9D', fontSize: 20, fontWeight: 700, fontFamily: 'IBM Plex Sans' }} axisLine={{ stroke: '#53BF9D', strokeWidth: 2 }} tickLine={{ stroke: '#53BF9D', strokeWidth: 2 }} interval={0} allowDataOverflow={false} minTickGap={0} />
                    <YAxis domain={[0, 'dataMax + 2']} tick={{ fill: '#53BF9D', fontSize: 18, fontWeight: 700, fontFamily: 'IBM Plex Sans' }} axisLine={{ stroke: '#53BF9D', strokeWidth: 2 }} tickLine={{ stroke: '#53BF9D', strokeWidth: 2 }} allowDataOverflow={false} />
                    <Tooltip
                      content={({ active, payload, label }) => {
                        if (!active || !payload || payload.length === 0) return null;
                        return (
                          <div style={{ background: '#1A1A2E', color: '#f4f6f8', border: '1.5px solid #53BF9D', borderRadius: 8, fontSize: 15, fontWeight: 500, boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18)', padding: 12 }}>
                            <div style={{ fontWeight: 700, marginBottom: 8 }}>{label}</div>
                            {payload.map((entry, idx) => (
                              <div key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
                                <div style={{ width: 14, height: 14, borderRadius: 3, background: entry.color, border: '1.5px solid #1A1A2E', marginRight: 8 }} />
                                <span style={{ color: '#f4f6f8', fontWeight: 500 }}>
                                  {entry.name}: <span style={{ fontWeight: 700 }}>{entry.value}</span>
                                </span>
                              </div>
                            ))}
                          </div>
                        );
                      }}
                    />
                    <Bar dataKey="sold" fill="#53BF9D" barSize={32} radius={[4,4,0,0]} name="Unidades Vendidas" />
                    <Bar dataKey="reserved" fill="#7ED6DF" barSize={32} radius={[4,4,0,0]} name="Unidades Reservadas" />
                  </BarChart>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
