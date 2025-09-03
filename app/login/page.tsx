"use client"

import { HeaderMinimal } from "@/components/header-minimal"

export default function LoginPage() {
  return (
    <main>
      <HeaderMinimal />

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#C1DEE8] to-[#FBD9B9]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-xl mx-auto bg-white/0 rounded-2xl p-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h1 className="text-4xl md:text-5xl font-bold text-[#1F1F1F] text-center mb-8">Ingreso clientes</h1>
              <form className="space-y-6">
                <div>
                  <label htmlFor="user" className="block text-lg font-medium text-[#1F1F1F] mb-2">Usuario</label>
                  <input id="user" type="text" className="w-full px-4 py-3 rounded-lg border border-[#BEBEBE] focus:border-[#C1DEE8] focus:ring-[#C1DEE8] outline-none" />
                </div>
                <div>
                  <label htmlFor="pass" className="block text-lg font-medium text-[#1F1F1F] mb-2">Contraseña</label>
                  <input id="pass" type="password" className="w-full px-4 py-3 rounded-lg border border-[#BEBEBE] focus:border-[#C1DEE8] focus:ring-[#C1DEE8] outline-none" />
                </div>
                <div className="text-center">
                  <button type="button" className="bg-[#1F1F1F] text-white hover:bg-black px-6 py-2 rounded-lg font-semibold">Ingresar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


