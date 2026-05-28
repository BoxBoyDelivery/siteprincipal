import type { JSX } from 'react'

import { features } from '@/modules/common/data/features'
import { FeatureCard } from './FeatureCard'

const Features = (): JSX.Element => {
  return (
    <section id="plataforma" className="bg-paper-alt py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal max-w-3xl">
          <div className="text-muted font-mono text-[11px] tracking-[0.22em] uppercase">
            Plataforma
          </div>
          <h2
            className="font-display text-ink mt-3 leading-[1.02] font-bold tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4.4vw, 3.4rem)' }}
          >
            Tudo o que sua operação precisa — em <span className="amber-text">uma única</span>{' '}
            plataforma.
          </h2>
          <p className="text-muted mt-5 max-w-160 text-[17px] leading-relaxed">
            Seis recursos núcleo que substituem planilhas, grupos de WhatsApp e operadores
            improvisados.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:mt-16 md:gap-5 lg:grid-cols-3">
          {features.map((f) => (
            <FeatureCard key={f.num} feature={f} />
          ))}
        </div>
      </div>
    </section>
  )
}

export { Features }
