import type { JSX } from 'react'

const VizBars = (): JSX.Element => {
  const data = [30, 44, 38, 58, 70, 62, 86]
  return (
    <svg viewBox="0 0 180 80" className="h-full w-full">
      <defs>
        <linearGradient id="viz-bars-grad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#FFBD59" />
          <stop offset="100%" stopColor="#FF914D" />
        </linearGradient>
      </defs>
      <line x1="10" x2="170" y1="74" y2="74" stroke="#FFBD2E" strokeOpacity=".3" />
      {data.map((v, i) => (
        <rect
          key={i}
          x={14 + i * 22}
          y={74 - v * 0.7}
          width="14"
          height={v * 0.7}
          rx="2"
          fill="url(#viz-bars-grad)"
          className="grow-bar"
          style={{ animationDelay: `${i * 0.12}s` }}
        />
      ))}
      <polyline
        points={data.map((v, i) => `${14 + i * 22 + 7},${74 - v * 0.7 - 4}`).join(' ')}
        fill="none"
        stroke="#292828"
        strokeWidth="1.2"
        strokeDasharray="2 3"
        opacity=".55"
      />
      <circle cx={14 + 6 * 22 + 7} cy={74 - data[6] * 0.7 - 4} r="2.5" fill="#292828" />
    </svg>
  )
}

export { VizBars }
