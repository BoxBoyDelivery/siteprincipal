import type { JSX } from 'react'

const VizNetwork = (): JSX.Element => (
  <svg
    className="absolute inset-0 h-full w-full"
    viewBox="0 0 160 80"
    preserveAspectRatio="xMidYMid meet"
  >
    {(
      [
        [26, 18],
        [134, 18],
        [22, 62],
        [138, 62],
      ] as [number, number][]
    ).map(([x, y], i) => (
      <g key={i}>
        <line
          x1="80"
          y1="40"
          x2={x}
          y2={y}
          stroke="#ffbd2e"
          strokeWidth="0.9"
          strokeDasharray="3 3"
          className="route-flow"
          style={{ animationDelay: `${i * 0.28}s` }}
        />
        <circle cx={x} cy={y} r="5.5" fill="#ff914d" opacity="0.2" />
        <circle cx={x} cy={y} r="3" fill="#ff914d" opacity="0.65" />
      </g>
    ))}
    <circle
      cx="80"
      cy="40"
      r="16"
      fill="none"
      stroke="#ffbd59"
      strokeWidth="1.2"
      opacity="0.3"
      className="radar-ring"
    />
    <circle cx="80" cy="40" r="9" fill="#ff914d" opacity="0.12" />
    <circle cx="80" cy="40" r="5" fill="#ff914d" opacity="0.85" />
  </svg>
)

export { VizNetwork }
