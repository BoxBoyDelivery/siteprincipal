import type { JSX } from 'react'

import { CheckIcon } from '@/modules/common/icons'
import { DashboardMock } from './DashboardMock'

const BULLETS: string[] = [
  'Mapa ao vivo com pinos por status de entrega',
  'Donut de distribuição: no prazo / em rota / atraso',
  'Lista de pedidos com SLA, ETA e rota completa',
  'Histórico exportável por dia, loja ou motoboy',
]

const Showcase = (): JSX.Element => {
  return (
    <section className="bg-ink relative overflow-hidden py-20 text-white md:py-28">
      <div className="grid-dots absolute inset-0 opacity-60" />
      <div
        className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full opacity-25 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, #FFBD59, transparent 70%)' }}
      />
      <div className="relative mx-auto grid max-w-[1280px] items-center gap-14 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
        <div className="reveal order-2 lg:order-1">
          <DashboardMock />
        </div>
        <div className="reveal order-1 lg:order-2">
          <div className="text-amber3 font-mono text-[11px] tracking-[0.22em] uppercase">
            Monitoramento em tempo real
          </div>
          <h2
            className="font-display mt-3 leading-[1.02] font-bold tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4.4vw, 3.4rem)' }}
          >
            Controle total da sua operação,
            <br />
            em <span className="amber-text">tempo real</span>.
          </h2>
          <p className="mt-6 max-w-[520px] text-[17px] leading-relaxed text-white/70">
            Visualize cada pedido, cada motoboy e cada rota da sua operação no Rio de Janeiro.
            Eventos em segundos, não em planilhas. Decisões com dado, não com achismo.
          </p>
          <ul className="mt-8 space-y-3.5">
            {BULLETS.map((t) => (
              <li key={t} className="flex items-start gap-3 text-white/85">
                <span className="amber-bg text-ink mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-md">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <span className="text-[15px] leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export { Showcase }
