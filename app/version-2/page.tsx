import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { MetricsSection } from "@/components/metrics-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { FooterSimple } from "@/components/footer-simple"

export default function Version2() {
  return (
    <main>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <MetricsSection />
      <PricingSection />
      <FAQSection />
      <FooterSimple />
    </main>
  )
}
