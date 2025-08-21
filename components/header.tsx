"use client"

import { useState, useEffect } from "react"
import { Menu, X, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`bg-white sticky top-0 z-50 transition-all duration-200 ${
      isScrolled ? 'shadow-lg' : ''
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/logo-concreto.png"
                alt="Concret0"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/version-2" className="text-[#1F1F1F] hover:text-[#C1DEE8] font-medium transition-colors">
              Versión 2
            </Link>
            <Link href="#nosotros" className="text-[#1F1F1F] hover:text-[#C1DEE8] font-medium transition-colors">
              Nosotros
            </Link>
            <Link href="#proyectos" className="text-[#1F1F1F] hover:text-[#C1DEE8] font-medium transition-colors">
              Proyectos
            </Link>
            <Link href="#agentes" className="text-[#1F1F1F] hover:text-[#C1DEE8] font-medium transition-colors">
              Agentes
            </Link>
            <Link href="#servicios" className="text-[#1F1F1F] hover:text-[#C1DEE8] font-medium transition-colors">
              Servicios
            </Link>
            <Link href="#propiedades" className="text-[#1F1F1F] hover:text-[#C1DEE8] font-medium transition-colors">
              Propiedades
            </Link>
          </nav>

          {/* Right side - Search, Other services, Contact */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-[#1F1F1F] hover:text-[#C1DEE8] transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link href="#otros-servicios" className="text-[#1F1F1F] hover:text-[#C1DEE8] font-medium transition-colors">
              Otros servicios
            </Link>
            <Button className="bg-[#1F1F1F] text-white hover:bg-black font-semibold px-6 py-2 rounded-lg">
              Contactanos
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-[#1F1F1F]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#BEBEBE]">
            <nav className="flex flex-col space-y-4">
              <Link href="/version-2" className="text-[#1F1F1F] hover:text-[#C1DEE8] font-medium transition-colors">
                Versión 2
              </Link>
              <Link href="#nosotros" className="text-[#1F1F1F] hover:text-[#C1DEE8] font-medium transition-colors">
                Nosotros
              </Link>
              <Link href="#proyectos" className="text-[#1F1F1F] hover:text-[#C1DEE8] font-medium transition-colors">
                Proyectos
              </Link>
              <Link href="#agentes" className="text-[#1F1F1F] hover:text-[#C1DEE8] font-medium transition-colors">
                Agentes
              </Link>
              <Link href="#servicios" className="text-[#1F1F1F] hover:text-[#C1DEE8] font-medium transition-colors">
                Servicios
              </Link>
              <Link href="#propiedades" className="text-[#1F1F1F] hover:text-[#C1DEE8] font-medium transition-colors">
                Propiedades
              </Link>
              <Link href="#otros-servicios" className="text-[#1F1F1F] hover:text-[#C1DEE8] font-medium transition-colors">
                Otros servicios
              </Link>
              <Button className="bg-[#1F1F1F] text-white hover:bg-black font-semibold px-6 py-2 rounded-lg w-full">
                Contactanos
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
