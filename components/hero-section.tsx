import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="hero-section">
      {/* Background gradient with image positioned inside */}
      <div className="hero-gradient">
        {/* Image positioned at the top of gradient */}
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
      </div>
      
      <div className="hero-content">
        <div className="hero-layout">
          {/* Left content */}
          <div className="hero-text-section">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-[#1F1F1F] leading-tight">
                Gestioná tus proyectos
              </h1>
              <p className="text-base md:text-lg text-[#1F1F1F] max-w-lg">
                En el competitivo mundo inmobiliario, destacarte es clave. Nuestra plataforma está diseñada para transformar la forma en que gestionas y promocionas tus desarrollos.
              </p>
            </div>
            
            {/* CTA */}
            <div className="flex">
              <Button asChild className="bg-[#1F1F1F] text-white hover:bg-black px-6 py-2 rounded-lg font-semibold">
                <Link href="#contacto">Contactanos</Link>
              </Button>
            </div>
          </div>

          {/* Right content - placeholder for layout */}
          <div className="hero-placeholder"></div>
        </div>
      </div>
    </section>
  )
}
