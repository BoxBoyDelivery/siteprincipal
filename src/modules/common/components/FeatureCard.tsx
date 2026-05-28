import type { JSX } from 'react'

import { ArrowIcon } from '@/modules/common/icons'

import type { Feature } from '@/modules/common/types'

interface FeatureCardProps {
  feature: Feature
}

const FeatureCard = ({ feature: f }: FeatureCardProps): JSX.Element => {
  return (
    <article className="reveal fcard border-line flex flex-col rounded-3xl border bg-white p-5 md:p-6">
      <div className="fviz relative h-[140px] rounded-2xl md:h-[150px]">
        <div className="fviz-grid" />
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="amber-bg text-ink shadow-amber-soft grid h-7 w-7 place-items-center rounded-lg">
            <f.icon className="h-3.5 w-3.5" />
          </span>
          <span className="text-amber1/90 font-mono text-[10px] tracking-[0.18em] uppercase">
            /{f.num}
          </span>
        </div>
        <div className="border-amber3/40 absolute top-3 right-3 flex items-center gap-1.5 rounded-md border bg-white/90 px-2 py-1 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
          <span className="text-muted-dark font-mono text-[9px] tracking-wider uppercase">
            {f.stat}
          </span>
        </div>
        <div className="absolute inset-x-2 bottom-1 h-[78px] md:h-[80px]">
          <f.Viz />
        </div>
      </div>

      <div className="flex flex-1 flex-col pt-5 md:pt-6">
        <h3 className="font-display text-ink text-[20px] leading-snug font-bold tracking-tight md:text-[22px]">
          {f.title}
        </h3>
        <p className="text-muted-dark mt-2.5 flex-1 text-[14.5px] leading-relaxed">{f.body}</p>
        <div className="border-line mt-5 flex items-center justify-between border-t pt-4">
          <span className="text-muted font-mono text-[10px] tracking-[0.18em] uppercase">
            recurso /{f.num}
          </span>
          <ArrowIcon className="text-muted fcard-arrow h-4 w-4" />
        </div>
      </div>
    </article>
  )
}

export { FeatureCard }
