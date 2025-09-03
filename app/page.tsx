"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StepsSection } from "@/components/steps-section"
import { AboutSection } from "@/components/about-section"
import { FeaturesSection } from "@/components/features-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { FooterSimple } from "@/components/footer-simple"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <StepsSection />
      <FeaturesSection />
      <PricingSection />
      <FAQSection />
      <AboutSection />
      <FooterSimple />
    </main>
  )
}
