import type { JSX } from 'react'

import { partnerSlots } from '@/modules/common/data/partners'
import { PartnerChip } from './PartnerChip'

const Marquee = (): JSX.Element => {
  const row1 = [...partnerSlots, ...partnerSlots]
  const row2 = [...partnerSlots.slice().reverse(), ...partnerSlots.slice().reverse()]

  return (
    <section id="parceiros" className="bg-paper border-line border-y py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal mb-8 flex items-end justify-between md:mb-10">
          <div>
            <div className="text-muted font-mono text-[11px] tracking-[0.22em] uppercase">
              Parceiros
            </div>
            <h2
              className="font-display text-ink mt-2 leading-[1.05] font-bold tracking-tight"
              style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.25rem)' }}
            >
              Operação ativa em grandes marcas do food service.
            </h2>
          </div>
          <div className="hidden text-right md:block">
            <div className="font-display text-ink text-3xl font-bold">+40</div>
            <div className="text-muted font-mono text-[11px] tracking-wider uppercase">
              lojas conectadas
            </div>
          </div>
        </div>

        <div
          className="marquee space-y-4 overflow-hidden"
          style={{
            maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
            WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
          }}
        >
          <div className="marquee-track flex w-max gap-4">
            {row1.map((s, i) => (
              <PartnerChip key={`a${i}`} slot={s} />
            ))}
          </div>
          <div className="marquee-track-rev flex w-max gap-4">
            {row2.map((s, i) => (
              <PartnerChip key={`b${i}`} slot={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export { Marquee }
