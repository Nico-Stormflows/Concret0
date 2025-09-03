import { MessageCircle, Mail, PenTool } from "lucide-react"
import { ReactNode } from "react"

interface Step {
  icon: ReactNode
  title: string
  description: string
}

export function StepsSection() {
  const steps: Step[] = [
    {
      icon: <MessageCircle className="w-12 h-12 text-[#C1DEE8]" />,
      title: "Conecta con tu equipo",
      description: "Integra desarrolladoras, agentes inmobiliarios y compradores en una sola plataforma."
    },
    {
      icon: <Mail className="w-12 h-12 text-[#FBD9B9]" />,
      title: "Gestiona proyectos",
      description: "Control total de tus proyectos inmobiliarios con herramientas avanzadas de gestión."
    },
    {
      icon: <PenTool className="w-12 h-12 text-[#1F1F1F]" />,
      title: "Optimiza ventas",
      description: "Maximiza tus ventas con dashboards inteligentes y proyecciones de mercado."
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1F1F1F]">
            Todo debería ser así de simple.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-6">
              <div className="flex justify-center">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#1F1F1F]">
                {step.title}
              </h3>
              <p className="text-[#1F1F1F] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
