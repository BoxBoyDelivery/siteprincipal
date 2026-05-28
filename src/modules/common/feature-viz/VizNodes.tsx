import type { JSX } from 'react'

const VizNodes = (): JSX.Element => {
  const nodes: ReadonlyArray<readonly [number, number, string]> = [
    [36, 22, '#FF914D'],
    [148, 22, '#FF914D'],
    [36, 58, '#292828'],
    [148, 58, '#292828'],
    [90, 42, '#FFBD2E'],
    [90, 64, '#292828'],
  ]
  return (
    <svg viewBox="0 0 180 80" className="h-full w-full">
      <g stroke="#FFBD2E" strokeWidth="1.2" strokeDasharray="3 3" opacity=".8">
        <line x1="36" y1="22" x2="90" y2="42" />
        <line x1="90" y1="42" x2="148" y2="22" />
        <line x1="36" y1="22" x2="36" y2="58" />
        <line x1="90" y1="42" x2="90" y2="64" />
        <line x1="148" y1="22" x2="148" y2="58" />
      </g>
      {nodes.map(([x, y, c], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <circle r="6" fill={c} className={i === 4 ? 'node-pulse' : ''} />
          <circle r="2" fill="#fff" />
        </g>
      ))}
      <rect
        x="76"
        y="2"
        width="28"
        height="14"
        rx="4"
        fill="#fff"
        stroke="#FFBD2E"
        strokeWidth="1"
      />
      <text
        x="90"
        y="12"
        textAnchor="middle"
        fontFamily="JetBrains Mono, monospace"
        fontSize="8"
        fill="#FF914D"
      >
        API
      </text>
    </svg>
  )
}

export { VizNodes }
