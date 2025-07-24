import { Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer id="contacto" className="bg-bg-alt text-text-main">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-text-main">Podemos ayudarte a vender más</h2>
            <p className="text-xl text-text-muted mb-8">
              Coordiná una demostración gratuita y sin compromiso. Un experto de nuestro equipo te mostrará cómo Concret0 puede ayudarte a alcanzar tus objetivos.
            </p>
            <div className="space-y-6 text-xl">
              <p className="flex items-center">
                <Phone className="w-8 h-8 mr-4 text-accent" />
                <span>+54 9 11 1234-5678 (WhatsApp)</span>
              </p>
              <p className="flex items-center">
                <Mail className="w-8 h-8 mr-4 text-accent" />
                <span>hola@concret0.com</span>
              </p>
            </div>
          </div>
          <div className="glass p-8 rounded-2xl shadow-glass border border-glass-border">
            <h3 className="text-2xl font-bold text-text-main mb-6">Contactanos</h3>
            <form action="#" method="POST">
              <div className="mb-6">
                <label htmlFor="name" className="block text-lg font-medium text-text-main mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full px-4 py-3 text-lg border border-glass-border rounded-lg shadow-sm focus:ring-accent focus:border-accent text-text-main bg-bg-panel placeholder:text-text-muted glass"
                  placeholder="Juan Pérez"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-lg font-medium text-text-main mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full px-4 py-3 text-lg border border-glass-border rounded-lg shadow-sm focus:ring-accent focus:border-accent text-text-main bg-bg-panel placeholder:text-text-muted glass"
                  placeholder="juan.perez@email.com"
                />
              </div>
              <div>
                <button type="submit" className="w-full btn-primary px-8 py-4 rounded-lg font-semibold text-xl shadow-glass">
                  Enviar Consulta
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-20 border-t border-glass-border pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-text-muted text-lg">&copy; 2025 Concret0. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
