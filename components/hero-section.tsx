import Image from "next/image"

export function HeroSection() {
  return (
    <section className="bg-primary-bg py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-light-text leading-tight">
          Control <span className="text-heading-highlight">total</span> para tus proyectos inmobiliarios
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-light-text max-w-4xl mx-auto">
          Gestioná tus proyectos conectando desarrolladoras, agentes y compradores
        </p>
        <div className="mt-12 flex justify-center">
          <Image
            src="/hero-main.png"
            alt="Tour virtual Concret0"
            width={750}
            height={400}
            className="max-w-full h-auto rounded-lg shadow-xl"
            priority
          />
        </div>
      </div>
    </section>
  )
}
