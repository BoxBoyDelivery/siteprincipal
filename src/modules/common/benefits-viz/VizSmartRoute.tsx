import type { JSX } from 'react'

const VizSmartRoute = (): JSX.Element => (
  <svg
    className="absolute inset-0 h-full w-full"
    viewBox="0 0 160 80"
    preserveAspectRatio="xMidYMid meet"
  >
    <path
      d="M16 64 C28 64 30 26 52 26 C74 26 74 52 94 52 C114 52 118 16 144 16"
      fill="none"
      stroke="#ffbd59"
      strokeWidth="2"
      strokeDasharray="4 4"
      className="route-flow"
    />
    <circle cx="16" cy="64" r="5" fill="#292828" opacity="0.18" />
    <circle cx="16" cy="64" r="3" fill="#ff914d" />
    {(
      [
        [52, 26],
        [94, 52],
      ] as [number, number][]
    ).map(([x, y], i) => (
      <circle key={i} cx={x} cy={y} r="3.5" fill="#ff914d" opacity="0.55" />
    ))}
    <circle cx="144" cy="16" r="8" fill="#ffbd59" opacity="0.22" className="node-pulse" />
    <circle cx="144" cy="16" r="5" fill="#ffbd59" opacity="0.75" />
    <circle cx="144" cy="16" r="2.2" fill="#292828" opacity="0.55" />
  </svg>
)

export { VizSmartRoute }
