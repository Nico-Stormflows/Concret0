"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
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
                width={300}
                height={80}
                className="h-14 w-auto"
                style={{ objectFit: 'contain' }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#funcionalidades" className="text-[#1F1F1F] hover:text-[#C1DEE8] font-medium transition-colors">
              Funcionalidades
            </Link>
            <Link href="#planes" className="text-[#1F1F1F] hover:text-[#C1DEE8] font-medium transition-colors">
              Planes
            </Link>
            <Link href="#faq" className="text-[#1F1F1F] hover:text-[#C1DEE8] font-medium transition-colors">
              FAQ
            </Link>
            <Link href="#contacto" className="text-[#1F1F1F] hover:text-[#C1DEE8] font-medium transition-colors">
              Contactanos
            </Link>
          </nav>

          {/* Right side - Login */}
          <div className="hidden md:flex items-center space-x-6">
            <Button asChild className="bg-[#1F1F1F] text-white hover:bg-black font-semibold px-6 py-2 rounded-lg">
              <Link href="/login">Login</Link>
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
              <Link href="#funcionalidades" className="text-[#1F1F1F] hover:text-[#C1DEE8] font-medium transition-colors">
                Funcionalidades
              </Link>
              <Link href="#planes" className="text-[#1F1F1F] hover:text-[#C1DEE8] font-medium transition-colors">
                Planes
              </Link>
              <Link href="#faq" className="text-[#1F1F1F] hover:text-[#C1DEE8] font-medium transition-colors">
                FAQ
              </Link>
              <Link href="#contacto" className="text-[#1F1F1F] hover:text-[#C1DEE8] font-medium transition-colors">
                Contactanos
              </Link>
              <Button asChild className="bg-[#1F1F1F] text-white hover:bg-black font-semibold px-6 py-2 rounded-lg w-full">
                <Link href="/login">Login</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
