import type React from "react"
import type { Metadata } from "next"
import { Bodoni_Moda, IBM_Plex_Sans } from "next/font/google"
import "./globals.css"
// No se necesita ThemeProvider ya que el tema es oscuro fijo

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-bodoni-moda",
  display: "swap", // Recomendado para evitar FOUT/FOIT [^1]
})

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-sans",
  display: "swap", // Recomendado para evitar FOUT/FOIT [^1]
})

export const metadata: Metadata = {
  title: "Concret0 - La Plataforma para tus Proyectos Inmobiliarios",
  description:
    "La plataforma integral que transforma la forma en que gestionás y promocionás tus propiedades en Argentina.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${bodoniModa.variable} ${ibmPlexSans.variable}`}>
      {/* Aplicar clases de tema oscuro directamente al body */}
      <body className="font-sans antialiased bg-primary-bg text-light-text">{children}</body>
    </html>
  )
}
