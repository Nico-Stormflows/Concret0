"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StepsSection } from "@/components/steps-section"
import { ProjectsSection } from "@/components/projects-section"
import { AboutSection } from "@/components/about-section"
import { NewsletterSection } from "@/components/newsletter-section"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <StepsSection />
      <ProjectsSection />
      <AboutSection />
      <NewsletterSection />
    </main>
  )
}
