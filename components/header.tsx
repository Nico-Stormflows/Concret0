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
    <header id="header" className="header-glass sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-light-text">
          <Link href="#" className="text-light-text flex items-center">
            <Image src="/logo-concreto.png" alt="Logo Concret0" width={160} height={40} priority />
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-lg">
          <Link href="#section-inmobiliaria" className="text-muted-text hover:text-heading-highlight transition-colors">
            Para Inmobiliarias
          </Link>
          <Link
            href="#section-desarrolladora"
            className="text-muted-text hover:text-heading-highlight transition-colors"
          >
            Para Desarrolladoras
          </Link>
          <Link href="#faq-section" className="text-muted-text hover:text-heading-highlight transition-colors">
            FAQ
          </Link>
          <Link href="#contacto" className="text-muted-text hover:text-heading-highlight transition-colors">
            Contacto
          </Link>
        </div>
        <Link href="#clientes" className="hidden md:block btn-primary px-6 py-3 rounded-lg font-semibold text-lg">
          Clientes
        </Link>
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-muted-text focus:outline-none"
          >
            <Menu className="w-8 h-8" />
            <span className="sr-only">Toggle mobile menu</span>
          </Button>
        </div>
      </nav>
      <div id="mobile-menu" className={`md:hidden px-6 pb-4 ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <Link
          href="#section-inmobiliaria"
          className="block py-2 text-lg text-muted-text hover:text-heading-highlight"
          onClick={handleNavLinkClick}
        >
          Para Inmobiliarias
        </Link>
        <Link
          href="#section-desarrolladora"
          className="block py-2 text-lg text-muted-text hover:text-heading-highlight"
          onClick={handleNavLinkClick}
        >
          Para Desarrolladoras
        </Link>
        <Link
          href="#faq-section"
          className="block py-2 text-lg text-muted-text hover:text-heading-highlight"
          onClick={handleNavLinkClick}
        >
          Preguntas Frecuentes
        </Link>
        <Link
          href="#contacto"
          className="block py-2 text-lg text-muted-text hover:text-heading-highlight"
          onClick={handleNavLinkClick}
        >
          Contacto
        </Link>
        <Link
          href="#contacto"
          className="block mt-4 btn-primary text-center px-6 py-3 rounded-lg font-semibold text-lg"
          onClick={handleNavLinkClick}
        >
          Contactanos
        </Link>
      </div>
    </header>
  )
}
