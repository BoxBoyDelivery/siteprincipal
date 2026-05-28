import type { JSX } from 'react'

const VizDays = (): JSX.Element => {
  const days = ['S', 'T', 'Q', 'Q', 'S', 'S', 'D']
  return (
    <svg viewBox="0 0 180 80" className="h-full w-full">
      {days.map((d, i) => {
        const x = 14 + i * 24
        const active = i === 2
        return (
          <g key={i} transform={`translate(${x} 30)`} className={active ? 'day-now' : ''}>
            <rect
              x="-9"
              y="-8"
              width="18"
              height="32"
              rx="6"
              fill={active ? '#FF914D' : '#fff'}
              stroke={active ? '#FF914D' : '#FFBD2E'}
              strokeWidth="1.2"
            />
            <text
              x="0"
              y="3"
              textAnchor="middle"
              fontFamily="JetBrains Mono, monospace"
              fontSize="9"
              fill={active ? '#fff' : '#292828'}
            >
              {d}
            </text>
            <circle cx="0" cy="14" r="1.5" fill={active ? '#fff' : '#FFBD2E'} />
          </g>
        )
      })}
      <text
        x="14"
        y="72"
        fontFamily="JetBrains Mono, monospace"
        fontSize="8"
        fill="#9A8770"
        letterSpacing="1.5"
      >
        SEM PAUSA
      </text>
    </svg>
  )
}

export { VizDays }
