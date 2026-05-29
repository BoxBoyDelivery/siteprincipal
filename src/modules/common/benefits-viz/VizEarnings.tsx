import type { JSX } from 'react'

const VizEarnings = (): JSX.Element => (
  <div className="absolute inset-x-0 bottom-0 flex h-full items-center justify-center">
    <div className="flex flex-col items-center gap-2.5">
      <span
        className="font-display text-amber3/20 tnum leading-none font-bold select-none"
        style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)' }}
      >
        +24%
      </span>
      <div className="flex items-end gap-1">
        {[16, 28, 22, 40, 32, 52].map((h, i) => (
          <div
            key={i}
            className="wave-bar bg-amber2/35 w-3 rounded-sm"
            style={{ height: `${h}px`, animationDelay: `${i * 0.18}s` }}
          />
        ))}
      </div>
    </div>
  </div>
)

export { VizEarnings }
