import { Button } from "@/components/ui/button"
import Image from "next/image"

export function AboutSection() {
  const stats = [
    { number: "50+", label: "Desarrolladoras" },
    { number: "200+", label: "Agentes" },
    { number: "1000+", label: "Proyectos" }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F1F1F]">
            Somos la plataforma líder en gestión inmobiliaria
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-[#1F1F1F]">
                Conectamos el ecosistema inmobiliario
              </h3>
              <p className="text-[#1F1F1F] leading-relaxed text-lg">
                Concret0 es la plataforma integral que revoluciona la gestión inmobiliaria. 
                Conectamos desarrolladoras, agentes y compradores en un solo lugar, 
                optimizando cada paso del proceso de venta y gestión de proyectos.
              </p>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#1F1F1F] text-white hover:bg-black px-8 py-3 rounded-full font-semibold">
                Solicitar Demo
              </Button>
              <Button className="bg-white border-[#BEBEBE] text-[#1F1F1F] hover:bg-white hover:shadow-lg px-8 py-3 rounded-full font-semibold transition-all duration-200">
                Saber Más
              </Button>
            </div>

            {/* Statistics - moved below text and buttons */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-left">
                  <div className="text-3xl font-bold text-[#1F1F1F] mb-1">
                    {stat.number}
                  </div>
                  <div className="text-[#1F1F1F] text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <Image
                src="/presentacion-negocios.jpg"
                alt="Presentación de negocios - Concret0"
                width={500}
                height={400}
                className="rounded-2xl shadow-lg object-cover w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
