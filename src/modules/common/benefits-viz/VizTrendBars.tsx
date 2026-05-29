import type { JSX } from 'react'

const VizTrendBars = (): JSX.Element => (
  <div className="absolute inset-x-3 bottom-2 flex h-[78%] items-end justify-center gap-1">
    {[28, 42, 35, 58, 48, 72, 65, 90].map((h, i) => (
      <div
        key={i}
        className="grow-bar bg-amber2/40 flex-1 rounded-t-sm"
        style={{
          height: `${h}%`,
          animationDelay: `${i * 0.12}s`,
          animationDuration: '1.7s',
        }}
      />
    ))}
  </div>
)
export { VizTrendBars }
