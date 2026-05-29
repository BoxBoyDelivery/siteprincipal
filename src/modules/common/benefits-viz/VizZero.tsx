import type { JSX } from 'react'

const VizZero = (): JSX.Element => (
  <div className="absolute inset-x-0 bottom-0 flex h-full items-center justify-center">
    <div className="flex flex-col items-center gap-2">
      <span
        className="font-display text-amber3/18 leading-none font-bold select-none"
        style={{ fontSize: 'clamp(2.6rem, 6vw, 4rem)' }}
      >
        R$&nbsp;0
      </span>
      <div className="flex gap-1.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="bg-amber2/25 h-1 w-7 rounded-full" />
        ))}
      </div>
    </div>
  </div>
)

export { VizZero }
