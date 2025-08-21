import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="hero-section">
      {/* Background gradient */}
      <div className="hero-gradient"></div>
      
      <div className="hero-content">
        <div className="hero-layout">
          {/* Left content */}
          <div className="hero-text-section">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-[#1F1F1F] leading-tight">
                Control total para tus proyectos inmobiliarios
              </h1>
              <p className="text-xl text-[#1F1F1F] max-w-lg">
                Gestioná tus proyectos conectando desarrolladoras, agentes y compradores en una sola plataforma
              </p>
            </div>
            
            {/* Email input and CTA */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              <Input 
                type="email" 
                placeholder="Ingresa tu email"
                className="flex-1 px-4 py-3 rounded-full border-[#BEBEBE] focus:border-[#C1DEE8] focus:ring-[#C1DEE8]"
              />
              <Button className="bg-[#1F1F1F] text-white hover:bg-black px-8 py-3 rounded-full font-semibold">
                Obtener Demo
              </Button>
            </div>
          </div>

          {/* Right content - placeholder for layout */}
          <div className="hero-placeholder"></div>
        </div>
      </div>
      
      {/* Image positioned with professional CSS classes */}
      <div className="hero-image-container">
        <Image
          src="/edificio-v3.png"
          alt="Edificio 3D - Concret0"
          width={600}
          height={600}
          className="hero-image"
          priority
        />
      </div>
    </section>
  )
}
