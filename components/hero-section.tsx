import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="glass w-full h-full" style={{background: 'var(--glass-gradient)'}} />
      </div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-text-main leading-tight drop-shadow-lg">
          Control <span className="text-accent">total</span> para tus proyectos inmobiliarios
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-text-muted max-w-4xl mx-auto">
          Gestioná tus proyectos conectando desarrolladoras, agentes y compradores
        </p>
        <div className="mt-12 flex justify-center">
          <div className="glass rounded-2xl shadow-glass p-2 inline-block">
            <Image
              src="/hero-main.png"
              alt="Tour virtual Concret0"
              width={750}
              height={400}
              className="max-w-full h-auto rounded-xl shadow-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
