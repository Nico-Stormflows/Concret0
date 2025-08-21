import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export function NewsletterSection() {
  return (
    <section className="relative overflow-hidden" style={{ height: '457px' }}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#C1DEE8] to-[#FBD9B9] rounded-2xl"></div>
      
      <div className="container mx-auto px-6 relative z-10 h-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center h-full pt-8">
          {/* Left content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1F1F1F]">
                Suscribite a nuestro newsletter
              </h2>
              <p className="text-lg text-[#1F1F1F] max-w-lg">
                Recibí las últimas novedades sobre gestión inmobiliaria y las nuevas funcionalidades de Concret0.
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
                Suscribirse
              </Button>
            </div>
          </div>

          {/* Right content - 3D Platform Illustration */}
          <div className="flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-lg bg-transparent">
              <Image
                src="/footer-3d.png"
                alt="Plataforma Concret0 3D"
                width={800}
                height={600}
                className="w-full h-auto"
                style={{ transform: 'translateY(-30px)' }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
