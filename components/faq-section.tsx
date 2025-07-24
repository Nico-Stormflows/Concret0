"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "¿Qué es Concret0 y para quién es?",
      answer:
        "Concret0 es una plataforma integral de gestión y ventas diseñada para el mercado inmobiliario argentino. Está pensada para dos públicos principales: **Inmobiliarias (Realtors)** que buscan potenciar sus ventas y presentaciones a clientes, y **Desarrolladoras** que necesitan un control total sobre métricas, cashflow y procesos administrativos de sus proyectos.",
    },
    {
      question: "¿Cómo me ayuda Concret0 a vender más rápido?",
      answer:
        "Concret0 te permite mostrar unidades con renders 3D de alta calidad, gestionar reservas en tiempo real para evitar superposiciones, y tener toda la información de tus propiedades centralizada. Esto agiliza la toma de decisiones de tus clientes y optimiza tu proceso de venta.",
    },
    {
      question: "¿Puedo gestionar mis propiedades y clientes desde Concret0?",
      answer:
        "Sí, la plataforma te permite manejar tu cartera de propiedades y clientes desde un único panel. Podrás ver fichas detalladas, historial de cambios de precios y estados, y acceder rápidamente a toda la información que necesitás para una gestión eficiente.",
    },
    {
      question: "¿Concret0 me permite ver el estado financiero de mis proyectos?",
      answer:
        "Absolutamente. Para desarrolladoras, Concret0 ofrece dashboards intuitivos para visualizar métricas de venta, supervisar el flujo de caja (cashflow) y tomar decisiones financieras con información precisa y actualizada en tiempo real.",
    },
    {
      question: "¿Es Concret0 fácil de usar para personas no expertas en tecnología?",
      answer:
        "Diseñamos Concret0 pensando en la simplicidad. La interfaz es intuitiva, con botones grandes y un lenguaje claro. Si sabés usar un email, sabés usar Concret0. Nuestro objetivo es que potencies tu negocio sin complicaciones tecnológicas.",
    },
    {
      question: "¿Concret0 ofrece soporte técnico?",
      answer:
        "Sí, contamos con un equipo de soporte real y local. Si tenés alguna duda o necesitás ayuda, podés contactarnos y una persona de nuestro equipo te asistirá al instante.",
    },
    {
      question: "¿Qué diferencia a CONCRET0 de otras herramientas de gestión inmobiliaria?",
      answer:
        "Concret0 ha sido creado especialmente para desarrolladores y constructores que necesitan una solución completa y fácil de usar. Gracias a su inteligencia artificial, CONCRET0 no solo centraliza la información, sino que también ofrece análisis prácticos que aumentan la eficiencia y rentabilidad de tus proyectos, destacándose frente a las herramientas convencionales.",
    },
    {
      question: "¿Cómo puedo integrar CONCRET0 con las herramientas que ya utilizo?",
      answer:
        "Entendemos que cada empresa utiliza sus propias herramientas. Por eso, CONCRET0 cuenta con integraciones para los sistemas más utilizados en la industria. Además, si requieres algo más especializado, nuestro equipo está disponible para asistirte en la implementación de las integraciones que necesites.",
    },
    {
      question: "¿Cuánto tiempo toma la implementación?",
      answer:
        "El tiempo de implementación varía según las necesidades específicas de cada empresa. Uno de nuestros consultores realizará un análisis detallado para definir los pasos y tiempos necesarios, asegurando que la integración sea eficiente y sin complicaciones.",
    },
    {
      question: "¿Puedo generar informes con CONCRET0?",
      answer:
        "CONCRET0 te ofrece la posibilidad de crear informes completos sobre el progreso de tus proyectos, incluyendo costos, cronogramas y otros aspectos. Estos informes son personalizables y te brindan información valiosa para tomar decisiones más acertadas.",
    },
    {
      question: "¿Cómo garantiza CONCRET0 la seguridad de mis datos?",
      answer:
        "Nos tomamos la seguridad con total seriedad. Tus datos se guardan de forma segura en servidores encriptados, y realizamos respaldos periódicos para garantizar su protección. Además, solo tú y las personas a las que autorices tendrán acceso a la información de tu proyecto.",
    },
  ]

  return (
    <section id="faq-section" className="py-20 md:py-24 bg-bg-main text-text-main scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-main">
            Preguntas <span className="text-accent">Frecuentes</span>
          </h2>
          <p className="mt-4 text-xl text-text-muted max-w-3xl mx-auto">
            Encontrá respuestas a las dudas más comunes sobre Concret0.
          </p>
        </div>
        <div className="max-w-4xl mx-auto glass p-8 rounded-2xl shadow-glass border border-glass-border">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-glass-border">
                <AccordionTrigger className="faq-question text-xl font-semibold text-text-main hover:text-accent py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="faq-answer text-lg text-text-muted pb-6">
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
