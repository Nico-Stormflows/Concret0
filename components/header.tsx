"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header id="header" className="glass sticky top-0 z-50 shadow-glass">
      <nav className="container mx-auto px-6 py-2 flex items-center justify-between">
        <div className="text-2xl font-bold text-text-main">
          <Link href="#" className="text-text-main flex items-center">
            <Image src="/logo-concreto.png" alt="Logo Concret0" width={160} height={40} priority />
          </Link>
        </div>
        <div className="hidden md:flex flex-row-reverse items-center gap-6 text-lg flex-nowrap overflow-x-auto">
          <Link href="#clientes" className="btn-primary px-6 py-3 rounded-lg font-semibold text-lg shadow-glass ml-4">
            Clientes
          </Link>
          <Link href="#contacto" className="text-text-muted hover:text-accent transition-colors">
            Contacto
          </Link>
          <Link href="#faq-section" className="text-text-muted hover:text-accent transition-colors">
            FAQ
          </Link>
          <Link href="#section-desarrolladora" className="text-text-muted hover:text-accent transition-colors">
            Para Desarrolladoras
          </Link>
          <Link href="#section-inmobiliaria" className="text-text-muted hover:text-accent transition-colors">
            Para Inmobiliarias
          </Link>
        </div>
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-text-muted focus:outline-none"
          >
            <Menu className="w-8 h-8" />
            <span className="sr-only">Toggle mobile menu</span>
          </Button>
        </div>
      </nav>
      <div id="mobile-menu" className={`md:hidden px-6 pb-4 transition-all duration-300 ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <div className="glass p-4 rounded-xl shadow-glass">
          <Link
            href="#section-inmobiliaria"
            className="block py-2 text-lg text-text-muted hover:text-accent transition-colors"
            onClick={handleNavLinkClick}
          >
            Para Inmobiliarias
          </Link>
          <Link
            href="#section-desarrolladora"
            className="block py-2 text-lg text-text-muted hover:text-accent transition-colors"
            onClick={handleNavLinkClick}
          >
            Para Desarrolladoras
          </Link>
          <Link
            href="#faq-section"
            className="block py-2 text-lg text-text-muted hover:text-accent transition-colors"
            onClick={handleNavLinkClick}
          >
            Preguntas Frecuentes
          </Link>
          <Link
            href="#contacto"
            className="block py-2 text-lg text-text-muted hover:text-accent transition-colors"
            onClick={handleNavLinkClick}
          >
            Contacto
          </Link>
          <Link
            href="#contacto"
            className="block mt-4 btn-primary text-center px-6 py-3 rounded-lg font-semibold text-lg shadow-glass"
            onClick={handleNavLinkClick}
          >
            Contactanos
          </Link>
        </div>
      </div>
    </header>
  )
}
