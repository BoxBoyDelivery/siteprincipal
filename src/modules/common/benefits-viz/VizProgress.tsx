import type { JSX } from 'react'

const VizProgress = (): JSX.Element => (
  <div className="absolute inset-x-4 bottom-3 flex h-[72%] flex-col justify-end gap-2">
    {[
      { label: 'Entregas', pct: 82 },
      { label: 'Custo/km', pct: 54 },
      { label: 'Rating', pct: 96 },
    ].map((d, i) => (
      <div key={i} className="flex items-center gap-2">
        <span className="text-muted/50 w-11 shrink-0 font-mono text-[8px] uppercase">
          {d.label}
        </span>
        <div className="bg-amber1/15 h-1.5 flex-1 overflow-hidden rounded-full">
          <div className="amber-bg h-full rounded-full" style={{ width: `${d.pct}%` }} />
        </div>
        <span className="text-muted/50 tnum w-6 text-right font-mono text-[8px]">{d.pct}%</span>
      </div>
    ))}
  </div>
)

export { VizProgress }
