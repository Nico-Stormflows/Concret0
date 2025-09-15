"use client"
import Image from "next/image"

export function FeaturesSection() {
  const features = [
    {
      title: "Exhibición de alto impacto",
      subtitle: "Impresiona a tus clientes",
      description: "Galerías de fotos, experiencias 3D inmersivas y vistas 360° que destacan cada detalle de tus unidades."
    },
    {
      title: "Búsqueda y selección fácil",
      subtitle: "Filtros avanzados",
      description: "Filtra unidades por precio, orientación y otras características clave. Encuentra rápidamente renders y planos de cada unidad."
    },
    {
      title: "Optimización de ventas",
      subtitle: "Dashboard inteligente",
      description: "Métricas claras y gráficas personalizadas para tomar decisiones inteligentes. Envío automatizado de correos electrónicos."
    },
    {
      title: "Gestión en tiempo real",
      subtitle: "Actualizaciones automáticas",
      description: "Cambios automáticos en listas de precios. Actualización de estados de unidades en vivo. Reservas instantáneas."
    },
    {
      title: "Facilidad para tus clientes",
      subtitle: "Herramientas integradas",
      description: "Simuladores de financiación con cálculos mensuales actualizados. Descarga inmediata de brochures, planos y más."
    },
    {
      title: "Soporte integral",
      subtitle: "Servicios profesionales",
      description: "Renderizado profesional. Integración con email y WhatsApp para comunicación fluida. Tu éxito, nuestra prioridad."
    }
  ]

  return (
    <section id="funcionalidades" className="pt-40 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F1F1F] mb-4">
            Nuestras <span className="text-[#1F1F1F]">funcionalidades</span>
          </h2>
          <p className="text-xl text-[#1F1F1F] max-w-3xl mx-auto">
            Ventajas que nos hacen únicos en el mercado inmobiliario
          </p>
        </div>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
              {/* Media */}
              {index === 0 ? (
                <div className="h-40 relative bg-white">
                  <Image
                    src="/01b-exhibicion.png"
                    alt="Exhibición de alto impacto"
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-contain"
                    priority
                  />
                </div>
              ) : index === 1 ? (
                <div className="h-40 relative bg-white">
                  <Image
                    src="/02b-busqueda.png"
                    alt="Búsqueda y selección fácil"
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-contain"
                  />
                </div>
              ) : index === 2 ? (
                <div className="h-40 relative bg-white">
                  <Image
                    src="/03b-optimizacion.png"
                    alt="Optimización de ventas"
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-contain"
                  />
                </div>
              ) : index === 3 ? (
                <div className="h-40 relative bg-white">
                  <Image
                    src="/04-gestion-tiempo-real.png"
                    alt="Gestión en tiempo real"
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-contain"
                  />
                </div>
              ) : index === 4 ? (
                <div className="h-40 relative bg-white">
                  <Image
                    src="/05-facilidad.png"
                    alt="Facilidad para tus clientes"
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-contain"
                  />
                </div>
              ) : index === 5 ? (
                <div className="h-40 relative bg-white">
                  <Image
                    src="/06-soporte-integral.png"
                    alt="Soporte integral"
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="h-40 bg-gradient-to-br from-[#C1DEE8] to-[#FBD9B9] flex items-center justify-center">
                  <div className="text-white/50 text-sm font-medium">Imagen {index + 1}</div>
                </div>
              )}
              
              {/* Contenido */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1F1F1F] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm font-medium text-[#1F1F1F] mb-3">
                  {feature.subtitle}
                </p>
                <p className="text-[#1F1F1F] leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
