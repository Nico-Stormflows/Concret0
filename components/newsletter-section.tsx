import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#C1DEE8] to-[#FBD9B9]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1F1F1F]">
                Suscribite a nuestro newsletter
              </h2>
              <p className="text-xl text-[#1F1F1F] max-w-lg">
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
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Placeholder para imagen 3D de plataforma Concret0 */}
              <div className="relative">
                {/* Main platform structure */}
                <div className="relative w-80 h-64 bg-white rounded-lg shadow-2xl border-2 border-[#C1DEE8]">
                  {/* Dashboard elements */}
                  <div className="absolute top-4 left-4 right-4 h-8 bg-[#C1DEE8] rounded"></div>
                  <div className="absolute top-16 left-4 w-24 h-16 bg-[#FBD9B9] rounded"></div>
                  <div className="absolute top-16 right-4 w-24 h-16 bg-[#C1DEE8] rounded"></div>
                  <div className="absolute top-36 left-4 right-4 h-20 bg-gradient-to-r from-[#C1DEE8] to-[#FBD9B9] rounded"></div>
                  
                  {/* Navigation */}
                  <div className="absolute bottom-4 left-4 right-4 h-6 bg-[#1F1F1F] rounded"></div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#FBD9B9] rounded-full shadow-lg"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#C1DEE8] rounded-full shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
