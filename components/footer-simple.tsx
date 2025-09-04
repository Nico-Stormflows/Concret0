import { Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function FooterSimple() {
  return (
    <footer id="contacto" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#C1DEE8] to-[#FBD9B9]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1F1F1F]">
                Podemos ayudarte a vender más
              </h2>
              <p className="text-xl text-[#1F1F1F] max-w-lg">
                Coordiná una demostración gratuita y sin compromiso. Un experto de nuestro equipo te mostrará cómo Concret0 puede ayudarte a alcanzar tus objetivos.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center text-[#1F1F1F]">
                <Phone className="w-6 h-6 mr-3" />
                <span className="text-lg">+54 9 11 1234-5678 (WhatsApp)</span>
              </div>
              <div className="flex items-center text-[#1F1F1F]">
                <Mail className="w-6 h-6 mr-3" />
                <span className="text-lg">hola@concret0.com</span>
              </div>
            </div>
          </div>

          {/* Right content - Contact form */}
          <div className="bg-white rounded-2xl shadow-lg border border-[#C1DEE8] p-8">
            <h3 className="text-2xl font-bold text-[#1F1F1F] mb-6">Contactanos</h3>
            <form className="space-y-6">
              {/* Obligatorios grandes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-base font-bold text-[#1F1F1F] mb-2">
                    Nombre y Apellido <span className="text-red-600">*</span>
                  </label>
                  <Input
                    type="text"
                    name="fullName"
                    id="fullName"
                    required
                    aria-required="true"
                    placeholder="Juan Pérez"
                    className="w-full px-4 py-3 rounded-lg border-[#BEBEBE] focus:border-[#C1DEE8] focus:ring-[#C1DEE8]"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-base font-bold text-[#1F1F1F] mb-2">
                    Empresa <span className="text-red-600">*</span>
                  </label>
                  <Input
                    type="text"
                    name="company"
                    id="company"
                    required
                    aria-required="true"
                    placeholder="Nombre de la empresa"
                    className="w-full px-4 py-3 rounded-lg border-[#BEBEBE] focus:border-[#C1DEE8] focus:ring-[#C1DEE8]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-base font-bold text-[#1F1F1F] mb-2">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    required
                    aria-required="true"
                    placeholder="juan.perez@email.com"
                    className="w-full px-4 py-3 rounded-lg border-[#BEBEBE] focus:border-[#C1DEE8] focus:ring-[#C1DEE8]"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-base font-bold text-[#1F1F1F] mb-2">
                    Teléfono <span className="text-red-600">*</span>
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    aria-required="true"
                    placeholder="+54 9 11 1234-5678"
                    className="w-full px-4 py-3 rounded-lg border-[#BEBEBE] focus:border-[#C1DEE8] focus:ring-[#C1DEE8]"
                  />
                </div>
              </div>

              {/* Opcionales */}
              <div className="space-y-4 mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="country" className="block text-base font-medium text-[#1F1F1F] mb-1">
                      País
                    </label>
                    <Input
                      type="text"
                      name="country"
                      id="country"
                      placeholder="Argentina"
                      className="w-full px-3 py-2 text-sm rounded-md border-[#BEBEBE] focus:border-[#C1DEE8] focus:ring-[#C1DEE8]"
                    />
                  </div>
                  <div>
                    <label htmlFor="realtors" className="block text-base font-medium text-[#1F1F1F] mb-1">
                      Inmobiliarias que venden tus proyectos
                    </label>
                    <Input
                      type="number"
                      name="realtors"
                      id="realtors"
                      min={0}
                      step={1}
                      inputMode="numeric"
                      placeholder="0"
                      className="w-full px-3 py-2 text-sm rounded-md border-[#BEBEBE] focus:border-[#C1DEE8] focus:ring-[#C1DEE8]"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-base font-medium text-[#1F1F1F] mb-1">
                    Mensaje
                  </label>
                  <Textarea
                    name="message"
                    id="message"
                    placeholder="Escribí tu consulta"
                    className="w-full px-3 py-2 text-sm rounded-md border-[#BEBEBE] focus:border-[#C1DEE8] focus:ring-[#C1DEE8] min-h-28"
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <Button type="submit" className="bg-[#1F1F1F] text-white hover:bg-black px-6 py-2 rounded-lg font-semibold">
                  Enviar Consulta
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}
