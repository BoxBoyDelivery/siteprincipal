import type { JSX } from 'react'

const VizWave = (): JSX.Element => {
  const heights = [40, 72, 28, 90, 50, 80, 36, 64, 44]
  return (
    <svg viewBox="0 0 180 80" className="h-full w-full">
      <defs>
        <linearGradient id="viz-wave-grad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#FFBD59" />
          <stop offset="100%" stopColor="#FF914D" />
        </linearGradient>
      </defs>
      {heights.map((h, i) => (
        <rect
          key={i}
          x={10 + i * 19}
          y={75 - h * 0.6}
          width="9"
          height={h * 0.6}
          rx="2"
          fill="url(#viz-wave-grad)"
          className="wave-bar"
          style={{ animationDelay: `${i * 0.12}s` }}
        />
      ))}
      <line x1="10" x2="170" y1="76" y2="76" stroke="#FFBD2E" strokeOpacity=".35" strokeWidth="1" />
    </svg>
  )
}

export { VizWave }
