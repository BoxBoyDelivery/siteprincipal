'use client'

import { useEffect, useState } from 'react'
import type { JSX } from 'react'

import Link from 'next/link'

import { Footer } from '@/modules/common/components/Footer'
import { useReveal } from '@/modules/common/hooks/useReveal'
import { ArrowIcon, LogoIcon } from '@/modules/common/icons'

import { CookiesSection } from './components/CookiesSection'
import { LegalContactSection } from './components/LegalContactSection'
import { PrivacySection } from './components/PrivacySection'
import { TermsSection } from './components/TermsSection'
import type { LegalTab, LegalTabConfig } from './types'

const TABS: LegalTabConfig[] = [
  { id: 'privacidade', label: 'Privacidade', desc: 'Política de Privacidade' },
  { id: 'cookies', label: 'Cookies', desc: 'Política de Cookies' },
  { id: 'termos', label: 'Termos', desc: 'Termos de Uso' },
  { id: 'juridico', label: 'Jurídico', desc: 'Contato Jurídico' },
]

const InstitucionalPage = (): JSX.Element => {
  const [tab, setTab] = useState<LegalTab>('privacidade')
  useReveal()

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      document.querySelectorAll<HTMLElement>('.reveal:not(.in)').forEach((el) => {
        el.classList.add('in')
      })
    })
    return () => cancelAnimationFrame(raf)
  }, [tab])

  const activeTab = TABS.find((t) => t.id === tab)!

  return (
    <main className="min-h-screen bg-paper">

      {/* ── Dark hero ───────────────────────────────────────────────────── */}
      <div className="bg-ink-deep relative overflow-hidden">
        <div className="grain" />
        <div className="grid-dots absolute inset-0 opacity-40" />

        {/* top bar */}
        <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
          <Link href="/" className="flex items-center gap-2.5">
            <LogoIcon className="h-8 w-8" />
            <span className="font-display text-lg font-bold tracking-tight text-white md:text-xl">
              BoxBoy
            </span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1.5 font-mono text-[11px] tracking-[0.18em] uppercase text-white/45 transition-colors duration-200 hover:text-white/80"
          >
            <ArrowIcon className="h-3.5 w-3.5 rotate-180" />
            Voltar
          </Link>
        </div>

        {/* hero content */}
        <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-8 md:px-8 md:pb-16 md:pt-10">
          <div className="reveal">
            <div className="mb-3 font-mono text-[11px] tracking-[0.22em] uppercase text-white/35">
              Central Institucional
            </div>
            <h1
              className="font-display font-bold leading-[1.02] tracking-tight text-white"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.6rem)' }}
            >
              Transparência e{' '}
              <span className="amber-text">confiança</span>
              <br className="hidden sm:block" /> em cada detalhe.
            </h1>
            <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-white/50 md:text-[16px]">
              Políticas, termos e informações jurídicas da Box Delivery S.A. — atualizadas e em
              conformidade com a LGPD.
            </p>
            <div className="mt-3 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              <span className="font-mono text-[10px] tracking-wider uppercase text-white/30">
                Atualizado · Maio 2025
              </span>
            </div>
          </div>

          {/* tab switcher */}
          <div className="reveal mt-10 md:mt-12" style={{ transitionDelay: '80ms' }}>
            <div className="inline-flex flex-wrap gap-1 rounded-full border border-white/10 bg-white/5 p-1">
              {TABS.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`rounded-full px-4 py-2 font-mono text-[11px] tracking-[0.18em] uppercase transition-all duration-300 md:px-5 md:py-2.5 ${
                    tab === t.id
                      ? 'amber-bg text-ink shadow-amber-soft'
                      : 'text-white/50 hover:text-white'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* active label */}
          <div
            className="reveal mt-5 flex items-center gap-2"
            style={{ transitionDelay: '130ms' }}
          >
            <div className="h-px w-6 bg-amber3/45" />
            <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-amber3/60">
              {activeTab.desc}
            </span>
          </div>
        </div>
      </div>

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        {tab === 'privacidade' && <PrivacySection />}
        {tab === 'cookies' && <CookiesSection />}
        {tab === 'termos' && <TermsSection />}
        {tab === 'juridico' && <LegalContactSection />}
      </div>

      <Footer />
    </main>
  )
}

export { InstitucionalPage }
