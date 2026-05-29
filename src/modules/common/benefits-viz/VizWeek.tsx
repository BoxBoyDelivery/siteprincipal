import type { JSX } from 'react'

const VizWeek = (): JSX.Element => (
  <div className="absolute inset-x-3 bottom-2 flex h-[82%] flex-col items-center justify-end gap-2">
    <div className="grid w-full grid-cols-7 gap-1">
      {['S', 'T', 'Q', 'Q', 'S', 'S', 'D'].map((d, i) => (
        <div key={i} className="flex flex-col items-center gap-1">
          <span className="text-muted/40 font-mono text-[7px]">{d}</span>
          <div
            className={`flex h-5 w-full items-center justify-center rounded-md ${
              i < 5 ? 'amber-bg' : 'bg-line/70'
            }`}
          >
            {i < 5 && <div className="bg-ink/45 h-1.5 w-1.5 rounded-full" />}
          </div>
        </div>
      ))}
    </div>
    <div className="flex items-center gap-1.5">
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
      <span className="text-muted/65 font-mono text-[9px] tracking-wider uppercase">
        Pago · Sex
      </span>
    </div>
  </div>
)

export { VizWeek }
