"use client"

import Image from "next/image"
import Link from "next/link"

export function HeaderMinimal() {
  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
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
          <div className="hidden md:flex items-center space-x-6" />
        </div>
      </div>
    </header>
  )
}


