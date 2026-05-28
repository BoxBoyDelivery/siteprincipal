import type { JSX } from 'react'

import { ArrowIcon, PlayIcon } from '@/modules/common/icons'
import { DashboardMock } from './DashboardMock'

const STATS: ReadonlyArray<readonly [string, string]> = [
  ['+40', 'lojas ativas'],
  ['+40 mil', 'pedidos / mês'],
  ['7 dias', 'suporte semanal'],
]
const Hero = (): JSX.Element => {
  return (
    <section id="top" className="bg-ink relative overflow-hidden text-white">
      <div className="grid-dots absolute inset-0 opacity-70" />
      <div className="grain" />
      <div
        className="absolute -top-40 -right-40 h-160 w-160 rounded-full opacity-30 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, #FF914D, transparent 70%)' }}
      />

      <div className="relative mx-auto max-w-7xl px-5 pt-12 pb-16 md:px-8 md:pt-20 md:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div className="reveal">
            <div className="inline-flex h-8 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 font-mono text-[11px] tracking-[0.18em] text-white/75 uppercase">
              <span className="bg-amber3 h-1.5 w-1.5 animate-pulse rounded-full" />
              Last-mile · Rio de Janeiro
            </div>

            <h1
              className="font-display mt-6 leading-[0.98] font-bold tracking-[-0.03em]"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              <span className="amber-text">Performance</span> logística
              <br />
              para o crescimento
              <br />
              do seu negócio.
            </h1>

            <p className="mt-6 max-w-140 text-[17px] leading-relaxed text-white/70 md:text-[18px]">
              Entregas inteligentes, despacho automático e monitoramento em tempo real para sua
              operação. Construído para escalar com sua marca.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#formulario"
                className="amber-bg text-ink hover:shadow-amber-soft inline-flex h-12 items-center gap-2 rounded-xl px-6 font-semibold transition-shadow"
              >
                Quero ser parceiro <ArrowIcon className="h-4 w-4" />
              </a>
              <a
                href="#plataforma"
                className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/20 px-6 font-medium text-white transition hover:bg-white/5"
              >
                <PlayIcon className="text-amber3 h-4 w-4" /> Ver a plataforma
              </a>
            </div>

            <div className="mt-10 grid max-w-140 grid-cols-3 gap-4 md:gap-8">
              {STATS.map(([n, l]) => (
                <div key={l}>
                  <div
                    className="font-display text-amber3 font-bold"
                    style={{ fontSize: 'clamp(1.4rem,2.4vw,1.9rem)' }}
                  >
                    {n}
                  </div>
                  <div className="mt-1 text-[12px] text-white/60 md:text-[13px]">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal lg:justify-self-end">
            <DashboardMock floating />
          </div>
        </div>
      </div>
    </section>
  )
}

export { Hero }
