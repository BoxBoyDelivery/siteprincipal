'use client'

import type { JSX } from 'react'

import { Benefits } from '@/modules/common/components/Benefits'
import { useReveal } from '@/modules/common/hooks/useReveal'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { LeadForm } from './components/LeadForm'
import { Marquee } from './components/Marquee'
import { Pricing } from './components/Pricing'
import { Showcase } from './components/Showcase'

const LandingPage = (): JSX.Element => {
  useReveal()
  return (
    <main className="bg-paper">
      <Header />
      <Hero />
      <Marquee />
      <Features />
      <Showcase />
      <Pricing />
      <LeadForm />
      <Benefits />
      <Footer />
    </main>
  )
}

export { LandingPage }
